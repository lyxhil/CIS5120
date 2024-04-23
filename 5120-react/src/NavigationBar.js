import React from 'react';
import newChat from './images/newchat.png'

const NavigationBar = ({ title }) => {
    return (
        <div style={{ position: 'absolute', top: '30', left: '0', width: '100%', zIndex: '9998', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '30px' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <a href="/" style={{ textDecoration: 'none', color: 'blue', marginRight: '10px', fontSize: '18px' }}>
                    Edit
                </a>
                <span style={{ fontSize: '20px' }}>{title}</span>
            </div>
            <div style={{ flex: '1', textAlign: 'center' }}>
                <span style={{ textDecoration: 'none', color: 'black', fontSize: '18px', fontWeight: 'bold' }}>
                    Messages
                </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center'}}>
                <img src={newChat} alt="new" style={{ width: '20px', height: '20px' }} />
            </div>
        </div>
    );
};

export default NavigationBar;