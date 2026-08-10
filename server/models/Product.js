const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
    },
    description: String,
    sellingPrice: {
      type: Number,
      required: [true, "Selling price must be provided"],
    },
    costPrice: {
      type: Number,
      required: [true, "Cost price must be provided"],
    },
    quantity: {
      type: Number,
      required: [true, "Quantity is required"],
    },
    category: {
      type: String,
      required: [true, "Provide the category of the product"],
    },
    size: String,
    lowStockThreshold: {
      type: Number,
      required: [
        true,
        "Provide a minimum count for the product to be labeled low in stock",
      ],
      default: 3,
    },
    shop: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Shop",
      required: true,
    },
  },
  { timestamps: true },
);

const Product = mongoose.model("product", productSchema);

module.exports = Product;
