const mongoose = require("mongoose");

const dbconnect = async () => {
  try {
    const connect = await mongoose.connect(process.env.DATABASE);

    console.log("Database connceted sucessfully", connect.connection.host,connect.connection.name);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
module.exports=dbconnect