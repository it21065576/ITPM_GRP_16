import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import '../../Styles/Slider.css'



const fadeImages = [
  {
    url: 'Robots.jpg',
    caption: 'First Slide'
  },
  {
    url: 'plntbtn1.jpg',
    caption: 'Second Slide'
  },
  // {
  //   url: 'tulip.jpg',
  //   caption: 'Third Slide'
  // }
];

const properties = {
  duration: 1000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
};

const AdSlideShow = () => {
  return (
    <div className="slideMain">
      <center>
        <div className="slide-container">
          <Fade {...properties}>
            {fadeImages.map((fadeImage, index) => (
              <div className="each-fade" key={index} >
                <div className="image-container">
                  <img src={require(`../../Images/${fadeImage.url}`)} style={{ marginTop: '20px', width: '50%', height: '50%' }} />
                  {/* <img src={require(`../Images/${fadeImage.url}`)} width='50%' height='50%' style={{ marginTop: '20px', borderRadius: "10px" }} /> */}
                </div>
                <div style={{ padding: '5px' }}>
                  <h3>{fadeImage.caption}</h3>
                </div>
              </div>
            ))}
          </Fade>
        </div>
      </center>
    </div>
  )
}

export default AdSlideShow