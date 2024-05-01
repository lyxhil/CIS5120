import React from 'react';

const Toolbar = ({ onAdd, onDelete, onEdit }) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>
            <button onClick={onAdd}>Add</button>
            <button onClick={onDelete}>Delete</button>
            <button onClick={onEdit}>Edit</button>
        </div>
    );
};

export default Toolbar;
