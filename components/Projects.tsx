import React, { useState } from 'react';
import Encadre from './Encadre';
import ProjectItem from './ProjectItem';

const Projects = () => {
  const [options, setOptions] = useState(0);
  const [selected, setSelected] = useState(0);
  return (
    <section
      id='skill-section'
      className='relative flex flex-col h-[100vh] bg-[#181818] justify-center'
    >
      <ul
        className='absolute bottom-[3vh] text-white w-full flex flex-row flex-wrap justify-center 
      lg:text-[3vh]'
      >
        <li className='flex items-center mb-4 lg:mb-0 mr-4 ml-4'>
          Web
          <div
            className={`h-6 w-6 ${
              options === 0 ? 'bg-[#c7e4f8]' : 'bg-[#343434]'
            } rounded-full ml-8 cursor-pointer`}
            onClick={() => {
              setOptions(0);
              //   setSelected();
            }}
          />
        </li>
        <li className='flex items-center mb-4 lg:mb-0 mr-4 ml-4'>
          Electronics
          <div
            className={`h-6 w-6 ${
              options === 1 ? 'bg-[#c7e4f8]' : 'bg-[#343434]'
            } rounded-full ml-8 cursor-pointer`}
            onClick={() => {
              setOptions(1);
              //   setSelected(devLogos);
            }}
          />
        </li>
        <li className='flex items-center mb-4 lg:mb-0 mr-4 ml-4'>
          Others
          <div
            className={`h-6 w-6 ${
              options === 2 ? 'bg-[#c7e4f8]' : 'bg-[#343434]'
            } rounded-full ml-8 cursor-pointer`}
            onClick={() => {
              setOptions(2);
              //   setSelected(elecLogos);
            }}
          />
        </li>
      </ul>
      <Encadre />
      <div className='lg:p-[12vh] flex flex-wrap gap-8 justify-center'>
        <ProjectItem
          name='Project1'
          category='test'
          cover="bg-[url('/img/ecommerce/im1.png')]"
        />
        <ProjectItem
          name='Project1'
          category='test'
          cover="bg-[url('/img/ecommerce/im1.png')]"
        />
        <ProjectItem
          name='Project1'
          category='test'
          cover="bg-[url('/img/ecommerce/im1.png')]"
        />
      </div>
    </section>
  );
};

export default Projects;
