import React from 'react'
import Navbar from './Navbar'
function Banner({ data }) {
  var imgurl = 'https://alfatimapropertis.com/studiohub/public/'
  return (
    <div className='container-fluid home_baner'>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div style={{ backgroundImage: `url(${imgurl + data?.bi1})` }} className='row'>
              <div className='line col-6'>
                <h1>{data?.bh1}</h1>
              </div>
              <div className='col-lg-7 col-md-12 col-12'>
                <p>{data?.bp1}</p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div style={{ backgroundImage: `url(${imgurl + data?.bi2})` }} className='row'>
              <div className=' line col-6'>
                <h1>{data?.bh2}</h1>
              </div>
              <div className='col-lg-7 col-md-12 col-12'>
                <p>{data?.bp2}</p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div style={{ backgroundImage: `url(${imgurl + data?.bi3})` }} className='row'>
              <div className='line col-6'>
                <h1>{data?.bh3}</h1>
              </div>
              <div className='col-lg-7 col-md-12 col-12'>
                <p>{data?.bp3}</p>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <Navbar />
    </div>
  )
}
export default Banner
