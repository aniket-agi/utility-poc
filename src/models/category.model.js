import mongoose from "mongoose";


let addonCategorySchema = new mongoose.Schema(
  {
    status: { type: String, required: true },
    name: { type: String, required: true },
    image: { type: String, required: true },
  },
  {
    collection: "AddOnCategory",
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

let addonCategoryModel = mongoose.model("AddOnCategory", addonCategorySchema);

export { addonCategoryModel ,addonCategorySchema};
