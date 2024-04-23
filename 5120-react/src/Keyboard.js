import React, { useState } from 'react';

const Keyboard = ({ onKeyPress }) => {
    const [input, setInput] = useState('');
    const [capsLock, setCapsLock] = useState(false);

    const handleKeyPress = (key) => {
        setInput(input + capsLock ? key.toUpperCase() : key);
        onKeyPress && onKeyPress(capsLock ? key.toUpperCase() : key); 
    }

    const handleBackspace = () => {
        setInput(input.slice(0, -1));
    };

    const handleSearch = () => {
        console.log('Search', input);
    };

    const toggleCapsLock = () => {
        setCapsLock(!capsLock);
    };

    // Define the keyboard layout
    const keyboardLayout = [
        ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
        ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
        [capsLock ? ' ⇪ ': ' ⇪ ', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '⌫'],
    ];

    return (
        <div style={{ position: 'fixed', bottom: '108px', left: '50%', transform: 'translateX(-50%)', width: '100%', maxWidth: '455px', backgroundColor: '#d1d1d6', borderBottomLeftRadius: '50px', borderBottomRightRadius: '50px'  }}>
            {keyboardLayout.map((row, rowIndex) => (
                <div key={rowIndex} style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
                    {row.map(key => (
                        <button key={key} onClick={key === '⌫' ? handleBackspace : (key === 'Search' ? handleSearch : (key === '⇪' || key === '⇧' ? toggleCapsLock : () => handleKeyPress(key)))} style={{ padding: '15px', margin: '2px', borderRadius: '5px', backgroundColor: '#fff', color: '#000', border: 'none', fontSize: '15px', outline: 'none', cursor: 'pointer' }}>
                            {key}
                        </button>
                    ))}
                </div>
            ))}
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                <button onClick={() => handleKeyPress(' ')} style={{ padding: '10px', maxWidth: '300px', margin: '5px', borderRadius: '10px', backgroundColor: '#fff', color: '#000', border: 'none', outline: 'none', cursor: 'pointer', flex: 1 }}>Space</button>
                <button onClick={handleSearch} style={{ padding: '10px', margin: '5px', borderRadius: '10px', backgroundColor: 'd1d1d6', color: '#000', border: 'none', outline: 'none', cursor: 'pointer' }}>Search</button>
            </div>
        </div>
    );
};

export default Keyboard;
