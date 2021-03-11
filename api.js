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

router.get("/categories/:id", async (req, res, next) => {
  try {
    const category = await Category.findByPk(req.params.id, {
      include: { all: true },
    });
    res.send(category);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
