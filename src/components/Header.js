import React from 'react'

function Header() {
    return (
        <div className='header'>
            <h3 id='logo'><span id='a'>A</span>ndrew</h3>
            <nav className='navigation'>
                <p>Home</p>
                <p>About</p>
                <p>Services</p>
                <p>Skills</p>
                <p>Resume</p>
                <p>Portfolio</p>
                <p>Contact</p>
            </nav>
        </div>
    )
}

export default Header