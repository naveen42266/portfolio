import React, { useState, useEffect } from 'react';
import './projects.scss';
import LazyLoad from 'react-lazyload';
import AnimatedLettersFast from '@components/AnimatedLettersFast/AnimatedLettersFast';
import Project1 from "assets/images/todo.png"
import Project2 from "assets/images/domoto.png"
import Project3 from "assets/images/miro.png"

const Project = () => {
  const [letterClass, setLetterClass] = useState('text-animate-fast');
  const nameArray = [...'02. My Projects'];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-fast-hover');
    }, 4000);
  });
  return (
    <div className='project' id='projects'>
      <span className='sectiontag'>&lt;section&gt;</span>
      <h1 className='about__headingPrimary'>
        <AnimatedLettersFast letterClass={letterClass} strArray={nameArray} idx={15} />
      </h1>

      {/* ----------------------------------------- for desktops -------------------------- */}

      <LazyLoad once height={400}>
        <section className='project__section'>
          <div className='project__left'>
            <img className='project__img' src={Project1} alt='color palette' />
          </div>
          <div className='project__right'>
            <h3 className='project__headingTertiary'>Featured Project</h3>
            <a href='https://github.com/naveen42266/todo_frontend' target='_blank' rel='noreferrer' className='project__headingSecondary'><h2>Todo</h2></a>
            <div className='project__descriptionContainer'>
              <p className='project__description'>
                Effortlessly manage tasks on our Todo Website. Add, complete, and delete tasks seamlessly between your todo and done lists. Enjoy the convenience of light and dark mode for a personalized user experience.
              </p>
              <div className='project__tags'> React.js &nbsp; Next.js &nbsp; Node.js &nbsp; MongoDB &nbsp; Express.js &nbsp; SCSS/SASS</div>
              <div className='project__icons'>
                <a href='https://github.com/naveen42266/todo_frontend' target='_blank' rel='noreferrer' style={{ marginRight: '1.6rem' }}>
                  <svg className='project__icon'>
                    <use href='icons/symbol-defs.svg#icon-github' />
                  </svg>
                </a>
                {/* <a href='#' target='_blank' rel='noreferrer'>
                  <svg className='project__icon'>
                    <use href='icons/symbol-defs.svg#icon-external-link' />
                  </svg>
                </a> */}
              </div>
            </div>
          </div>
        </section>
      </LazyLoad>
      <LazyLoad once height={400}>
        <section className='project__section'>
          <div className='project__left1'>
            <h3 className='project__headingTertiary'>Featured Project</h3>
            <a href='https://foodorderingwebsite.pages.dev/' target='_blank' rel='noreferrer' className='project__headingSecondary'><h2>Domoto Food Ordering </h2></a>
            <div className='project__descriptionContainer project__descriptionContainer1'>
              <p className='project__description'>
                Discover Domoto: Your go-to online marketplace for fresh produce. Enjoy doorstep delivery for vegetables, fruits, meats, and more. Explore blogs and share reviews. Your ultimate culinary solution!
                {' '}

              </p>
              <div className='project__tags'>
                Html &nbsp;
                Css &nbsp; Javascript &nbsp;
                {' '}

              </div>
              <div className='project__icons project__icons1'>
                <a href='https://github.com/naveen42266/foodOrderingWebsite' target='_blank' rel='noreferrer' style={{ marginRight: '1.6rem' }}>
                  <svg className='project__icon'>
                    <use href='icons/symbol-defs.svg#icon-github' />
                  </svg>
                </a>
                {/* <a href='https://arcane-retreat-14101.herokuapp.com/' target='_blank' rel='noreferrer'>
                  <svg className='project__icon'>
                    <use href='icons/symbol-defs.svg#icon-external-link' />
                  </svg>
                </a> */}
              </div>
            </div>
          </div>
          <div className='project__right'>
            <img className='project__img' src={Project2} alt='yelpcap campgrounds' />
          </div>
        </section>
      </LazyLoad>
      <LazyLoad once height={400}>
        <section className='project__section project__section3'>
          <div className='project__left'>
            <img className='project__img' src={Project3} alt='online grocery store' />
          </div>
          <div className='project__right'>
            <h3 className='project__headingTertiary'>Featured Project</h3>
            <a href='https://navmiro.pages.dev/' target='_blank' rel='noreferrer' className='project__headingSecondary'><h2>Miro</h2></a>
            <div className='project__descriptionContainer'>
              <p className='project__description'>
                Miro is a simple blog showcasing time travel content, designed to enhance CSS skills with creative animations and engaging visual elements
              </p>
              <div className='project__tags'>  Html &nbsp; Css &nbsp;</div>
              <div className='project__icons'>
                <a href='https://github.com/naveen42266/NavMiro' target='_blank' rel='noreferrer' style={{ marginRight: '1.6rem' }}>
                  <svg className='project__icon'>
                    <use href='icons/symbol-defs.svg#icon-github' />
                  </svg>
                </a>
                {/* <a href='https://youtu.be/5oOiJrRQenw' target='_blank' rel='noreferrer'>
                  <svg className='project__icon'>
                    <use href='icons/symbol-defs.svg#icon-external-link' />
                  </svg>
                </a> */}
              </div>
            </div>
          </div>
        </section>
      </LazyLoad>

      {/* --------------------------------------------------- for Mobiles ----------------------------------------------------------------- */}

      <ul className='projectResp__list'>
        <li className='projectResp__items projectResp__items1'>
          <div className='projectResp__card'>
            <div className='projectResp__cardTop'>
              <svg className='projectResp__cardFolder'>
                <use href='icons/symbol-defs.svg#icon-folder' />
              </svg>
              <div className='projectResp__cardLink'>
                <a href='https://github.com/naveen42266/todo_frontend' target='_blank' rel='noreferrer' style={{ marginRight: '1.6rem' }}>
                  <svg className='projectResp__icon'>
                    <use href='icons/symbol-defs.svg#icon-github' />
                  </svg>
                </a>
                {/* <a href='#' target='_blank' rel='noreferrer'>
                  <svg className='projectResp__icon'>
                    <use href='icons/symbol-defs.svg#icon-external-link' />
                  </svg>
                </a> */}
              </div>
            </div>
            <div className='projectResp__cardBody'>
              <div className='projectResp__cardBodyHeading'>Todo</div>
              <p className='projectResp__cardBodyDescription'>
                Effortlessly manage tasks on our Todo Website. Add, complete, and delete tasks seamlessly between your todo and done lists. Enjoy the convenience of light and dark mode for a personalized user experience.
              </p>
              {' '}

            </div>
            <div className='projectResp__cardFooter'>
              <div className='projectResp__tags'> Next.js &nbsp; React.js &nbsp; Node.js &nbsp; MongoDB &nbsp; Express.js &nbsp; SCSS/SASS</div>
            </div>
          </div>
        </li>
        <li className='projectResp__items  projectResp__items2'>
          <div className='projectResp__card'>
            <div className='projectResp__cardTop'>
              <svg className='projectResp__cardFolder'>
                <use href='icons/symbol-defs.svg#icon-folder' />
              </svg>
              <div className='projectResp__cardLink'>
                <a href='https://github.com/naveen42266/foodOrderingWebsite' target='_blank' rel='noreferrer' style={{ marginRight: '1.6rem' }}>
                  <svg className='projectResp__icon'>
                    <use href='icons/symbol-defs.svg#icon-github' />
                  </svg>
                </a>
                <a href='https://foodorderingwebsite.pages.dev/' target='_blank' rel='noreferrer'>
                  <svg className='projectResp__icon'>
                    <use href='icons/symbol-defs.svg#icon-external-link' />
                  </svg>
                </a>
              </div>
            </div>
            <div className='projectResp__cardBody'>
              <div className='projectResp__cardBodyHeading'>Domoto Food Ordering </div>
              <p className='projectResp__cardBodyDescription'>
                Discover Domoto: Your go-to online marketplace for fresh produce. Enjoy doorstep delivery for vegetables, fruits, meats, and more. Explore blogs and share reviews. Your ultimate culinary solution!

              </p>
            </div>
            <div className='projectResp__cardFooter'>
              <div className='projectResp__tags'>
                {' '}
                Html &nbsp;
                Css &nbsp; Javascript &nbsp;
              </div>
            </div>
          </div>
        </li>
        <li className='projectResp__items projectResp__items3'>
          <div className='projectResp__card'>
            <div className='projectResp__cardTop'>
              <svg className='projectResp__cardFolder'>
                <use href='icons/symbol-defs.svg#icon-folder' />
              </svg>
              <div className='projectResp__cardLink'>
                <a href='https://github.com/naveen42266/NavMiro' target='_blank' rel='noreferrer' style={{ marginRight: '1.6rem' }}>
                  <svg className='projectResp__icon'>
                    <use href='icons/symbol-defs.svg#icon-github' />
                  </svg>
                </a>
                <a href='https://navmiro.pages.dev/' target='_blank' rel='noreferrer'>
                  <svg className='projectResp__icon'>
                    <use href='icons/symbol-defs.svg#icon-external-link' />
                  </svg>
                </a>
                {/* <a href='#' target='_blank' rel='noreferrer'>
                  <svg className='projectResp__icon'>
                    <use href='icons/symbol-defs.svg#icon-codepen' />
                  </svg>
                </a> */}
              </div>
            </div>
            <div className='projectResp__cardBody'>
              <div className='projectResp__cardBodyHeading'>Miro</div>
              <p className='projectResp__cardBodyDescription'>
                Miro is a simple blog showcasing time travel content, designed to enhance CSS skills with creative animations and engaging visual elements
              </p>
            </div>
            <div className='projectResp__cardFooter'>
              <div className='projectResp__tags'> Html &nbsp; Css &nbsp;</div>
            </div>
          </div>
        </li>
      </ul>

      <span className='sectiontag'>&lt;/section&gt;</span>

    </div>
  );
};

export default Project;
