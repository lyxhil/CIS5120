import React, { useState } from 'react';
import ChatList from './ChatList';
import FriendForm from './FriendForm';

const FriendsContainer = ({ friends, onAddFriend, onDeleteFriend }) => {
    const [isAddingFriend, setIsAddingFriend] = useState(false);

    const handleAddFriend = (friend) => {
        onAddFriend(friend);
        setIsAddingFriend(false);
    };

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
                <h3>Friends</h3>
                <div>
                    <button onClick={() => setIsAddingFriend(true)}>Add Friend</button>
                </div>
            </div>
            {isAddingFriend && (
                <FriendForm onSubmit={handleAddFriend} onCancel={() => setIsAddingFriend(false)} />
            )}
            <ChatList
                friends={friends}
                onDeleteFriend={onDeleteFriend}
                showDeleteButton={true}
            />
        </div>
    );
};

export default FriendsContainer;