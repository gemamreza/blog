import React from 'react';
import Header from '../components/navbar';
import Footer from '../components/footer';

class Contact extends React.Component {
  render() {
    return (
      <div>
      <div className='contact'>
        <Header />
          <h1 className='contact-me'> Get In Touch </h1>
          <p className='contact-me-p' data-test='contact-me'>
            If you interested to work with me or have any kind of job opportunity <br />
            Please email me at gemamreza@gmail.com.
          </p>
      </div>
      <Footer />
      </div>
    );
  }
}

export default Contact;

