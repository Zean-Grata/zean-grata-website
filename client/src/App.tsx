import './App.css';
import logo from '/src/assets/logo.svg';
import ServiceCard from './components/ServiceCard';
import TeamCard from './components/TeamCard';
import ContactForm from './components/ContactForm';
import { useInView } from "react-intersection-observer";

function App() {
  const view1 = useInView({
        threshold: 0,
        triggerOnce: true,
  });

  const view2 = useInView({
        threshold: 0,
        triggerOnce: true,
  });

  const view3 = useInView({
        threshold: 0,
        triggerOnce: true,
  });

  const view4 = useInView({
        threshold: 0,
        triggerOnce: true,
  });

  return (
    <div className='w-auto overflow-hidden '>
       <div id="nav" className='flex px-17 lg:px-40 py-5 h-[60px] lg:h-[70px] w-auto bg-white'>
            <img src={logo} alt="Zean Grata company logo" role="img" aria-label='Zean Grata company logo' className='w-[150px] h-[20px] lg:w-[200px] lg:h-[30px]'/>
       </div>
        <div id="bg-container" className="bg-hero flex h-[700px] lg:h-[600px] w-auto bg-cover bg-center lg:bg-top px-15 py-15 lg:py-30 space-y-30">
          <div id="hero-container" className='flex flex-col items-center sm:items-start space-y-10 px-2 max-w-[120ch] lg:px-25'>
            <div ref={view4.ref} className={`flex flex-col space-y-5 ${view4.inView ? 'transition duration-1500 ease-in-out opacity-100 translate-x-0' : 'transition duration-1500 ease-in-out opacity-0 translate-x-10'}`}>
              <h1 className='text-white text-5xl lg:text-7xl max-w-[30ch] lg:text-start lg:max-w-[15ch] lg:text-5xl 
               lg:max-w-[19ch]'>IT Consulting that Grows With Your Business</h1>
              <h2 className='text-[#F3F3F3] text-md font-semibold lg:text-2xl max-w-[41ch]'>
                We keep your systems running smoothly so you can focus on your work, providing dependable
                 IT support and practical solutions that keep your technology working for you.
              </h2>
            </div>
          </div>  
        </div>
        <div id="services-container" className='flex justify-center bg-white px-10 py-10 '>
          <div className='flex flex-col lg:flex-row lg:space-x-10'>
            <img ref={view1.ref} src="/services.svg" alt="" className={`w-[600px] h-[600px] hidden lg:block ${view1.inView ? 'transition duration-1500 ease-in-out opacity-100 translate-y-0' : 'transition duration-1500 ease-in-out opacity-0 translate-y-10'}`}/>
            <div ref={view2.ref} className={`flex flex-col space-y-10 ${view2.inView ? 'transition duration-2000 ease-in-out opacity-100 translate-x-0' : 
        'transition duration-1000 ease-in-out opacity-0 translate-x-10'}`}>
              <h1 className='text-md text-[#216F66]'>OUR SERVICES</h1>
              <div className='grid grid-cols-1 justify-items-center sm:grid-cols-2 gap-y-10 gap-x-10 w-fit'>
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
          </div>    
       </div>
       <div ref={view3.ref} id="team-container" className={`flex px-10 md:px-35 lg:justify-center lg:px-10 py-10 
       bg-[#F5F5F5] ${view3.inView ? 'transition duration-2000 ease-in-out opacity-100 translate-x-0' : 
        'transition duration-1000 ease-in-out opacity-0 translate-x-10'}`}>
          <div className='flex flex-col space-y-10'>
            <h1 className='text-md text-[#216F66]'>THE TEAM</h1>
            <div className='flex flex-col space-y-10 sm:flex-row md:space-x-10'>
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
        </div>
        <div className='flex justify-center py-10'>
            <div className='flex flex-col w-[800px] space-y-10 '>
              <h1 className='text-md text-[#216F66] px-10 lg:px-0'>CONTACT US</h1>
              <ContactForm

              />  
          </div>
        </div>
        <footer id="footer" className='flex justify-center items-center w-auto h-[100px] bg-[#2E2E2E] text-white'>
          <small>
              &copy;{new Date().getFullYear()} Zean Grata (Pty) Ltd. All Rights Reserved.
          </small>
        </footer>
    </div>
  );
}

export default App
