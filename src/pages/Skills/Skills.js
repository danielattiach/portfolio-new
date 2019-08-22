import React from 'react';
import skillsData from './skillsData';
import './Skills.css';

const Skills = () => {
    return (
        <div>
            <h1>Skills</h1>
            {skillsData.map((skill, index) => {
                return (
                    <div key={index}>
                        {skill.name}
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped"
                                 role="progressbar"
                                 style={{
                                     width: `${skill.progress}%`,
                                     backgroundColor: skill.backgroundColor
                                 }}
                                 aria-valuenow={skill.progress}
                                 aria-valuemin="0"
                                 aria-valuemax="100">
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Skills;
