import React from 'react'
import TypeAnimation from 'react-type-animation';
import { Element, scroller } from 'react-scroll'

function HeroSection() {

    const aboutScroll = () => {
        scroller.scrollTo('about', {
            duration: 2500,
        })
    }
    const contactScroll = () => {
        scroller.scrollTo('contact', {
            duration: 2500,
        })
    }

  return (
      <div className='hero-section'>
          <div className='hero-inner'>
              <p>Hey, my name is</p>
              <h3>Andrew Micheal</h3>
              <div>
                  <p id='frelance-word'>A freelance</p>
                  <TypeAnimation
                      cursor={true}
                      sequence={[
                          'Web Developer',
                          2000,
                          'Software engineer',
                          2000,
                          'App develeloper',
                          2000,
                      ]}
                      wrapper="p"
                      className='typing'
                      repeat={Infinity}
                  />
              </div>
              <button onClick={aboutScroll} className='btns'>Explore</button>
              <button onClick={contactScroll} className='btns'>Hire Me</button>
          </div>
    </div>
  )
}

export default HeroSection