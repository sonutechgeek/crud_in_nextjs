"use client";
import { useEffect, useState  } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import "../../../app/style.css";
export default function UpdatePage({ params }) {

  const router = useRouter();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [color, setColor] = useState("");
  const [company, setCompany] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    getProductDetail();
  }, []);


  const getProductDetail = async () => {
    let productData = await fetch("http://localhost:3000/api/products/" + params.editproduct);
    productData = await productData.json();

    if (productData.success) {
      let result = productData.result;
      setName(result.name);
      setPrice(result.price);
      setCompany(result.company);
      setCategory(result.category);
      setColor(result.color);
    }
  };

  const updateProduct= async ()=>{
    if (name == "" || price == "" || color == "" || category == "" || company == "") {
        alert("Please Enter All Detail");
        return 0;
    } else {
        let response = await fetch("http://localhost:3000/api/products/" + params.editproduct,{
            method:"PUT",
            body:JSON.stringify({name,price,color,company,category})
        });
        response = await response.json();
        if(response.success){
            alert("product updated");
            clear();
            router.push("/allproducts");
        }
    }
}

  return (
    <div><h1 className="text-center">Update Product</h1>
      <input type="text" value={name} className="input" onChange={(e) => setName(e.target.value)} placeholder="Enter Product Name" required />
      <input type="text" value={price} className="input" onChange={(e) => setPrice(e.target.value)} placeholder="Enter Product Price" required />
      <input type="text" value={color} className="input" onChange={(e) => setColor(e.target.value)} placeholder="Enter Product Color" required />
      <input type="text" value={company} className="input" onChange={(e) => setCompany(e.target.value)} placeholder="Enter Product Company" required />
      <input type="text" value={category} className="input" onChange={(e) => setCategory(e.target.value)} placeholder="Enter Product Category" required />
      <button className="btn" onClick={updateProduct} >Update Product</button>
      <Link href="/allproducts">Product List</Link>
    </div>
  );

  function clear() {
    setName("");
    setCategory("");
    setColor("");
    setPrice("");
    setCompany("");
  }
}
