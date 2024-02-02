import { FastifyRequest, FastifyReply } from 'fastify';
import AddonItemModel from '../models/addOnItem.model'; 
import AddonCategoryModel from "../models/addOnCategory.model"; 
import { IAddOnItem } from '../def/item.def';

// Create a new Addon Item
export const createAddonItem = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const newItemData: IAddOnItem = request.body as IAddOnItem;

    const parentCategory = await AddonCategoryModel.findOne({_id:newItemData.parentCategory})
    if(!parentCategory){
        return reply.code(404).send("Parent category not found")
    }
    const newItem = await AddonItemModel.create(newItemData);
    reply.code(201).send(newItem);
  } catch (error) {
    reply.code(500).send(error);
  }
};

// Get all Addon Items
export const getAllAddonItems = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const items = await AddonItemModel.find().populate('parentCategory');
    reply.send(items);
  } catch (error) {
    reply.code(500).send(error);
  }
};

// Get a specific Addon Item by ID
export const getAddonItemById = async (request:FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply) => {
  try {
    const itemId = request.params.id;
    const item = await AddonItemModel.findById(itemId).populate('parentCategory');
    if (!item) {
      return reply.code(404).send('Item not found');
    }
    reply.send(item);
    
  } catch (error) {
    reply.code(500).send(error);
  }
};

// Update an Addon Item by ID
export const updateAddonItem = async (request: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply) => {
  try {
    const itemId = request.params.id;
    const updatedItemData: IAddOnItem = request.body as IAddOnItem;
    const updatedItem = await AddonItemModel.findByIdAndUpdate(itemId, updatedItemData, {
      new: true,
    });

    if (!updatedItem) {
      return reply.code(404).send('Item not found');
    }
      reply.send(updatedItem);
    
  } catch (error) {
    reply.code(500).send(error);
  }
};

// Delete an Addon Item by ID
export const deleteAddonItem = async (request: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply) => {
  try {
    const itemId = request.params.id;
    const deletedItem = await AddonItemModel.findByIdAndDelete(itemId);

    if (!deletedItem) {
      return reply.code(404).send('Item not found');
    }
      reply.send(deletedItem);
    
  } catch (error) {
    reply.code(500).send(error);
  }
};
