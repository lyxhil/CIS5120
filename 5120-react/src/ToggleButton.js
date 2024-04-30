import React from 'react';
import { Link } from 'react-router-dom';

const ToggleButton = ({ isHomeActive, onToggleClick }) => {
    const homeLabelStyle = {
        display: 'inline-block',
        width: '120px',
        height: '30px',
        borderRadius: '15px',
        textAlign: 'center',
        lineHeight: '30px',
        cursor: 'pointer',
        backgroundColor: isHomeActive ? 'blue' : '#f2f2f2',
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
        backgroundColor: isHomeActive ? '#f2f2f2' : 'blue',
        color: isHomeActive ? 'blue' : '#f2f2f2'
    };

    const contactsStyle = {
        display: 'inline-block',
        width: '120px',
        height: '30px',
        borderRadius: '15px',
        textAlign: 'center',
        lineHeight: '30px',
        cursor: 'pointer',
        backgroundColor: '#f2f2f2' ,
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
            <input type="checkbox" id="toggle" style={{ display: 'none' }} />
            <label htmlFor="toggle" style={{ ...homeLabelStyle }} onClick={() => onToggleClick(true)}>
                <Link to="/" style={{ textDecoration: 'none', color: isHomeActive ? 'white' : 'blue' }}>Home</Link>
            </label>
            <label htmlFor="toggle" style={{ ...folderLabelStyle, marginLeft: '5px' }} onClick={() => onToggleClick(false)}>
                <Link to="/groups" style={{ textDecoration: 'none', color: isHomeActive ? 'blue' : 'white' }}>Folders</Link>
            </label>
            <label htmlFor="toggle" style={{ ...contactsStyle, marginLeft: '5px' }}>
                <Link to="/contacts" style={{ textDecoration: 'none', color: 'blue' }}>Contacts</Link>
            </label>
        </div>
    );
};

export default ToggleButton;
