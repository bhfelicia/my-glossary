const {
  syncAndSeed,
  Models: { Word, Category },
} = require("./db");
const router = require("./api");
const express = require("express");
const path = require("path");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/assets", express.static(path.join(__dirname, "assets")));
app.use("/dist", express.static(path.join(__dirname, "dist")));
app.use("/api", require("./api"));

app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "/assets/index.html"));
});

const init = async () => {
  try {
    await syncAndSeed();
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log(`app listening on port ${port}`);
    });
  } catch (error) {}
};
init();
