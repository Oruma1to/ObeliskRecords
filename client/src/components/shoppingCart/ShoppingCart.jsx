import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeItem } from '../../actions'
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

  // function that uses redux dispatch to remove an item 
  const handleRemoveItem = (ind) => {
    dispatch(removeItem(ind))
    forceUpdate()
  }

  console.log(shoppingCart)

  return (
    <div>
      {
        shoppingCart.map((item, ind) => {
          return (
            <div className="shopping-cart-item" key={ind}>
              <h3>{item.album.albumName}</h3>
              <p>Artist: {item.album.artistName}</p>
              <p>Year: {item.album.year.toFixed(2)}</p>
              <p>${item.album.price.toFixed(2)}</p>
              <p>Amount: {item.amount}</p>
              <button onClick={() => handleRemoveItem(ind)}>Remove From Cart</button>
            </div>
          )
        })
      }
    </div>
  )
}
