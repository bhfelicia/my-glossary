const {
  syncAndSeed,
  Models: { Word, Category },
} = require("./db");
const router = require("./api");
const express = require("express");
const app = express();

app.use("/api", require("./api"));

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
