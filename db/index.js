const { DataTypes, Model, Sequelize } = require("sequelize");

const db = new Sequelize(
  process.env.DATABASE_URL || "postgres://localhost/my-glossary-db",
  { logging: false }
);

class Category extends Model {}
Category.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },
  { sequelize: db, modelName: "categories" }
);

class Word extends Model {}
Word.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    definition: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },
  { sequelize: db, modelName: "words" }
);

Word.belongsTo(Category);
Category.hasMany(Word);

const syncAndSeed = async () => {
  try {
    await db.sync({ force: true });
    const [express, sequelize, react] = await Promise.all([
      Category.create({ title: "Express" }),
      Category.create({ title: "Sequelize" }),
      Category.create({ title: "React" }),
    ]);
    const [Express, Sequelize, React] = await Promise.all([
      Word.create({
        name: "Express",
        definition:
          "An NPM module/Node.js web application framework. Calling express() after requiring it creates an application instance, which can be stored in a variable and then used as an app. Express is used to handle delivering content from the server to the client — that is, managing page requests and responses",
        categoryId: 1,
      }),
      Word.create({
        name: "Sequelize",
        definition:
          "A promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server. Sequelize uses our vanilla object-oriented javascript to abstract over SQL rather than us having to write the SQL queries on our own. Meant to make database querying easier for developers.",
        categoryId: 2,
      }),
      Word.create({
        name: "React",
        definition:
          "React is a front-end JavaScript library for building user interfaces. React is all about components. A react component is a single object that outputs both HTML and includes the code needed to control that output. The component approach uses both HTML and JavaScript code, and is called ‘JSX’. JSX is not required for functional components. Props - short for “properties” - are how components talk to each other. They get passed down from a Parent to a Child component, as React’s data flow is unilateral. There are two types of components: class and functional. Class components can change state - whereas functional components do not - and have access to component API methods such as ‘render’, ‘setState’, and the ‘constructor’. ",
        categoryId: 3,
      }),
    ]);
  } catch (error) {}
};

module.exports = {
  db,
  syncAndSeed,
  Models: {
    Word,
    Category,
  },
};
