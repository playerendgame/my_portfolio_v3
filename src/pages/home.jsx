import ClydeImage from '../assets/clyde_img.jpg'
import ClydeImage1 from '../assets/clyde_img1.jpg'


export default function Home() {

    const pageData = {
        title: 'Clyde Timothy Sumabat',
        subTitle: 'Full-Stack Web Developer',
        description: 'A former Graphic Artist with 4 years in the industry. And also a proud KodeGo Graduate, after the bootcamp, I have learned frontend and backend technologies, and have professional experiences creating real world web applications',
    };

    const animateCounter = (el, endValue, suffix = '') => {
        if(el && !el.dataset.animated){
            el.dataset.animated = true;
            let startValue = 0;
            const duration = 1000;
            const increment = endValue / (duration / 16);

            const timer = setInterval(() => {
                startValue += increment;
                if(startValue >= endValue){
                    clearInterval(timer);
                    startValue = endValue;
                    el.textContent = Math.floor(startValue) + suffix;
                }else {
                    el.textContent = Math.floor(startValue) + suffix;
                }
            }, 16);

        }
    };

    const observeCounters = (el, endValue, suffix = '') => {
        if (!el) return;
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target, endValue, suffix);
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.5 
        });

        observer.observe(el);
    };


    return (
        <div>
            {/* Hero Section */}
            <div className="container py-5">
                <div className="row align-items-center">
                    <div className="col-md-6 order-md-0 order-2" data-aos="fade-up">
                        <h1 className="display-6 fw-bold">{pageData.title}</h1>
                        <p className="lead fw-medium pt-2" style={{ color: '#33a5e2'}}>{pageData.subTitle}</p>

                        <p className="text-muted">
                           {pageData.description}
                        </p>

                        {/* Social icons */}
                        <div className='social_icons d-flex' >
                            <a href="https://github.com/playerendgame" className='nav-link p-2 rounded-circle border' style={{ backgroundColor: '#fffcff' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#0da6f2" class="bi bi-github" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                                </svg>
                            </a>
                            <a href="https://www.linkedin.com/in/clyde-timothy-sumabat-6173a7172/" className='nav-link p-2 rounded-circle ms-3 border' style={{ backgroundColor: '#fffcff' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#0da6f2" class="bi bi-linkedin" viewBox="0 0 16 16">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                                </svg>
                            </a>
                            <a href="https://www.facebook.com/playerendgame91/" className='nav-link p-2 rounded-circle ms-3 border' style={{ backgroundColor: '#fffcff' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#0da6f2" class="bi bi-facebook" viewBox="0 0 16 16">
                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                                </svg>
                            </a>
                            <a href="/contacts" className='nav-link p-2 rounded-circle ms-3 border' style={{ backgroundColor: '#fffcff' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#0da6f2" class="bi bi-envelope" viewBox="0 0 16 16">
                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                                </svg>
                            </a>
                        </div>

                        {/* Buttons */}
                        <div className='buttons_container d-flex pt-5'>
                            <a href="/my_portfolio_v3/experiences" className='learnMoreBtn btn btn-lg text-light btn-primary'>Learn More</a>
                            <a href="/my_portfolio_v3/contacts" className='getInTouchBtn btn btn-lg ms-2'>Get In Touch</a>

                        </div>
                    </div>
                    <div data-aos="zoom-in" className="col-md-6 d-flex justify-content-center order-md-0 order-1 pb-md-0 pb-4">
                        <img className='img-fluid rounded-circle w-75 my_image' src={ ClydeImage } />
                    </div>
                </div>
            </div>
            
            <hr className='m-auto' style={{width: '80rem'}}></hr>

            {/* about me */}
            <div className="container" style={{paddingTop: '7rem', paddingBottom: '10rem'}}>
                <div className="row align-items-center gx-5">
                    <div className="col-md-6 order-md-0 order-2" data-aos="fade-right">
                        <h1 className="display-5 fw-bold mb-4">About Me</h1>
                        <p className='text-muted mb-4'>I’m a <span className='fw-bold'>KodeGo PH</span> graduate with a unique professional evolution: I spent 4 years as a Graphic Designer mastering the visual language of Adobe and CorelDRAW before diving head-first into the world of code.</p>
                        
                        <p className='text-muted '>For the last 2 years, I’ve been building the web from both ends. 
                            I specialize in crafting high-performance <span className='fw-bold'>frontend interfaces using Vue.js and React.js, </span> 
                            writing semantic and standard <span className='fw-bold'>HTML/CSS for SEO-friendly builds, </span>
                            and deploying robust <span className='fw-bold'>e-commerce solutions via WordPress and WooCommerce.</span>
                        </p>

                        <p className='text-muted '>
                            My experience goes beyond just "making things pretty." 
                            I’ve architected <span className='fw-bold'>ERP systems</span> (Laravel + Vue.js), updated complex <span className='fw-bold'>CRM features, </span>
                            and managed full-scale database logic with <span className='fw-bold'>MySQL. </span>
                            I don’t just build pages; I build systems that work for you.
                        </p>
                    </div>

                    <div className="col-md-6 order-md-0 order-1 pb-md-0 pb-4" data-aos="fade-up">
                        <div className="image_container d-flex justify-content-center">
                            <img className='img-fluid w-25 rounded-circle clydeImageContainer' src={ ClydeImage1 } />
                        </div>
                        <div className="row pt-5">
                            <div className="col-xl-4 mb-md-0 mb-4">
                                <div className="card h-100" style={{padding: '2rem'}}>
                                    <div className="card-body p-0">
                                        <p className='fw-medium' style={{color: '#8b7f84'}}>Web Developer Experience</p>
                                        <p className='display-6 fw-bold' style={{color: '#22a0dc'}} ref={el => observeCounters(el, 2, '+')}>0+</p>
                                        <p className='fw-medium' style={{color: '#8b7f84'}}>Years</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 mb-md-0 mb-4">
                                <div className="card h-100" style={{padding: '2rem'}}>
                                    <div className="card-body p-0">
                                        <p className='fw-medium' style={{color: '#8b7f84'}}>Projects Completed</p>
                                        <p className='display-6 fw-bold' style={{color: '#22a0dc'}} ref={el => observeCounters(el, 12, '+')}>0+</p>
                                        <p className='fw-medium' style={{color: '#8b7f84'}}>Successful</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 mb-md-0 mb-4">
                                <div className="card h-100" style={{padding: '2rem'}}>
                                    <div className="card-body p-0">
                                        <p className='fw-medium' style={{color: '#8b7f84'}}>Client Satisfaction</p>
                                        <p className='display-6 fw-bold' style={{color: '#22a0dc'}} ref={el => observeCounters(el, 89, '%')}>0%</p>
                                        <p className='fw-medium' style={{color: '#8b7f84'}}>Happy Clients</p>
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