import React from 'react';

const ToggleButton = ({ isHomeActive, onToggleClick }) => {
    const homeLabelStyle = {
        display: 'inline-block',
        width: '120px',
        height: '30px',
        borderRadius: '15px',
        textAlign: 'center',
        lineHeight: '30px',
        cursor: 'pointer',
        backgroundColor: isHomeActive ? 'blue' : 'white',
        color: isHomeActive ? 'white' : 'blue'
    };

    const folderLabelStyle = {
        display: 'inline-block',
        width: '120px',
        height: '30px',
        borderRadius: '15px',
        textAlign: 'center',
        lineHeight: '30px',
        cursor: 'pointer',
        backgroundColor: isHomeActive ? 'white' : 'blue',
        color: isHomeActive ? 'blue' : 'white'
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
            <input type="checkbox" id="toggle" style={{ display: 'none' }} />
            <label htmlFor="toggle" style={{ ...homeLabelStyle }} onClick={() => onToggleClick(true)}>
                <a href="/" style={{ textDecoration: 'none', color: isHomeActive ? 'white' : 'blue' }}>Home</a>
            </label>
            <label htmlFor="toggle" style={{ ...folderLabelStyle, marginLeft: '5px' }} onClick={() => onToggleClick(false)}>
                <a href="/groups" style={{ textDecoration: 'none', color: isHomeActive ? 'blue' : 'white' }}>Folders</a>
            </label>
            {/* <label htmlFor="toggle" style={{ ...labelStyle, marginLeft: '5px' }}>
                <a href="/contacts" style={{ textDecoration: 'none', color: 'blue' }}>Contacts</a>
            </label> */}
        </div>
    );
};

export default ToggleButton;
