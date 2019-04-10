import mongoose from "mongoose";
import keys from "../keys";

// Url de connection
const {
  mongo: { url }
} = keys;

// Mongoose options connections
const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
};

// Connexion 
mongoose.connect(url, options, () => {
  try {
    const [NativeConnection] = mongoose.connections;
    const {
      db: {
        s: { databaseName }
      }
    } = NativeConnection;
    console.log(`Connecté sur database : ${databaseName}`);
  } catch (err) {
    console.log(err);
  }
});

export default mongoose;
