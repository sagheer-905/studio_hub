import React, { useEffect } from 'react'
import Banner from '../Componnet/ConatactPage/Banner'
import ContactBanner from '../Componnet/ConatactPage/ContactBanner'
import ContactForm from '../Componnet/ConatactPage/ContactForm'
import { useAuth } from '../Contaext/AuthContext'
function Conatct() {
    const {contactpage,contact}=useAuth()
    useEffect(()=>{
      contact()
       // eslint-disable-next-line
    },[])
  return (
    <div>
      <Banner data={contactpage}/>
      <ContactBanner data={contactpage}/>
      <ContactForm />
    </div>
  )
}
export default Conatct
