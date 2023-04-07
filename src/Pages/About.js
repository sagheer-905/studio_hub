import React, { useEffect } from 'react'
import Banner from '../Componnet/AboutPage/Banner'
import OurGolSection from '../Componnet/AboutPage/OurGolSection'
import AboutSection from '../Componnet/HomePage/AboutSection'
import { useAuth } from '../Contaext/AuthContext'
function About() {
  const {aboutpage,about,home,homepage}=useAuth()
  useEffect(()=>{
    about()
    home()
       // eslint-disable-next-line
  },[])
  return (
    <div>
      <Banner data={aboutpage}/>
      <AboutSection data={homepage}/>
      <OurGolSection data={aboutpage}/>
    </div>
  )
}
export default About
