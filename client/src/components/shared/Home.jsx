import React from 'react'
import Albums from '../albums/Albums'
import Search from '../albums/Search'
import { useSelector } from 'react-redux'
import './Home.css'


export default function Home() {

  const isLogged = useSelector(state => state.isLogged)
  console.log(isLogged)

  return (
    <>
      <div className="home-wrapper">
        <div className="home-banner"></div>
        <p className="site-title">OBELISK RECORDS</p>
        <div className="home-search"><Search /></div>
        <div className="home-albums"><Albums /></div>
      </div>
    </>
  );
}
