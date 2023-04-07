import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../Contaext/AuthContext'
import Navbar from '../HomePage/Navbar'
function Forget() {
  const { forget } = useAuth()
  const [data, setData] = useState({
    email: "",
  })
  return (
    <div>
      <Navbar />
      <div className="login-form border-top border-bottom">
        <div className="container py-5 ">
          <div className="col-11 col-md-7 col-lg-6 inner-wrap p-5 m-auto">
            <h4 className="fw-bold mb-4">Forget Password</h4>
            <p>Enter Your Email Address</p>
            <div>
              <div className="mb-4">
                <input type="email"
                  value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })}
                  required className="form-control rounded-pill border-0" placeholder="Email" name="email" />
              </div>
              <div className="mb-4 d-flex justify-content-between">
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                </div>
                <Link to="/forget">Forgot Password?</Link>
              </div>
              <div className="mb-4">
                <button onClick={() => forget(data)}>Send</button>
                <button>
                  <Link to={'/login'}>Login</Link> </button>
              </div>
            </div>
            <p className="pt-3 pt-md-5 bottom-text">By signin up, you agree to our <a href="/">Terms and
              Conditions &amp; Privacy Policy</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Forget
