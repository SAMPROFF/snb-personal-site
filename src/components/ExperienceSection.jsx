import React from 'react';
import { FaPen } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from './Experience.module.css'

const ExperienceSection = () => {
  const experiences = [
    {
      title: 'COMPUTER APPLICATION TECHNOLOGY EDUCATOR',
      period: '2014-2018',
      description:
        'Taught and managed groups of learners on computer application technology from grade 2 to grade 12, achieving a 100% pass rate in their final matric exams. Taught and managed groups of learners on life skills and Business studies from grade 5 to grade 8. Performed periodic maintenance of the school\'s computers, printers, projectors, website, and network to ensure proper fast internet connectivity. Evaluated live broadcasts to assess signal strength, content, and compliance with FCC standards during examination periods. Assisted with data annotation work and data preparation, analysis, visualization, and modeling tasks. Verified compliance with data retention requirements and troubleshooter data-related problems. Formulated techniques for quality data collection to meet expected targets.',
      iconClass: 'bg-primary'
    },
    {
      title: 'Examiner at IEB South Africa',
      period: '2014-2018',
      description:
        'Evaluated, tabulated, and coordinated final examinations on computer application technology (CAT) subject (Theory and Practical) to ensure accurate results. Prepared final marked reports for the head of the CAT subject.',
      iconClass: 'bg-secondary'
    },
    {
      title: 'IT MANAGER & FREIGHT FORWARDER OFFICE At Delta Shipping Co.Ltd Ghana',
      period: '2011-2012',
      description:
        'Processed goods for inspections as a Field Clerk Freight forwarder. Managed network and system performance, conducted troubleshooting and maintenance. Oversaw IT department operations and resolved technology issues. Supported physical equipment, enhancing operational efficiency.',
      iconClass: 'bg-success'
    },
    {
      title: 'NETWORK ENGINEER & TECHNICIAN At Shalom FM Ghana',
      period: '2004-2009',
      description:
        'Coordinated information between the newsroom and the studio hall. Managed and tracked problem resolution and escalation processes. Provided network support services and installed route-based IP network solutions. Configured, managed, VoIP, and multimedia systems.',
      iconClass: 'bg-danger'
    },
    {
      title: 'NETWORK TECHNICIAN At Sawtel Ghana',
      period: '2010-2011',
      description:
        'Installed satellites and configured wireless and non-wireless connectivity solutions. Maintained quality assurance and customer satisfaction objectives. Organized work to meet production goals and completed job reports. Conducted tests and evaluations of components and systems.',
      iconClass: 'bg-info'
    }
  ];

  return (
    <section className="py-5" id="experience">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <span className="h5 text-muted">Experience</span>
            <h2 className="display-5">Work Experience</h2>
          </div>
        </div>
        
        <div className="row mt-4">
          <div className="col">
            <div className="timeline-centered">
              {experiences.map((exp, index) => (
                <div className={`${style.block} timeline-entry`} key={index}>
                  <div className="timeline-entry-inner">
                    <div className={`timeline-icon ${exp.iconClass} text-white`}>
                      <FaPen />
                    </div>
                    <div className={`${style.title} timeline-label`}>
                      <h4>
                        <span>{exp.title}</span> <span className={`${style.time} text-muted`}>{exp.period}</span>
                      </h4>
                      <p>{exp.description}</p>
                    </div>
                  </div>
                </div>
              ))}
              <div className="timeline-entry begin">
                <div className="timeline-entry-inner">
                  <div className="timeline-icon bg-light"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
