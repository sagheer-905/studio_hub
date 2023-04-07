import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAuth } from '../../Contaext/AuthContext'
function DetailSection() {
  const { detailpage, servicesdetail } = useAuth()
  const data = detailpage?.data
  console.log(detailpage);
  const parms = useParams()
  useEffect(() => {
    servicesdetail(parms.id)
    // eslint-disable-next-line
  }, [])
  return (
    <div className='main_postSection'>
      <div className='container row'>
        <div className='col-12 col-lg-8 col-12-8 '>
          <div className='post'>
            <img src={data?.fullImage} alt='' />
          </div>
          <div className='service_tab'>
            <ul className="nav nav-tabs mb-3" id="ex1" role="tablist">
              <li className="nav-item" role="presentation">
                <a className="nav-link active" id="ex1-tab-1" data-mdb-toggle="tab" href="#ex1-tabs-1" role="tab" aria-controls="ex1-tabs-1" aria-selected="true">Overview</a>
              </li>
              <li className="nav-item" role="presentation">
                <a className="nav-link" id="ex1-tab-2" data-mdb-toggle="tab" href="#ex1-tabs-2" role="tab" aria-controls="ex1-tabs-2" aria-selected="false">About Service</a>
              </li>
              <li className="nav-item" role="presentation">
                <a className="nav-link" id="ex1-tab-3" data-mdb-toggle="tab" href="#ex1-tabs-3" role="tab" aria-controls="ex1-tabs-3" aria-selected="false">Review</a>
              </li>
            </ul>
            <div className="tab-content" id="ex1-content">
              <div className="tab-pane fade show active" id="ex1-tabs-1" role="tabpanel" aria-labelledby="ex1-tab-1">
                <p>{data?.overview}</p>
              </div>
              <div className="tab-pane fade" id="ex1-tabs-2" role="tabpanel" aria-labelledby="ex1-tab-2">
                <p>{data?.desc}</p>
              </div>
              <div className="tab-pane fade" id="ex1-tabs-3" role="tabpanel" aria-labelledby="ex1-tab-3">
                <p>{data?.desc}</p>
              </div>
            </div>
          </div>
        </div>
        <div className='col-12 col-lg-4 col-12-8 '>
          <input type={'text'} placeholder="Search" />
          <div className='recent'>
            <div className='rowo'>
              <h5>Package</h5>
              <p>$25.00</p>
            </div>
            <ul>
              <li><i class="fa-solid fa-check"></i>Outdoor Shoot</li>
              <li><i class="fa-solid fa-check"></i>Indoor Shoot</li>
              <li><i class="fa-solid fa-check"></i>Studio Shoot</li>
              <li><i class="fa-solid fa-check"></i>Product Shoot</li>
              <li><i class="fa-solid fa-check"></i>Wedding Shoot</li>
              <li><i class="fa-solid fa-check"></i>Couple Shoot</li>
              <li><i class="fa-solid fa-check"></i>Birthday Shoot</li>
            </ul>
            <div>
              <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Book Apointment
              </button>
              <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">Booking Form</h5>
                    </div>
                    <div className="modal-body">
                      <div className="row">
                        <div className="col-md-12 col-md-pull-7">
                          <div className="booking-form">
                            <form>
                              <div className="form-group">
                                <span className="form-label">Name</span>
                                <input className="form-control" type="text" placeholder="Enter your name" />
                              </div>
                              <div className="row">
                                <div className="col-sm-12 col-6">
                                  <div className="form-group">
                                    <span className="form-label">Phone</span>
                                    <input className="form-control" type="number" placeholder='Enter Your Phone' required />
                                  </div>
                                </div>
                                <div className="col-sm-12">
                                  <div className="form-group">
                                    <span className="form-label">Email</span>
                                    <input className="form-control" type="Email" placeholder='Enter Your Email' required />
                                  </div>
                                </div>
                                <div className="col-sm-12">
                                  <div className="form-group">
                                    <span className="form-label">Address</span>
                                    <input className="form-control" type="text" placeholder='Enter Your Address' required />
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-sm-4">
                                  <div className="form-group">
                                    <span className="form-label">Working Days</span>
                                    <select className="form-control">
                                      {data?.workHour.map((item => {
                                        return (
                                          <option>{item.day_index}</option>
                                        )
                                      }))}
                                    </select>
                                    <span className="select-arrow" />
                                  </div>
                                </div>
                                <div className="col-sm-4">
                                  <div className="form-group">
                                    <span className="form-label">Working Hour</span>
                                    <select className="form-control">
                                      {detailpage?.[1].length > 0 ? detailpage?.[1].map((item) => {
                                        return (
                                          <>
                                            <option>{item.end_time + item.start_time}</option>
                                          </>
                                        )
                                      }) : <option>Booking not available</option>}
                                    </select>
                                    <span className="select-arrow" />
                                  </div>
                                </div>
                                <div className="col-sm-4">
                                  <div className="form-group">
                                    <span className="form-label">Event Time</span>
                                    <select className="form-control">
                                      {detailpage?.[0].length > 0 ? detailpage?.[0].map((item) => {
                                        return (
                                          <>
                                            <option>{item.end_time + item.start_time}</option>
                                          </>
                                        )
                                      }) : <option>Booking not available</option>}
                                    </select>
                                    <span className="select-arrow"/>
                                  </div>
                                </div>
                              </div>
                              <div className="col-sm-12">
                                <div className="form-group">
                                  <span className="form-label">Message</span>
                                  <textarea className="form-control" style={{ height: "20vh" }} placeholder='Enter Your Message' required />
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button type="button" data-bs-dismiss="modal">Close</button>
                      <button type="button">Book Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='order_com'><i class="fa-solid fa-circle-check"></i> 5 Order Completed</div>
          <div className='order_com'><i class="fa-solid fa-circle-check"></i> Seller rating:76%</div>
          <div className='booking_section1'>
            <ul className="nav nav-tabs mb-3" id="ex1" role="tablist">
              <li className="nav-item" role="presentation">
                <a className="nav-link active" id="ex1-tab-4" data-mdb-toggle="tab" href="#ex1-tabs-4" role="tab" aria-controls="ex1-tabs-4" aria-selected="true">Today</a>
              </li>
              <li className="nav-item" role="presentation">
                <a className="nav-link" id="ex1-tab-5" data-mdb-toggle="tab" href="#ex1-tabs-5" role="tab" aria-controls="ex1-tabs-5" aria-selected="false">Tomorrow</a>
              </li>
            </ul>
            <div className="tab-content" id="ex1-content">
              <div className="tab-pane fade show active" id="ex1-tabs-4" role="tabpanel" aria-labelledby="ex1-tab-4">
                {detailpage?.[0].map((item) => {
                  return (
                    <>
                      <p>{item.end_time ? item.end_time + item.start_time : "Booking not available "}</p>
                    </>
                  )
                })}
              </div>
              <div className="tab-pane fade" id="ex1-tabs-5" role="tabpanel" aria-labelledby="ex1-tab-5">
                {detailpage?.[1].map((item) => {
                  return (
                    <>
                      <p>{item.end_time + item.start_time}</p>
                    </>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default DetailSection
