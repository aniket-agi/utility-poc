import { FastifyInstance } from 'fastify';
import {
  createAddonCategory,
  getAllAddonCategories,
  getAddonCategoryById,
  updateAddonCategory,
  deleteAddonCategory,
} from '../controllers/category.controller';

export default async function (fastify: FastifyInstance) {
  fastify.post('/categories', createAddonCategory);
  fastify.get('/categories', getAllAddonCategories);
  fastify.get('/categories/:id', getAddonCategoryById);
  fastify.put('/categories/:id', updateAddonCategory);
  fastify.delete('/categories/:id', deleteAddonCategory);
}
