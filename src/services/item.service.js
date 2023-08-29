import { AddonCategoryModel } from "../models/category.model.js";
import { AddonItemModel } from "../models/item.model.js";

export const createAddonItemService = async (newItemData) => {
  const parentCategory = await AddonCategoryModel.findOne({
    _id: newItemData.parentCategory,
  });
  if (!parentCategory) {
    throw new Error("Parent category not found");
  }
  const newItem = await AddonItemModel.create(newItemData);
  return newItem;
};

export const getAllAddonItemsService = async () => {
    const items = await AddonItemModel.find().populate('parentCategory');
    return items;
}

export const getAddonItemByIdService = async (itemId) => {
    const item = await AddonItemModel.findById(itemId).populate('parentCategory');
    if(!item) {
        throw new Error('Item not found')
    }
    return item;
}

export const updateAddonItemService = async (itemId,updatedItemData) => {
    const updatedItem = await AddonItemModel.findByIdAndUpdate(itemId,updatedItemData,{new:true});

    if(!updatedItem){
        throw new Error('Item not found')
    }

    return updatedItem;
}

export const deleteAddonItemService = async (itemId) => {
    const deletedItem = await AddonItemModel.findByIdAndDelete(itemId);

    if(!deletedItem) {
        throw new Error('Item not found')
    }

    return deletedItem;
}