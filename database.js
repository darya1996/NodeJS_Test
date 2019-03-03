const config = require("./config");
const mongoose = require("mongoose");

// функция возвращающая объект обещание (promise)
module.exports = () => {
  return new Promise((resolve, reject) => {
    mongoose.Promise = global.Promise;
    mongoose.set("debug", true); // в продакшене должен быть false

    mongoose.connection
      .on("error", error => reject(error))
      .on("close", () => console.log("Database connection closed."))
      .once("open", () => resolve(mongoose.connections[0]));

    mongoose.connect(config.MONGO_URL, { useMongoClient: true });
  });
};
