import React, { useState } from 'react';
import './leftSidebar.scss';
const LeftSideBar = () => {
  const [hover, setHover] = useState(false)
  return (
    <div className='left'>
      <main className='left__main'>
        <ul className='left__social'>
          {/* <li className='left__linkItems'>
              <a href='' className='left__links' target='_blank' rel='noreferrer'>
                <svg className='left__icon'>
                  <use href='icons/symbol-defs.svg#icon-youtube' />
                </svg>
              </a>
            </li>
            <li className='left__linkItems'>
              <a href='#' className='left__links' target='_blank' rel='noreferrer'>
                <svg className='left__icon'>
                  <use href='/icons/symbol-defs.svg#icon-codepen' />
                </svg>
              </a>
            </li> */}
          <li className='left__linkItems'>
            <a href='https://github.com/naveen42266' className='left__links' target='_blank' rel='noreferrer'>
              <svg className='left__icon'>
                <use href='/icons/symbol-defs.svg#icon-github' />
              </svg>
            </a>
          </li>
          <li className='left__linkItems'>
            <a href='https://www.linkedin.com/in/naveen007/' target='_blank' rel='noreferrer' className='left__links'>
              <svg className='left__icon'>
                <use href='/icons/symbol-defs.svg#icon-linkedin' />
              </svg>
            </a>
          </li>
          <li className='left__linkItems'>
            <a href='https://x.com/billanaveen0001' className='left__links' target='_blank' rel='noreferrer'>
              {hover ?
                <svg className="left__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" onMouseLeave={() => { setHover(false) }}>
                  <path fill="none" stroke="#ffd700" stroke-width="2" d="M22.46 5.72c-.81.36-1.68.61-2.6.72.94-.56 1.66-1.44 2-2.5-.88.52-1.86.9-2.9 1.1-.83-.9-2.02-1.46-3.32-1.46-2.52 0-4.56 2.05-4.56 4.56 0 .36.04.72.09 1.07-3.79-.19-7.16-2-9.41-4.75-.39.67-.61 1.45-.61 2.28 0 1.58.81 2.98 2.04 3.79-.75-.02-1.45-.23-2.07-.58v.06c0 2.2 1.56 4.03 3.63 4.44-.38.1-.78.16-1.2.16-.29 0-.58-.03-.86-.08.58 1.8 2.27 3.11 4.27 3.14-1.56 1.24-3.53 1.98-5.68 1.98-.37 0-.73-.02-1.09-.07 2.02 1.29 4.42 2.04 7.02 2.04 8.42 0 13.03-6.98 13.03-13.03 0-.2 0-.39-.01-.59.89-.64 1.66-1.44 2.27-2.35z" />
                </svg> :
                <svg className="left__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" onMouseEnter={() => { setHover(true) }} >
                  <path fill="none" stroke="#a8b2d1" stroke-width="2" d="M22.46 5.72c-.81.36-1.68.61-2.6.72.94-.56 1.66-1.44 2-2.5-.88.52-1.86.9-2.9 1.1-.83-.9-2.02-1.46-3.32-1.46-2.52 0-4.56 2.05-4.56 4.56 0 .36.04.72.09 1.07-3.79-.19-7.16-2-9.41-4.75-.39.67-.61 1.45-.61 2.28 0 1.58.81 2.98 2.04 3.79-.75-.02-1.45-.23-2.07-.58v.06c0 2.2 1.56 4.03 3.63 4.44-.38.1-.78.16-1.2.16-.29 0-.58-.03-.86-.08.58 1.8 2.27 3.11 4.27 3.14-1.56 1.24-3.53 1.98-5.68 1.98-.37 0-.73-.02-1.09-.07 2.02 1.29 4.42 2.04 7.02 2.04 8.42 0 13.03-6.98 13.03-13.03 0-.2 0-.39-.01-.59.89-.64 1.66-1.44 2.27-2.35z" />
                </svg>
              }
            </a>
          </li>
          <li className='left__linkItems'>
          <a href='https://www.instagram.com/its_nav_een0001/' className='left__links' target='_blank' rel='noreferrer'>
            <svg className='left__icon'>
              <use href='/icons/symbol-defs.svg#icon-instagram' />
            </svg>
          </a>
        </li>
        </ul>
        <div className='left__line' />
      </main>
    </div>
  );

}
export default LeftSideBar;
