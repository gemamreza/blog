import React, { Fragment, Component } from 'react';
import Navbar from '../components/navbar';
import Head from 'next/head';
import Techs from '../components/techs';
import Quote from '../components/quote';
import Footer from '../components/footer';


class Home extends Component {

  render() {
    return (
      <Fragment>
        <Head>
          <title>Gema Muhammad Reza</title>
          <link rel='shorcut icon' type='image/x-icon' href='https://i.pinimg.com/originals/fe/e1/84/fee18481df61ce4220956dc8f44d09e8.jpg' />
        </Head>
        <div className='index'>
        <div>
          <Navbar />
        </div>
        <div className='title-section' data-test='title-test'>
          <h1 className='title-home-name'>I am Gema Muhammad Reza</h1>
          <h2 className='title-home'>A Newbie Web Developer 🤖</h2>
        </div>
        <Quote />
        <div className='content' data-test='tech-test'>
          <hr />
          <h2 className='techs-title'> Techs I Use : </h2>
          <Techs className='techs-section' />
        </div>
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default Home;