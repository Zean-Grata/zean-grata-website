import './App.css';
import logo from '/src/assets/logo.svg';
import troubleshoot from '/src/assets/troubleshoot.svg';import work from '/src/assets/work.svg'; 
import web from '/src/assets/web.svg';import email from '/src/assets/email.svg';
import backup from '/src/assets/backup.svg';import advice from '/src/assets/advice.svg'
import ServiceCard from './components/ServiceCard';
import TeamCard from './components/TeamCard';

function App() {
  return (
    <div className='[&_*]:text-white w-auto overflow-hidden'>
       <div id="nav" className='flex px-15 lg:px-30 py-5 h-[70px] w-auto'>
            <img src={logo} alt="Zean Grata company logo" role="img" aria-label='Zean Grata company logo' className='w-[150px] h-[20px] lg:w-[200px] lg:h-[30px]'/>
        </div>
        <div id="bg-container" className="bg-hero flex flex-col h-fit w-auto bg-cover bg-center lg:bg-top px-5 py-15 space-y-30">
          <div id="secondary-container" className='flex flex-col items-center sm:items-start space-y-10 px-5 lg:px-25'>
            {/*BEGIN: Main Headline */}
            <div className='flex flex-col space-y-5'>
              <h1 className='text-white text-2xl text-center max-w-[20ch] lg:text-5xl sm:text-start text-balance lg:max-w-[10ch]'>IT Consulting Services</h1>
              <h2 className='text-[#F3F3F3] text-sm text-center sm:text-start lg:text-lg max-w-[30ch]'>We help your systems run smoothly so you can focus on your work.</h2>
            </div>
             {/*END: Main Headline */}
             {/*BEGIN: Services and Team Container */}
            <div className='flex flex-col space-y-10 w-full lg:space-x-5 xl:flex-row'>
              {/*BEGIN: Services Container */}
              <div className='flex flex-2 flex-col space-y-10 lg:items-start'>
                <h1 className='text-2xl'>OUR SERVICES</h1>
                <div className='grid grid-cols-1 justify-end sm:grid-cols-2 gap-y-10 gap-x-10'>
                  <ServiceCard 
                    icon="troubleshoot" 
                    title="IT Support & Troubleshooting" 
                    content="We help resolve everyday tech issues such as slow computers,
                     software errors, connectivity problems, and device setup so you can stay productive without disruption."
                  />
                  <ServiceCard 
                    icon="work" 
                    title="Computer & Office Setup" 
                    content="From new laptops to shared printers and Wi-Fi, we set up and configure essential office technology for
                     individuals and small teams."
                  />
                  <ServiceCard 
                    icon="web" 
                    title="Website Setup & Maintenance" 
                    content="We build and maintain simple, reliable websites including landing pages, basic business sites, and 
                    contact forms, plus ongoing updates when you need them."
                  />
                   <ServiceCard 
                    icon="email" 
                    title="Email & Cloud Tools Setup" 
                    content="We set up professional business email, cloud storage, and collaboration tools so your
                     team can work efficiently and securely from anywhere."
                  />
                   <ServiceCard 
                    icon="backup" 
                    title="Data Backup & Basic Security" 
                    content="We help protect your data with reliable backup solutions and essential security
                     practices like antivirus setup and account access control."
                  />
                  <ServiceCard 
                    icon="advice" 
                    title="Technology Advice & Guidance" 
                    content="We offer clear, practical advice to help you choose the right tools, avoid unnecessary
                     costs, and improve your existing setup."
                  />
                </div>
              </div>
              {/*END: Services Container */}
              {/*START: Team Container*/}
              <div className='flex flex-1 flex-col space-y-10'>
                <h1 className='text-2xl'>THE TEAM</h1>
                <div className='flex flex-col space-y-10 sm:flex-row lg:space-x-10'>
                  <TeamCard
                      name="Nahoom Belete"
                      position="IT Consultant"
                      phone="+27 76 844 3280" 
                      email="nahoombelete@zeangrata.co.za"
                  />
                  <TeamCard
                      name="Emannuel Belete"
                      position="IT Consultant"
                      phone="+27 79 455 8925" 
                      email="emannuelbelete@zeangrata.co.za"
                  />
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
