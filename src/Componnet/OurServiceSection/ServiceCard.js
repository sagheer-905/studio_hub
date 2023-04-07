import React from 'react'
import { Link } from 'react-router-dom'

function ServiceCard({ data }) {
    return (
        <section className="services">
            <div className='row'>
                {data?.data?.map((item, i) => {
                    return (
                        <>
                            <div className='col-lg-4 col-md-6 col-12'>
                                <div className="card_box_services  px-4 px-md-0">
                                    <div class="card card-cascade wider">
                                        <div class="servise_card_img view view-cascade overlay">
                                            <Link
                                                to={`/service-details/${item.id}`}
                                                className="navbar-brand"
                                            >
                                                <img class="card-img-top" src={item.fullImage} alt="...." />
                                            </Link>
                                        </div>
                                        <div class="card-body card-body-cascade  pb-0">
                                            <h4 class="card-title text-center"><strong>{item.name}
                                            </strong></h4>
                                            <p class="card-text p-0"><span>Price:</span>{item.appointment_fees}</p>
                                            <p class="card-text"><span>Location:</span>{item.location}</p>
                                            <div className="vstack ">
                                                <Link to={`/service-details/${item.id}`} className="btnn">View Profile</Link>
                                                <button type="button" className="btnn1" data-bs-toggle="modal" data-bs-target={`#exampleModal${i}`}>
                                                    Booking for Photoshot
                                                </button>
                                                {/* Modal */}
                                                <div className="modal fade" id={`exampleModal${i}`} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 className="modal-title" id="exampleModalLabel">{item.name}</h5>
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
                                                                                                <option>1</option>
                                                                                                <option>2</option>
                                                                                                <option>3</option>
                                                                                            </select>
                                                                                            <span className="select-arrow" />
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col-sm-4">
                                                                                        <div className="form-group">
                                                                                            <span className="form-label">Working Hour</span>
                                                                                            <select className="form-control">
                                                                                                <option>1</option>
                                                                                                <option>2</option>
                                                                                                <option>3</option>
                                                                                            </select>
                                                                                            <span className="select-arrow" />
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col-sm-4">
                                                                                        <div className="form-group">
                                                                                            <span className="form-label">Event Time</span>
                                                                                            <select className="form-control">
                                                                                                <option>0</option>
                                                                                                <option>1</option>
                                                                                                <option>2</option>
                                                                                            </select>
                                                                                            <span className="select-arrow" />
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
                                                                <button type="button" className='btnn1' data-bs-dismiss="modal">Close</button>
                                                                <button type="button" className='btnn1'>Book Now</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}


            </div>

        </section>
    )
}

export default ServiceCard
