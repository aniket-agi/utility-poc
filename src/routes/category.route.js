import { createAddonCategoryController, deleteAddonCategoryController, getAddonCategoryByIdController, getAllAddonCategoriesController, updateAddonCategoryController } from "../controllers/category.controller.js";
import { createAddonCategorySchema, deleteAddonCategorySchema, getAddonCategoryByIdSchema, getAllAddonCategoriesSchema, updateAddonCategorySchema } from "../schemas/category.schema.js";

export default async function (fastify) {
  fastify.post('/categories', createAddonCategorySchema,createAddonCategoryController);
  fastify.get('/categories',getAllAddonCategoriesSchema, getAllAddonCategoriesController);
  fastify.get('/categories/:id', getAddonCategoryByIdSchema,getAddonCategoryByIdController);
  fastify.patch('/categories/:id', updateAddonCategorySchema,updateAddonCategoryController);
  fastify.delete('/categories/:id', deleteAddonCategorySchema,deleteAddonCategoryController);
}
  