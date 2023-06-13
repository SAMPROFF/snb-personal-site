import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Learning and practicing from Azubi Africa  <span>2022-present</span></h2>
                        <p>I recently have joined the Azubi Africa Training Institute as a Frontend Developer and AWS in the DevOps team. My major part of the work has been into the field of creating sustainable and flexible CI/CD (Continuous Integration & Continuous Development) plus the use of developing tools like html, css, js and react in web developments. I am also exploring the role of container technology like Docker and container-orchrastation technologies like K8s, Swarm to create industry standard production environments.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Professional Diploma<span>2002-2021</span></h2>
                        <p>I pursued my PROFESSIONAL DIPLOMA in ARTIFICIAL INTELLEGENCE, CYBER SECURITY at
                          Academy Austin PEAY State University  USA within the year space 2021.</p>
                        <p> I graduated with DIPLOMA in AGRICULTURAL MANAGEMENT with the Academy Austin PEAY State University
                          USA Online Learning within the years 2013 to 2014.</p>
                        <p>I I graduated with HONOURS DIPLOMA in NETWORKING ENGINEERING at 
                           NIIT Ghana Kumasi within the years 2002 to 2004.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>IT Management Certificate <span>2015-2015</span></h2>
                        <p>I have completed my IT MANAGEMENT CERTIFICATE with the University of Cape Town GetSmarter South Africa, I have over the years developed interest in solving complex problems of the fundamental physics which helped me to improve my understanding of any problem and also my mathematical skills to actually solve the problems.</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
