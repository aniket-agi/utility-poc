import { categoryObject } from "./category.schema.js";

const itemObject = {
  _id: { type: "string" },
  status: { type: "string" },
  name: { type: "string" },
  image: { type: "string" },
  inStock: { type: "number" },
  minStockRemainder: { type: "number" },
  unitPrice: { type: "number" },
  created_at: { type: "string", format: "date-time" },
  updated_at: { type: "string", format: "date-time" },
  parentCategory: categoryObject,
};

const itemSchema = {
  properties: itemObject,
  required: [
    "status",
    "name",
    "image",
    "inStock",
    "minStockRemainder",
    "unitPrice",
    "created_at",
    "updated_at",
    "parentCategory"
  ],
  additionalProperties: false

};

export const createAddonItemCategorySchema = {
    schema:{
        body:{
            type:'object',
            properties:{
                status: { type: "string" },
                name: { type: "string" },
                image: { type: "string" },
                inStock: { type: "number" },
                minStockRemainder: { type: "number" },
                unitPrice: { type: "number" },
                parentCategory:{
                    type:'string',
                    pattern:"^[0-9a-fA-F]{24}$"
                }
            }
        },
        response:{
            200:itemSchema
        }
    }
}

export const getAllAddonItemsSchema = {
    schema: {
        response: {
          200: {
            type: "array",
            items: itemSchema,
          },
        },
      }
}

export const getAddonItemByIdSchema = {
    schema: {
      params: {
        type: "object",
        properties: {
          id: { type: "string", pattern: "^[0-9a-fA-F]{24}$" },
        },
        required: ["id"],
      },
      response: {
        200: itemSchema,
      },
    },
  };
  
  export const updateAddonItemSchema = {
    schema: {
      params: {
        type: "object",
        properties: {
          id: { type: "string", pattern: "^[0-9a-fA-F]{24}$" },
        },
        required: ["id"],
      },
      body: {
        type: "object",
        anyOf: [
          { required: ["status"] },
          { required: ["name"] },
          { required: ["image"] },
          {required:['inStock']},
          {required:['minStockRemainder']},
          {required:['unitPrice']}
        ],
        properties: {
          status: { type: "string" },
          name: { type: "string" },
          image: { type: "string" },
          inStock: { type: "number" },
          minStockRemainder: { type: "number" },
          unitPrice: { type: "number" },
        },
      },
      response: {
        200: itemSchema,
      },
    },
  };
  
  export const deleteAddonItemSchema = {
      schema: {
          params: {
            type: "object",
            properties: {
              id: { type: "string", pattern: "^[0-9a-fA-F]{24}$" },
            },
            required: ["id"],
          },
          response: {
            200: itemSchema,
          },
        }
  }