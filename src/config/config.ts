export default {
   jwtSecret: process.env.JWT_SECRET || "somesecrettoken",
   DB: {
      MONGO_DATABASE: process.env.MONGO_DATABASE || "jwt-ts-restapi",
      MONGO_USER: process.env.MONGOUSER || "admin",
      MONGO_PASSWORD: process.env.MONGO_PASSWOORD || "admin",
      MONGO_HOST: process.env.MONGO_HOST || "localhost",
   },
   PORT: process.env.PORT || 3000,
};
