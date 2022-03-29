const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const connectDB = async () => {
  try {
    await mongoose
      .connect(
        "mongodb+srv://camel:Camel12@cluster0.okest.mongodb.net/zendesk?retryWrites=true&w=majority",
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        }
      )
      .then(() => console.log("Connexion à MongoDB réussie !"))
      .catch((err) => console.log(err));
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
