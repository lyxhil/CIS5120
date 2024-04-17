import React from 'react';

const GroupsNavigationBar = ({ title }) => {
    return (
        <div style={{ position: 'absolute', top: '30', left: '0', width: '100%', zIndex: '9998', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '30px' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <a href="/" style={{ textDecoration: 'none', color: 'blue', marginRight: '10px', fontSize: '18px' }}>
                    Edit
                </a>
                <span style={{ fontSize: '20px' }}>{title}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ textDecoration: 'none', color: 'black', marginRight: '200px', fontSize: '18px', fontWeight: 'bold' }}>
                    Groups
                </span>
                {/* Add your icon component here */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" style={{ fill: 'currentcolor' }}>
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M18 9v4H6V9H4v6h16V9h-2z"/>
                </svg>
            </div>
        </div>
    );
};

export default GroupsNavigationBar;