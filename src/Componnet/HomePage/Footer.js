import React, { useEffect } from 'react'
import icon from '../../image/facebook.png'
import icon1 from '../../image/pinterest.png'
import icon2 from '../../image/tik-tok.png'
import icon3 from '../../image/youtube.png'
import icon4 from '../../image/instagram.png'
import icon5 from '../../image/linkedin.png'
import pay1 from '../../image/pay1.svg'
import pay2 from '../../image/pay2.svg'
import pay3 from '../../image/pay3.svg'
import pay4 from '../../image/paypal.png'
import pay5 from '../../image/pay4.svg'
import pay6 from '../../image/pay5.svg'
import { useAuth } from '../../Contaext/AuthContext'
function Footer() {
    const { footer, data } = useAuth()
    useEffect(() => {
        footer()
        // eslint-disable-next-line
    }, [])
    return (
        <>
            <div className='footer_bottom  d-lg-block  d-md-none d-none'>
                <div className='row'>
                    <div className='col-lg-3 col-md-3 col-d-none'></div>
                    <div className='col-lg-3 col-md-3 col-d-none'>
                        <div className='icon_box'>
                            <i class="fa-solid fa-phone top_icons"></i>
                        </div>
                        <div className='text_content'>
                            <p className=''>Please Make a call</p>
                            <p className=''>{data?.setting.phone}</p>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-3'>
                        <div className='icon_box'>
                            <i class="fa-regular fa-envelope top_icons"></i>
                        </div>
                        <div className='text_content'>
                            <p className=''>E-mail Address</p>
                            <p className=''>{data?.setting.email}</p>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-3 col-d-none'>
                        <div className='icon_box'>
                            <i class="fa-solid fa-location-dot top_icons"></i>
                        </div>
                        <div className='text_content'>
                            <p className=''>Address</p>
                            <p className=''>{data?.setting.address}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer_main'>
                <div className='footer_container'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-lg-3 col-md-12 col-12'>
                                <div className='footer_card extra'>
                                    <h3 className='card_footer1-headding'>Sign up for, Photography Studio Hub</h3>
                                    <label className='labal'>Email</label>
                                    <input className='inp_footer' type={'text'} placeholder='Email' />
                                    <button className='footer_btn'>SUBSCRIBE</button>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-12 col-12'>
                                <div className='footer_card'>
                                    <h1 className='card_footer_heading text-white'>Studio Hub</h1>
                                    <div className='line'></div>
                                    <p className='p-3 foter_pera'>
                                        {data?.setting.footer_about_text}
                                    </p>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-12 col-12'>
                                <div className='footer_card'>
                                    <h1 className='card_footer_heading text-white'>Compny Info</h1>
                                    <div className='line'></div>
                                    <ul>
                                        <li className='flex flex-wrap items-center text-gray-500 '><i class="fa-solid fa-chevron-right" style={{ color: 'white' }}></i>Home</li>
                                        <li className='flex flex-wrap items-center text-gray-500 '><i class="fa-solid fa-chevron-right" style={{ color: 'white' }}></i>About us</li>
                                        <li className='flex flex-wrap items-center text-gray-500 '><i class="fa-solid fa-chevron-right" style={{ color: 'white' }}></i>Our Service</li>
                                        <li className='flex flex-wrap items-center text-gray-500 '><i class="fa-solid fa-chevron-right" style={{ color: 'white' }}></i>Portfolio</li>
                                        <li className='flex flex-wrap items-center text-gray-500 '><i class="fa-solid fa-chevron-right" style={{ color: 'white' }}></i>Pricing</li>
                                        <li className='flex flex-wrap items-center text-gray-500 '><i class="fa-solid fa-chevron-right" style={{ color: 'white' }}></i>Contact</li>
                                        <li className='flex flex-wrap items-center text-gray-500 '><i class="fa-solid fa-chevron-right" style={{ color: 'white' }}></i>Account</li>

                                    </ul>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-12 col-12'>
                                <div className='footer_card'>
                                    <h1 className='card_footer_heading text-white'>Contact us</h1>
                                    <div className='line'></div>
                                    <p className='p-2 foter_pera'>
                                        2307 Beverley Rd Brooklyn, New York 11226 United States.
                                    </p>
                                    <p className='px-2 foter_pera'>
                                        If you have any questions or need help, feel free to contact with our team.
                                    </p>
                                    <h1 className='footer_phone'>(+00)888.666.88</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='footer_bottom' className='w-full'>
                    <div className='m-auto row container-fluid'>
                        <div className='col-lg-4 col-md-12 col-sm-12 '>
                            <div className='socil_box p-2'><a href={`${data?.setting.fb_link}`}><img style={{ height: "40px" }} src={icon} alt='...' /></a></div>
                            <div className='socil_box p-2'><a href={`${data?.setting}`}><img style={{ height: "40px" }} src={icon1} alt='...' /></a></div>
                            <div className='socil_box p-2'><a href={`${data?.setting.tiktok_link}`}><img style={{ height: "40px" }} src={icon2} alt='...' /></a></div>
                            <div className='socil_box p-2'><a href={`${data?.setting.youtube_link}`}><img style={{ height: "40px" }} src={icon3} alt='...' /></a></div>
                            <div className='socil_box p-2'><a href={`${data?.setting.insta_link}`}><img style={{ height: "40px" }} src={icon4} alt='...' /></a></div>
                            <div className='socil_box p-2'><a href={`${data?.setting.linkedin_link}`}><img style={{ height: "40px" }} src={icon5} alt='...' /></a></div>
                        </div>
                        <div className='col-lg-4 col-md-12 col-sm-12'>
                            <p style={{ color: "rgb(206, 206, 206)", fontWeight: "lighter", fontSize: '14px', textAlign: "center", marginTop: "2vh" }}>
                                {data?.setting.footer_bottom_text}
                            </p>
                        </div>
                        <div className='col-lg-4 col-md-12 col-sm-12'>
                            <div className='socil_box p-1'><img style={{ height: "40px" }} src={pay2} alt='...' /></div>
                            <div className='socil_box p-1'><img style={{ height: "40px" }} src={pay3} alt='...' /></div>
                            <div className='socil_box p-1'><img style={{ height: "40px" }} src={pay4} alt='...' /></div>
                            <div className='socil_box p-1'><img style={{ height: "40px" }} src={pay1} alt='...' /></div>
                            <div className='socil_box p-1'><img style={{ height: "40px" }} src={pay5} alt='...' /></div>
                            <div className='socil_box p-1'><img style={{ height: "40px" }} src={pay6} alt='...' /></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer
