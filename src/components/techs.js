import React, { Component } from 'react';
import { Images } from '../components/reusable/image';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

class Techs extends Component {
  render() {
    return (
      <div>
        <Carousel responsive={responsive}>
          <div><Images data-test='img-test' img='https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png' height={200} width={200} /></div>
          <div><Images data-test='img-test' img='https://seeklogo.com/images/N/next-js-logo-7929BCD36F-seeklogo.com.png' height={200} width={200} /></div>
          <div><Images data-test='img-test' img='https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg' height={200} width={200} /></div>
          <div><Images data-test='img-test' img='https://miro.medium.com/max/1200/1*Ahl24GrglQHwFcp5-_B36Q.png' height={200} width={200} /></div>
          <div><Images data-test='img-test' img='https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png' height={200} width={200} /></div>
          <div><Images data-test='img-test' img='https://upload.wikimedia.org/wikipedia/id/a/a9/MySQL.png' height={200} width={200} /></div>
        </Carousel>
      </div>
    );
  }
}

export default Techs;