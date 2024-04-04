import React, { useState } from 'react';

import angelaImage from './images/angela.png';
import benImage from './images/ben.png';
import catherineImage from './images/catherine.png';
import cherylImage from './images/cheryl.png';
import donaldImage from './images/donald.png';

const fakeFriends = [
    { id: 1, name: 'Angela', image: angelaImage, groupColor: '#ffffff' },
    { id: 2, name: 'Ben', image: benImage, groupColor: '#ffffff' },
    { id: 3, name: 'Catherine', image: catherineImage, groupColor: '#ffffff' },
    { id: 4, name: 'Cheryl', image: cherylImage, groupColor: '#ffffff' },
    { id: 5, name: 'Donald', image: donaldImage, groupColor: '#ffffff' },
];

const FriendForm = ({ onSubmit, onCancel }) => {
    const [selectedFriend, setSelectedFriend] = useState(null);

    const handleChange = (e) => {
        const friendId = parseInt(e.target.value);
        const friend = fakeFriends.find(friend => friend.id === friendId);
        setSelectedFriend(friend);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (selectedFriend) {
            onSubmit(selectedFriend);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <select value={selectedFriend ? selectedFriend.id : ''} onChange={handleChange}>
                <option value="">Select a friend</option>
                {fakeFriends.map(friend => (
                    <option key={friend.id} value={friend.id}>{friend.name}</option>
                ))}
            </select>
            <button type="submit">Add</button>
            <button type="button" onClick={onCancel}>Cancel</button>
        </form>
    );
};

export default FriendForm;