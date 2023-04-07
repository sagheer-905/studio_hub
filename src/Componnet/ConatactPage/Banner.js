import React from 'react'
import Navbar from '../HomePage/Navbar'

function Banner({ data }) {
  var imgurl = 'https://alfatimapropertis.com/studiohub/public/'
  return (
    <div style={{ backgroundImage: `url(${imgurl + data?.bnr_bg_img})` }} className='banner_section'>
      <Navbar />
      <h1>{data?.h1}</h1>
      <div className='hr' />
      <div className='row mx-4'>
        <div className='col-lg-6 col-md-12 col-12'>
          <p>{data?.h2}</p>

        </div>
      </div>
    </div>

  )
}

export default Banner
