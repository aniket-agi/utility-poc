import mongoose from "mongoose";


let sampleSchema = new mongoose.Schema(
  {
    id: { type: Number },
  },
  {
    collection: "sample",
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

let sampleModel = mongoose.model("sample", sampleSchema);

export { sampleModel };
