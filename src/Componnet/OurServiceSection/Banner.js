import React from 'react'
import Navbar from '../HomePage/Navbar'
import img from '../../image/OurServices.webp'
function Banner() {
  return (
    <div style={{ background: `url(${img})` }} className='banner_section'>
      <Navbar />
      <h1>OUR Services</h1>
      <div className='hr' />
      <div className='row mx-4'>
        <div className='col-lg-6 col-md-12 col-12'>
          <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.</p>
        </div>
      </div>
    </div>

  )
}
export default Banner
