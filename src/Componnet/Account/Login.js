import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../Contaext/AuthContext'
import Navbar from '../HomePage/Navbar'
function Login() {
    const { login, loginresp } = useAuth()
    const navigate = useNavigate()
    useEffect(() => {
        console.log(loginresp);
        if (loginresp?.success) {
            // eslint-disable-next-line
            navigate("/")
        }
        // eslint-disable-next-line
    }, [loginresp])
    const [data, setData] = useState({
        email: "",
        password: "",
    })
    return (
        <div>
            <Navbar />
            <div className="login-form border-top border-bottom">
                <div className="container py-5 ">
                    <div className="col-11 col-md-7 col-lg-6 inner-wrap p-5 m-auto">
                        <h4 className="fw-bold mb-4">Sign In</h4>
                        <div>
                            <div className="mb-4">
                                <input type="email"
                                    value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })}
                                    required className="form-control rounded-pill border-0" placeholder="Email" name="email" />
                            </div>
                            <div className="mb-3">
                                <input type="password"
                                    value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })}
                                    required className="form-control rounded-pill border-0" placeholder="Password" name="password" />
                            </div>
                            <div className="mb-4 d-flex justify-content-between">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                                </div>
                                <Link to="/forget">Forgot Password?</Link>
                            </div>
                            <div className="mb-4">
                                <button onClick={() => login(data)}  >Login</button>
                                <button >
                                    <Link to={'/signup'}>Register</Link>
                                </button>
                            </div>
                        </div>
                        <p className="pt-3 pt-md-5 bottom-text">By signin up, you agree to our <a href="/">Terms and
                            Conditions &amp; Privacy Policy</a></p>
                    </div>
                    {/* </div> */}
                </div>
            </div>
        </div>
    )
}
export default Login
