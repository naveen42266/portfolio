import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AnimatedLetters from '@components/AnimatedLetters/AnimatedLetters';
import './introduction.scss';
import { resume } from 'App';

const Introduction = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = [...'Naveen,'];
  const jobArray = [...'oftware enginner'];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
  });

  return (
    <div className='intro '>
      <div className='intro__left'>
        <span className='sectiontag'>&lt;section&gt;</span>
        <h1 className='intro__headingPrimary'>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i</span>
          <span className={`${letterClass} _13`}>,</span>
          &nbsp;
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>&apos;</span>
          <span className={`${letterClass} _15`}>m</span>
          &nbsp;
          <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
          <br />
          <img src='https://res.cloudinary.com/dhbiouaym/image/upload/v1663667972/Portfolio/logo-s_fna9e6.png' className='intro__logos' alt='' />
          <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={19} />
        </h1>
        <h2 className='intro__headingSecondary'>Full Stack Developer / Software Engineer</h2>
        <div className='intro__flex'>
        <Link to='/contact' className='intro__button'>
          Contact Me
        </Link>
        <a href={resume} target='_blank' rel='noreferrer' className='intro__resumeButton'>Resume</a>
        </div>
        <span className='sectiontag'>&lt;/section&gt;</span>
      </div>
    </div>
  );
};

export default Introduction;
