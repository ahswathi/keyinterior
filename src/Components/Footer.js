import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='p-[80px]  bg-[#060606] text-white'>
        <div className='flex justify-between pb-[20px]'>
            <div className='pb-[80px] text-[#767676] text-[20px]'>
            <p>438 Marine Parade Elwood, <br/>
            Victoria P.O Box 3184 </p>  <br/>
            <p>Phone: +714 3948 0000  <br/>
            Email: hello@architype.com</p>
            <div className='flex pt-6'>
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_56_136)">
                <path d="M1.81122 2.37481C-0.153361 4.41543 0.248722 6.58314 0.248722 13.1686C0.248722 18.6373 -0.705444 24.1196 4.28831 25.4102C5.84768 25.8113 19.6643 25.8113 21.2216 25.4081C23.3008 24.8717 24.9925 23.1852 25.2237 20.2446C25.256 19.8342 25.256 6.51022 25.2227 6.09147C24.9768 2.95918 23.0487 1.15397 20.5081 0.788348C19.9258 0.703973 19.8091 0.678973 16.8216 0.673765C6.22476 0.678973 3.90185 0.207098 1.81122 2.37481Z" fill="url(#paint0_linear_56_136)"/>
                <path d="M12.7461 3.94348C8.9638 3.94348 5.37214 3.60702 4.00026 7.12785C3.4336 8.58202 3.51589 10.4706 3.51589 13.1747C3.51589 15.5476 3.43985 17.7779 4.00026 19.2206C5.36901 22.7435 8.98985 22.406 12.744 22.406C16.3659 22.406 20.1003 22.7831 21.4888 19.2206C22.0565 17.7518 21.9732 15.8914 21.9732 13.1747C21.9732 9.56848 22.1721 7.24035 20.4232 5.49244C18.6523 3.7216 16.2576 3.94348 12.7419 3.94348H12.7461ZM11.919 5.60702C19.8086 5.59452 20.8128 4.71744 20.2586 16.9018C20.0617 21.2112 16.7805 20.7383 12.7471 20.7383C5.39297 20.7383 5.18151 20.5279 5.18151 13.1706C5.18151 5.72785 5.76485 5.61119 11.919 5.60494V5.60702ZM17.6732 7.13931C17.0617 7.13931 16.5659 7.63515 16.5659 8.2466C16.5659 8.85806 17.0617 9.3539 17.6732 9.3539C18.2846 9.3539 18.7805 8.85806 18.7805 8.2466C18.7805 7.63515 18.2846 7.13931 17.6732 7.13931ZM12.7461 8.4341C10.1284 8.4341 8.00651 10.557 8.00651 13.1747C8.00651 15.7924 10.1284 17.9143 12.7461 17.9143C15.3638 17.9143 17.4846 15.7924 17.4846 13.1747C17.4846 10.557 15.3638 8.4341 12.7461 8.4341ZM12.7461 10.0976C16.8138 10.0976 16.819 16.2518 12.7461 16.2518C8.67943 16.2518 8.67318 10.0976 12.7461 10.0976Z" fill="white"/>
                </g>
                <defs>
                <linearGradient id="paint0_linear_56_136" x1="1.85916" y1="24.077" x2="25.094" y2="3.96749" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FFDD55"/>
                <stop offset="0.5" stop-color="#FF543E"/>
                <stop offset="1" stop-color="#C837AB"/>
                </linearGradient>
                <clipPath id="clip0_56_136">
                <rect width="25" height="25" fill="white" transform="translate(0.25 0.673828)"/>
                </clipPath>
                </defs>
                </svg> &nbsp;&nbsp;
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_56_139)">
    <path d="M12.75 25.6738C19.6536 25.6738 25.25 20.0774 25.25 13.1738C25.25 6.27027 19.6536 0.673828 12.75 0.673828C5.84644 0.673828 0.25 6.27027 0.25 13.1738C0.25 20.0774 5.84644 25.6738 12.75 25.6738Z" fill="#3B5998"/>
    <path d="M15.8928 13.6634H13.6624V21.8348H10.283V13.6634H8.67578V10.7917H10.283V8.93332C10.283 7.60439 10.9143 5.52344 13.6924 5.52344L16.1957 5.53391V8.32144H14.3794C14.0815 8.32144 13.6626 8.47029 13.6626 9.10422V10.7943H16.1881L15.8928 13.6634Z" fill="white"/>
    </g>
    <defs>
    <clipPath id="clip0_56_139">
    <rect width="25" height="25" fill="white" transform="translate(0.25 0.673828)"/>
    </clipPath>
    </defs>
                    </svg> &nbsp;&nbsp;
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_56_143)">
                    <path d="M12.75 25.6729C19.6536 25.6729 25.25 20.0764 25.25 13.1729C25.25 6.26929 19.6536 0.672852 12.75 0.672852C5.84644 0.672852 0.25 6.26929 0.25 13.1729C0.25 20.0764 5.84644 25.6729 12.75 25.6729Z" fill="#007AB9"/>
                    <path d="M20.2185 14.1794V19.3329H17.2306V14.5248C17.2306 13.3175 16.7992 12.493 15.7174 12.493C14.8919 12.493 14.4014 13.0481 14.1848 13.5856C14.1062 13.7776 14.0859 14.0443 14.0859 14.3137V19.3326H11.0978C11.0978 19.3326 11.1379 11.1893 11.0978 10.3464H14.0861V11.6198C14.0801 11.6298 14.0716 11.6396 14.0663 11.6492H14.0861V11.6198C14.4832 11.0088 15.1913 10.1353 16.7789 10.1353C18.7447 10.1353 20.2185 11.4197 20.2185 14.1794ZM7.97204 6.01465C6.94995 6.01465 6.28125 6.68557 6.28125 7.56707C6.28125 8.42984 6.93056 9.12015 7.93282 9.12015H7.95221C8.99436 9.12015 9.64233 8.42984 9.64233 7.56707C9.6225 6.68557 8.99436 6.01465 7.97204 6.01465ZM6.45884 19.3329H9.4458V10.3464H6.45884V19.3329Z" fill="#F1F2F2"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_56_143">
                    <rect width="25" height="25" fill="white" transform="translate(0.25 0.673828)"/>
                    </clipPath>
                    </defs>
                    </svg> &nbsp;&nbsp;
            </div>

            </div>
            <div className=''>
                    <ul className='nav-menu2'>
                        <span className='ps-[30px] text-[22px]'>Useful Links</span>
                        <li>
                            <Link to={'/about'}>About Us</Link>
                        </li>
                        <li>
                            <Link to={'/construction'}>Construction</Link>
                        </li>
                        <li>
                            <Link to={'/interior'}>Interior</Link>
                        </li>
                        <li>
                            <Link to={'/contact'}>Contact</Link>
                        </li>
                    </ul>
            </div>
            <div className='flex-col'>
                <p className='text-[32px] pb-[20px]'>Want to talk about a new<br/> project?</p>
                <input type="text" placeholder='Enter your email' class="footer-input outline-none focus:outline-none py-2"/> <br/>
                <button className='bg-white text-black text-[14px] px-8 p-2 my-[20px]'>Subscribe</button>
            </div>
        </div>
        <div className="border-t border-gray-300  px-[80px]"></div>
        <div className='text-center text-[20px] pt-[20px]'>
            <p className='text-[#767676]'>Copyright © Architype | Designed by &nbsp; 
            <span className='text-[#FFFFFF] '>Thirdeyeinnovations</span> </p>
        </div>
    </div>
  )
}

export default Footer