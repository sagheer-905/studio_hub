import React from 'react'
import Navbar from '../HomePage/Navbar'
function Banner({ data }) {
  var imgurl = 'https://alfatimapropertis.com/studiohub/public/'
  return (
    <div style={{ backgroundImage: `url(${imgurl + data?.bnr_bg_img})` }} className='banner_section'>
      <Navbar />
      <h1>{data?.h1}</h1>
      <div className='hr' />
      <p>{data?.h2}</p>
    </div>
  )
}

export default Banner
