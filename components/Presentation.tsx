/* eslint-disable @next/next/no-img-element */
import { BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs';

const Presentation = () => {
  return (
    <section
      id='skill-section'
      className='flex h-[100vh] justify-center items-center'
    >
      <div className='w-full h-[1px] bg-white absolute top-[8rem] opacity-20' />
      <div className='w-full h-[1px] bg-white absolute bottom-[8rem] opacity-20' />
      <div className='w-[1px] h-[100vh] bg-white absolute left-[8rem] opacity-20' />
      <div className='w-[1px] h-[100vh] bg-white absolute right-[8rem] opacity-20' />
      <div className='absolute top-[8rem] left-[2rem] pt-[4rem]'>
        <BsFacebook className='text-white h-[4rem] w-[4rem] mb-[2rem]' />
        <BsInstagram className='text-white h-[4rem] w-[4rem] mb-[2rem]' />
        <BsLinkedin className='text-white h-[4rem] w-[4rem]' />
      </div>
      <div className='flex items-start justify-evenly w-[100%]'>
        <div className='w-[18rem] h-[18rem] rounded-3xl rotate-45 overflow-hidden opacity-80'>
          <img
            src='/profile.jpg'
            alt='photo'
            className='-rotate-45 max-w-[100%] scale-[1.48] translate-x-[3rem]'
          />
        </div>
        <div>
          <h1 className='text-7xl text-white'>
            <span className='font-bold'>Théo</span> Samarasinghe
          </h1>
          <h2 className='text-3xl text-white mt-4'>
            Developer fullstack / web3 / front end
          </h2>
          <p className='w-[600px] mt-8 text-white text-lg italic opacity-50'>
            &quot;Passionate about computers and economics, the intersection of
            these two worlds, cryptocurrency became an obvious choice for me.
            The web 3 is still in its infancy.&quot;
          </p>
        </div>
      </div>
    </section>
  );
};

export default Presentation;
