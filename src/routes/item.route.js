import { createAddonItemCategoryController, deleteAddonItemController, getAddonItemByIdController, getAllAddonItemsController, updateAddonItemController } from "../controllers/item.controller.js";
import { createAddonItemCategorySchema, deleteAddonItemSchema, getAddonItemByIdSchema, getAllAddonItemsSchema, updateAddonItemSchema } from "../schemas/item.schema.js";

export default async function (fastify) {

fastify.post('/items',createAddonItemCategorySchema, createAddonItemCategoryController);
fastify.get('/items', getAllAddonItemsSchema,getAllAddonItemsController);
fastify.get('/items/:id',getAddonItemByIdSchema, getAddonItemByIdController);
fastify.put('/items/:id', updateAddonItemSchema,updateAddonItemController);
fastify.delete('/items/:id',deleteAddonItemSchema, deleteAddonItemController);}