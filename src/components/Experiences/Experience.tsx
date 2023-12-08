import AnimatedLettersFast from '@components/AnimatedLettersFast/AnimatedLettersFast';
import React, { useState, useEffect } from 'react';
import './experience.scss';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";


export let data = [{
  "basic_info": {
    "description_header": "Hi",
    "description": "👋 I'm Davina Griss. Fictional person for preview purposes :) I'm working with newest front-end frameworks like Angular, React and Vue. What you are seeing now is portfolio template from Dorota1997. If you like this portfolio template, make sure to ⭐ the repository to make it more recognizable for other users. Thank you 💜",
    "section_name": {
      "about": "About me",
      "projects": "Projects",
      "skills": "Skills",
      "experience": "Experience"
    }
  },
  "projects": [
    {
      "title": "Animal Shelter",
      "startDate": "2020",
      "description": "The most expanded application I had opportunity to work with. I've learned many technologies and my code was reviewed by awesome curator. Application handles all adoption processess and allows to store all evidence on adopting animals from animal shelter.",
      "images": [
        "images/portfolio/animal-shelter/p1.jpg",
        "images/portfolio/animal-shelter/p2.jpg"
      ],
      "url": "",
      "technologies": [
        {
          "class": "devicon-angularjs-plain",
          "name": "Angular"
        },
        {
          "class": "devicon-typescript-plain",
          "name": "TypeScript"
        },
        {
          "class": "devicon-csharp-plain",
          "name": "C#"
        }
      ]
    },
    {
      "title": "Photography",
      "startDate": "2018",
      "description": "Personal project for study subject. I was responsible for testing photography application that optimizes images with popular algorithms used by graphic editors like Pixlr or Adobe Photoshop. I've earned A grade :)",
      "images": [
        "images/portfolio/photography/p1.jpg",
        "images/portfolio/photography/p2.jpg"
      ],
      "url": "https://github.com",
      "technologies": [
        {
          "class": "devicon-react-original",
          "name": "React"
        },
        {
          "class": "devicon-javascript-plain",
          "name": "JavaScript"
        }
      ]
    },
    {
      "title": "3D Object Viewer",
      "startDate": "2015",
      "description": "One of the first apps I was working on my internship. I had to develop front-end implementation for app that shows 3D models of known buildings. This was also my first project in Angular framework. I've learned a lot!",
      "images": [
        "images/portfolio/adventure/p1.jpg",
        "images/portfolio/adventure/p2.jpg"
      ],
      "url": "https://github.com",
      "technologies": [
        {
          "class": "devicon-angularjs-plain",
          "name": "Angular"
        },
        {
          "class": "devicon-typescript-plain",
          "name": "TypeScript"
        },
        {
          "class": "devicon-csharp-plain",
          "name": "C#"
        }
      ]
    }
  ],
  "experience": [
    {
      "company": "DefOpenSource",
      "title": "Front-End Developer",
      "years": "10.2019 - present",
      "mainTech": [
        "Angular 8/9/10"
      ],
      "technologies": [
        "REST API",
        "RxJS",
        "JavaScript",
        "Bootstrap",
        "MDBootstrap",
        "EF Core",
        ".NET Core",
        "SignalR",
        "Angular Material"
      ]
    },
    {
      "company": "Serros Solutions",
      "title": "Intern",
      "years": "01.2018 - 09.2019",
      "mainTech": [
        "Angular 7/8"
      ],
      "technologies": [
        "RxJS",
        "Django",
        "PHP",
        "JavaScript",
        "DHTMLX Gantt"
      ]
    }
  ]
}]
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
              <div>June 2023 - Present </div>
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
              <div className='other__tags'> Material UI &nbsp; Nextjs &nbsp; Reactjs &nbsp; Nodejs &nbsp; Expressjs &nbsp; Javascript &nbsp; Tailwindcss &nbsp; Mongodb &nbsp; Java</div>
            </div>
          </div>
        </li>
        <li className='other__items'>
          <div className='other__card'>
            <div className='other__cardTop'>
              <svg className='other__cardFolder'>
                <use href='icons/symbol-defs.svg#icon-folder' />
              </svg>
              <div>Feb 2023 - May 2023 </div>
              {/* <div className='other__cardLink'>
                <a href='#' target='_blank' rel='noreferrer' style={{ marginRight: '1.6rem' }}>
                  <svg className='other__icon'>
                    <use href='icons/symbol-defs.svg#icon-github' />
                  </svg>
                </a>
                <a href='https://youtu.be/MF7xbfKyaEk' target='_blank' rel='noreferrer'>
                  <svg className='other__icon'>
                    <use href='icons/symbol-defs.svg#icon-external-link' />
                  </svg>
                </a>
              </div> */}
            </div>
            <div className='other__cardBody'>
              <div className='other__cardBodyHeading'>Full Stack Developer Intern</div>
              <div className=''>Sporfy India Private Limited</div>
              <p className='other__cardBodyDescription'>
                {/* Played a key role in working with React to address complex scenarios, solve critical bugs, and contribute to challenging projects. During the internship, gained valuable experience in web development, which enhanced problem-solving skills and fostered effective project collaboration. Developed proficiency in time management while actively contributing to various projects. */}
                {/* Played a pivotal role in leveraging React expertise to tackle intricate scenarios, troubleshoot critical bugs, and make substantial contributions to challenging projects. The internship provided a valuable opportunity to enhance web development skills, fostering a deeper understanding of problem-solving techniques and effective collaboration within project teams. This hands-on experience not only honed technical capabilities but also developed proficiency in time management, showcasing a commitment to actively contribute to various projects. The dynamic environment of the internship further contributed to a holistic growth in both technical acumen and collaborative work practices. */}

                Played a crucial role in addressing complex scenarios, troubleshooting critical bugs, and contributing significantly to challenging React projects during the internship. Gained valuable web development experience, enhancing problem-solving skills and fostering effective collaboration within project teams. Developed proficiency in time management while actively contributing to various projects, showcasing a commitment to both technical excellence and collaborative work practices.
              </p>
            </div>
            <div className='other__cardFooter'>
              <div className='other__tags'>Html &nbsp; Css &nbsp; Material UI &nbsp; Nextjs &nbsp; Reactjs &nbsp; Javascript &nbsp; Java</div>
            </div>
          </div>
        </li>
      </ul>
      <span className='sectiontag'>&lt;/section&gt;</span>
    </div>
  );

};

export default Experiences;
