import './App.css'
import logo from '/src/assets/logo.svg'

function App() {
  return (
    <div className='[&_*]:text-white w-auto overflow-hidden'>
       <div id="nav" className='flex px-15 lg:px-35 py-5 h-[70px] w-auto'>
            <img src={logo} alt="Zean Grata company logo" role="img" aria-label='Zean Grata company logo' className='w-[150px] h-[20px] lg:w-[200px] lg:h-[30px]'/>
        </div>
        <div id="bg-container" className="bg-hero flex flex-col h-fit w-auto bg-cover bg-center lg:bg-top px-10 py-15 space-y-30">
          <div id="secondary-container" className='flex flex-col items-center sm:items-start space-y-10 px-5 lg:px-25'>
            {/*BEGIN: Main Headline */}
            <div className='flex flex-col space-y-1'>
              <h1 className='text-white text-2xl text-center max-w-[20ch] lg:text-5xl sm:text-start text-balance lg:max-w-[10ch]'>IT Consulting Services</h1>
              <h2 className='text-[#F3F3F3] text-sm text-center sm:text-start lg:text-lg max-w-[30ch]'>We help your systems run smoothly so you can focus on your work.</h2>
            </div>
             {/*END: Main Headline */}
             {/*BEGIN: Services and Team Container */}
            <div className='flex flex-col space-y-10 lg:space-x-10 xl:flex-row'>
              {/*BEGIN: Services Container */}
              <div className='flex flex-col space-y-10 lg:items-start'>
                <h1 className='text-2xl'>OUR SERVICES</h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-10 [&>div>h2]:text-3xl lg:[&>div>h2]:text-5xl [&>div>h2]:font-bold [&>div]:flex [&>div]:items-center [&>div]:space-x-2 [&>div>h3]:text-sm [&>div>h3]:max-w-[30ch]'>
                  <div className=''>
                    <h2>01.</h2>
                    <h3 className=''>Web & Digital Solutions</h3>
                  </div>
                   <div className=''>
                    <h2>02.</h2>
                    <h3>IT Systems & Support</h3>
                  </div>
                   <div className=''>
                    <h2>03.</h2>
                    <h3>Cloud Computing & Cloud Setup</h3>
                  </div>
                   <div className=''>
                    <h2>04.</h2>
                    <h3>IT Support & Troubleshooting</h3>
                  </div>
                   <div className=''>
                    <h2>05.</h2>
                    <h3>Email & Business Tool Setup</h3>
                  </div>
                   <div className=''>
                    <h2>06.</h2>
                    <h3>Technology Advice for Small Businesses</h3>
                  </div>
                </div>
              </div>
              {/*END: Services Container */}
              {/*START: Team Container*/}
              <div className='flex flex-col space-y-10'>
                <h1 className='text-2xl'>THE TEAM</h1>
                <div className='flex flex-col space-y-10 sm:flex-row lg:space-x-10'>
                  <div className='flex flex-col justify-around w-[250px] h-[200px] lg:w-[280px] lg:h-[250px] bg-[#08383399] p-2 space-y-5'>
                    <div className='flex flex-1 justify-center'>
                        <img src="/favicon.svg" alt="Zean Grata Logo" className='w-[50px] h-[50px] color-white'/>
                    </div>
                    <div className='flex flex-1 items-end'>
                      <p className='text-sm lg:text-lg'>Nahoom Belete<br/>
                         IT Consultant<br/>
                         +27 76 844 3280<br/> 
                         nahoombelete@zeangrata.co.za
                      </p>
                    </div>
                  </div>
                  <div className='flex flex-col justify-around w-[250px] h-[200px] lg:w-[280px] lg:h-[250px] bg-[#08383399] p-2 space-y-5'>
                    <div className='flex flex-1 justify-center'>
                        <img src="/favicon.svg" alt="Zean Grata Logo" className='w-[50px] h-[50px]'/>
                    </div>
                    <div className='flex flex-1 items-end'>
                      <p className='text-sm lg:text-lg'>Emannuel Belete<br/>
                         IT Consultant<br/>
                         +27 79 455 8925<br/> 
                         emannuelbelete@zeangrata.co.za
                      </p>
                    </div>   
                  </div>
                </div>
              </div>
              {/*END: Team Container*/}
            </div>
            {/*END: Services and Team Container */}
          </div>  
        </div>
        <footer id="footer" className='flex justify-center items-center w-auto h-[100px] bg-[#2E2E2E]'>
          <small>
              &copy;{new Date().getFullYear()} Zean Grata (Pty) Ltd. All Rights Reserved.
          </small>
        </footer>
    </div>
  );
}

export default App
