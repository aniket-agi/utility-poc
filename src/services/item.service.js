import { addonCategoryModel } from "../models/category.model.js";
import { addonItemModel } from "../models/item.model.js";

export const createAddonItem = async (newItemData) => {
  const parentCategory = await addonCategoryModel.findOne({
    _id: newItemData.parentCategory,
  });
  if (!parentCategory) {
    throw new Error("Parent category not found");
  }
  const newItem = await addonItemModel.create(newItemData);
  return newItem;
};

export const getAllAddonItems = async () => {
    const items = await addonItemModel.find().populate('parentCategory');
    return items;
}

export const getAddonItemById = async (itemId) => {
    const item = await addonItemModel.findById(itemId).populate('parentCategory');
    if(!item) {
        throw new Error('Item not found')
    }
    return item;
}

export const updateAddonItem = async (itemId,updatedItemData) => {
    const updatedItem = await addonItemModel.findByIdAndUpdate(itemId,updatedItemData,{new:true});

    if(!updatedItem){
        throw new Error('Item not found')
    }

    return updatedItem;
}

export const deleteAddonItem = async (itemId) => {
    const deletedItem = await addonItemModel.findByIdAndDelete(itemId);

    if(!deletedItem) {
        throw new Error('Item not found')
    }

    return deletedItem;
}