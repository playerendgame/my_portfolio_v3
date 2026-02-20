import resume from '/assets/clyde_resume.pdf';

export default function Experiences() {

  const pageUpperData = {
    title: 'Experience & Resume',
    description: 'My professional journey, educational background, and achievements.',
    title2: 'Work Experience',
    description2: 'A timeline of professional growth and achievement'
  };
  
  const lowerUpperData = {
    title: 'Resume',
    description: 'Complete overview of my education, certifications, and professional qualifications',
  };

  const content = {
    experiences: [
      {
      title: 'GoPrime Technology Corp.',
      description: 'I.T Developer | Fullstack Developer',
      tenure: 'May 2024 - Up to present',
      techStacks: ['HTML', 'CSS', 'Bootstrap', 'Javascript', 'Vue.js', 'React.js', 'PHP', 'Laravel', 'MySql', 'Wordpress', 'Woocommerce', 'Shopify', 'Git', 'DevOps', 'Rest API', '3rd Party API', 'Adobe Suites', 'MS Office Apps' ]
      },
      {
       title: 'EasyPC Computing INC',
       description: 'Graphic Designer',
       tenure: 'July 2021 - July 2023' ,
       techStacks: ['Adobe Photoshop', 'Adobe Illustrator', 'Adobe Premiere Pro', 'MS Office Apps', 'Corel Draw']
      },
      {
       title: 'Great Depot INC',
       description: 'Specialist I.T and Creative Services',
       tenure: 'June 2020 - April 2021' ,
       techStacks: ['Adobe Photoshop', 'Adobe Premiere Pro', 'MS Office Apps', 'Corel Draw', 'IT Support', 'IT Infrastructure', 'Server Set up', 'PFSense Firewall', 'Active Directory']
      },
      {
       title: 'Omniworx INC',
       description: 'BMS Operator',
       tenure: 'Oct 2019 - June 2020' ,
       techStacks: ['Building Management System', 'Automation', 'Heavy Machineries', 'GUI']
      },
      {
       title: 'Designer Blooms',
       description: 'I.T Staff/Graphic Artist',
       tenure: 'Dec 2018 - May 2019' ,
       techStacks: ['Adobe Photoshop', 'Adobe Premiere Pro', 'MS Office Apps', 'Corel Draw', 'IT Support', 'IT Infrastructure', 'Wordpress Admin Management']
      },
      {
       title: 'Suntrust Properties INC',
       description: 'Property Specialist',
       tenure: 'Jan 2018 - Nov 2018' ,
       techStacks: ['Sales', 'Online Selling', 'MS Apps']
      },
      {
       title: 'Ink N Print',
       description: 'Graphic Artist',
       tenure: 'May 2017 - Oct 2017' ,
       techStacks: ['Adobe Photoshop', 'Corel Draw', 'Printing', 'Designing', 'Packaging']
      },

    ],
  };

  const education = {
    educationLists: [
      {
        school: 'KodeGo PH',
        course: 'Fullstack Web Development Course',
        tenure: 'Sept 2023 - Feb 2024',
        desc: 'Intensive bootcamp covering modern web technologies'
      },
      {
        school: 'Lyceum of the Philippines University',
        course: 'BS Information Technology',
        tenure: '2014 - 2016'
      },
      {
        school: 'Christ the King College',
        course: 'High School',
        tenure: '2010 - 2014'
      }
    ]
  };

  const certifications = {
    certificationLists: [
      {
        title: 'KodeGo - Fullstack Web Development Graduate',
        file_link: 'assets/certificate.pdf'
      }
    ]
  }


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
          <source src="../assets/video_bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="container">
            <h1 className="display-4 fw-bold">{pageUpperData.title}</h1>
            <p className="text-muted">{pageUpperData.description}</p>
        </div>
      </div>

      {/* experiences */}
      <div className="container" style={{marginTop: '5rem', marginBottom: '5rem'}} data-aos="fade-up">
         <h1 className="display-6 fw-bold">{pageUpperData.title2}</h1>
          <p className="text-muted">{pageUpperData.description2}</p>
            <div className="row pt-5 ms-0 me-0 ms-md-5 me-md-5">
              {content.experiences.map((experience, index) => (

                <div className="col-md-12 py-3" key={index}>
                  <div className="card h-100 projects_card">       
                    <div className="card-header pt-3">
                        <div className="header_content d-flex align-items-center justify-content-between ">
                          <p className="lead fw-bold">{experience.title}</p>
                          <span className="badge p-3 rounded-5" style={{backgroundColor: '#e5f6fd', color: '#3a98cd'}}>
                            <small className="fw-bold">{experience.tenure}</small>
                          </span>
                        </div>
                    </div>         
                    <div className="card-body ms-3 me-3 pt-4 ">
                      <p className="fw-medium" style={{color: '#3a98cd'}}>{experience.description}</p>
                    </div>
                    <div className="card-footer p-3">
                      <p className="fw-medium">Skillsets</p>
                      <div className="d-flex flex-wrap gap-2">
                          {experience.techStacks.map((techStack, index) => (
                            <span key={index} className="badge fs-6 p-2 text-dark fw-medium rounded-5" style={{backgroundColor: '#e5f6fd'}}>
                              <small className="fw-medium" style={{ color: '#3a98cd'}}>
                                {techStack}     
                              </small>
                            </span>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
      </div>
      <hr className='m-auto' style={{width: '90rem'}}></hr>

      {/* education & certifications */}
      <div className="container" style={{marginTop: '5rem', marginBottom: '3rem'}} data-aos="fade-up">
         <h1 className="display-6 fw-bold">{lowerUpperData.title}</h1>
          <p className="text-muted">{lowerUpperData.description}</p>

          <div className="row gx-5 ms-0 me-0 ms-md-5 me-md-5">

              {/* educations */}
              <div className="col-md-6 pt-5">
                <h1 className=" h5 fw-bold">Education</h1>

                {education.educationLists.map((educationList, index) => (
                  <div className="col-md-12 py-3" key={index}>
                    <div className="card h-100 projects_card">       
                      <div className="card-header pt-3">
                           <div className="header_content d-flex align-items-center justify-content-between ">
                          <p className="lead fw-bold">{educationList.school}</p>
                          <span className="badge p-3 rounded-5" style={{backgroundColor: '#e5f6fd', color: '#3a98cd'}}>
                            <small className="fw-bold">{educationList.tenure}</small>
                          </span>
                        </div>
                      </div>         
                      <div className="card-body ms-3 me-3 pt-4 ">
                        <p className="fw-medium fs-5" style={{color: '#3a98cd'}}>{educationList.course}</p>
                        <p className="fw-medium">{educationList.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* certifications */}
              <div className="col-md-6 pt-5">
                <h1 className=" h5 fw-bold">Certifications</h1>

                {certifications.certificationLists.map((certificationList, index) => (
                  <div className="col-md-12 py-3" key={index}>
                    <div className="card h-100 projects_card">              
                      <div className="card-body ms-3 me-3 pt-4 align-items-center d-flex">
                        <p className="fw-medium fs-6 ms-3" style={{color: '#3a98cd'}}>{certificationList.title}</p>
                      </div>
                      <div className="card-footer">
                        <div className="footer_content">
                            <div className="button d-flex">
                              <a className="nav-link align-items-center view_project_button" href={certificationList.file_link} target="_blank" rel="noopener noreferrer">
                                <span> 
                                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
                                    <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
                                  </svg>
                                </span>
                                <span className="ms-2 fw-medium">
                                  Download Certificate
                                </span>
                              </a>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
          </div>    
      </div>
      
      {/* donwload full resumse */}
      <div className="container pb-5" data-aos="fade-up">
        <div className="row align-items-center download_resume_container ms-0 me-0 ms-md-5 me-md-5">
          <div className="col-md-6">
              <h4 className='fw-medium'>Need the Full Resume?</h4>
              <p className='text-muted'>Download my complete resume as a PDF document</p>
          </div>
          <div className="col-md-6 text-center text-md-end">
              <a className="align-items-center btn btn-primary p-2" href={resume} target="_blank" rel="noopener noreferrer">
                <span> 
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
                    <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
                  </svg>
                </span>
                <span className="ms-2 fw-medium">
                  Download Resume
                </span>
              </a>
          </div>
        </div>
      </div>
    </div>
  )
}