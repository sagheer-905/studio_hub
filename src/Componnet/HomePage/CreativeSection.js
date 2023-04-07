import React from 'react'
import { BsCamera2 } from 'react-icons/bs'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
function CreativeSection({ data }) {
  var imgurl = 'https://alfatimapropertis.com/studiohub/public/'
  return (
    <div style={{ backgroundImage: `url(${imgurl + data?.card3_img})` }} className='creative_director creative'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6 col-md-12 col-12'>
            <div className='text_div'>
              <h1>{data?.card1_h}</h1>
              <p>{data?.card1_sh}</p>
              <div className='creative_director_content'>
                <BsCamera2 style={{ fontSize: "50px" }} />
                <p>{data?.card1_p}</p>
              </div>
              <div className='learn_more'>
                <p>LEARN MORE</p><HiOutlineArrowNarrowRight style={{ color: "yellow", fontSize: "20px", marginTop: "-10px", marginLeft: "20px" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default CreativeSection
