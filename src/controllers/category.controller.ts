import {FastifyRequest, FastifyReply } from "fastify";
import AddonCategoryModel from "../models/addOnCategory.model";
import { IAddOnCategory } from "../def/category.def";
import AddonItemModel from "../models/addOnItem.model";

// Create a new Addon Category
export const createAddonCategory = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const newCategory:IAddOnCategory = request.body as IAddOnCategory;

    const exists = await AddonCategoryModel.findOne({name:newCategory.name});

    if(exists){
        return reply.code(409).send("Category already exists")
    }
    const createdCategory = await AddonCategoryModel.create(newCategory);
    reply.code(201).send(createdCategory);
  } catch (error) {
    reply.code(500).send(error);
  }
};

// Get all Addon Categories
export const getAllAddonCategories = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const categories = await AddonCategoryModel.find();
    reply.send(categories);
  } catch (error) {
    reply.code(500).send(error);  
  }
};

// Get a single Addon Category by ID
export const getAddonCategoryById = async (
  request: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply
) => {
  try {
    const categoryId: string = request.params.id;
    const category = await AddonCategoryModel.findById(categoryId);
    if (!category) {
      return reply.code(404).send("Category not found");
    } 
    reply.send(category);
    
  } catch (error) {
    reply.code(500).send(error);
  }
};

// Update an Addon Category by ID
export const updateAddonCategory = async (
  request: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply
) => {
  try {
    const categoryId = request.params.id;
    const updates:IAddOnCategory = request.body as IAddOnCategory;
    const updatedCategory = await AddonCategoryModel.findOneAndUpdate({_id:categoryId},updates,{new:true});
    if (!updatedCategory) {
     return reply.code(404).send("Category not found");
    }
    reply.send(updatedCategory);
    
  } catch (error) {
    reply.code(500).send(error);
  }
};

// Delete an Addon Category by ID
export const deleteAddonCategory = async (
  request: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply
) => {
  try {
    const categoryId = request.params.id;
    const deletedCategory = await AddonCategoryModel.findByIdAndDelete(
      categoryId
    );
    if (!deletedCategory) {
      return reply.code(404).send("Category not found");
    }

    // Delete all items for that category
    await AddonItemModel.deleteMany({
        parentCategory:categoryId
    })
    reply.send(deletedCategory);
    
  } catch (error) {
    reply.code(500).send(error);
  }
};
