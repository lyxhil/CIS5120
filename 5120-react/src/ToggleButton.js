import React from 'react';

const ToggleButton = () => {
    const labelStyle = {
        display: 'inline-block',
        width: '120px',
        height: '30px',
        borderRadius: '15px',
        textAlign: 'center',
        lineHeight: '30px',
        cursor: 'pointer',
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
            <input type="checkbox" id="toggle" style={{ display: 'none' }} />
            <label htmlFor="toggle" style={{ ...labelStyle, backgroundColor: 'white' }}>
                <a href="/" style={{ textDecoration: 'none', color: 'blue' }}>Home</a>
                </label>
            <label htmlFor="toggle" style={{ ...labelStyle, backgroundColor: 'white', marginLeft: '5px' }}>
                <a href="/Groups" style={{ textDecoration: 'none', color: 'blue' }}>Groups</a>
            </label>
            <label htmlFor="toggle" style={{ ...labelStyle, backgroundColor: 'white', marginLeft: '5px' }}>
                <a href="/Contacts" style={{ textDecoration: 'none', color: 'blue' }}>Contacts</a>
            </label>
        </div>
    );
};

export default ToggleButton;
