import React from 'react';

const Experiences = () => {
  return (
    <section className='relative flex flex-col h-[100vh] justify-center text-white'>
      <h1 className='lg:hidden uppercase text-center text-white text-5xl absolute top-8 w-full'>
        Experiences
      </h1>
      <div className='lg:p-[12vh] sm:flex sm:flex-wrap sm:gap-8 justify-center items-end'>
        <h3 className='text-3xl sm:text-4xl p-4 lg:p-0'>
          Connect innov - Start up
        </h3>
        <span className='text-xl sm:text-3xl italic text-gray-300 capitalize p-4 lg:p-0'>
          Colombes, île-de-France, France
        </span>
        <ul className='p-4 lg:pl-20 lg:list-disc'>
          <li>
            <h3 className='text-lg sm:text-xl mt-4'>Full Stack Developer</h3>
            <span className='text-xs sm:text-sm text-gray-300'>
              Oct. 2022 - Current
            </span>
            <p className='text-sm sm:text-lg'>
              ---- Creation of new TableKids website with NextJS - Current
              <br />
              ---- Development of an application on Totem for Epitact Pharmacy
              with React Native - Current
            </p>
          </li>
          <li>
            <h3 className='text-lg sm:text-xl mt-4 capitalize'>
              Electronics & Computer Technician
            </h3>
            <span className='text-xs sm:text-sm text-gray-300'>
              Avr. 2022 - Oct. 2022 | 7 months
            </span>
            <p className='text-sm sm:text-lg'>
              ---- Configuration and deployment of kiosks and totems (Android
              and Windows) <br />
              ---- Assembly, configuration, and deployment of TableKids
              (Hardware and Software) <br />
              ---- Analysis of malfunctions, determination of root causes, and
              application of appropriate fixes (Hardware and Software) <br />
              ---- Technical support for customers <br />
              ---- Video editing (Premiere Pro) <br />
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experiences;
