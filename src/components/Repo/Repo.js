import React from 'react';
import Moment from 'react-moment';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPython, faJsSquare, faCss3 } from "@fortawesome/free-brands-svg-icons";

import './Repo.css';

const iconLookup  = {
    Python: {
        icon: faPython,
        color: '#4B8BBE'
    },
    JavaScript: {
        icon: faJsSquare,
        color: '#f0db4f'
    },
    CSS: {
        icon: faCss3,
        color: '#264de4'
    }
};

const Repo = ({ repo }) => {
    return (
        <div className="repo">
            <div className="main-info">
                <a href={repo.html_url} rel="noopener noreferrer" target="_blank">{repo.name}</a>
            </div>
            <div className="side-info">
                <p style={{ color: iconLookup[repo.language].color}}><FontAwesomeIcon icon={iconLookup[repo.language].icon}/></p>
                <p><Moment date={repo.created_at} format="DD MMM YYYY" /></p>
            </div>
        </div>
    );
};

export default Repo;
