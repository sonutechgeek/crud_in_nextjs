import  Mongoose  from "mongoose";

const productModel=new Mongoose.Schema({
    name:String,
    price:String,
    company:String,
    color:String,
    category:String
});

export const Product = Mongoose.models.products || Mongoose.model("products",productModel);
