const asyncHandler = require("express-async-handler");
const Clothe = require("../models/clotheModel");

//@desc get All Clothes
//@route /api/clothes
//@access Public
const getAllClothes = asyncHandler(async (req, res) => {
  const clothes = await Clothe.find({});
  if (!clothes) {
    res.status(500);
    throw new Error("Internal Server Error");
  }
  const page = parseInt(req.query.page) || 0;
  const perPage = parseInt(req.query.limit) || 10;

  const start = page * perPage;
  const end = start + perPage;

  const paginatedClothes = clothes.slice(start, end);

  res.status(200).json({
    items: paginatedClothes,
    total: clothes.length,
    page,
    perPage,
    toalPages: Math.ceil(clothes.length / perPage),
  });
});

//@desc get Clothe by Id
//@route /api/clothes/:id
//@access Public
const getClotheById = asyncHandler(async (req, res) => {
  const clothe = await Clothe.findById(req.params.id);
  if (!clothe) {
    res.status(404);
    throw new Error("Clothe not found");
  }
  res.status(200).json(clothe);
});

//@desc Create Clothe
//@route /api/clothes
//@access Public
const createClothe = asyncHandler(async (req, res) => {
  const { name, image, price, rating } = req.body;
  if (!name || !image || !price || !rating) {
    res.status(400);
    throw new Error("All fields are required");
  }
  const clothe = await Clothe.create({
    name,
    image,
    price,
    rating,
  });
  res.status(201).json(clothe);
});

//@desc Update Clothe
//@route /api/clothes/:id
//@access Public
const updateClothe = asyncHandler(async (req, res) => {
  const clothe = await Clothe.findById(req.params.id);
  if (!clothe) {
    res.status(404);
    throw new Error("Clothe not found");
  }
  const updatedClothe = await Clothe.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(updatedClothe);
});

//@desc Delete Clothe
//@route /api/clothes/:id
//@access Public
const deleteClothe = asyncHandler(async (req, res) => {
  const clothe = await Clothe.findById(req.params.id);
  if (!clothe) {
    res.status(404);
    throw new Error("Clothe not found");
  }
  const deletedClothe = await Clothe.findByIdAndDelete(req.params.id);
  res.status(200).json(deletedClothe);
});

module.exports = {
  getAllClothes,
  getClotheById,
  createClothe,
  updateClothe,
  deleteClothe,
};
