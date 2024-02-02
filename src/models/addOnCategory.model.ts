import mongoose, { Schema } from 'mongoose';
import { IAddOnCategory } from '../def/category.def';

const addonCategorySchema = new Schema<IAddOnCategory>({
  status: { type: String, required: true },
  name: { type: String, required: true },
  image: { type: String, required: true },
});

const AddonCategoryModel = mongoose.model<IAddOnCategory>('AddonCategory', addonCategorySchema);

export default AddonCategoryModel;
