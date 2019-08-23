import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { PacmanLoader } from 'react-spinners';

const Projects = () => {
    const [state, setState] = useState({ repos: [] });

    const fetchRepos = async () => {
        const res = await axios.get('https://api.github.com/users/danielattiach/repos');
        const repos = await res.data;
        setState({ repos });
    };

    useEffect(() => {
        fetchRepos();
    }, []);

    if (state.repos.length === 0) {
        return <PacmanLoader/>
    }

    return (
        <>{state.repos.map((repo, index) => (
            <div className="repo" key={index}>
                {repo.name}
            </div>
        ))}</>
    );
};

export default Projects;
