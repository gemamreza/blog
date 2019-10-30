import React from 'react';
import Header from '../components/navbar';
import { Work } from '../components/reusable/work';
import { Skills } from '../components/reusable/skills';

class About extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className='title-section'>
          <h2 className='title-home'>A Newbie Web Developer 🚀</h2>
          <hr />
        </div>
        <div className='about'>
          <p>
            Hi, my name is Gema Muhammad Reza and I'm a web developer who's currently working at Skyshi Digital Indonesia, 
            located in Yogyakarta, Indonesia as a front-end developer 🌇. 
            Outside of programming I like to play some online games, such as DOTA2, PUBG, APEX, and do anything fun. 🌊
          </p>
        </div>
        <hr />
        <div className='row'>
          <div className='col-md-4'>
            <h3 className='title-about'>Work Experience</h3>
          </div>
          <div  className='col-md-8'>
          <Work
            work='Skyshi Digital Indonesia'
            title='Front-End Developer'
            time='September 2019 - Present'
            desc='My first job as a web developer is started right here, my role is front-end developer, mostly using React framework.'
          />
          <Work
            work='Aisin Indonesia'
            title='Machine Operator'
            time='July 2017 - September 2018'
            desc='In Aisin Indonesia, my responsibility was to make a car component, I made door-locks.'
          />
          <Work
            work='Fukusuke Kogyo Indonesia'
            title='Machine Operator'
            time='May 2015 - July 2017'
            desc='In Fukusuke Kogyo Indonesia, my responsibility was to make sure that the machine is producing good plastic rolls,
                  and checking the plasctic rolls wether it is good or bad.'
          />
          </div>
        </div>
        <hr />
        <div className='row'>
        <div className='col-md-4'>
          <h3 className='title-about'>SKILLS</h3>
        </div>
        <div className='col-md-8'>
          <Skills title='REACTJS' width={80} value={80} />
          <Skills title='NODEJS' width={70} value={70} />
          <Skills title='MYSQL' width={70} value={70} />
          <Skills title='HTML5' width={65} value={65} />
        </div>
        </div>
      </div>
    );
  }
}

export default About;