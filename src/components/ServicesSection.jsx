import React from "react";
import { FaLightbulb, FaDatabase, FaMobileAlt, FaLayerGroup } from "react-icons/fa";
import styles from "./Services.module.css";

const Services = () => {
  const servicesData = [
    {
      icon: <FaLightbulb />,
      title: "Innovative Ideas",
      description:
        "Collaborated with clients to maintain relationships and provide thorough support and guidance. Developed financial planning strategies and solutions through evaluation of finances.",
      color: styles.color1,
    },
    {
      icon: <FaDatabase />,
      title: "Software",
      description:
        "Supervised, upgraded, configured, and installed server software and backup systems, ensuring data security and preventing data loss.",
      color: styles.color2,
    },
    {
      icon: <FaMobileAlt />,
      title: "Application",
      description:
        "Proficient in Microsoft Office applications and skilled in professionally imparting knowledge to others.",
      color: styles.color3,
    },
    {
      icon: <FaLayerGroup />,
      title: "Graphic Design",
      description:
        "Experienced in CorelDraw, Photoshop, and traditional design methods, ensuring quality and creativity in graphic design.",
      color: styles.color4,
    },
    {
      icon: <FaDatabase />,
      title: "Data Management",
      description:
        "Experienced in handling server software and securing data, preventing loss and maintaining integrity.",
      color: styles.color5,
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile App Development",
      description:
        "Proficient in designing, installing, and configuring mobile software, enhancing user experience and performance.",
      color: styles.color6,
    },
  ];

  return (
    <section className={styles.colorlibServices} data-section="services">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <span className={styles.headingMeta}>What I do?</span>
            <h2 className={styles.colorlibHeading}>Here are some of my expertise</h2>
          </div>
        </div>
        <div className="row pt-4">
          {servicesData.map((service, index) => (
            <div className="col-md-4 text-center" key={index}>
              <div className={`${styles.services} ${service.color}`}>
                <span className={styles.icon}>{service.icon}</span>
                <div className={styles.desc}>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
