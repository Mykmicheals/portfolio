import React, { useState } from 'react'
import TypeAnimation from 'react-type-animation';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { Element, scroller } from 'react-scroll'
import banner from '../assets/images/bg-2.jpg'
import cv from '../assets/images/Andrew-Micheal.pdf'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBCollapse,
    MDBIcon
} from 'mdb-react-ui-kit';
// import mic from '../assets/images/andrewLogo.png'
// import About from './About';
// import Portfolio from './Portfolio';


function Banner() {

    const [showNav, setShowNav] = useState(false);
    const contactScroll = () => {
        scroller.scrollTo('about', {

            duration: 2500,
            delay: 100,
            smooth: true,
        })
    }

    return (
        <Element name='header'>
            <div style={{
                backgroundImage: `url(${banner})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'noRepeat',
            }}
                className='f-section'>
                {/* <MDBNavbar className='my-header' expand='lg' light bgColor='light'>
                    <MDBContainer fluid>
                        <MDBNavbarBrand className='brand' href='#'>ANDREW</MDBNavbarBrand>
                        <MDBNavbarToggler
                            type='button'
                            aria-expanded='false'
                            aria-label='Toggle navigation'
                            onClick={() => setShowNav(!showNav)}
                        >
                            <MDBIcon icon='bars' fas />
                        </MDBNavbarToggler>
                        <MDBCollapse className='my-nav' navbar show={showNav}>
                            <MDBNavbarNav>
                                <MDBNavbarItem>
                                    <MDBNavbarLink onClick={contactScroll} active aria-current='page' href='#'>
                                        About
                                    </MDBNavbarLink>
                                </MDBNavbarItem>
                                <MDBNavbarItem>
                                    <MDBNavbarLink href='#'>Resume</MDBNavbarLink>
                                </MDBNavbarItem>
                                <MDBNavbarItem>
                                    <MDBNavbarLink href='#'>Portfolio</MDBNavbarLink>
                                </MDBNavbarItem>
                                <MDBNavbarItem>
                                    <MDBNavbarLink onClick={contactScroll} href='#'>Contact</MDBNavbarLink>
                                </MDBNavbarItem>
                            </MDBNavbarNav>
                        </MDBCollapse>
                    </MDBContainer>
                </MDBNavbar> */}
                <div className='hero'>
                    <ul data-aos="zoom-in-up" >
                        <li>
                            <div className='header-icon'>

                                <Link to=''>
                                    <i> <Icon icon="logos:twitter" /></i>
                                </Link>
                                <a href='https://www.linkedin.com/in/andrewmicheal-ad/'>
                                    <i> <Icon icon="logos:linkedin-icon" /></i>
                                </a>

                                <a href='https://github.com/Mykmicheals' target="blank" >
                                    <i> <Icon icon="icon-park:github" /></i>
                                </a>
                            </div>
                            <h1>Micheal</h1>
                            <div>
                                <p>A freelance</p>
                                <TypeAnimation
                                    cursor={true}
                                    sequence={[
                                        'Web Developer',
                                        2000,
                                        'Software engineer',
                                        2000,
                                        'app develeloper',
                                        2000,
                                    ]}
                                    wrapper="p"
                                    className='typing'
                                    repeat={Infinity}
                                />
                            </div>
                            <button onClick={contactScroll} className='btns'>Explore</button>
                            <Link to={cv} target="_blank" download>
                                <button className='btns btn-hero'>Get Resume</button>
                            </Link>
                        </li>

                        {/* <li><img src={mic} /></li> */}
                    </ul>
                </div>

            </div>
        </Element>
    )
}

export default Banner