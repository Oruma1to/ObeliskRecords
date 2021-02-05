import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { incrementItem, removeItem, removeItemCompletely, reduxForceUpdate } from '../../actions'
import './ShoppingCart.css'

export default function ShoppingCart() {

  // set up component state(s)
  const [update, setUpdate] = useState(true)

  // set up variables from redux 
  const shoppingCart = useSelector(state => state.shoppingCart)
  const dispatch = useDispatch()

  const forceUpdate = () => {
    setUpdate(!update)
    dispatch(reduxForceUpdate())
  }

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
    <div className="shopping-cart-container">
      {shoppingCart.length === 0 ? <h3 className="null-message">You have no items in your cart.</h3> : null}
      {
        shoppingCart.map((item, ind) => {
          return (
            <div className="shopping-cart-wrapper">
              <div className="shopping-cart-item" key={ind}>
                <p className="cart-album-title important">{item.album.albumName}</p>
                <p className="cart-album-desc">Artist: {item.album.artistName}</p>
                <p className="cart-album-desc">Year: {item.album.year.toFixed(0)}</p>
                <p className="important">${item.album.price.toFixed(2)}</p>
                <p className="cart-album-desc">Amount: {item.amount}</p>
                <div className="shopping-cart-btn-div">
                  <button className="shopping-cart-button" onClick={() => handleAddItem(ind)}> + </button>
                  <button className="shopping-cart-button" onClick={() => handleRemoveItem(ind)}> - </button>
                  <button className="shopping-cart-button" onClick={() => handleRemoveItemAll(ind)}> Remove Item </button>
                </div>
              </div>
              <img className="cart-albumImage" src={item.album.albumCover} />
            </div>
          )
        })
      }
      <div className="total-cart-price">
        <p className="cart-price-text">Total Cart Price: ${
          (shoppingCart.reduce((acc, curr) => acc + (curr.amount * curr.album.price), 0)).toFixed(2)
        }</p>
      </div>
      {shoppingCart.length !== 0 ? <button className="checkout">Checkout</button> : null}
      
    </div>
  )
}
