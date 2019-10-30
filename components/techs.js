import React, { Component } from 'react';
import { Images } from '../components/reusable/image';

class Techs extends Component {
  render() {
    return (
      <div className="row">
        <Images img='https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png' height='300px' width='300px' />
        <Images img='https://seeklogo.com/images/N/next-js-logo-7929BCD36F-seeklogo.com.png' height='300px' width='300px' />
        <Images img='https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg' height='300px' width='300px' />
        <Images img='https://miro.medium.com/max/1200/1*Ahl24GrglQHwFcp5-_B36Q.png' height='300px' width='300px' />
      </div>
    );
  }
}

export default Techs;