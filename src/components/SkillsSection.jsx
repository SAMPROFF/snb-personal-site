import React from "react";
import styles from "./Skills.module.css";

const Skills = () => {
  const skillsData = [
    { name: "Photoshop", percentage: 75, color: "color1" },
    { name: "jQuery", percentage: 60, color: "color2" },
    { name: "HTML5", percentage: 85, color: "color3" },
    { name: "CSS3", percentage: 90, color: "color4" },
    { name: "Artificial Intelligence", percentage: 70, color: "color5" },
    { name: "Python", percentage: 80, color: "color6" },
  ];

  const specialties = [
    "Crop Pathologist",
    "Trainer Mentoring",
    "Network Engineering",
    "Microsoft Office Application",
    "Hardware & Software Installation",
    "ICT System Programming",
    "Data Backups",
    "System Maintenance",
    "Microsoft Business Intelligence Development",
    "Database Development",
    "Database: Oracle, SQL Server, MongoDB",
    "Analytical & Critical Thinking",
    "Interpersonal Communication",
    "Data Entry",
    "Web Design (HTML, JavaScript, Python, React)",
    "Website Maintenance",
    "Google Workspace",
    "Teambuilding",
    "Technical Requirements Analysis",
  ];

  return (
    <section className={styles.colorlibSkills} data-section="skills">
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 text-center">
            <span className={styles.headingMeta}>My Specialty</span>
            <h2 className={styles.colorlibHeading}>My Skills</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p>{specialties.join(", ")}</p>
          </div>

          {skillsData.map((skill, index) => (
            <div className="col-md-6" key={index}>
              <div className={`${styles.progressWrap} animate-box`} data-animate-effect="fadeInLeft">
                <h3>{skill.name}</h3>
                <div className={styles.progress}>
                  <div
                    className={`${styles.progressBar} ${styles[skill.color]}`}
                    role="progressbar"
                    aria-valuenow={skill.percentage}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: `${skill.percentage}%` }}
                  >
                    <span className={styles.percentage}>{skill.percentage}%</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
