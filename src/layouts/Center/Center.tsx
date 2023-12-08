import React from 'react';
import Introduction from 'components/Introduction/Introduction';
import './center.scss';
import About from '@components/About/About';
import LazyLoad from 'react-lazyload';
import Project from '@components/Projects/Projects';
import Touch from '@components/Touch/Touch';
import Experiences from '@components/Experiences/Experience';

const Center = () => (
  <div>
    <span className='tag'>&lt;body&gt;</span>
    <Introduction />
    <LazyLoad once height={566}>
      <About />
    </LazyLoad>
    <LazyLoad once height={566}>
      <Project />
    </LazyLoad>
    <LazyLoad once height={566}>
      <Experiences/>
    </LazyLoad>
    <LazyLoad once height={566}>
      <Touch />
    </LazyLoad>

    <span className='tag'>&lt;/body&gt;</span>
  </div>
);

export default Center;
