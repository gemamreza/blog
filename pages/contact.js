import React from 'react';
import Header from '../components/navbar';

class Contact extends React.Component {
  render() {
    return (
      <div>
        <Header />
          <h1 className='contact-me'> Get In Touch </h1>
          <p className='contact-me-p'>
            If you interested to work with me or have any kind of job opportunity <br />
            Please email me at gemamreza@gmail.com
          </p>
      </div>
    );
  }
}

export default Contact;

