import Tag from '../components/Tag';
import { PrimaryButton, SecondaryButton } from '../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

function Hero() {
return (
  <div className="flex flex-col items-center space-y-8 w-full h-280 md:h-250 md:px-32 md:py-12 
  bg-linear-to-br from-[#3939B9] via-[#3939B9] to-[#843FAC]">
    <img src="/hero-mascot.png" alt="" className='w-full h-60 md:w-110 md:h-60'/>
    <Tag />
    <h1 className='max-w-[15ch] text-center text-white text-5xl/15 md:text-7xl/24 font-heading font-bold'>
      Websites that <span className='text-[#F472B6]'>work</span> as hard as <span className='text-[#F472B6]'>you</span> do.
    </h1>
    <h2 className='max-w-[29ch] md:max-w-[60ch] text-center text-white text-md md:text-xl font-body font-regular'>
      Stop losing customers to a clunky site. We craft digital experiences that convert.
    </h2>
    <h3 className='max-w-[30ch] md:max-w-[60ch] text-center text-[#C6C5ED] text-md md:text-md font-body font-regular'>
      Your brand deserves more than a template. We design custom websites that capture attention, 
      build trust, and turn visitors into loyal customers.
    </h3>
    <div className='flex flex-col items-center space-y-5 md:items-start md:flex-row  md:space-x-10'>
       <PrimaryButton title="Get a Free Consultation" width="w-60" height="h-15" />
       <SecondaryButton title="Contact Us" width="w-50" height="h-15" />
    </div> 
    <div className='flex flex-col items-center space-y-2'>
      <FontAwesomeIcon icon={faAngleDown} className='text-white animate-bounce'/>
      <h4 className='max-w-[60ch] text-center text-white text-md font-body font-regular'>
        Beautiful design meets bulletproof functionality.
      </h4>
    </div>
    <hr className='h-0.5 text-[#5A5A5A]'/>
  </div>
  );
}

export default Hero