import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { incrementItem, removeItem, removeItemCompletely } from '../../actions'
import './ShoppingCart.css'

export default function ShoppingCart() {

  // set up component state(s)
  const [update, setUpdate] = useState(true)

  const forceUpdate = () => {
    setUpdate(!update)
  }

  // set up variables from redux 
  const shoppingCart = useSelector(state => state.shoppingCart)
  const dispatch = useDispatch()

  // functions that use redux dispatch
  const handleAddItem = (ind) => {
    dispatch(incrementItem(ind))
    forceUpdate()
  }

  const handleRemoveItem = (ind) => {
    dispatch(removeItem(ind))
    forceUpdate()
  }

  const handleRemoveItemAll = (ind) => {
    dispatch(removeItemCompletely(ind))
    forceUpdate()
  }

  console.log(shoppingCart)

  return (
    <div>
      { shoppingCart.length === 0 ? <h3>You have no items in your cart.</h3> : null }
      {
        shoppingCart.map((item, ind) => {
          return (
            <div className="shopping-cart-item" key={ind}>
              <h3>{item.album.albumName}</h3>
              <p>Artist: {item.album.artistName}</p>
              <p>Year: {item.album.year.toFixed(2)}</p>
              <p>${item.album.price.toFixed(2)}</p>
              <p>Amount: {item.amount}</p>
              <button onClick={() => handleAddItem(ind)}>Add One</button> 
              <button onClick={() => handleRemoveItem(ind)}>Remove One</button> 
              <button onClick={() => handleRemoveItemAll(ind)}>Remove All</button> 
            </div>
          )
        })
      }
    </div>
  )
}
