import React from 'react'
function AboutSection({ data }) {
  var imgurl = 'https://alfatimapropertis.com/studiohub/public/'
  return (
    <div className='about_section'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6 col-md-12 col-12'>
            <h2 className="fw-bold fs-3 mb-4">{data?.ub_h1 ? data?.ub_h1 : data?.sec_heading}</h2>
            <p className="fw-normal">{data?.ub_p ? data?.ub_p : data?.sec_des}</p>
            <button id='read_more' className="btn  text-white px-3 readmorebtn mb-lg-5 mb-2">Read More <i className="fa-solid fa-angle-down text-white" /></button>
          </div>
          <div className='col-lg-6 col-md-12 col-12'>
            <img src={imgurl + data?.ub_img} alt="About" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
