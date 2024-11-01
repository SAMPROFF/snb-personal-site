import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import styles from "./Education.module.css";

const Education = () => {
  const educationData = [
    {
      title: "Diploma in Networking Engineering, Diploma in Artificial Intelligence, Diploma in Agricultural Management, Certificate in IT Management and Diploma in Frontend Developer & Cloud Engineer.",
      content: (
        <>
          <p>
            I am also an AWS Certified SysOps Administrator Associate. You can verify my certification by visiting the following link: AWS Certified SysOps Administrator Associate.
          </p>
          <p>
            Furthermore, I have also obtained the AWS Certified Cloud Practitioner certification. You can verify my certification by visiting the following link: AWS Certified Cloud Practitioner.
          </p>
          <p>Am always available both in Europe and Ghana.</p>
        </>
      ),
    },
    {
      title: "Professional Diploma in Artificial Intelligence",
      content: (
        <>
          <p>
            PROFESSIONAL DIPLOMA: ARTIFICIAL INTELLIGENCE, CYBER SECURITY, 04/2021 to 09/2021
            Academy (Austin Peay State University) – USA
          </p>
          <ul>
            <li>Separated this is a professional program</li>
            <li>Additional details about the program</li>
          </ul>
        </>
      ),
    },
    {
      title: "Diploma in Computer Network Engineering",
      content: (
        <p>
          HONOURS DIPLOMA: NETWORKING ENGINEERING, 08/2002 to 09/2004
          NIIT – Kumasi Ghana
        </p>
      ),
    },
    {
      title: "Diploma in Agricultural Management",
      content: (
        <p>
          DIPLOMA: AGRICULTURAL MANAGEMENT, 01/2013 to 06/2014
          Academy (Austin Peay State University) – USA (Online Learning)
        </p>
      ),
    },
    {
      title: "Frontend Developer & Cloud Engineer",
      content: (
        <p>
          FRONTEND DEVELOPER & CLOUD ENGINEER, 11/11/2022 TO 11/08/2023 
          AZUBI AFRICA – AFRICA (Online Learning)
        </p>
      ),
    },
  ];

  return (
    <section className={styles.colorlibEducation} data-section="education">
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 text-center">
            <span className={styles.headingMeta}>Education</span>
            <h2 className={styles.colorlibHeading}>Education</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <Accordion defaultActiveKey="0">
              {educationData.map((edu, index) => (
                <Card key={index} className="mb-3">
                  <Accordion.Toggle as={Card.Header} eventKey={index.toString()}>
                    <h4 className={styles.panelTitle}>{edu.title}</h4>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey={index.toString()}>
                    <Card.Body>{edu.content}</Card.Body>
                  </Accordion.Collapse>
                </Card>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
