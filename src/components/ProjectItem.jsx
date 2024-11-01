// ProjectItem.js
import React from 'react';
import styles from './WorkSection.module.css';
import { FaShareAlt, FaEye, FaHeart } from 'react-icons/fa';

const ProjectItem = ({ backgroundImage, title, category, views, likes }) => (
  <div className="col-md-6 mb-4">
    <div className={`${styles.projectCard}`} style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className={styles.desc}>
        <h3><a href="work.html">{title}</a></h3>
        <span>{category}</span>
        <p className="icon d-flex">
          <span><a href="#"><FaShareAlt /></a></span>
          <span><a href="#"><FaEye /> {views}</a></span>
          <span><a href="#"><FaHeart /> {likes}</a></span>
        </p>
      </div>
    </div>
  </div>
);

export default ProjectItem;
