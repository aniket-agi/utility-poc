import mongoose, { Schema } from 'mongoose';
import { IAddOnItem } from '../def/item.def';

const addonItemSchema = new Schema<IAddOnItem>({
  status: { type: String, required: true },
  name: { type: String, required: true },
  image: { type: String, required: true },
  inStock: { type: Number, required: true },
  minStockRemainder: { type: Number, required: true },
  unitPrice: { type: Number, required: true },
  parentCategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'AddonCategory', // Reference the 'AddonCategory' model
  },
});

const AddonItemModel = mongoose.model<IAddOnItem>('AddonItem', addonItemSchema);

export default AddonItemModel;
