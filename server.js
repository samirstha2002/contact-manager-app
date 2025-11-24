const express = require("express");
const dotenv = require("dotenv");
const contactRouter = require("./routes/contactroutes");
const errorhandler = require("./middlewares/errorhandler");

const dbconnect=require('./dbconnection')

dotenv.config({ path: "./config.env" });

dbconnect()
const app = express();
app.use(express.json());
app.use("/api/contacts", contactRouter);
app.use(errorhandler);
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`The server is running in ${port}`);
});
