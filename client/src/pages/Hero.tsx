import '../App.css';
import Tag from '../components/Tag';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faDollarSign } from '@fortawesome/free-solid-svg-icons';

function Hero() {
return (
  <div className="bg-hero flex flex-col space-y-8 h-184 w-auto bg-cover bg-center px-32 py-12">
    <Tag/>
    <h1 className='text-[#FFFFFF] font-heading max-w-[11ch] text-8xl/27 font-bold'>
      We craft digital <span className='text-[#E8693A]'>experiences</span> that inspire.
    </h1>
    <h2 className='text-[#B3B3B3] text-lg font-body font-medium max-w-[60ch]'>
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