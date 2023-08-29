import { getSampleById } from "../services/sample.service.js";

export const getSampleByIdController = async (req, res) => {
  const sampleId = req.params.id;
 const sample = await getSampleById(sampleId);
 //const sample = {message:"Done"}
  res.status(200).send({ data: sample }); 
};
