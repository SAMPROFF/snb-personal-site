import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCommentDots, FaSyncAlt } from 'react-icons/fa';

// Import images
import blog1 from '../assets/images/blog-1.jpg';
import blog2 from '../assets/images/blog-2.jpg';
import blog3 from '../assets/images/blog-3.jpg';

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Renovating My Small Gallery',
      date: 'April 14, 2018',
      category: 'Web Design',
      comments: 4,
      description: 'Always just around the corner, feel free to WhatsApp on +39 3505830180.',
      image: blog1,
    },
    {
      id: 2,
      title: 'WordPress for a Beginner',
      date: 'April 14, 2018',
      category: 'Web Design',
      comments: 4,
      description: 'Starting out with web design, feel free to WhatsApp on +39 3505830180.',
      image: blog2,
    },
    {
      id: 3,
      title: 'Make Website from Scratch',
      date: 'October 31, 2024',
      category: 'Inspiration',
      comments: 4,
      description: 'Learning the basics of web design and development from scratch.',
      image: blog3,
    },
  ];

  return (
    <section className="py-5" id="blog">
      <div className="container">
        <div className="row justify-content-center mb-4">
          <div className="col-md-8 text-center">
            <span className="h5 text-muted">Read</span>
            <h2 className="display-5">Recent Blog</h2>
          </div>
        </div>

        <div className="row">
          {blogPosts.map(post => (
            <div className="col-md-4 col-sm-6 mb-4" key={post.id}>
              <div className="card shadow-sm">
                <a href="blog.html" className="card-img-top">
                  <img src={post.image} className="img-fluid" alt={post.title} />
                </a>
                <div className="card-body">
                  <div className="mb-2 text-muted small">
                    <span>{post.date} </span> | <span>{post.category} </span> |{' '}
                    <span>
                      <FaCommentDots /> {post.comments}
                    </span>
                  </div>
                  <h5 className="card-title">
                    <a href="blog.html" className="text-decoration-none text-dark">
                      {post.title}
                    </a>
                  </h5>
                  <p className="card-text">{post.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row">
          <div className="col text-center ">
            <button className="btn btn-primary btn-lg">
              Load more 
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
