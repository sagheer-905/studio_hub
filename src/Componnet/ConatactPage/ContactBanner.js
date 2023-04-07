import React from 'react'
function ContactBanner() {
  return (
    <div className='container'>
      <div className="row my-5 align-items-center justify-content-center">
        <div className="col-md-5">
          <h1 className="mb-4">Contact Us</h1>
          <p className="fw-semibold pe-xl-5" style={{ textAlign: 'justify' }}>Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours on business days. We will be happy to answer your questions.</p>
        </div>
        <div className="col-md-7">
          <img src='http://localhost:3000/static/media/contact.44f4c216df6722e2a77b.jpg' alt="...." className="img-fluid" />
        </div>
      </div>
    </div>
  )
}
export default ContactBanner
