import { Icon } from '@iconify/react';
import React, { Fragment } from 'react'


function Services() {
    return (
        <div>
            <h2>Services</h2>
            <h5>services Offered</h5>
            <Fragment>

                <div className='services' data-aos='fade-down-right'>
                    <ul>
                        <li data-aos='zoom-in'>
                            <i className='icon'>
                                <Icon icon="majesticons:curly-braces" />
                            </i>
                            <h4>Website Development</h4>
                            <p>I use various web technologies to develop attractive websites which converts visitors to customers. I develop creative and responsive website layouts.</p>
                        </li>

                        <li data-aos='zoom-out'>
                            <i className='icon'>
                                <Icon icon="bi:phone" />
                            </i>
                            <h4>Mobile App Development</h4>
                            <p>I work with certain design tools and frameworks to create high performance and scalable mobile apps to suite the need of the client.</p>
                        </li>

                        <li data-aos='zoom-in'>
                            <i className='icon'>
                                <Icon icon="dashicons:database-add" />
                            </i>
                            <h4>Database Management</h4>
                            <p>With good knowledge in mySql and mongoDB, i manage both basic and complex database structures, to create an efficient application</p>
                        </li>

                    </ul>
                </div>
            </Fragment>
        </div>
    )
}

export default Services