import { sampleModel } from "../models/sample.model.js";

export const getSampleById = async (id) => {
  try {
    return await sampleModel.find({
      id: id,
    });
  } catch (error) {
    console.log({error})
  }
};
