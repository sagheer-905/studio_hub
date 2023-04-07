import React, { useEffect } from 'react'
import AboutSection from '../Componnet/HomePage/AboutSection'
import Banner from '../Componnet/HomePage/Banner'
import Celender from '../Componnet/HomePage/Celender'
import CreativeSection from '../Componnet/HomePage/CreativeSection'
import OurServices from '../Componnet/HomePage/OurServices'
import PortfolioSection from '../Componnet/HomePage/PortfolioSection'
import Product from '../Componnet/HomePage/Product'
import Studio from '../Componnet/HomePage/Studio'
import Testimonial from '../Componnet/HomePage/Testimonial'
import { useAuth } from '../Contaext/AuthContext'
function Homa() {
  const {homepage,home}=useAuth()
  useEffect(()=>{
    home()
    // eslint-disable-next-line
},[])
  return (
    <div>
      <Banner data={homepage}/>
      <OurServices data={homepage}/>
      <AboutSection data={homepage}/>
      <CreativeSection data={homepage}/>
      <Studio data={homepage}/>
      <Product data={homepage}/>
      <PortfolioSection data={homepage}/>
      <Celender/>
      <Testimonial data={homepage}/>
    </div>
  )
}
export default Homa
