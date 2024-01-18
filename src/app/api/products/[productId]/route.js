import { connection_str } from "@/lib/db";
import { Product } from "@/lib/model/product";
import Mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(request ,content){
    let success=true
    const productId= content.params.productId;
    const id={_id:productId};
    await Mongoose.connect(connection_str);
    const result= await Product.findById(id);
    return NextResponse.json({ result, success });
}

export async function PUT(request ,content){
    let success=true
    const productId= content.params.productId;
    const payload = await request.json();
    // console.log(payload);
    const filter={_id:productId};
    await Mongoose.connect(connection_str);
    const result= await Product.findOneAndUpdate(filter,payload)
    return NextResponse.json({ result, success });
}

export async function DELETE(request ,content){
    let success=true
    const productId= content.params.productId;
    const id={_id:productId};
    await Mongoose.connect(connection_str);
    const response= await Product.deleteOne(id);
    return NextResponse.json({ response, success });
}