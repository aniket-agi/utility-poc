export const categoryObject = {
    _id: { type: "string" },
    status: { type: "string" },
    name: { type: "string" },
    image: { type: "string" },
    created_at: { type: "string", format: "date-time" },
    updated_at: { type: "string", format: "date-time" },
}

const categorySchema = {
  properties: categoryObject,
  required: ["_id", "status", "name", "image", "created_at", "updated_at"],
  additionalProperties: false
};

export const createAddonCategorySchema = {
  schema: {
    body: {
      type: "object",
      properties: {
        status: { type: "string" },
        name: { type: "string" },
        image: { type: "string" },
      },
      required: ["status", "name", "image"],
    },
    response: {
      200: categorySchema,
    },
  },
};

export const getAllAddonCategoriesSchema = {
  schema: {
    response: {
      200: {
        type: "array",
        items: categorySchema,
      },
    },
  },
};

export const getAddonCategoryByIdSchema = {
  schema: {
    params: {
      type: "object",
      properties: {
        id: { type: "string", pattern: "^[0-9a-fA-F]{24}$" },
      },
      required: ["id"],
    },
    response: {
      200: categorySchema,
    },
  },
};

export const updateAddonCategorySchema = {
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
      ],
      properties: {
        status: { type: "string" },
        name: { type: "string" },
        image: { type: "string" },
      },
    },
    response: {
      200: categorySchema,
    },
  },
};

export const deleteAddonCategorySchema = {
    schema: {
        params: {
          type: "object",
          properties: {
            id: { type: "string", pattern: "^[0-9a-fA-F]{24}$" },
          },
          required: ["id"],
        },
        response: {
          200: categorySchema,
        },
      }
}
