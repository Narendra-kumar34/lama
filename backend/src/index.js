const app = require("./app");
const config = require("./config/config");
const mongoose = require("mongoose");

mongoose
  .connect(config.mongoose.url)
  .then(() => console.log("Connected to db at", config.mongoose.url))
  .catch((error) => console.log("Error connecting to db", error));

app.listen(config.port, () => console.log("Listening to server at port:", config.port));