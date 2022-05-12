import React from 'react'

export default function HighCart(props) {

    const productPrice = props.products.map(item => {
        return item.price
    })

    
    const cartsValue = props.carts.map(cart => {
        let value = 0
        cart.products.forEach(prod =>{
            value += prod.quantity * productPrice[prod.productId-1]
        }
        )
        return value
    })

    const index = cartsValue.indexOf(Math.max(...cartsValue))-1
    const maxUser = props.users[index]
    
  return (
    <div className="component">
        <h2>Highest value cart</h2>
        <p>Total value: {Math.max(...cartsValue)}</p>
        <p>Owner: {maxUser.name.firstname} {maxUser.name.lastname}</p>
    </div>
  )
}
