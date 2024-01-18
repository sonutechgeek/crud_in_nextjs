import Image from 'next/image'
import styles from './page.module.css'
import Link from "next/link"
export default function Home() {
  return (
    <main>
      <h1>Hi this is Home page</h1>
      <Link href="/addproduct" > Add Product </Link>
      <br></br>
      <Link href="/allproducts" > Products </Link>
    </main>
  )
}
