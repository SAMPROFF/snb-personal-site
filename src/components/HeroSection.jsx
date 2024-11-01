import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import { FaDownload, FaBriefcase } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import background1 from '../assets/images/samproff_background_2pic.jpg';
import background2 from '../assets/images/samproff_background_pic.jpg';
import styles from './HeroSection.module.css';  // Import the CSS Module

const HeroSection = () => {
  return (
    <section id="colorlib-hero" className={styles.jsFullHeight}>
      <Carousel fade indicators={false} controls={false} interval={5000}> {/* Fade transition & 3-second interval */}
        <Carousel.Item className={styles.jsFullHeight} style={{ backgroundImage: `url(${background1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className={styles.overlay}></div>
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className={`col-md-6 col-sm-12 col-xs-12 text-center ${styles.jsFullHeight} ${styles.sliderText}`}>
                <div className={styles.desc}>
                  <h1>Hi! <br />I'm Samuel Nkrumah Bonsu</h1>
                  <h2>
                    100% Computer Network Engineer, Cloud Engineer, Artificial Intelligence, and Frontend Developer{' '}
                    <a href="https://github.com/samproff/" target="_blank" rel="noopener noreferrer">github.com</a>
                  </h2>
                  <p>
                    <Button variant="primary" className={styles.btnLearn}>
                      Download CV <FaDownload />
                    </Button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item className={styles.jsFullHeight} style={{ backgroundImage: `url(${background2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className={styles.overlay}></div>
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className={`col-md-6 col-sm-12 col-xs-12 text-center ${styles.jsFullHeight} ${styles.sliderText}`}>
                <div className={styles.desc}>
                  <h1>I am <br />An IT Consultant</h1>
                  <h2>
                    100% HTML5 React templates, Computer Network Engineering{' '}
                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer">github.com</a>
                  </h2>
                  <p>
                    <Button variant="primary" className={styles.btnLearn}>
                      View Portfolio <FaBriefcase />
                    </Button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default HeroSection;
