// CounterSection.js
import React from 'react';
import CountUp from 'react-countup';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './CounterSection.module.css';
import backgroundImage from '../assets/images/samproff_background_5pic.jpg';

const CounterSection = () => {
  return (
    <section
      id="colorlib-counter"
      className={styles.colorlibCounters}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={styles.overlay}></div>
      <Container className={styles.colorlibNarrowContent}>
        <Row>
          <Col md={3} className="text-center">
            <CountUp start={0} end={309} duration={5} className={styles.counter} />
            <p className={styles.counterLabel}>Cups of coffee</p>
          </Col>
          <Col md={3} className="text-center">
            <CountUp start={0} end={356} duration={5} className={styles.counter} />
            <p className={styles.counterLabel}>Projects</p>
          </Col>
          <Col md={3} className="text-center">
            <CountUp start={0} end={30} duration={5} className={styles.counter} />
            <p className={styles.counterLabel}>Clients</p>
          </Col>
          <Col md={3} className="text-center">
            <CountUp start={0} end={10} duration={5} className={styles.counter} />
            <p className={styles.counterLabel}>Partners</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CounterSection;
