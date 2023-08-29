import { createAddonCategoryController, deleteAddonCategoryController, getAddonCategoryByIdController, getAllAddonCategoriesController, updateAddonCategoryController } from "../controllers/category.controller.js";

export default async function (fastify, opts) {
  fastify.post('/categories', opts,createAddonCategoryController);
  fastify.get('/categories',opts, getAllAddonCategoriesController);
  fastify.get('/categories/:id', opts,getAddonCategoryByIdController);
  fastify.put('/categories/:id', opts,updateAddonCategoryController);
  fastify.delete('/categories/:id', opts,deleteAddonCategoryController);
}
  