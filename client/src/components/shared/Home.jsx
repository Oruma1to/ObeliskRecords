import React from 'react'
import Albums from '../albums/Albums'
import './Home.css'


export default function Home() {


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
