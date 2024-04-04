import React from 'react';

const NavigationBar = ({ title }) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
            <a href="/" style={{ textDecoration: 'none', color: 'blue' }}>
                Home
            </a>
            <span style={{ fontSize: '20px' }}>{title}</span>
            <a href="/groups" style={{ textDecoration: 'none', color: 'blue' }}>
                Groups
            </a>
        </div>
    );
};

export default NavigationBar;
