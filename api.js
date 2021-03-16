const router = require("express").Router();
const {
  Models: { Category, Word },
} = require("./db");

router.get("/categories", async (req, res, next) => {
  try {
    const categories = await Category.findAll({
      include: { all: true },
    });
    res.send(categories);
  } catch (error) {
    next(error);
  }
});
router.post("/categories", async (req, res, next) => {
  try {
    const newCategory = await Category.create(req.body);
    res.redirect("/");
  } catch (error) {
    next(error);
  }
});

router.delete("/categories/:id", async (req, res, next) => {
  try {
    const category = await Category.findByPk(req.params.id);
    await category.destroy();
    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
