import React, {useEffect, useState} from 'react';
import Loader from 'react-loader-spinner';
import axios from 'axios';
import Repo from '../../components/Repo/Repo';

import './Projects.css';

const Projects = () => {
    const [state, setState] = useState({repos: []});

    useEffect(() => {
        const fetchRepos = async () => {
            const res = await axios.get('https://api.github.com/users/danielattiach/repos');
            const repos = await res.data;
            setState({ repos })
        };
        fetchRepos();
    }, []);

    if (state.repos.length === 0) {
        return <Loader
            type="Bars"
            color="#000"
            height={100}
            width={100}
            className="loader"
        />
    }

    return (
        <>
            <h1 id="projects">Projects</h1>
            {state.repos.map((repo, index) => (
                <Repo repo={repo} key={index}/>
            ))}
        </>
    );
};

export default Projects;
