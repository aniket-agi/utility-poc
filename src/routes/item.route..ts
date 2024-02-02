import { FastifyInstance } from 'fastify';
import {
  createAddonItem,
  getAllAddonItems,
  getAddonItemById,
  updateAddonItem,
  deleteAddonItem,
} from '../controllers/item.controller';

export default async function (fastify: FastifyInstance) {
  fastify.post('/items', createAddonItem);
  fastify.get('/items', getAllAddonItems);
  fastify.get('/items/:id', getAddonItemById);
  fastify.put('/items/:id', updateAddonItem);
  fastify.delete('/items/:id', deleteAddonItem);
}
