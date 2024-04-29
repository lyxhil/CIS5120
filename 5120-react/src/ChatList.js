import React from 'react';
import { Link } from 'react-router-dom';

const chatStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    borderBottom: '1px solid #333',
};

const outerCircleStyle = (groupColor) => ({
    width: '55px',
    height: '55px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: `0 0 0 5px ${groupColor}`,
    marginRight: '10px',
});

const ChatList = ({ friends, showDeleteButton, onDeleteFriend }) => {
    return (
        <div>
            {friends.map((friend, index) => (
            <Link key={index} to={`/messages/${friend.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div key={index} style={chatStyle}>
                    <div style={outerCircleStyle(friend.groupColor)}>
                        <div style={{ width: '45px', height: '45px', borderRadius: '50%', overflow: 'hidden' }}>
                            <img src={friend.image} alt={friend.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                    </div>
                    <div style={{ flex: 1 }}>
                        <div>{friend.name}</div>
                        <div style={{color: 'grey'}}>{friend.messages[friend.messages.length - 1].message}</div>
                    </div>
                    {showDeleteButton && (
                        <button onClick={() => onDeleteFriend(friend.id)}>Delete</button>
                    )}
                </div>
            </Link>
            ))}
        </div>
    );
};

export default ChatList;