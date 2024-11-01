import React from 'react';
import styles from './WorkSection.module.css'
import { FaShareAlt, FaEye, FaHeart, FaSyncAlt } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import images from ../assets/image
import img1 from '../assets/images/img-1.jpg';
import img2 from '../assets/images/img-2.jpg';
import img3 from '../assets/images/img-3.jpg';
import img4 from '../assets/images/img-4.jpg';
import img5 from '../assets/images/img-5.jpg';
import img6 from '../assets/images/samproff_tech_pic.jpg';

const WorkSection = () => {
  const projects = [
    { id: 1, title: 'Work 01', category: 'Website', image: img1 },
    { id: 2, title: 'Work 02', category: 'Animation', image: img2 },
    { id: 3, title: 'Work 03', category: 'Illustration', image: img3 },
    { id: 4, title: 'Work 04', category: 'Application', image: img4 },
    { id: 5, title: 'Work 05', category: 'Graphic, Logo', image: img5 },
    { id: 6, title: 'Work 06', category: 'Web Design', image: img6 }
  ];

  return (
    <section className="py-5" id="work">
      <div className="container">
        <div className="row justify-content-center mb-4">
          <div className="col-md-8 text-center">
            <span className="h5 text-muted">My Work</span>
            <h2 className="display-5">Recent Work</h2>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col text-center">
            <p className="work-menu">
              <span><a href="#" className="active text-decoration-none">Graphic Design</a></span> {' | '}
              <span><a href="#" className="text-decoration-none">Web Design</a></span> {' | '}
              <span><a href="#" className="text-decoration-none">Software</a></span> {' | '}
              <span><a href="#" className="text-decoration-none">Apps</a></span>
            </p>
          </div>
        </div>

        <div className="row">
          {projects.map(project => (
            <div className={`col-md-6 mb-4`} key={project.id}>
              <div className={`${styles.box} project`} style={{ backgroundImage: `url(${project.image})` }}>
                <div className="desc bg-dark bg-opacity-50 p-3 rounded h-100">
                  <h3><a href="work.html" className="text-white text-decoration-none">{project.title}</a></h3>
                  <span className="text-muted">{project.category}</span>
                  <p className="icon d-flex gap-2 mt-2">
                    <span><a href="#" className="text-white"><FaShareAlt /></a></span>
                    <span><a href="#" className="text-white"><FaEye /> 100</a></span>
                    <span><a href="#" className="text-white"><FaHeart /> 49</a></span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row">
          <div className="col text-center">
            <button className="btn btn-primary btn-lg">
              Load more 
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
