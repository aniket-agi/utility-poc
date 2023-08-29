import { createAddonItemCategoryController, deleteAddonItemController, getAddonItemByIdController, getAllAddonItemsController, updateAddonItemController } from "../controllers/item.controller.js";

export default async function (fastify, opts) {

fastify.post('/items',opts, createAddonItemCategoryController);
fastify.get('/items', opts,getAllAddonItemsController);
fastify.get('/items/:id',opts, getAddonItemByIdController);
fastify.put('/items/:id', opts,updateAddonItemController);
fastify.delete('/items/:id',opts, deleteAddonItemController);}