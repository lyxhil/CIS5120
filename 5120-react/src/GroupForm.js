import React, { useState } from 'react';
import { ChromePicker } from 'react-color';

const GroupForm = ({ initialGroup, onSubmit, onCancel }) => {
    const [group, setGroup] = useState(initialGroup || { name: '', emoji: '', backgroundColor: '#cccccc' });
    const [displayColorPicker, setDisplayColorPicker] = useState(false);

    const handleChange = (e) => {
        setGroup({ ...group, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(group);
    };

    const handleColorChange = (color) => {
        setGroup({ ...group, backgroundColor: color.hex });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={group.name} onChange={handleChange} placeholder="Group Name" required />
            <input type="text" name="emoji" value={group.emoji} onChange={handleChange} placeholder="Emoji" required />
            <div>
                <div
                    style={{
                        padding: '5px',
                        background: '#fff',
                        borderRadius: '1px',
                        boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
                        display: 'inline-block',
                        cursor: 'pointer'
                    }}
                    onClick={() => setDisplayColorPicker(!displayColorPicker)}
                >
                    <div style={{
                        width: '36px',
                        height: '14px',
                        borderRadius: '2px',
                        background: group.backgroundColor
                    }} />
                </div>
                {displayColorPicker && (
                    <div style={{position: 'absolute', zIndex: '2'}}>
                        <div style={{
                            position: 'fixed',
                            top: '0px',
                            right: '0px',
                            bottom: '0px',
                            left: '0px'
                        }} onClick={() => setDisplayColorPicker(false)} />
                        <ChromePicker color={group.backgroundColor} onChange={handleColorChange} />
                    </div>
                )}
            </div>
            <button type="submit">Save</button>
            <button type="button" onClick={onCancel}>Cancel</button>
        </form>
    );
};

export default GroupForm;