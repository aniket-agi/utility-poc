import { AddonCategoryModel } from "../models/category.model.js";
import { AddonItemModel } from "../models/item.model.js";
export const createAddonCategoryService = async (newCategory) => {
  const exists = await AddonCategoryModel.findOne({ name: newCategory.name });

  if (exists) {
    throw new Error("Category already exists");
  }

  const createdCategory = await AddonCategoryModel.create(newCategory);
  return createdCategory;
};

export const getAllAddonCategoriesService = async () =>{
  const categories = await AddonCategoryModel.find();
  console.log(categories)
  return categories;
}

export const getAddonCategoryByIdService = async(categoryId)=>{
  const category = await AddonCategoryModel.findById(categoryId);
  if (!category) {
    throw new Error("Category not found")
  }
  return category;
}

export const updateCategoryService = async (categoryId,updates)=>{
  const updatedCategory = await AddonCategoryModel.findOneAndUpdate({ _id: categoryId }, updates, { new: true });
  if (!updatedCategory) {
    throw new Error('Category not found')
  }
  return updatedCategory;
}

export const deleteAddonCategoryService = async (categoryId)=>{
  const deletedCategory = await AddonCategoryModel.findByIdAndDelete(categoryId);

  if(!deletedCategory) {
    throw new Error("Category not found")
  }

  await AddonItemModel.deleteMany({
    parentCategory:categoryId
  })

  return deletedCategory;
}
