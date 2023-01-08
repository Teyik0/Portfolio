/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import React, { useState } from 'react';

interface IProps {
  name: string;
  category: string;
  cover: string;
}

const ProjectItem = ({ name, category, cover }: IProps) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className={`h-[150px] w-[250px] sm:h-[200px] sm:w-[300px] lg:h-[24vh] lg:w-[40vh] rounded-3xl cursor-pointer flex justify-center
    ${cover} bg-cover bg-center bg-no-repeat
    ease-in-out duration-500 overflow-hidden relative z-0 hover:scale-110

    before:bg-[#75A1A1] before:opacity-70 before:absolute before:h-full before:w-full 
    before:translate-x-[100%] before:rounded-l-full before:transition-all 
    before:duration-700 before:ease-in-out hover:before:translate-x-0 hover:before:rounded-none

    hover:after:content-['En_savoir_plus'] after:duration-1000 after:ease-in-out after:translate-x-[100%]
    hover:after:translate-x-0 hover:after:z-40 hover:after:absolute hover:after:uppercase hover:after:p-4
    after:font-bold after:tracking-wider
    `}
      onMouseOverCapture={() => setHover(true)}
      onMouseOutCapture={() => setHover(false)}
    >
      {hover && (
        <img
          src='/img/ajouter.png'
          alt='en savoir plus'
          className='h-[10vh] w-[10vh] p-4 absolute top-[30%]'
        />
      )}
      <h2 className='absolute bottom-0 right-0 p-4 bg-gray-800 rounded-l-full text-white'>
        {name}
      </h2>
    </div>
  );
};

export default ProjectItem;
