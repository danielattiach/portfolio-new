import React from 'react';
import AboutItem from '../../components/AboutItem/AboutItem';

import data from './data';
import './About.css';

const About = () => {
    return (
        <div className="about">
            {data.map((item, index) => {
                return (
                    <AboutItem key={index} index={index} item={item} data={data}/>
                );
            })}
        </div>
    );
};

export default About;
