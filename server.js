const {
  syncAndSeed,
  Models: { Word, Category },
} = require("./db");
const express = require("express");
const app = express();

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
