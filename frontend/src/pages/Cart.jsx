import React, { useContext, useEffect, useState } from 'react'

import CartItem from '../components/cartItem'
import { CartContext } from '../context/CartContext'
import { UserContext } from '../context/UserContext'


const Cart = () => {
    const {cart, total, setTotal, buyPizza, setBuyPizza} = useContext(CartContext)
    const {token} = useContext(UserContext)
  

    const totalPizzas = {}
    const addTotalPizza = (id, total) => {
        totalPizzas[id] = total
        const totalValues = Object.values(totalPizzas)
        let tempTotal = totalValues.reduce(
            (acc, amount)=> acc + amount, 0
        ) 
        setTotal(tempTotal)
    }

  return (
    <>
    <h3 className='mt-3'>Carro de Compras</h3>
    <div>
        {buyPizza.map(purchased => (
            <CartItem 
                key={purchased.id}
                purchased={purchased}
                addTotalPizza={addTotalPizza}
            />
        ))}
        <div className='total-carrito mt-5'>
            <h4>Total: ${numberWithCommas(total)} </h4>
            {
                token ? <button className='btn btn-info'>Pagar</button> : <button className='btn btn-info' disabled={true}>Pagar</button>
            }
        </div>
       
    </div>
    </>
  )
}

function numberWithCommas(x) {
    if (x == null)
        return ""
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export default Cart