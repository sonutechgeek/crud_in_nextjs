import { connection_str } from "@/lib/db";
import { Product } from "@/lib/model/product";
import Mongoose from "mongoose";
import { NextResponse } from "next/server";

//ipYBj72FciC7ffJH
//chaudharysonu200212

// db_username=chaudharysonu200212
// password=oXq1kNNZ34Enxtbo

export async function GET() {
  let data = [];
  let success = true;
  try {
    await Mongoose.connect(connection_str);
    console.log(" connection done with get");
    data = await Product.find();
    // console.log(data);
  } catch (error) {
    data = { result: "error" };
    success = false;
  }
//   console.log(data);
  return NextResponse.json({ result: data , success });
}

export async function POST(request) {
  Mongoose.connect(connection_str)
    .then((result) => {
      console.log("connection done with post");
    })
    .catch((err) => {
      console.log(err);
    });

  const payload = await request.json();
  let product = new Product(payload);
  const result = await product.save();
  return NextResponse.json({ result: result, success: true });
}
