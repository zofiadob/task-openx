import React, { useEffect, useState } from "react";
import ShowCathegory from "./ShowCathegory";
import HighCart from "./HighCart"
import LivingFurthest from "./LivingFurthest";

export default function Task() {
  const [users, setUsers] = useState([]);
  const [carts, setCarts] = useState([]);
  const [products, setProducts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false)

  const USER_API = "https://fakestoreapi.com/users";
  const CART_API = 'https://fakestoreapi.com/carts'
  const PRODUCT_API = 'https://fakestoreapi.com/products'

  async function getAll(){
    const [users, carts, products] = await Promise.all([
      fetch(USER_API),
      fetch(CART_API),
      fetch(PRODUCT_API)
  ])

  const respUsers = await users.json();
  const respCarts = await carts.json();
  const respProducts = await products.json();
  setIsLoaded(true)

  return [respUsers, respCarts, respProducts]
}

  useEffect(() => {
      const allData = getAll();
        allData
        .then(data => {
          setUsers(data[0])
          setCarts(data[1])
          setProducts(data[2])
        })
  },[])


  return (
  <div className="center">
  {!isLoaded && <h2>Loading data...</h2>}
  {isLoaded && 
  <>
  <div></div>
  <div>
  <ShowCathegory  products={products}/>
  <HighCart carts={carts} products={products} users={users}/>
  <LivingFurthest users={users}/>
  </div>
  </>}
  </div>);
}
