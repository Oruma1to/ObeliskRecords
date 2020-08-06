import React, { useEffect } from 'react'
import Albums from '../albums/Albums'
import { useSelector, useDispatch } from 'react-redux'
import { replaceCart } from '../../actions'
import { getCart } from '../../services/apiCart'
import './Home.css'


export default function Home() {

  const isLogged = useSelector(state => state.isLogged)
  console.log(isLogged)

  useEffect(() => {
    initialize()
  }, [])


  const dispatch = useDispatch()

  const initialize = async () => {
    try {
      const response = await getCart()
      console.log(response)
      dispatch(replaceCart(response))
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <>
      <div className="home-wrapper">
        <div className="home-banner"></div>
        <p className="site-title">OBELISK RECORDS</p>
        <div className="home-albums"><Albums /></div>
      </div>
    </>
  );
}
