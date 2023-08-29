import { addonCategoryModel } from "../models/category.model.js";
import { addonItemModel } from "../models/item.model.js";
export const createAddonCategory = async (newCategory) => {
  const exists = await addonCategoryModel.findOne({ name: newCategory.name });

  if (exists) {
    throw new Error("Category already exists");
  }

  const createdCategory = await addonCategoryModel.create(newCategory);
  return createdCategory;
};

export const getAllAddonCategories = async () =>{
  const categories = await addonCategoryModel.find();
  console.log(categories)
  return categories;
}

export const getAddonCategoryById = async(categoryId)=>{
  const category = await addonCategoryModel.findById(categoryId);
  if (!category) {
    throw new Error("Category not found")
  }
  return category;
}

export const updateCategory = async (categoryId,updates)=>{
  const updatedCategory = await addonCategoryModel.findOneAndUpdate({ _id: categoryId }, updates, { new: true });
  if (!updatedCategory) {
    throw new Error('Category not found')
  }
  return updateCategory;
}

export const deleteAddonCategory = async (categoryId)=>{
  const deletedCategory = await addonCategoryModel.findByIdAndDelete(categoryId);

  if(!deletedCategory) {
    throw new Error("Category not found")
  }

  await addonItemModel.deleteMany({
    parentCategory:categoryId
  })

  return deletedCategory;
}
