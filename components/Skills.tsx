import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { devLogos, elecLogos, othersLogos, webLogos } from '../utils/utils';

const Skills = () => {
  const [options, setOptions] = useState(0);
  const [selected, setSelected] = useState(webLogos);
  return (
    <section id='skill-section' className='flex flex-col p-8'>
      <h1 className='text-white text-6xl tracking-wide uppercase text-center'>
        Skills
      </h1>
      <ul className='text-white w-full flex flex-row flex-wrap mt-16 justify-center md:text-2xl'>
        <li className='flex items-center mb-4 mr-4 ml-4'>
          Web
          <div
            className={`h-6 w-6 ${
              options === 0 ? 'bg-[#c7e4f8]' : 'bg-[#343434]'
            } rounded-full ml-8 cursor-pointer`}
            onClick={() => {
              setOptions(0);
              setSelected(webLogos);
            }}
          />
        </li>
        <li className='flex items-center mb-4 mr-4 ml-4'>
          Development
          <div
            className={`h-6 w-6 ${
              options === 1 ? 'bg-[#c7e4f8]' : 'bg-[#343434]'
            } rounded-full ml-8 cursor-pointer`}
            onClick={() => {
              setOptions(1);
              setSelected(devLogos);
            }}
          />
        </li>
        <li className='flex items-center mb-4 mr-4 ml-4'>
          Electronics
          <div
            className={`h-6 w-6 ${
              options === 2 ? 'bg-[#c7e4f8]' : 'bg-[#343434]'
            } rounded-full ml-8 cursor-pointer`}
            onClick={() => {
              setOptions(2);
              setSelected(elecLogos);
            }}
          />
        </li>
        <li className='flex items-center mb-4 mr-4 ml-4'>
          Others
          <div
            className={`h-6 w-6 ${
              options === 3 ? 'bg-[#c7e4f8]' : 'bg-[#343434]'
            } rounded-full ml-8 cursor-pointer`}
            onClick={() => {
              setOptions(3);
              setSelected(othersLogos);
            }}
          />
        </li>
      </ul>

      <div className='flex flex-col justify-center mt-8'>
        <div
          className='flex flex-wrap gap-4 sm:gap-5 md:gap-8 justify-center 
        xl:w-[1200px] lg:w-[950px] md:w-full sm:w-[550px] w-full m-auto'
        >
          {selected.map((logo: any) => (
            <div key={logo.name}>
              <div
                className='bg-[#343434] rounded-full flex justify-center items-center
                xl:w-[160px] xl:h-[160px] lg:w-[120px] lg:h-[120px] md:w-[100px] md:h-[100px] 
                w-[70px] h-[70px]'
              >
                <div
                  className='relative xl:w-[100px] xl:h-[100px] lg:w-[80px] lg:h-[80px] 
                  md:w-[60px] md:h-[60px] w-[45px] h-[45px]'
                >
                  <Image
                    alt={logo.name}
                    src={logo.imgPath}
                    layout='fill'
                    className='object-contain w-full relative h-auto'
                  />
                </div>
              </div>
              <p className='text-white text-[11px] md:text-base text-center mt-2 xl:w-[160px] lg:w-[120px] md:w-[100px] w-[70px]'>
                {logo.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
