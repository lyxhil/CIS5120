import React from 'react';
import katieImage from './images/katie.png';
import benImage from './images/ben.png';
import mattImage from './images/matt.png';
import mumImage from './images/mum.png';
import angelaImage from './images/angela.png';
import brianaImage from './images/briana.png';
import grandpaImage from './images/grandpa.png';
import graceImage from './images/grace.png';
import cherylImage from './images/cheryl.png';

const circleStyle = {
    width: '110px',
    height: '110px',
    borderRadius: '50%',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
};

const outerCircleStyle = (groupColor) => ({
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: `0 0 0 5px ${groupColor}`,
    margin: '10px',
});

const nameStyle = {
    fontSize: '14px',
    textAlign: 'center',
    width: '120px', // Add a fixed width to the name
    margin: '1px'
};

const PinnedChats = () => {
    const pinnedChats = [
        { name: 'Katie', image: katieImage, groupColor: '#ff9a9e' },
        { name: 'Ben', image: benImage, groupColor: '#a988fd' },
        { name: 'Matt', image: mattImage, groupColor: '#ffb434' },
        { name: 'Mum', image: mumImage, groupColor: '#a988fd' },
        { name: 'Angela', image: angelaImage, groupColor: '#ffb434' },
        { name: 'Briana', image: brianaImage, groupColor: '#ff9a9e' },
        { name: 'Grandpa', image: grandpaImage, groupColor: '#a988fd' },
        { name: 'Grace', image: graceImage, groupColor: '#ffb434' },
        { name: 'Cheryl', image: cherylImage, groupColor: '#ff9a9e' },
    ];

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {[...Array(3)].map((_, rowIndex) => (
                <React.Fragment key={rowIndex}>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        {pinnedChats.slice(rowIndex * 3, rowIndex * 3 + 3).map((chat, index) => (
                            <div key={index} style={{ ...outerCircleStyle(chat.groupColor) }}>
                                <div style={circleStyle}>
                                    <img src={chat.image} alt={chat.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        {pinnedChats.slice(rowIndex * 3, rowIndex * 3 + 3).map((chat, index) => (
                            <span key={index} style={{ ...nameStyle, margin: '10px' }}>{chat.name}</span>
                        ))}
                    </div>
                </React.Fragment>
            ))}
        </div>
    );
};

export default PinnedChats;