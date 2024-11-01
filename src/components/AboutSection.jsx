import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './AboutSection.module.css';

const AboutSection = () => {
  return (
    <section className={styles.colorlibAbout} data-section="about">
      <Container className={styles.colorlibNarrowContent}>
        <Row>
          <Col md={12}>
            <Row className={`${styles.rowBottomPaddedSm} animate-box`} data-animate-effect="fadeInLeft">
              <Col md={12}>
                <div className={styles.aboutDesc}>
                  <span className={styles.headingMeta}>Professional Summary About Myself</span>
                  <h2 className={styles.colorlibHeading}>Who Am I?</h2>
                  <p>
                    <strong>Hi, I'm Samuel Nkrumah Bonsu.</strong> I am a likable and dedicated IT consultant, Coordinator,
                    Farm Manager, and Artificial Intelligence Officer with over 16 years of experience in computer maintenance,
                    developing and maintaining applications for business needs, and more than 8 years as a Crop Pathologist.
                    I specialize in studying plant diseases and their various aspects, such as the organisms and environmental
                    conditions that cause disease in plants, the mechanisms by which these factors cause disease, and the
                    interactions between these causal agents and the plant.
                  </p>
                  <p>
                    I am eager to offer my superb analytical and computer skills to help institutions or companies grow their client base.
                    In previous roles, I have been recognized for achieving top company-wide quality satisfaction and boosting client
                    satisfaction ratings. I am confident in my ability to provide dedicated services and contribute to the success of
                    any organization. My background includes expertise as a Crop Pathologist, Cloud Engineer, Crypto Currency Trader,
                    Freight Forwarder, Computer Application Technology Educator, Computer System Engineer, and Frontend Developer.
                    I am a self-starter, quick learner, and able to work under pressure.
                  </p>
                </div>
              </Col>
            </Row>

            <Row>
              <Col md={3} className="animate-box" data-animate-effect="fadeInLeft">
                <div className={`${styles.services} ${styles.color1}`}>
                  <span className={styles.icon2}><i className="icon-bulb"></i></span>
                  <h3>Computer Hardware, Software & Networking Engineer</h3>
                </div>
              </Col>
              <Col md={3} className="animate-box" data-animate-effect="fadeInRight">
                <div className={`${styles.services} ${styles.color2}`}>
                  <span className={styles.icon2}><i className="icon-globe-outline"></i></span>
                  <h3>Frontend Developer</h3>
                </div>
              </Col>
              <Col md={3} className="animate-box" data-animate-effect="fadeInTop">
                <div className={`${styles.services} ${styles.color3}`}>
                  <span className={styles.icon2}><i className="icon-data"></i></span>
                  <h3>Artificial Intelligence & Cyber Security</h3>
                </div>
              </Col>
              <Col md={3} className="animate-box" data-animate-effect="fadeInBottom">
                <div className={`${styles.services} ${styles.color4}`}>
                  <span className={styles.icon2}><i className="icon-phone3"></i></span>
                  <h3>Crop Pathologist</h3>
                </div>
              </Col>
            </Row>

            <Row>
              <Col md={12} className="animate-box" data-animate-effect="fadeInLeft">
                <div className={styles.hire}>
                  <h2>
                    I am happy to let you know me <br /> that I have 16 years of experience in computer and IT-related fields, plus 8 years
                    of experience in Crop Pathology!
                  </h2>
                  <Button href="#" className={styles.btnHire}>Hire me</Button>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
