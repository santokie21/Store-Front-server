const getAllClothes = (req, res) => {
  res.status(200).json({ message: "Get all clothes" });
};

const getClotheById = (req, res) => {
  res.status(200).json({ message: "Get clothe by id" });
};

const createClothe = (req, res) => {
  res.status(201).json({ message: "Create clothe" });
};

const updateClothe = (req, res) => {
  res.status(200).json({ message: "Update clothe" });
};

const deleteClothe = (req, res) => {
  res.status(200).json({ message: "Delete clothe" });
};

module.exports = {
  getAllClothes,
  getClotheById,
  createClothe,
  updateClothe,
  deleteClothe,
};
