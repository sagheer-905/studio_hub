import React from 'react'
function OurGolSection({ data }) {
  return (
    <div className="marketplace">
      <div className="container  text-center">
        <div className="container">
          <div className='row'>
            <div className='col-lg-4 col-md-12 col-12'>
              <div className="market_placeCart">
                <div className="card pt-4 border-0">
                  <i className="fa-solid fa-people-group" />
                  <div className="card-body">
                    <h5 className="card-title">{data?.card_h}</h5>
                    <p className="card-text" style={{ fontSize: '14px' }}>{data?.card_p}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-12 col-12'>
              <div className="market_placeCart">
                <div className="card pt-4 border-0">
                  <i className="fa-solid fa-people-group" />
                  <div className="card-body">
                    <h5 className="card-title">{data?.card2_h}</h5>
                    <p className="card-text" style={{ fontSize: '14px' }}>{data?.card2_p}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-12 col-12'>
              <div className="market_placeCart">
                <div className="card pt-4 border-0">
                  <i className="fa-solid fa-people-group" />
                  <div className="card-body">
                    <h5 className="card-title">{data?.card3_h}</h5>
                    <p className="card-text" style={{ fontSize: '14px' }}>{data?.card3_p}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default OurGolSection
