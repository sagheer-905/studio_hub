import React from 'react'
import Carousel from 'react-elastic-carousel'
function Testimonial() {
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1100, itemsToShow: 3 },
    ]
    return (
        <div className='testimonial_div' >
            <div className='container '>
                <Carousel className='item-carosul owl-theme' breakPoints={breakPoints} >
                    <div class="card p-3 text-center px-4">
                        <div class="user-content">
                            <div class="user-image">
                                <img src="https://i.imgur.com/PKHvlRS.jpg" alt='....' class="rounded-circle" />
                            </div>
                            <h5 class="mb-0">Bruce Hardy</h5>
                            <div class="ratings">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                    <div class="card p-3 text-center px-4">
                        <div class="user-content">
                            <div class="user-image">
                                <img src="https://i.imgur.com/PKHvlRS.jpg" alt='....' class="rounded-circle" />
                            </div>
                            <h5 class="mb-0">Bruce Hardy</h5>
                            <div class="ratings">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                    <div class="card p-3 text-center px-4">
                        <div class="user-content">
                            <div class="user-image">
                                <img src="https://i.imgur.com/PKHvlRS.jpg" alt='....' class="rounded-circle" />
                            </div>
                            <h5 class="mb-0">Bruce Hardy</h5>
                            <div class="ratings">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                    <div class="card p-3 text-center px-4">
                        <div class="user-content">
                            <div class="user-image">
                                <img src="https://i.imgur.com/PKHvlRS.jpg" alt='....' class="rounded-circle" />
                            </div>
                            <h5 class="mb-0">Bruce Hardy</h5>
                            <div class="ratings">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                </Carousel>
            </div>
        </div>
    )
}
export default Testimonial
