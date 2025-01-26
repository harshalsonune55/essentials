const express=require("express");
let app=express();
const port=8080;
const mongoose=require("mongoose");
const path=require("path");
const List=require("./database/data.js");

app.use(express.static(path.join(__dirname,"public")));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));



main()
.then((res)=>{
    console.log("successfully connected to database");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/ground');
}


const userSchema= new mongoose.Schema({
    name:String,
    email:String,
    age:Number
});


// let user1=new User({name:"adamy",email:"adamy@yahoo.com",age:18});
// user1.save()
// .then((result)=>{
//     console.log(result);
// })
// .catch((err)=>{
//     console.log(err);
// }); //saves to Db. it returns a promise



app.listen(port,()=>{
console.log(`listening on ${port} port successully`);
});