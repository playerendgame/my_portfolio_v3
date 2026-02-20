import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import pageTitleVid from '../assets/video_bg.mp4';


export default function Contact() {
  const [state, handleSubmit] = useForm("xykdwrao");
  
  const pageUpperData = {
    title: 'Contact Me',
    description: `Have a project in mind or want to collaborate? I'd love to hear from you.`,
  };

  if (state.succeeded) {
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
          <div className="container">
            <h1 className="display-4 fw-bold">{pageUpperData.title}</h1>
            <p className="text-muted">{pageUpperData.description}</p>
          </div>
        </div>
        <div className="container py-5">
          <div className="row">
            <div className="col-md-12">
              <div className="alert alert-success" role="alert">
                <h4 className="alert-heading">Message Sent!</h4>
                <p>Thank you for your message. I'll get back to you soon!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

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
            <source src="../assets/video_bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        <div className="container">
          <h1 className="display-4 fw-bold">{pageUpperData.title}</h1>
          <p className="text-muted">{pageUpperData.description}</p>
        </div>
      </div>

      <div className="container py-5" data-aos="fade-up">
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-4 mb-4 mb-md-0">
                <div className="contact-info">
                  <h3 className="h5 fw-bold mb-3">Get in Touch</h3>
                  <div className="d-flex align-items-center mb-3">
                    <div className="me-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#3a98cd" viewBox="0 0 16 16">
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="mb-0 fw-medium">soapmac19@yahoo.com.ph</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="me-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#3a98cd" viewBox="0 0 16 16">
                        <path d="M8 1c1.573 0 3.018.29 4.304.823a.5.5 0 0 1 .396.482l.293 2.933a.5.5 0 0 1-.396.542c-.498.095-.968.212-1.403.352l-1.175-.792a.5.5 0 0 1-.106-.765l1.5-1.5a.5.5 0 0 0-.708-.708l-1.5 1.5a.5.5 0 0 1-.765-.106l-.792-1.175c.14-.435.257-.905.352-1.403a.5.5 0 0 1 .542-.396l2.933.293a.5.5 0 0 1 .482.396A7.96 7.96 0 0 1 8 2a7.96 7.96 0 0 1-1.078-.085.5.5 0 0 1-.396-.482L6.82 0H9.5a.5.5 0 0 1 .485.37l.015.065a7.95 7.95 0 0 1 .802 1.535.5.5 0 0 1-.396.542l-2.933.293a.5.5 0 0 1-.482-.396A7.96 7.96 0 0 1 8 1Z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="mb-0 fw-medium">Available for work</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="col-md-8">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <form onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <div className="form-group">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input 
                              className="form-control" 
                              type="text" 
                              id="name" 
                              name="name" 
                              required 
                            />
                          </div>
                        </div>
                        <div className="col-md-6 mb-3">
                          <div className="form-group">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input 
                              className="form-control" 
                              type="email" 
                              id="email" 
                              name="email" 
                              required 
                            />
                          </div>
                        </div>
                        <div className="col-md-12 mb-4">
                          <div className="form-group">
                            <label htmlFor="message" className="form-label">Your Message</label>
                            <textarea 
                              className="form-control" 
                              id="message" 
                              name="message" 
                              rows="5"
                              required
                            ></textarea>
                          </div>
                        </div>
                      </div>
                      
                      {/*Show loading state*/}
                      <div className="submit_button">
                        <button 
                          type="submit" 
                          className="btn btn-primary" 
                          disabled={state.submitting}
                        >
                          {state.submitting ? 'Sending...' : 'Send Message'}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}