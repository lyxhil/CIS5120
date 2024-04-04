import React from 'react';

const groupSignifierStyle = (backgroundColor) => ({
    backgroundColor,
    borderRadius: '15px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '80px',
    margin: '10px',
    fontSize: '40px',
});

const groupSignifier = (group) => {
    return (
        <div style={groupSignifierStyle(group.backgroundColor)}>
            {group.emoji}
        </div>
    );
};

export default groupSignifier;