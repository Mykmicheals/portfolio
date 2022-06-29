import React from 'react'
import { Icon } from '@iconify/react';
import { Link as ScrollLink, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
function Footer() {

        const topScroll = () => {
        scroller.scrollTo('header', {

            duration: 2500,
            delay: 100,
            smooth: true,
        })
    }

    return (
        <footer>
            <div className='footer'>
                <p><span id='a'>A</span>ndrew <a href='https://andrew-bcdb0.web.app/'></a></p>
                <div className='footer-icons'>
                    <i><Icon icon="icomoon-free:twitter" inline={true} /></i>
                    <i><Icon icon="akar-icons:linkedin-box-fill" inline={true} /></i>
                     <i><Icon icon="akar-icons:github-fill" inline={true} /></i>
                </div>
                <h4>All Right Reserved © 2022 Andrew Adah</h4>
            </div>
            <i onClick={topScroll} className='arrow-up'><Icon icon="akar-icons:arrow-up" height="16" inline={true} /></i>

        </footer>
    )
}

export default Footer
