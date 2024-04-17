import React from 'react';
import searchIcon from './images/search-icon.png';
import microphoneIcon from './images/microphone-icon.png';

const searchBarStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '20px',
    backgroundColor: '#E2E7EB',
    borderRadius: '10px',
    padding: '1px',
};

const SearchBar = () => {
    return (
        <div style={searchBarStyle}>
            <button style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '5px' }}>
                <img src={searchIcon} alt="Search" style={{ width: '20px', height: '20px' }} />
            </button>
            <input type="text" placeholder="Search..." style={{
                flex: '1',
                border: 'none',
                background: 'none',
                outline: 'none',
                padding: '8px',
            }} />
            <button style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '5px' }}>
                <img src={microphoneIcon} alt="Microphone" style={{ width: '20px', height: '20px' }} />
            </button>
        </div>
    );
};

export default SearchBar;
