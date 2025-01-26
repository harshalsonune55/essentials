const mongoose=require("mongoose");

main()
.then((res)=>{
    console.log("successfully connected");
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


const User=mongoose.model("User", userSchema);

module.exports=User;

