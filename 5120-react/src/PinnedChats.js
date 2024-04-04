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
    position: 'relative',
};

const outerCircleStyle = (groupColor) => ({
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: `0 0 0 5px ${groupColor}`,
    margin: '5px',
});

const PinnedChats = () => {
    const pinnedChats = [
        { name: 'Katie', image: katieImage, groupColor: 'rgba(255, 0, 0, 0.5)' },
        { name: 'Ben', image: benImage, groupColor: 'rgba(0, 255, 0, 0.5)' },
        { name: 'Matt', image: mattImage, groupColor: 'rgba(0, 0, 255, 0.5)' },
        { name: 'Mum', image: mumImage, groupColor: 'rgba(255, 255, 0, 0.5)' },
        { name: 'Angela', image: angelaImage, groupColor: 'rgba(0, 255, 255, 0.5)' },
        { name: 'Briana', image: brianaImage, groupColor: 'rgba(255, 0, 255, 0.5)' },
        { name: 'Grandpa', image: grandpaImage, groupColor: 'rgba(255, 127, 80, 0.5)' },
        { name: 'Grace', image: graceImage, groupColor: 'rgba(127, 255, 212, 0.5)' },
        { name: 'Cheryl', image: cherylImage, groupColor: 'rgba(160, 32, 240, 0.5)' },
    ];

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {pinnedChats.map((chat, index) => (
                <div key={index} style={outerCircleStyle(chat.groupColor)}>
                    <div style={circleStyle}>
                        <img src={chat.image} alt={chat.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PinnedChats;
