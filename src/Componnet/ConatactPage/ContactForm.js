import React from 'react'
function ContactForm() {
  return (
    <div className="contactForm mb-5 position-relative">
      {/* <img src="images/contact-page/map-banner1.png" alt="..." className="img-fluid" /> */}
      <div className="row justify-content-between img-fluid">
        <div className="col-md-7 ps-lg-5 position-relative mt-5 mt-md-0">
          <iframe title='ifram' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.0695144997017!2d74.43728241504665!3d31.522250654203397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191b588e2d162d%3A0x7f68de5f615a161a!2sNask%20Soft!5e0!3m2!1sen!2s!4v1678793458605!5m2!1sen!2s' style={{ width: "100%", height: "100%" }}></iframe>
          <div className="row">
            <div className="col-6 col-sm-5 col-lg-4">
              {/* <img src="images/contact-page/side-banner.png" alt="...." className="img-fluid" /> */}
            </div>
          </div>
        </div>
        <div className="col-md-5 pe-lg-5">
          <form>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Full Name" />
            </div>
            <div className="mb-3">
              <input type="email" className="form-control" placeholder="Your Email" />
            </div>
            <div className="mb-3">
              <textarea style={{ borderRadius: "20px" }} aut className="form-control" rows={7} placeholder="Message" defaultValue={""} />
            </div>
            <div className="mb-3">
              <button type="submit" className="side_btn">SUBMIT</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
