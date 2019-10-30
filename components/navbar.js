import React, { Component } from 'react';
import Link from 'next/link';

class Navbar extends Component {
  render() {
    return (
      <section>
      <ul id='navbar-wrapper' className='navbar-wrapper'>
        <Link href='/'><li><a className='name-title i-navbar' >Hello There</a></li></Link>
        <Link href='/'><li><a className='i-navbar active' >Home</a></li></Link>
        <Link href='/about'><li><a className='i-navbar active' >About</a></li></Link>
        <Link href='/contact'><li><a className='i-navbar active' >Contact</a></li></Link>
        <li><a className='i-navbar icon zoom' target='_blank' href='https://twitter.com/gemamreza'><i className="fab fa-twitter"></i></a></li>
        <li><a className='i-navbar icon zoom' target='_blank' href='https://www.instagram.com/gemamreza/' ><i className="fab fa-instagram"></i></a></li>
        <li><a className='i-navbar icon zoom' target='_blank' href='https://www.linkedin.com/in/gema-muhammad-reza-9aa259176/'><i className="fab fa-linkedin"></i></a></li>
      </ul>
      </section>
    );
  }
}

export default Navbar;