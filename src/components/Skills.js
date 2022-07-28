import React from 'react'
import { Icon } from "@iconify/react";

function Skills() {
    return (
        <div className='skills-outer'>
            <h2>Skills</h2>
            <h5>Programming skills</h5>
            <div className="stacks">
                <ul>
                    <li data-aos="fade-left">
                        <i className="icon">
                            {" "}
                            <Icon icon="tabler:brand-react-native" />
                        </i>
                        <p>React</p>
                    </li>

                    <li data-aos="zoom-in">
                        <i className="icon">
                            {" "}
                            <Icon icon="logos:django-icon" />
                        </i>
                        <p>Django</p>
                    </li>

                    <li data-aos="zoom-in">
                        <i className="icon">
                            {" "}
                            <Icon icon="fa6-solid:database" />
                        </i>
                        <p>MySql/mongoDB</p>
                    </li>

                    <li data-aos="zoom-in">
                        <i className="icon">
                            {" "}
                            <Icon icon="logos:express" />
                        </i>
                        <p>ExpressJs</p>
                    </li>
                    <li data-aos="zoom-in">
                        <i className="icon">
                            {" "}
                            <Icon icon="logos:postman-icon" />
                        </i>
                        <p>Postman</p>
                    </li>
                    <li data-aos="zoom-in">
                        <i className="icon">
                            {" "}
                            <Icon icon="logos:flask" />
                        </i>
                        <p>Flask</p>
                    </li>
                    <li data-aos="fade-left">
                        <i className="icon">
                            {" "}
                            <Icon icon="tabler:brand-react-native" />
                        </i>
                        <p>ReactNative</p>
                    </li>
                    <li data-aos="zoom-out">
                        <i className="icon">
                            {" "}
                            <Icon icon="logos:nodejs" />
                        </i>
                        <p>nodejs</p>
                    </li>
                    <li data-aos="zoom-out">
                        <i className="icon">
                            <Icon icon="akar-icons:css-fill" />
                        </i>
                        <p>Css</p>
                    </li>
                    <li data-aos="zoom-out">
                        <i className="icon">
                            {" "}
                            <Icon icon="logos:firebase" />
                        </i>
                        <p>Firebase</p>
                    </li>
                    <li data-aos="zoom-out">
                        <i className="icon">
                            {" "}
                            <Icon icon="vscode-icons:file-type-python" />
                        </i>
                        <p>Python</p>
                    </li>
                    <li data-aos="zoom-out">
                        <i className="icon">
                            <Icon icon="logos:javascript" />
                        </i>
                        <p>Javascript</p>
                    </li>
                    <li data-aos="zoom-out">
                        <i className="icon">
                            <Icon icon="vscode-icons:file-type-html" />
                        </i>
                        <p>Html</p>
                    </li>
                    <li data-aos="zoom-in">
                        <i className="icon">
                            {" "}
                            <Icon icon="logos:django-icon" />
                        </i>
                        <p>DjangoRest</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Skills