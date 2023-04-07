import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../Contaext/AuthContext'
import Navbar from '../HomePage/Navbar'
function Signup() {
  const { register } = useAuth()
  const [data, setData] = useState({
    email: "",
    password: "",
    name: "",
    gender: "",
    phone: "",
    dob: "",
    phone_code: ""
  })
  return (
    <div>
      <Navbar />
      <div className="register-form border-top border-bottom py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-11 col-lg-10 col-xl-9 py-sm-5 ps-sm-3 pe-sm-5 rounded-4 py-5 px-3">
              <h4 className="fw-semibold text-center mb-5">Register</h4>
              <form className="px-xl-4" method="POST">
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <label className="form-label">Full Name</label>
                    <input
                      type="text"
                      required
                      name="name"
                      className="form-control rounded-pill"
                      placeholder="Full Name"
                      value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })}
                    />
                    {/* <span></span> */}
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Username Name</label>

                    <input
                      type="text"
                      required
                      name="username"
                      className="form-control rounded-pill"
                      placeholder="Username"
                    />
                    <span></span>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-md-2">
                  </div>
                  <div className="col-md-12">
                    <label className="form-label">E-mail</label>
                    <input
                      type="email"
                      required
                      name="email"
                      className="form-control rounded-pill"
                      placeholder="ex: myname@example.com"
                      value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })}
                    />
                    <span></span>
                  </div>
                </div>
                <div className="row align-items-center mt-4 mt-md-0">
                  <div className="col-md-6">
                    <label className="form-label">Phone Code</label>
                    <input
                      type="text"
                      required
                      name="phone"
                      className="form-control rounded-pill"
                      placeholder="Phone Number"
                      value={data.phone_code} onChange={(e) => setData({ ...data, phone_code: e.target.value })}
                    />
                    <span></span>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Phone Number</label>
                    <input
                      type="text"
                      required
                      name="phone"
                      className="form-control rounded-pill"
                      placeholder="Phone Number"
                      value={data.phone} onChange={(e) => setData({ ...data, phone: e.target.value })}
                    />
                    <span></span>
                  </div>
                </div>
                <div className="row align-items-center mt-4 mt-md-0">
                </div>
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <label className="form-label">Password</label>
                    <input
                      type="password"
                      required
                      name="password"
                      className="form-control rounded-pill"
                      placeholder="Password"
                      value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })}
                    />
                    <span></span>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Gender</label>
                    <select
                      value={data.gender} onChange={(e) => setData({ ...data, gender: e.target.value })}
                      className="form-control rounded-pill"
                    >
                      <option>Gender</option>
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                    <span>
                    </span>
                  </div>
                </div>
                <div className="row align-items-center">
                </div>
                <div className="row align-items-center mt-4 mt-md-0">
                  <div className="col-md-6">
                    <label className="form-label">Date Of Birth</label>
                    <input
                      type="date"
                      required
                      value={data.dob} onChange={(e) => setData({ ...data, dob: e.target.value })}
                      name="date"
                      className="form-control rounded-pill"
                      placeholder="Phone Number"
                    />
                    <span></span>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-md-2" />
                </div>
              </form>
              <div className="row align-items-center">
                <div className="col-12 text-center">
                  <button
                    onClick={() => register(data)}
                  >
                    Register
                  </button>
                  <button>
                    <Link to={'/login'}>Login</Link>
                  </button>
                </div>
              </div>
              <div className="continue-text text-center">
                <p>Or continue with</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Signup
