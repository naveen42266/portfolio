import React, { useEffect, useState } from 'react';
import AnimatedLettersFast from '../AnimatedLettersFast/AnimatedLettersFast';
import './about.scss';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate-fast');
  const nameArray = [...'01. About Me'];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-fast-hover');
    }, 4000);
  });
  return (
    <div className='about' id='about'>
      <div className='about__left'>
        <span className='sectiontag'>&lt;section&gt;</span>
        <h1 className='about__headingPrimary'>
          <AnimatedLettersFast letterClass={letterClass} strArray={nameArray} idx={15} />
        </h1>
        <div className='about__description '>
        {/* Hello! My name is
          {' '}
          <span className='about__link'>Naveen&nbsp;V</span>
          {' '}
          and I’m a Full-Stack Developer located in Coimbatore, India and i have a serious passionate about frontend and backend technologies, dynamic user experiences.
     
          {' '}
          In my free time, I enjoy playing cricket, listening to music, engaging in physical exercise, and tending to my garden.          <br />
          <br />
          Here are the few technologies that I&apos;have been working recently:
          {' '} */}
          Embark on a digital journey through my portfolio, where I, 
          {' '}
          <span className='about__link'>Naveen&nbsp;V</span>
          {' '}
          , a passionate Front End Developer based in India, showcase my dedication to creating captivating web applications. I bring a comprehensive approach, emphasizing both front-end aesthetics and back-end functionality, resulting in exceptional digital experiences. Beyond coding, I find joy in playing cricket, listening to music, engaging in physical exercise, and tending to my garden, striking a harmonious balance between my technical expertise and a vibrant life outside of development.
          <br />
          <br />
          Here are the few technologies that I&apos;have been working recently:
          {' '}
           <br />
          <ul className='about__skillsList'>
            <li className='about__skillsItems'>React.js</li>
            <li className='about__skillsItems'>Next.js</li>
            <li className='about__skillsItems'>Javascript</li>
            <li className='about__skillsItems'>React Native</li>
            <li className='about__skillsItems'>Typescript</li>
            <li className='about__skillsItems'>Core Java</li>
            <li className='about__skillsItems'>Redux & Redux Toolkit</li>
            <li className='about__skillsItems'>Html & Css</li>
            <li className='about__skillsItems'>TailwindCss / Scss</li>
            <li className='about__skillsItems'>Nodejs & Expressjs (Basics)</li>
            <li className='about__skillsItems'>Java & SpringBoot</li>
            <li className='about__skillsItems'>MongoDB</li>
            <li className='about__skillsItems'>SQL</li>
            {/* <li className='about__skillsItems'>DSA</li>
            <li className='about__skillsItems'>AngularJs</li> */}
          </ul>
        </div>
        <span className='sectiontag'>&lt;/section&gt;</span>
      </div>
      <div className='about__right'>
        <div className='stage-cube-cont'>
          <div className='cubespinner'>
            <div className='face1'>
              <svg className='about__icon'>
                <use href='icons/symbol-defs.svg#icon-html5' />
              </svg>
            </div>
            <div className='face2'>
              <svg className='about__icon'>
                <use href='icons/symbol-defs.svg#icon-css3' />
              </svg>
            </div>
            <div className='face3'>
              <svg className='about__icon'>
                <use href='icons/symbol-defs.svg#icon-javascript' />
              </svg>
            </div>
            <div className='face4'>
              <svg className='about__icon'>
                <use href='icons/symbol-defs.svg#icon-mongodb' />
              </svg>
            </div>
            <div className='face5'>
              <svg className='about__icon'>
                <use href='icons/symbol-defs.svg#icon-node-dot-js' />
              </svg>
            </div>
            <div className='face6'>
              <svg className='about__icon'>
                <use href='icons/symbol-defs.svg#icon-react' />
              </svg>
            </div>
          </div>
        </div>
      {/*Thank's yash falke */}
      </div>
    </div>
  );
};

export default About;
