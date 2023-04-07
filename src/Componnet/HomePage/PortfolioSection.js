import React from 'react'
import img1 from '../../image/images/1.jpg'
import img2 from '../../image/images/2.jpg'
import img3 from '../../image/images/3.jpg'
import img4 from '../../image/images/4.jpg'
import img5 from '../../image/images/5.jpg'
import img6 from '../../image/images/6.jpg'
function PortfolioSection({ data }) {
  return (
    <div className='portfolio_section'>
      <div className='container-fluid'>
        <div className='row'>
          <div id='text_content_gellery' className='col-lg-3 col-md-12 col-12'>
            <div className='text_content_gellery'>
              <h4>{data?.portfolio_h}</h4>
              {/* <p>OUR PHOTOGRAPHY-RELATED WORK INVOLVE DIFFERENT STYLE OF PHOTOGRAPHY  AND FILMING PROCESSES UNTIL NOW WE HAVE SUCCESSFULLY DELIVERD VARIOUS PROJECTS IN DIFFERENT DOMAINS OF PHOTOGRAPHY</p> */}
              <p>{data?.portfolio_p}</p>
              <hr className='hr_gellery' />
              <p>VIEW ALL WORKS</p>
            </div>
          </div>
          <div className='col-lg-9 col-md-12 col-12'>
            <div id='row' className='row'>
              <div className='col-lg-4 col-md-4 col-12'>
                <img className='img' src={img1} alt='...' />
              </div>
              <div className='col-lg-4 col-md-4 col-12'>
                <img className='img' src={img2} alt='...' />
              </div>
              <div className='col-lg-4 col-md-4 col-12'>
                <img className='img' src={img3} alt='...' />
              </div>
              <div className='col-lg-4 col-md-4 col-12'>
                <img className='img' src={img4} alt='...' />
              </div>
              <div className='col-lg-4 col-md-4 col-12'>
                <img className='img' src={img5} alt='...' />
              </div>
              <div className='col-lg-4 col-md-4 col-12'>
                <img className='img' src={img6} alt='...' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default PortfolioSection
