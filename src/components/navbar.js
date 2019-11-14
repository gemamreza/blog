import React, { Component } from 'react';
import Link from 'next/link';

class Navbar extends Component {

  componentDidMount(){
    this.myFunction()
  }

  myFunction = () => {
    var x = document.getElementById("navbar-wrapper");
    if (x.className === "navbar-wrapper") {
      x.className += " responsive";
    } else {
      x.className = "navbar-wrapper";
    }
  }

  render() {
    return (
      <section>
      <ul id='navbar-wrapper' className='navbar-wrapper' data-test='navbar-wrapper' ref='navbar_wrapper' onChange={this.myFunction}>
        <Link href='/' as={ process.env.PROD = '/'}><li><a className='name-title i-navbar' >Hello There</a></li></Link>
        <Link href='/' as={ process.env.PROD = '/'}><li><a className='i-navbar activee' >Home</a></li></Link>
        <Link href='/about' as={ process.env.PROD = '/about'}><li><a className='i-navbar activee' >About</a></li></Link>
        <Link href='/contact' as={ process.env.PROD = '/contact'}><li><a className='i-navbar activee' >Contact</a></li></Link>
        <li data-test='link'><a className='i-navbar icon zoom' target='_blank' href='https://twitter.com/gemamreza'><i className="fab fa-twitter"></i></a></li>
        <li data-test='link'><a className='i-navbar icon zoom' target='_blank' href='https://www.instagram.com/gemamreza/' ><i className="fab fa-instagram"></i></a></li>
        <li data-test='link'><a className='i-navbar icon zoom' target='_blank' href='https://www.linkedin.com/in/gema-muhammad-reza-9aa259176/'><i className="fab fa-linkedin"></i></a></li>
      </ul>
      </section>
    );
  }
}

export default Navbar;