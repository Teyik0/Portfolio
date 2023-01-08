import { BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs';

const Encadre = ({ page, setPage }: any) => {
  return (
    <>
      <div className='absolute top-[1rem] lg:top-[16vh] left-8 lg:left-[4vh] pt-[4vh]'>
        <BsFacebook className='text-white w-[2rem] h-[2rem] lg:h-[4vh] lg:w-[4vh] mb-[2rem]' />
        <BsInstagram className='text-white w-[2rem] h-[2rem] lg:h-[4vh] lg:w-[4vh] mb-[2rem]' />
        <BsLinkedin className='text-white w-[2rem] h-[2rem] lg:h-[4vh] lg:w-[4vh]' />
      </div>
      <div
        className='w-full h-[1px] bg-white absolute top-[12vh] opacity-20
        hidden lg:flex'
      />
      <div
        className='w-full h-[1px] bg-white absolute bottom-[12vh] opacity-20
        hidden lg:flex'
      />
      <div
        className='w-[1px] h-[100vh] bg-white absolute left-[12vh] opacity-20
        hidden lg:flex'
      />
      <div
        className='w-[1px] h-[100vh] bg-white absolute right-[12vh] opacity-20
        hidden lg:flex'
      />
      <div
        className='text-white text-3xl lg:text-[3vh] lg:flex lg:flex-row lg:absolute lg:top-[6vh] lg:right-[24vh] 
      w-[600px] justify-evenly hidden z-40'
      >
        <h3
          className={`hover:text-[#775e28] duration-500 cursor-pointer 
           ${page === 0 && 'text-[#775e28]'}`}
          onClick={() => setPage(0)}
        >
          Home
        </h3>
        <h3
          className={`hover:text-[#775e28] duration-500 cursor-pointer 
          ${page === 1 && 'text-[#775e28]'}`}
          onClick={() => setPage(1)}
        >
          Skills
        </h3>
        <h3
          className={`hover:text-[#775e28] duration-500 cursor-pointer 
          ${page === 2 && 'text-[#775e28]'}`}
          onClick={() => setPage(2)}
        >
          Portfolio
        </h3>
        <h3
          className={`hover:text-[#775e28] duration-500 cursor-pointer 
          ${page === 3 && 'text-[#775e28]'}`}
          onClick={() => setPage(3)}
        >
          Experiences
        </h3>
        <h3
          className={`hover:text-[#775e28] duration-500 cursor-pointer 
          ${page === 4 && 'text-[#775e28]'}`}
          onClick={() => setPage(4)}
        >
          About
        </h3>
      </div>
    </>
  );
};

export default Encadre;
