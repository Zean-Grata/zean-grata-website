import '../App.css';
import Tag from '../components/Tag';
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faDollarSign } from '@fortawesome/free-solid-svg-icons';

function Hero() {

  const view1 = useInView({
        threshold: 0,
        triggerOnce: true,
});
return (
  <div id="bg-container" className="bg-hero flex flex-col space-y-8 h-184 w-auto bg-cover bg-center px-32 py-12">
    <Tag/>
    <h1 className='text-[#FFFFFF] font-heading max-w-[11ch] text-8xl/27 font-bold'>
      We craft digital <span className='text-[#E8693A]'>experiences</span> that inspire.
    </h1>
    <h2 className='text-[#B3B3B3] text-lg font-body font-medium max-w-[78ch]'>
      Transform your vision into stunning digital reality. We blend creativity with cutting-edge technology 
      to build websites that captivate, convert, and scale.
    </h2>
    <div className='flex space-x-10'>
       <button className='flex items-center justify-center space-x-1 bg-[#E8693A] text-[#FFFFFF] w-60 h-15 p-6 text-md rounded-2xl font-body
       transition delay-50 duration-300 ease-in-out hover:scale-105 hover:bg-[#E76E50]'>
            <span>Start Your Project</span>
            <FontAwesomeIcon icon={faArrowRight} />
        </button>
        <button className='flex items-center justify-center space-x-1 bg-transparent border border-[#FFFFF] text-[#FFFFFF] w-60 h-15 p-6 text-md rounded-2xl font-body
       transition delay-50 duration-300 ease-in-out hover:scale-105 hover:bg-[#E76E50] hover:border-[#E76E50]'>
            <span>View pricing</span>
            <FontAwesomeIcon icon={faDollarSign}/>
        </button>
    </div> 
    <hr className='h-0.5 text-[#5A5A5A]'/>
  </div>
  );
}

export default Hero

/*
 <div id="hero-container" className='flex flex-col items-center sm:items-start space-y-10 px-2 max-w-[120ch] lg:px-25'>
      <div ref={view1.ref} className={`flex flex-col space-y-5 ${view1.inView ? 'transition duration-1500 ease-in-out opacity-100 translate-x-0' : 'transition duration-1500 ease-in-out opacity-0 translate-x-10'}`}>
        <h1 className='text-white text-5xl lg:text-7xl max-w-[30ch] lg:text-start lg:max-w-[15ch] lg:text-5xl 
          lg:max-w-[19ch]'>IT Consulting that Grows With Your Business</h1>
        <h2 className='text-[#F3F3F3] text-md font-semibold lg:text-2xl max-w-[41ch]'>
          We keep your systems running smoothly so you can focus on your work, providing dependable
            IT support and practical solutions that keep your technology working for you.
        </h2>
      </div>
    </div>  
*/