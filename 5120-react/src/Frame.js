import React from 'react';

const frameStyle = {
    width: '414px',
    height: '896px',
    backgroundColor: '#f2f2f2',
    borderRadius: '50px',
    margin: 'auto',
    marginTop: '50px',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)',
    padding: '20px'
};

const Frame = ({ children }) => {
    return <div style={frameStyle}>{children}</div>;
};

export default Frame;
