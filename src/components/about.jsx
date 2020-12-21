import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About me</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>I'm a computer science graduate student at the University of Minnesota, Twin Cities.</p>
                    <p>I'm curious about software development and engineering designs, life cycle, and management in both industry and academia. I particularly enjoy doing back-end development or anything that involves implementing business logic. Exploring different methods of deploying software, especially with DevOps methodologies, is also interesting to me. Outside of programming, I enjoy watching psychological thriller movies, playing blues guitar, golfing, and cooking.</p>
                    <p>Open to software engineering positions, research opportunities, or cookout invites.</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Here's some of my expertise</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    {/* <i className="icon-bulb" /> */}
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Back End Development </h3>
                    <p>I have experience building microservices and APIs within distributed systems using a variety of languages and frameworks including Python, Java, Spring Boot, and Django.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-cloud-storage" />
                </span>
                <div className="desc">
                    <h3>DevOps</h3>
                    <p>I'm passionate about deploying software utilizing DevOps methodologies with technologies like Gitlab, Drone, AWS, Azure DevOps, Docker, and K8s.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-stack2" />
                </span>
                <div className="desc">
                    <h3>Data Structures & Algorithms</h3>
                    <p>Per my computer science background, I have a strong foundation of various data structures and algorithms.</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
      </div>
    )
  }
}
