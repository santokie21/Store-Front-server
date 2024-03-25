const mongoose = require("mongoose");

const clotheSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    image: {
      type: String,
      required: [true, "Image is required"],
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
    },
    rating: {
      type: Number,
      required: [true, "Rating is required"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Clothe", clotheSchema);
