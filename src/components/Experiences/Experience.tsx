import AnimatedLettersFast from '@components/AnimatedLettersFast/AnimatedLettersFast';
import React, { useState, useEffect } from 'react';
import './experience.scss';
import "react-vertical-timeline-component/style.min.css";

const Experiences = () => {
  const [letterClass, setLetterClass] = useState('text-animate-fast');
  const nameArray = [...'Experiences '];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-fast-hover');
    }, 4000);
  });

  return (
    <div className='other' id='work'>
      <span className='sectiontag'>&lt;section&gt;</span>
      <div className='other__container'>
        <h1 className='other__headingPrimary'>
          <AnimatedLettersFast letterClass={letterClass} strArray={nameArray} idx={15} />
        </h1>
      </div>
      <ul className='other__list'>
        <li className='other__items'>
          <div className='other__card'>
            <div className='other__cardTop'>
              <svg className='other__cardFolder'>
                <use href='icons/symbol-defs.svg#icon-folder' />
              </svg>
              <div>Jan 2024 - May 2024 </div>
              {/* <div className='other__cardLink'>
                <a href='#' target='_blank' rel='noreferrer' style={{ marginRight: '1.6rem' }}>
                  <svg className='other__icon'>
                    <use href='/icons/symbol-defs.svg#icon-github' />
                  </svg>
                </a>
                <a href='#' target='_blank' rel='noreferrer'>
                  <svg className='other__icon'>
                    <use href='icons/symbol-defs.svg#icon-external-link' />
                  </svg>
                </a>
              </div> */}
            </div>
            <div className='other__cardBody'>
              <div className='other__cardBodyHeading'>Front End Developer</div>
              <div className=''>Global Software Solutions</div>
              <p className='other__cardBodyDescription'>
                I have implemented an admin panel and online e-commerce website, I focused on HR modules and payroll management, handling employee details, salaries, entry and exit times, appraisals, and more. For an e-commerce app built with React Native, I developed features such as category lists, product details, add-to-cart functionality, and account management. Additionally, I worked on an education academy website with student admissions and course selection features. I also managed data on acquiring raw materials and selling manufactured parts to various stakeholders in manufacturing projects.              </p>
            </div>
            <div className='other__cardFooter'>
              <div className='other__tags'> Material UI &nbsp; Redux & Redux Toolkit &nbsp; Nextjs &nbsp; Reactjs &nbsp; Javascript &nbsp; React-Native &nbsp; Typescript &nbsp; Tailwindcss &nbsp; Scss &nbsp; Html & Css &nbsp;</div>
            </div>
          </div>
        </li>
        <li className='other__items'>
          <div className='other__card'>
            <div className='other__cardTop'>
              <svg className='other__cardFolder'>
                <use href='icons/symbol-defs.svg#icon-folder' />
              </svg>
              <div>Feb 2023 - Dec 2023 </div>
              {/* <div className='other__cardLink'>
                <a href='#' target='_blank' rel='noreferrer' style={{ marginRight: '1.6rem' }}>
                  <svg className='other__icon'>
                    <use href='/icons/symbol-defs.svg#icon-github' />
                  </svg>
                </a>
                <a href='#' target='_blank' rel='noreferrer'>
                  <svg className='other__icon'>
                    <use href='icons/symbol-defs.svg#icon-external-link' />
                  </svg>
                </a>
              </div> */}
            </div>
            <div className='other__cardBody'>
              <div className='other__cardBodyHeading'>Full Stack Developer</div>
              <div className=''>Sporfy India Private Limited</div>
              <p className='other__cardBodyDescription'>
                Utilized React, Next.js, and Tailwind CSS for a responsive, user-friendly interface, ensuring a cohesive experience and enhancing overall UI/UX.
                Implemented Redux for streamlined state management, contributing significantly to project success. Maintained high code quality through reviews and best practices.
                Managed user accounts with features for profile details, images, gender, contacts, and addresses. Developed a meet system with event management, registration, bibs, and a rich text FAQ editor.
                {' '}
              </p>
            </div>
            <div className='other__cardFooter'>
              <div className='other__tags'> Material UI &nbsp; Redux &nbsp; Nextjs &nbsp; Reactjs &nbsp; Nodejs &nbsp; Expressjs &nbsp; Javascript &nbsp; Tailwindcss &nbsp; Mongodb &nbsp; Java</div>
            </div>
          </div>
        </li>
        {/* <li className='other__items'>
          <div className='other__card'>
            <div className='other__cardTop'>
              <svg className='other__cardFolder'>
                <use href='icons/symbol-defs.svg#icon-folder' />
              </svg>
              <div>Feb 2023 - May 2023 </div>
            </div>
            <div className='other__cardBody'>
              <div className='other__cardBodyHeading'>Full Stack Developer Intern</div>
              <div className=''>Sporfy India Private Limited</div>
              <p className='other__cardBodyDescription'>
                Played a crucial role in addressing complex scenarios, troubleshooting critical bugs, and contributing significantly to challenging React projects during the internship. Gained valuable web development experience, enhancing problem-solving skills and fostering effective collaboration within project teams. Developed proficiency in time management while actively contributing to various projects, showcasing a commitment to both technical excellence and collaborative work practices.
              </p>
            </div>
            <div className='other__cardFooter'>
              <div className='other__tags'>Html &nbsp; Css &nbsp; Material UI &nbsp; Nextjs &nbsp; Reactjs &nbsp; Javascript &nbsp; Java</div>
            </div>
          </div>
        </li> */}
      </ul>
      <span className='sectiontag'>&lt;/section&gt;</span>
    </div>
  );

};

export default Experiences;
