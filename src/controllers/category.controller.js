import { createAddonCategory, deleteAddonCategory, getAddonCategoryById, getAllAddonCategories, updateCategory } from '../services/category.service.js';

// Create an Addon Category
export const createAddonCategoryController = async (req, res)=>{
  try {
   const data = await createAddonCategory(req.body);
   return res.code(200).send(data);
  } catch (error) {
    res.code(500).send(error);
  }
}

// Get all Addon Categories
export const getAllAddonCategoriesController = async(req, res)=>{
  try {
    const categories = await getAllAddonCategories();
    res.code(200).send(categories);
  } catch (error) {
    res.code(500).send(error);
  }
}

// Get a single Addon Category by ID
export const getAddonCategoryByIdCategory=async(req, res)=>{
  try {
    const categoryId = req.params.id;
    const category = await getAddonCategoryById(categoryId);
    return res.send(category);
  } catch (error) {
    res.code(500).send(error);
  }
}

// Update an Addon Category by ID
export const updateAddonCategoryController = async(req, res)=>{
  try {
    const categoryId = req.params.id;
    const updates = req.body;
    const updatedCategory = await updateCategory(categoryId,updates);
    return res.send(updatedCategory);
  } catch (error) {
    res.code(500).send(error);
  }
}

// Delete an Addon Category by ID
export const deleteAddonCategoryController = async (req, res) => {
  try {
    const categoryId = req.params.id;
    const deletedCategory = await deleteAddonCategory(categoryId);
    return res.send(deletedCategory);
  } catch (error) {
    res.code(500).send(error);
  }
}
