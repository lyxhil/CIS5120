import React from 'react';

const groupIconStyle = (backgroundColor) => ({
    backgroundColor,
    borderRadius: '15px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '120px',
    margin: '10px',
    textDecoration: 'none',
    color: 'black',
    position: 'relative',
    cursor: 'pointer'
});

const GroupsContainer = ({ groups, mode, onDelete, onEdit, onGroupClick }) => {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', padding: '10px' }}>
            {groups.map(group => (
                <div key={group.id} style={groupIconStyle(group.backgroundColor)} onClick={() => onGroupClick(group.id)}>
                    {mode === 'delete' && (
                        <button onClick={(e) => { e.stopPropagation(); onDelete(group.id); }} style={{ position: 'absolute', top: 0, right: 0 }}>X</button>
                    )}
                    <div style={{ fontSize: '50px' }}>{group.emoji}</div>
                    <span>{group.name}</span>
                    {mode === 'edit' && (
                        <button onClick={(e) => { e.stopPropagation(); onEdit(group); }} style={{ position: 'absolute', bottom: 0, right: 0 }}>Edit</button>
                    )}
                </div>
            ))}
        </div>
    );
};

export default GroupsContainer;