import Link from 'next/link';
import DeleteProduct from '../components/DeleteBtnComp';
const getProducts = async () => {
  let data = await fetch("http://localhost:3000/api/products",{
    method:"GET"
  });
  data = await data.json();
  if (data.success) {
    return data.result;
  } else {
    return { success: false };
  }
};

export default async function Page() {
  const product = await getProducts();
//   console.log("pro "+product);
  return (
    <div>
      <h1>All Product List </h1>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Color</th>
            <th>Company</th>
            <th>Category</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {product.map((pro) => (
            <tr key={pro._id}>
              <td>{pro.name}</td>
              <td>{pro.price}</td>
              <td>{pro.color}</td>
              <td>{pro.company}</td>
              <td>{pro.category}</td>
              <td><Link href={"/allproducts/"+pro._id} >Edit</Link></td>
              <td><DeleteProduct id={pro._id}/></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
