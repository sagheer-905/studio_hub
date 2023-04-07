import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  const [side, setside] = useState(false)
  const [col, setcol] = useState(false)
  useEffect(() => {
    if (window.location.pathname === "/login" || window.location.pathname === "/signup" || window.location.pathname === "/forget") {
      setcol(true)
    }
    else {
      setcol(false)
    }
    // eslint-disable-next-line
  }, [])
  return (
    <nav className="navbar navbar-expand-lg" style={{ background: `${col ? "#202020" : ""}` }}>
      <div className={`side_bar ${side ? "active" : ""}`}>
        <div style={{ padding: "1rem" }} onClick={() => setside(false)}><i class="fa-solid fa-x"></i></div>
        <div className="row">
          <div className="col-md-12 col-md-pull-7">
            <div className="booking-form">
              <form>
                <div className="form-group">
                  <span className="form-label">Name</span>
                  <input className="form-control" type="text" placeholder="Enter your name" />
                </div>
                <div className="row">
                  <div className="col-sm-12 col-6">
                    <div className="form-group">
                      <span className="form-label">Phone</span>
                      <input className="form-control" type="number" placeholder='Enter Your Phone' required />
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="form-group">
                      <span className="form-label">Email</span>
                      <input className="form-control" type="Email" placeholder='Enter Your Email' required />
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="form-group">
                      <span className="form-label">Address</span>
                      <input className="form-control" type="text" placeholder='Enter Your Address' required />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-4">
                    <div className="form-group">
                      <span className="form-label">Working Days</span>
                      <select className="form-control">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </select>
                      <span className="select-arrow" />
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="form-group">
                      <span className="form-label">Working Hour</span>
                      <select className="form-control">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </select>
                      <span className="select-arrow" />
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="form-group">
                      <span className="form-label">Event Time</span>
                      <select className="form-control">
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                      </select>
                      <span className="select-arrow" />
                    </div>
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="form-group">
                    <span className="form-label">Message</span>
                    <textarea className="form-control" style={{ height: "20vh" }} placeholder='Enter Your Message' required />
                  </div>
                </div>
              </form>
              <button className='side_btn'>Submit</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <a className="navbar-brand" href="/"><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAqCAYAAABRCaLsAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ2MCwgMjAyMC8wNS8xMi0xNjowNDoxNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjJGMjQ4QTM3QUQ0RTExRUQ5NDUzRUNBMTQ3NUM1MzJFIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjJGMjQ4QTM4QUQ0RTExRUQ5NDUzRUNBMTQ3NUM1MzJFIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MkYyNDhBMzVBRDRFMTFFRDk0NTNFQ0ExNDc1QzUzMkUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MkYyNDhBMzZBRDRFMTFFRDk0NTNFQ0ExNDc1QzUzMkUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7X3VVBAAAGsklEQVR42uxbX0xb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' alt='...' /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to={'/'}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={'/about'}>About us</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link" to={'/service'}>Our Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={'/portfolio'}>Portfolio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={'/pricing'}>Pricing</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={'/contact'}>Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={'/login'}>Account</Link>
            </li>
            <li className="nav-item">
              <button onClick={() => setside(true)} className=" rounded-pill px-2 py-lg-1 px-xl-3 nav_btn">GET A QUOTE</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Navbar
