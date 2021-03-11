const router = require("express").Router();
const {
  Models: { Category, Word },
} = require("./db");

router.get("/categories", async (req, res, next) => {
  try {
    const categories = await Category.findAll();
    res.send(categories);
  } catch (error) {
    next(error);
  }
});

router.get("/words", async (req, res, next) => {
  try {
    const words = await Word.findAll({
      include: Category,
    });
    res.send(words);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
