import React, { useEffect } from 'react'
import Banner from '../Componnet/OurServiceSection/Banner'
import ServiceCard from '../Componnet/OurServiceSection/ServiceCard'
import { useAuth } from '../Contaext/AuthContext'
function OurService() {
  const {  services,servicespage}=useAuth()
  useEffect(()=>{
    services()
  // eslint-disable-next-line 
  },[])
  return (
    <div>
      <Banner/>
      <ServiceCard data={servicespage}/>
    </div>
  )
}
export default OurService
