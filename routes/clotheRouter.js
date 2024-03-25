const express = require("express");
const router = express.Router();
const {
  getAllClothes,
  createClothe,
  getClotheById,
  updateClothe,
  deleteClothe,
} = require("../controllers/clotheController");

router.route("/").get(getAllClothes).post(createClothe);

router.route("/:id").get(getClotheById).put(updateClothe).delete(deleteClothe);

module.exports = router;
