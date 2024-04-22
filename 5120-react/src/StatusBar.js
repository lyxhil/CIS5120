import React from 'react';
import cellular from './images/cellular.png';
import wifi from './images/wifi.png';
import battery from './images/battery.png';

const statusBarStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '15px',
    backgroundColor: '#000',
    color: '#fff',
    padding: '12px',
    fontSize: '14px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
};

const iconContainerStyle = {
    marginTop: '10px',
    display: 'flex',
};

const iconStyle = {
    width: '20px',
    height: '20px',
    marginLeft: '2px'
}

const batteryIconStyle = {
    width:'30px',
    height: '30px',
    marginRight: '30px'
}

const StatusBar = () => {
    return (
        <div style={statusBarStyle}>
            <span>    19:27</span>
            <div style={iconContainerStyle}>
                <img src={cellular} alt='Cellular' style={iconStyle} />
                <img src={wifi} alt='Wifi' style={iconStyle} />
                <img src={battery} alt='Battery' style={batteryIconStyle} />
            </div>
        </div>
    );
};

export default StatusBar;