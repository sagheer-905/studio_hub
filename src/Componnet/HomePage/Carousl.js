import React from 'react'
import img1 from '../../image/Icons/1.png'
import img2 from '../../image/Icons/2.png'
import img3 from '../../image/Icons/3.png'
import img4 from '../../image/Icons/4.png'
// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
import Carousel from 'react-elastic-carousel'
import { Link } from 'react-router-dom'

function Carousl() {
  const breakPoints = [
    { width: 1, itemsToShow: 3 },
    { width: 550, itemsToShow: 4 },
    { width: 768, itemsToShow: 6 },
    { width: 1100, itemsToShow: 6 },
    { width: 1250, itemsToShow: 6 },
  ]
  const newData = [
    {
      id: 24,
      name: 'Creative-director',
      icon: null,
      mobile_icon: img1,
      is_featured: 0
    },
    {
      id: 25,
      name: 'Makeup-artist',
      icon: null,
      mobile_icon: img2,
      is_featured: 0
    },
    {
      id: 26
      , name: 'Models',
      icon: null,
      mobile_icon: img3,
      is_featured: 0
    },
    {
      id: 27,
      name: 'Photographer',
      icon: null,
      mobile_icon: img4,
      is_featured: 0
    },
    {
      id: 28,
      name: 'Photography',
      icon: null,
      mobile_icon: img1,
      is_featured: 0
    },
    {
      id: 29,
      name: 'Stylist',
      icon: null,
      mobile_icon: img2,
      isfeatured: 0
    },
    {
      id: 30,
      name: 'Videography',
      icon: null,
      mobile_icon: img3,
      is_featured: 0
    }
  ]
  return (
    <div className='container'>
      {newData.length > 0 && (
        <Carousel className='item-carosul owl-theme' breakPoints={breakPoints} >
          {newData?.map((items, index) => {
            return (
              <Link style={{ textDecoration: "none" }} to={'/service'}>
                <div className="item sliderItemBox rounded-5" key={index + "item"}>
                  <a style={{ textDecoration: "none" }} className="SliderCardText" href='/'>
                    <div
                      className="card-body px-1 pt-0 pb-2 text-center"
                      style={{ textAlign: "center", height: "20vh" }}
                    >
                      <img
                        src={items.mobile_icon}
                        style={{
                          height: "80px",
                          objectFit: "contain",
                          margin: "auto",
                        }}
                        alt='...'
                      />
                      <p style={{ fontSize: "15px", marginTop: "20px", color: "white" }}>{items.name}</p>
                    </div>
                  </a>
                </div>
              </Link>
            );
          })}
        </Carousel>
      )}
    </div>
  )
}
export default Carousl
