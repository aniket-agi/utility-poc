import mongoose from "mongoose";

const mongoConnect = () => {
  try {
    let promise = new Promise((resolve, reject) => {
      try {
        const mongodb = mongoose.connect(process.env.MONGO_DATABASE_URL);
        resolve(mongodb);
      } catch (error) {
        console.error("Error connecting to MongoDB", error);
        reject();
      }
    });
    return promise;
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
  }
};

export { mongoConnect };
