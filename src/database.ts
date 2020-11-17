import mongoose, { ConnectionOptions } from "mongoose";
import config from "./config/config";
//mongoose connection
(async () => {
   try {
      const mongooseOptions: ConnectionOptions = {
         useUnifiedTopology: true,
         useNewUrlParser: true,
         useCreateIndex: true,
         /*
         user: config.MONGO_USER
         password: config.MONGO_PASSWORD
         
        */
      };
      const db = await mongoose.connect(
         `mongodb://${config.DB.MONGO_HOST}/${config.DB.MONGO_DATABASE}`,
         mongooseOptions
      );
      console.log("conectada la base de datos:", db.connection.name);
   } catch (error) {
      console.error(error);
   }
})();
