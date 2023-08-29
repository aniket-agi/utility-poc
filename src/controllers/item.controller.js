import { createAddonItemService, deleteAddonItemService, getAddonItemByIdService, getAllAddonItemsService, updateAddonItemService } from "../services/item.service.js";


// Create a new Addon Item
export const createAddonItemCategoryController = async (req, res) => {
  try {
    const newItemData = req.body;
    const newItem = await createAddonItemService(newItemData);
    return res.code(201).send(newItem);
  } catch (error) {
    res.code(500).send(error);
  }
};

// Get all Addon Items
export const getAllAddonItemsController = async (req, res) => {
  try {
    const items = await getAllAddonItemsService();
    return res.send(items);
  } catch (error) {
    res.code(500).send(error);
  }
};

// Get a specific Addon Item by ID
export const getAddonItemByIdController = async (req, res) => {
  try {
    const itemId = req.params.id;
    const item = await getAddonItemByIdService(itemId);
    return res.send(item);
  } catch (error) {
    res.code(500).send(error);
  }
};

// Update an Addon Item by ID
export const updateAddonItemController = async (req, res) => {
  try {
    const itemId = req.params.id;
    const updatedItemData = req.body;
    const updatedItem = await updateAddonItemService(itemId,updatedItemData);
    return res.send(updatedItem);
  } catch (error) {
    res.code(500).send(error);
  }
};

// Delete an Addon Item by ID
export const deleteAddonItemController = async (req, res) => {
  try {
    const itemId = req.params.id;
    const deletedItem = await deleteAddonItemService(itemId);
    return res.send(deletedItem);
  } catch (error) {
    res.code(500).send(error);
  }
};
