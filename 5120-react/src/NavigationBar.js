import React from 'react';
import newChat from './images/newchat.png'

const NavigationBar = ({ title }) => {
    return (
        <div style={{ position: 'absolute', top: '10', left: '0', width: '100%', zIndex: '9998', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '30px' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <a href="/" style={{ textDecoration: 'none', color: 'blue', marginRight: '10px', fontSize: '18px' }}>
                    Edit
                </a>
                <span style={{ fontSize: '20px' }}>{title}</span>
            </div>
            <div style={{ textAlign: 'center' }}>
                <span style={{ textDecoration: 'none', color: 'black', fontSize: '18px', fontWeight: 'bold', marginRight: '32px' }}>
                    Messages
                </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center'}}>
                <img src={newChat} alt="new" style={{ width: '35px', height: '35px', marginRight: "40px" }} />
            </div>
        </div>
    );
};

export default NavigationBar;