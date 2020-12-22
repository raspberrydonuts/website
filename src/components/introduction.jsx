import React, { Component } from 'react'

export default class Introduction extends Component {
  render() {
    return <Intro />
  }
}

function Intro(props) {
  const [width, setWidth] = React.useState(window.innerWidth);
  if (width < 800) {
    return <MobileIntro />;
  } else {
    return <DesktopIntro />;
  }
}

function DesktopIntro(props) {
  return (
    <div>
      <section id="colorlib-hero" className="js-fullheight" data-section="home">
        <div className="flexslider js-fullheight">
          <ul className="slides">
            <li style={{backgroundImage: 'url(images/img_bg.jpeg)'}}>
              <div className="overlay" />
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                    <div className="slider-text-inner js-fullheight">
                      <div className="desc">
                        <h1>Hey, <br />I'm Jared</h1>
                        <p><a className="btn btn-primary btn-learn" href="https://github.com/raspberrydonuts/resume/blob/main/resume.pdf" target="_blank" rel="noopener noreferrer">View CV</a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li style={{backgroundImage: 'url(images/img_bg.jpeg)'}}>
              <div className="overlay" />
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                    <div className="slider-text-inner">
                      <div className="desc" >
                        <h1>I love building<br /> things</h1>
                        <p><a className="btn btn-primary btn-learn" href="https://github.com/raspberrydonuts" target="_blank" rel="noopener noreferrer">View Projects</a></p>
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

function MobileIntro(props) {
  return (
    <div>
      <section id="colorlib-hero" className="js-fullheight" data-section="home">
        <div className="flexslider js-fullheight">
          <ul className="slides">
            <li style={{backgroundImage: 'url(images/img_bg.jpeg)'}}>
              <div className="overlay" />
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                    <div className="slider-text-inner js-fullheight">
                      <div style={{marginTop: '300px'}} className="desc">
                        <h1 style={{textAlign: 'left'}} >Hey, <br />I'm Jared</h1>
                        {/* <p><a style={{width: '100px', marginLeft: '-110px'}} className="btn btn-primary btn-learn" href="https://github.com/raspberrydonuts/resume/blob/main/resume.pdf" target="_blank" rel="noopener noreferrer">View CV</a></p> */}
                        <p><a style={{width: '30vw', float:'left'}} className="btn btn-primary btn-learn" href="https://github.com/raspberrydonuts/resume/blob/main/resume.pdf" target="_blank" rel="noopener noreferrer">View CV</a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li style={{backgroundImage: 'url(images/img_bg.jpeg)'}}>
              <div className="overlay" />
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                    <div className="slider-text-inner">
                      <div style={{marginTop: '300px'}} className="desc" >
                        <h1 style={{textAlign: 'left'}} >I love building<br /> things</h1>
                        {/* <p><a style={{width: '150px', marginLeft: '-60px'}} className="btn btn-primary btn-learn" href="https://github.com/raspberrydonuts" target="_blank" rel="noopener noreferrer">View Projects</a></p> */}
                        <p><a style={{width: '40vw', float:'left'}} className="btn btn-primary btn-learn" href="https://github.com/raspberrydonuts" target="_blank" rel="noopener noreferrer">View Projects</a></p>
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
