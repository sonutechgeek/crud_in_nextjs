"use client";
import { useState } from "react";
import "../../app/style.css";
export default  async  function AddPage() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [color, setColor] = useState("");
  const [company, setCompany] = useState("");
  const [category, setCategory] = useState("");
  // let res;
  // let result;
  const addProduct = async () => {
    if (name == "" || price == "" || color == "" || category == "" || company == "") {
      alert("details are not correct");
      return 0;
    } else {
            result = await fetch("http://localhost:3000/api/products", {
            method: "post",
            body: JSON.stringify({ name, price, color, company, category }),
        });
        let result = await result.json();
        console.log(result.success);
        if (result.success) {
            alert("new product added");
            clear();
        }
    }
  };
  // res = await result.json();
  return (
    <div>
      <h1 className="text-center">Hi Add Products</h1>
      <input
        type="text"
        value={name}
        className="input"
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Product Name"
        required
      />
      <input
        type="text"
        value={price}
        className="input"
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Enter Product Price"
        required
      />
      <input
        type="text"
        value={color}
        className="input"
        onChange={(e) => setColor(e.target.value)}
        placeholder="Enter Product Color"
        required
      />
      <input
        type="text"
        value={company}
        className="input"
        onChange={(e) => setCompany(e.target.value)}
        placeholder="Enter Product Company"
        required
      />
      <input
        type="text"
        value={category}
        className="input"
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Enter Product Category"
        required
      />
      <button className="btn" onClick={addProduct}>
        Add Product
      </button>
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
