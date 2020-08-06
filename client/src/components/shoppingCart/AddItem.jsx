import React from 'react'
import { useDispatch } from 'react-redux'
import { reduxForceUpdate, addItem } from '../../actions'
import './AddItem.css'

export default function AddItem(props) {
  const dispatch = useDispatch()

  const handleAdd = () => {
    dispatch(addItem(props.album))
    dispatch(reduxForceUpdate())
  }

  if (props.album) {

    return (
      <button className='add-to-cart-button' onClick={handleAdd}>Add To Cart</button>
    )
  } else {
    return (
      <button disabled>There Is No Item To Add</button>
    )
  }
}
