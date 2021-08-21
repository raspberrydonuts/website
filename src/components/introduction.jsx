import React, { Component } from 'react'

export default class Introduction extends Component {
  render() {
    return <Intro />
  }
}

function Intro(props) {
  return <DesktopIntro />
}

function DesktopIntro(props) {
  return (
    <div>
      <section id="colorlib-hero" className="js-fullheight" data-section="home">
        <div className="flexslider js-fullheight">
          <ul className="slides">
            <li style={{backgroundImage: 'url(images/img_bg1.jpeg)'}}>
              <div className="overlay" />
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                    <div className="slider-text-inner js-fullheight">
                      <div className="desc" style={{marginLeft: '40vw'}} >
                        <h1 style={{textShadow: '1px 1px #000000'}}  >welcome</h1>
                        {/* <h1 style={{marginTop: '33vh', textShadow: '1px 1px #000000'}}  >Hey, <br />I'm Jared</h1> */}
                        <p style={{textShadow: '1px 1px #000000'}}><a className="btn btn-primary btn-learn" href="https://github.com/raspberrydonuts/resume/blob/main/resume.pdf" target="_blank" rel="noopener noreferrer">View CV</a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li style={{backgroundImage: 'url(images/img_bg2.jpeg)'}}>
              <div className="overlay" />
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                    <div className="slider-text-inner">
                      <div className="desc" style={{marginLeft: '40vw'}} >
                        <h1 style={{textShadow: '1px 1px #000000'}}  >scroll down</h1>
                        {/* <h1 style={{marginTop: '33vh', textShadow: '1px 1px #000000'}}  >I love building<br /> things</h1> */}
                        <p style={{textShadow: '1px 1px #000000'}}><a className="btn btn-primary btn-learn" href="https://github.com/raspberrydonuts" target="_blank" rel="noopener noreferrer">View Projects</a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}