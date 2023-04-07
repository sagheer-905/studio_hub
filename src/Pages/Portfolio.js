import React, { useEffect } from 'react'
import PortfolioSection from '../Componnet/HomePage/PortfolioSection'
import Banner from '../Componnet/PortfolioPage/Banner'
import { useAuth } from '../Contaext/AuthContext'
function Portfolio() {
  const {homepage,home}=useAuth()
  useEffect(()=>{
    home()
    // eslint-disable-next-line
  },[])
  return (
    <div>
      <Banner/>
      <PortfolioSection data={homepage}/>
    </div>
  )
}
export default Portfolio
