import express from "express";
import "dotenv/config";
import bodyParser from "body-parser";
// import route from "./routes/index";
import mongoose from "mongoose";
const app = express();
 app.use(bodyParser.json());
 //app.use("/",route);
 //app.get("/",route);

 //database configuration"
 const database = process.env.DATABASE;
 mongoose
 .connect(database,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
 })
 .then(() => {
    console.log("Database is well connected!");
 });
//server configuration
const port = process.env.PORT ||4040;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);

});
export default app