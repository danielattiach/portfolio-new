import React from 'react';

const AboutItem = ({ item, index, data }) => {
    return (
        <div>
            <div>
                <img src={item.picture} alt={item.location}/>
                <p>{item.location}</p>
                <p>{item.description}</p>
            </div>
            {index + 1 !== data.length ? (
                <div className="dots">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            ) : ''}
        </div>
    );
};

export default AboutItem;
