'use client'
export default function DeleteProduct(props) {
    const deleteProduct = async () => {
        let response = await fetch("http://localhost:3000/api/products/" + props.id, {
            method: "DELETE",
        });
        response = await response.json();
        if (response.success) {
            alert("Product Deleted")
        }
    }
    return (
        <button onClick={deleteProduct}>Delete</button>
    );
}