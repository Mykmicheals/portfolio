import React from 'react'

function Resume() {
    return (
        <div className='resume'>
            <h2>Resume</h2>
            <h5>Work Experience</h5>
            <ul className='resume-inner'>
                <li>
                    <h4>2016 - 2017</h4><span>Intern</span>
                    <p id='work'>Hiit</p>
                    <p>I worked as an intern in HIIT, where i learnt python programming language and networking. I and my colleagues built various group projects, and we had a good working relationship. we also installed a functional CCTV camera as part of our final project </p>
                </li>
                <li>
                    <h4>2021-2022</h4><span>Fullstack Developer</span>
                    <p id='work'>Freelancer</p>
                    <p>As a freelancer my goal is to help numerous clients build their websites and also to troubleshoot their problems. </p>
                </li>
            </ul>
        </div>
    )
}

export default Resume
