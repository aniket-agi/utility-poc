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

// Get a single Addon Category by ID
export const getAddonCategoryById = async (
  request: FastifyRequest<{ Params: { id: string } }>,
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

// Update an Addon Category by ID
export const updateAddonCategory = async (
  request: FastifyRequest<{ Params: { id: string } }>,
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

// Delete an Addon Category by ID
export const deleteAddonCategory = async (
  request: FastifyRequest<{ Params: { id: string } }>,
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
