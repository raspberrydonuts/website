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
                                            <h2 className="colorlib-heading">I am a </h2>
                                            <p style={{color: "#999999"}}>software engineer, blues guitarist, cinephile, amature street photographer, casual gamer, hodophile, and gourmand</p>
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
                        <div className="row row-pt-md" >
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-6" style={{backgroundColor: "#1F1B24"}}>
                                    <span className="icon">
                                        {/* <i className="icon-bulb" /> */}
                                        <i className="icon-data" />
                                    </span>
                                    <div className="desc">
                                        <h3>Back End Development </h3>
                                        <p style={{color: "#999999"}}>Building microservices on top of distributed systems with large scales of data using a variety of languages and frameworks including Python, Java, Scala, Spring Boot, and Django.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-5" style={{backgroundColor: "#1F1B24"}}>
                                    <span className="icon">
                                        <i className="icon-code" />
                                    </span>
                                    <div className="desc">
                                        <h3>Front End Development</h3>
                                        <p style={{color: "#999999"}}>Developing user interfaces, interactive data visualizations, and incorporating UX design patterns and philosophies with Angular, React, and Vue across multiple industry standards</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-3" style={{backgroundColor: "#1F1B24"}}>
                                    <span className="icon">
                                        <i className="icon-banknote" />
                                    </span>
                                    <div className="desc">
                                        <h3>Finance</h3>
                                        <p style={{color: "#999999"}}>Strong knowledge in fixed income including portfolio management and optimization, risk monitoring, and liquidity analysis. Solid foundations in accounting, basic finance, management, and marketing</p>
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
