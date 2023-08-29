import mongoose from "mongoose";
import { addonCategorySchema } from "./category.model.js";


let addonItemSchema = new mongoose.Schema(
  {
    status: { type: String, required: true },
    name: { type: String, required: true },
    image: { type: String, required: true },
    inStock: { type: Number, required: true },
    minStockRemainder: { type: Number, required: true },
    unitPrice: { type: Number, required: true },
    parentCategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref:mongoose.model("AddOnCategory", addonCategorySchema), // Reference the 'AddonCategory' model
    }
  },
  {
    collection: "AddOnItem",
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

let addonItemModel = mongoose.model("AddOnItem", addonItemSchema);

export { addonItemModel };
