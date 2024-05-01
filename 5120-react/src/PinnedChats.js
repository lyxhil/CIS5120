import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

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

const PinnedChats = ({contacts, groups}) => {
    const pinnedChats = [
        { name: 'Katie', image: katieImage, groupColor: '#24B247' },
        { name: 'Ben', image: benImage, groupColor: '#A988FD' },
        { name: 'Matt', image: mattImage, groupColor: '#ffb434' },
        { name: 'Mum', image: mumImage, groupColor: '#A988FD' },
        { name: 'Angela', image: angelaImage, groupColor: '#ffb434' },
        { name: 'Briana', image: brianaImage, groupColor: '#24B247' },
        { name: 'Grandpa', image: grandpaImage, groupColor: '#A988FD' },
        { name: 'Grace', image: graceImage, groupColor: '#ffb434' },
        { name: 'Cheryl', image: cherylImage, groupColor: '#24B247' },
    ];
    const contactsArray = Object.values(contacts).slice(0, 6);
    const getFirstGroupColor = (contact) => {
        if (contact.groupList.length === 0) {
            return '#F3F3F3'; 
        }
    
        const firstGroup = contact.groupList[0];
        const firstGroupObject = groups.find(group => group.name === firstGroup);
    
        return firstGroupObject.backgroundColor;
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {[...Array(3)].map((_, rowIndex) => (
                <React.Fragment key={rowIndex}>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        {contactsArray.slice(rowIndex * 3, rowIndex * 3 + 3).map((chat, index) => (
                            <Link key={index} to={`/messages/${chat.id}`}>
                                <div key={index} style={{ ...outerCircleStyle(getFirstGroupColor(chat)) }}>
                                    <div style={circleStyle}>
                                        <img src={chat.image} alt={chat.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        {contactsArray.slice(rowIndex * 3, rowIndex * 3 + 3).map((chat, index) => (
                            <span key={index} style={{ ...nameStyle, margin: '10px' }}>{chat.name}</span>
                        ))}
                    </div>
                </React.Fragment>
            ))}
        </div>
    );
};

export default PinnedChats;