import pageTitleVid from '../assets/video_bg.mp4';
import { useEffect } from 'react'


export default function Skills() {


  useEffect(() => {
      window.scrollTo(0,0);
  });

  const pageUpperData = {
    title: 'My Skills',
    description: 'Technical expertise across frontend, backend, and full-stack development.',
    title2: 'Skills & Expertise',
    description2: 'A comprehensive toolkit built through hands-on experience and continuous learning'
  };

  const skillsData = {
    frontend: {
      title: 'Frontend',
      skills: ['HTML', 'CSS', 'Javascript', 'Bootstrap', 'Vue.JS', 'React JS']
    },

    backend: {
      title: 'Backend',
      skills: ['Node.js', 'PHP', 'Laravel', 'PhpMyAdmin', 'MySQL']
    },

    devOps: {
      title: 'Tools & DevOps',
      skills: ['Git', 'Plesk', 'Vercel', 'Github', 'Sourcetree', '3rd Party API', 'Rest API']
    },

    cms: {
      title: 'CMS',
      skills: ['Wordpress', 'Shopify', 'WooCommerce']
    },

    design: {
      title: 'Design & UX',
      skills: ['Adobe Suites', 'Figma', 'Canva', 'Lucidchart', 'Performance', 'SEO', 'Mobile Responsiveness']
    }
  };

  const proficiencies = {
    title: 'Proficiency Levels',
    skills: [
      {
        title: 'React, Vue & Modern Javascripts',
        level: '95%'
      },
      {
        title: 'Fullstack Development',
        level: '90%'
      },
      {
        title: 'UI/UX Design Implementation',
        level: '85%'
      },
      {
        title: 'Database Design & Implementation',
        level: '80%'
      }
    ]
  };
  
  return (
    <div>
      <div className="page_container_title py-5 border-bottom">
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
        <div className="container position-relative">
            <h1 className="display-4 fw-bold">{pageUpperData.title}</h1>
            <p className="text-muted">{pageUpperData.description}</p>
        </div>
      </div>

      <div className="container" style={{marginTop: '5rem', marginBottom: '5rem'}} >
          <h1 className="display-6 fw-bold" data-aos="fade-right">{pageUpperData.title2}</h1>
          <p className="text-muted" data-aos="fade-right">{pageUpperData.description2}</p>


          <div className="row pt-5 ms-0 me-0 ms-md-5 me-md-5" data-aos="fade-up">
            <div className="col-md-6">
                <p className="lead fw-medium">{skillsData.frontend.title}</p>
                <div className="d-flex flex-wrap gap-2 pt-2">
                  {skillsData.frontend.skills.map((skill, index) => (
                    <span key={index} className="badge fs-6 text-dark p-3 fw-medium rounded-5" style={{backgroundColor: '#e6e6e6'}}>
                      {skill}          
                    </span>
                  ))}
                </div>
            </div>


            <div className="col-md-6 pt-5 pt-md-0" data-aos="fade-up">
                <p className="lead fw-medium">{skillsData.backend.title}</p>
                <div className="d-flex flex-wrap gap-2 pt-2">
                  {skillsData.backend.skills.map((skill, index) => (
                    <span key={index} className="badge fs-6 text-dark p-3 fw-medium rounded-5" style={{backgroundColor: '#e6e6e6'}}>
                      {skill}          
                    </span>
                  ))}
                </div>
            </div>

            <div className="col-md-6 pt-5" data-aos="fade-up">
                <p className="lead fw-medium">{skillsData.devOps.title}</p>
                <div className="d-flex flex-wrap gap-2 pt-2">
                  {skillsData.devOps.skills.map((skill, index) => (
                    <span key={index} className="badge fs-6 text-dark p-3 fw-medium rounded-5" style={{backgroundColor: '#e6e6e6'}}>
                      {skill}          
                    </span>
                  ))}
                </div>
            </div>

            <div className="col-md-6 pt-5" data-aos="fade-up">
                <p className="lead fw-medium">{skillsData.cms.title}</p>
                <div className="d-flex flex-wrap gap-2 pt-2">
                  {skillsData.cms.skills.map((skill, index) => (
                    <span key={index} className="badge fs-6 text-dark p-3 fw-medium rounded-5" style={{backgroundColor: '#e6e6e6'}}>
                      {skill}          
                    </span>
                  ))}
                </div>
            </div>

            <div className="col-md-6 pt-5" data-aos="fade-up">
                <p className="lead fw-medium">{skillsData.design.title}</p>
                <div className="d-flex flex-wrap gap-2 pt-2">
                  {skillsData.design.skills.map((skill, index) => (
                    <span key={index} className="badge fs-6 text-dark p-3 fw-medium rounded-5" style={{backgroundColor: '#e6e6e6'}}>
                      {skill}          
                    </span>
                  ))}
                </div>
            </div>
          </div>


          <div className="row pt-5 ms-0 me-0 ms-md-5 me-md-5" data-aos="zoom-in">
              <p className="lead fw-medium">{proficiencies.title}</p>
              
              {proficiencies.skills.map((skill, index) => ( 
                  <div key={index} className="mb-4">

                    <div className="d-flex justify-content-between">
                      <span>{skill.title}</span>
                      <span>{skill.level}</span>
                    </div>

                    <div
                      className="progress"
                      role="progressbar"
                      aria-label= {`${skill.title} proficiency`}
                      aria-valuenow={parseInt(skill.level)}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      
                      <div className="progress-bar" style={{width: skill.level}}>

                      </div>

                    </div>

                  </div>
              ))}
          </div>
      </div>  
    </div>
  )
}