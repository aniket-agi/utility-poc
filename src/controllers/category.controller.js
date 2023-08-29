import { createAddonCategoryService, deleteAddonCategoryService, getAddonCategoryByIdService, getAllAddonCategoriesService, updateCategoryService } from '../services/category.service.js';

// Create an Addon Category
export const createAddonCategoryController = async (req, res)=>{
  try {
   const data = await createAddonCategoryService(req.body);
   return res.code(200).send(data);
  } catch (error) {
    res.code(500).send(error);
  }
}

// Get all Addon Categories
export const getAllAddonCategoriesController = async(req, res)=>{
  try {
    const categories = await getAllAddonCategoriesService();
    res.code(200).send(categories);
  } catch (error) {
    res.code(500).send(error);
  }
}

// Get a single Addon Category by ID
export const getAddonCategoryByIdController=async(req, res)=>{
  try {
    const categoryId = req.params.id;
    const category = await getAddonCategoryByIdService(categoryId);
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
    const updatedCategory = await updateCategoryService(categoryId,updates);
    return res.send(updatedCategory);
  } catch (error) {
    res.code(500).send(error);
  }
}

// Delete an Addon Category by ID
export const deleteAddonCategoryController = async (req, res) => {
  try {
    const categoryId = req.params.id;
    const deletedCategory = await deleteAddonCategoryService(categoryId);
    return res.send(deletedCategory);
  } catch (error) {
    res.code(500).send(error);
  }
}
