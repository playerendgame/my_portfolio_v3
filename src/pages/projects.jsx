import { useState } from "react";
import projects1 from '../assets/projects_1.jpg';
import projects18 from '../assets/projects_18.png';
import projects17 from '../assets/projects_17.png';
import projects15 from '../assets/projects_15.png';
import projects14 from '../assets/projects_14.jpg';
import projects2 from '../assets/projects_2.jpg';
import projects8 from '../assets/projects_8.jpg';
import projects9 from '../assets/projects_9.jpg';
import projects3 from '../assets/projects_3.jpg';
import projects4 from '../assets/projects_4.jpg';
import projects5 from '../assets/projects_5.jpg';
import erp2025 from '../assets/erp_2025.jpg';
import projects13 from '../assets/projects_13.jpg';
import projects6 from '../assets/projects_6.jpg';
import projects7 from '../assets/projects_7.jpg';
import projects10 from '../assets/projects_10.jpg';
import projects16 from '../assets/projects_16.png';
import projects11 from '../assets/projects_11.jpg';
import projects12 from '../assets/projects_12.jpg';
import pageTitleVid from '../assets/video_bg.mp4';
import { useEffect } from 'react'



export default function Projects() {

  useEffect(() => {
      window.scrollTo(0,0);
  });

  const [filter, setFilter] = useState('all');

  const pageUpperData = {
    title: 'My Projects',
    description: 'A collection of my featured work showcasing web development, design, and problem-solving skills.',
    title2: 'Featured Projects',
    description2: 'A selection of recent work showcasing my expertise in full-stack development'
  };

  const projectsDataClient = {
    projects: [
      {
        image: projects1,
        title: 'This Website',
        description: 'I have created my own react app portfolio to showcase my skills, knowledge, and experiences to the potential hiring managers and companies',
        stacks: ['HTML', 'CSS', 'React.js', 'React Bootstrap', 'Formspree'],
        link: 'https://playerendgame.github.io/web_portfolio_v2/'
      },
      {
        image: projects18,
        title: 'Anker Solix Philippines E-Commerce',
        description: 'Anker SOLIX Portable Power Station stores solar and grid energy, then Home Power Panel switches automatically during outages, providing whole-home power covering all essentials and large load appliances.',
        stacks: ['Wordpress', 'WooCommerce', 'HTML', 'CSS', 'Bootstrap', 'Javascript'],
        link: 'https://ankersolix.primetechtrading.ph/'
      },
      {
        image: projects17,
        title: 'Skyworth Energy E-Commerce',
        description: 'Skyworth Energy Storage teams specializes in the research and development, production, sales and service on battery storage and is committed to providing efficient and clean new energy solution.',
        stacks: ['Wordpress', 'WooCommerce', 'HTML', 'CSS', 'Bootstrap', 'Javascript'],
        link: 'https://skyworthenergy.primetechtrading.ph/'
      },
      {
        image: projects15,
        title: 'Bringuelolaw',
        description: 'Bringuelo Law brings fresh perspective and dedicated expertise to deliver exceptional results in corporate law, litigation, and personal legal matters.',
        stacks: ['Wordpress', 'HTML', 'CSS', 'Bootstrap', 'Javascript'],
        link: 'https://bringuelolaw.com/'
      },
      {
        image: projects14,
        title: 'Prime Tech Philippines Philippines',
        description: 'PrimeTech is your trusted partner for cutting-edge power, solar, and smart home technology — built for the demands of modern businesses and homes across the Philippines.',
        stacks: ['Wordpress', 'HTML', 'CSS', 'Bootstrap', 'Javascript'],
        link: 'https://primetechtrading.ph/'
      },
      {
        image: projects2,
        title: 'GoSolar Philippines',
        description: 'A better future where every household in the Philippines runs on solar power which is sustainable, less expensive and clean.',
        stacks: ['Wordpress', 'HTML', 'CSS', 'Bootstrap', 'Javascript'],
        link: 'https://gosolarphilippines.com/'
      },
      {
        image: projects8,
        title: 'GoPrime Technology Corp',
        description: 'At GoPrime Technology Corp, we pride ourselves on being the leading provider of comprehensive energy solutions tailored to meet the diverse needs of both residential and commercial clients. With our extensive range of products and services, we offer a one-stop solution for all your energy needs.',
        stacks: ['Wordpress', 'HTML', 'CSS', 'Bootstrap', 'Javascript'],
        link: 'https://goprime.ph/'
      },
      {
        image: projects9,
        title: 'Energo PH',
        description: `Whether you're a manufacturing titan, a commercial complex, or an industrial leader, Energo is here to illuminate your path towards renewable energy. As we work together, we're not just transforming your energy landscape - we're shaping a future that's powered by progress.`,
        stacks: ['Wordpress', 'HTML', 'CSS', 'Bootstrap', 'Javascript'],
        link: 'https://energo.ph/'
      },
      {
        image: projects3,
        title: 'Bluetti Philippines',
        description: `If you're going off the grid or preparing for an emergency, the BLUETTI portable power station provides enough power to keep your applications or devices operating.`,
        stacks: ['Shopify', 'HTML', 'CSS', 'Bootstrap', 'Javascript'],
        link: 'https://bluettiphilippines.com/'
      },
      {
        image: projects4,
        title: 'CRM Bluetti Philippines',
        description: `Fully functional Indoor CRM that me and my team developed for the client Bluetti Philippines`,
        stacks: ['HTML', 'CSS', 'Bootstrap', 'Javascript', 'Vue.js', 'Laravel', 'PHP', 'MySql'],
        link: 'https://github.com/playerendgame/bluetti_crm'
      },
      {
        image: projects5,
        title: 'ERP GoPrime Technology Corp',
        description: `Fully functional Indoor ERP Web App that I developed for the client GoPrime Technology Corp`,
        stacks: ['HTML', 'CSS', 'Bootstrap', 'Javascript', 'Vue.js', 'Laravel', 'PHP', 'MySql'],
        link: 'https://github.com/playerendgame/erp_goprime'
      },
      {
        image: erp2025,
        title: 'ERP GoPrime v2 2025',
        description: `Fully functional Indoor ERP Web App that I developed for the client GoPrime Technology Corp`,
        stacks: ['HTML', 'CSS', 'Bootstrap', 'Javascript', 'Vue.js', 'Laravel', 'PHP', 'MySql'],
        link: 'https://github.com/playerendgame/erp_goprime_2025'
      },
      {
        image: projects13,
        title: 'GoPrime Technology Corp I.T Helpdesk',
        description: `Fully functional Indoor IT Helpdesk for GoPrimeTechnology Corp`,
        stacks: ['HTML', 'CSS', 'Bootstrap', 'Javascript', 'Vue.js', 'Laravel', 'PHP', 'MySql'],
        link: 'https://github.com/playerendgame/goprime_helpdesk'
      },
    ]
  };

  const projectsDataKodego = {
    projects: [
      {
        image: projects6,
        title: 'Retro Ride Hub',
        description: `We introduce! RetroRide Hub, the ultimate haven for aficionados of classic motorcycles. At RetroRide Hub, we celebrate the timeless allure and rich heritage of retro motorcycles.`,
        stacks: ['HTML', 'CSS', 'Bootstrap'],
        link: 'https://playerendgame.github.io/mp1retroridehub/index.html'
      },
      {
        image: projects7,
        title: 'Throttle Twist',
        description: `At Throttle Twist, we live and breathe motorcycles. Established in 2011, we have been a passionate advocate for riders, offering a wide range of premium motorcycles and top-notch services to fuel your two-wheeled adventures.`,
        stacks: ['HTML', 'CSS', 'Bootstrap', 'Javascript'],
        link: 'https://bandillamylene.github.io/MP2/?fbclid=IwAR20ZiAZ2hKQmUKMAVgw3ZXKaebSnH6iYFhzCXc61df9QXeXL9j7wxgMkho'
      },
    ]
  };

  const projectsDataPractice = {
    projects: [
      {
        image: projects10,
        title: 'Calculator App',
        description: `My practice project, standard calculator`,
        stacks: ['HTML', 'CSS', 'Bootstrap', 'Javascript'],
        link: 'https://playerendgame.github.io/calculatorapp/'
      },
      {
        image: projects16,
        title: 'Luxury Presence 2',
        description: `This single page UI project is from my re-assessment of one of my job applications.`,
        stacks: ['HTML', 'CSS', 'Bootstrap', 'Javascript', 'Swiper.js'],
        link: 'https://playerendgame.github.io/luxury_presence/'
      },
      {
        image: projects11,
        title: 'Luxury Presence',
        description: `This single page UI project is from my assessment of one of my job applications.`,
        stacks: ['HTML', 'CSS', 'Bootstrap'],
        link: 'https://playerendgame.github.io/luxury_presence/'
      },
      {
        image: projects12,
        title: 'Job Application Tracker',
        description: `This simple Laravel App is a Job Application Tracker, where you can log & signup an account for confidentiality of your inputed Job applications. But unfortunately, you have to download the files from my Github in order to try my Laravel App, if you know how, feel free to download my codes.`,
        stacks: ['HTML', 'CSS', 'Bootstrap', 'Laravel', 'PHP', 'Mysql'],
        link: 'https://github.com/playerendgame/job_tracker'
      },
    ]
  };

  return (
    <div>
      <div className="page_container_title py-5 border-bottom" data-aos="fade-right">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: -1,
            opacity: 0.2
          }}
        >
          <source src={pageTitleVid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="container">
            <h1 className="display-4 fw-bold">{pageUpperData.title}</h1>
            <p className="text-muted">{pageUpperData.description}</p>
        </div>
      </div>


      <div className='container py-5' data-aos="fade-up">

        {/* Projects filter */}
        <div className="row mb-3">
          <div className="col-md-4">
            <div className="form-group">
              <label className="form-label">Project Filter</label>
              <select 
                className="form-select" 
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                <option value="all">All Projects</option>
                <option value="client">Client Projects</option>
                <option value="kodego">KodeGo Projects</option>
                <option value="practice">Practice Projects</option>
              </select>
            </div>
          </div>
        </div>

        <div className="row gx-5">

          {/* Client Projects */}
          {(filter === 'client' || filter === 'all') && projectsDataClient.projects.map((project, index) => (
            <div className="col-md-6 p-3" key={`client-${index}`}>
              <div className="card h-100 projects_card">
              <div className="project-image-container" style={{overflow: 'hidden'}}>
                  <img 
                    className="card-img-top project-image" 
                    src={project.image} 
                    alt={project.title}
                    style={{
                      height: '200px', 
                      objectFit: 'cover', 
                      width: '100%',
                      transition: 'transform 0.3s ease'
                    }}
                  />
              </div>                 
               <div className="card-body ms-3 me-3 pt-4 ">
                  <p className="lead fw-bold">{project.title}</p>
                  <p className="text-muted">{project.description}</p>
                  <div className="d-flex flex-wrap gap-2 pt-2">
                    {project.stacks.map((stack, stackIndex) => (
                      <span key={stackIndex} className="badge text-dark p-3 fw-medium rounded-5" style={{backgroundColor: '#e6e6e6'}}>
                        {stack}          
                      </span>
                    ))}
                  </div>
                  <hr />
                  <div className="button d-flex">
                    <a className="nav-link align-items-center view_project_button" href={project.link} target="_blank">
                      <span> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
                          <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
                        </svg>
                      </span>
                      <span className="ms-2 fw-medium">
                        View Project
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Kodego Projects */}
          {(filter === 'kodego' || filter === 'all') && projectsDataKodego.projects.map((project, index) => (
            <div className="col-md-6 p-3" key={`kodego-${index}`}>
              <div className="card h-100 projects_card">
              <div className="project-image-container" style={{overflow: 'hidden'}}>
                  <img 
                    className="card-img-top project-image" 
                    src={project.image} 
                    alt={project.title}
                    style={{
                      height: '200px', 
                      objectFit: 'cover', 
                      width: '100%',
                      transition: 'transform 0.3s ease'
                    }}
                  />
              </div>                 
               <div className="card-body ms-3 me-3 pt-4 ">
                  <p className="lead fw-bold">{project.title}</p>
                  <p className="text-muted">{project.description}</p>
                  <div className="d-flex flex-wrap gap-2 pt-2">
                    {project.stacks.map((stack, stackIndex) => (
                      <span key={stackIndex} className="badge text-dark p-3 fw-medium rounded-5" style={{backgroundColor: '#e6e6e6'}}>
                        {stack}          
                      </span>
                    ))}
                  </div>
                  <hr />
                  <div className="button d-flex">
                    <a className="nav-link align-items-center view_project_button" href={project.link} target="_blank">
                      <span> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
                          <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
                        </svg>
                      </span>
                      <span className="ms-2 fw-medium">
                        View Project
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))} 


          {/* Practice Projects */}
          {(filter === 'practice' || filter === 'all') && projectsDataPractice.projects.map((project, index) => (
            <div className="col-md-6 p-3" key={`practice-${index}`}>
              <div className="card h-100 projects_card">
              <div className="project-image-container" style={{overflow: 'hidden'}}>
                  <img 
                    className="card-img-top project-image" 
                    src={project.image} 
                    alt={project.title}
                    style={{
                      height: '200px', 
                      objectFit: 'cover', 
                      width: '100%',
                      transition: 'transform 0.3s ease'
                    }}
                  />
              </div>                 
               <div className="card-body ms-3 me-3 pt-4 ">
                  <p className="lead fw-bold">{project.title}</p>
                  <p className="text-muted">{project.description}</p>
                  <div className="d-flex flex-wrap gap-2 pt-2">
                    {project.stacks.map((stack, stackIndex) => (
                      <span key={stackIndex} className="badge text-dark p-3 fw-medium rounded-5" style={{backgroundColor: '#e6e6e6'}}>
                        {stack}          
                      </span>
                    ))}
                  </div>
                  <hr />
                  <div className="button d-flex">
                    <a className="nav-link align-items-center view_project_button" href={project.link} target="_blank">
                      <span> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
                          <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
                        </svg>
                      </span>
                      <span className="ms-2 fw-medium">
                        View Project
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))} 
        </div>

      </div>
    </div>
  )
}