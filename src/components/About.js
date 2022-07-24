import React from 'react'
import { Icon } from '@iconify/react';
import micPort from '../assets/images/micPort.jpg'
function About() {
    return (
        <div className='s-section'>
            <div className='about'>
                <h2>About Me</h2>
                <h5>Why choose me</h5>
                <div className='about-card'>
                    <img data-aos='fade-right' src={micPort} alt='image1' />
                    <div data-aos='fade-left' className='about-word'>
                        <p data-aos='fade-up' data-aos-delay='500' >A self-motivated fullstack developer with  knowledge and proficiency in React, Django, Express, mySql, and mobile development, as well as strong skills and ability in writing clean and efficient code.</p>
                        <h3 data-aos='fade-up' data-aos-delay='700'>Here are a Few Highlights:</h3>
                        <div data-aos='fade-up' data-aos-delay='900' className='about-inner'>
                            <i><Icon icon="ant-design:arrow-right-outlined" /></i>
                            <p> Frontend webdevelopment with Reactjs</p>
                        </div>

                        <div data-aos='fade-up' data-aos-delay='1000' className='about-inner'>
                            <i><Icon icon="ant-design:arrow-right-outlined" /></i>
                            <p> Backend webdevelopment with Expressjs, Django and Flask</p>
                        </div>

                        <div data-aos='fade-up' data-aos-delay='1100' className='about-inner'>
                            <i><Icon icon="ant-design:arrow-right-outlined" /></i>
                            <p>Search Engine optimization with NextJs</p>
                        </div>

                        <div data-aos='fade-up' data-aos-delay='1200' className='about-inner'>
                            <i><Icon icon="ant-design:arrow-right-outlined" /></i>
                            <p>Mobile App development with React Native</p>
                        </div>

                        <div data-aos='fade-up' data-aos-delay='1300' className='about-inner'>
                            <i><Icon icon="ant-design:arrow-right-outlined" /></i>
                            <p> Api development with Django Rest</p>
                        </div>
                        <button data-aos='fade-up' data-aos-delay='1300' className='btn'>Hire Me</button>
                        <button data-aos='fade-up' data-aos-delay='1300' className='btn btn-hero'>Get Resume</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About