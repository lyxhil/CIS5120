import React from 'react';

const statusBarStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '15px',
    backgroundColor: '#000',
    color: '#fff',
    padding: '15px',
    fontSize: '14px'
};

const StatusBar = () => {
    return (
        <div style={statusBarStyle}>
            <span>19:27</span>
        </div>
    );
};

export default StatusBar;