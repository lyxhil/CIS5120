import React, { useState } from 'react';
import Frame from './Frame';
import FriendsNavigationBar from './FriendsNavigationBar';
import SearchBar from './SearchBar';
import ToggleButton from './ToggleButton';
import FriendsContainer from './FriendsContainer';
import groupSignifier from './GroupSignifier';
import katieImage from './images/katie.png'
import brianaImage from './images/briana.png'
import brandonImage from './images/brandon.png'
import cherylImage from './images/cheryl.png'

const initialChats = [
    { name: 'Katie', message: 'i am at mcclelland', image: katieImage, groupColor: '#ff9a9e' },
    { name: 'Briana', message: 'sounds good, see you then', image: cherylImage, groupColor: '#ff9a9e' },
    { name: 'Cheryl', message: 'That is insane!!!', image: brianaImage, groupColor: '#ff9a9e' },
]

const updatedChats = [
    { name: 'Katie', message: 'i am at mcclelland', image: katieImage, groupColor: '#ff9a9e' },
    { name: 'Briana', message: 'sounds good, see you then', image: brianaImage, groupColor: '#ff9a9e' },
    { name: 'Cheryl', message: 'That is insane!!!', image: cherylImage, groupColor: '#ff9a9e' },
    { name: 'Brandon', message: 'Are you free for lunch?', image: brandonImage, groupColor: '#ff9a9e' },
]

const initialGroup = {
    id: 1, 
    name: 'Friends', 
    emoji: '😀',
    backgroundColor: '#ff9a9e',
    friends: initialChats,
};

const GroupsPage = ({contacts}) => {
    const [groups, setGroups] = useState(initialGroup);
    const [selectedGroupId, setSelectedGroupId] = useState(initialGroup.id);

    const handleBackToGroups = () => {
        setSelectedGroupId(null);
    };

    const handleAddFriend = (groupId, friend) => {
        const updatedGroups = groups.map(group => {
            if (group.id === groupId) {
                return { ...group, friends: [...group.friends, friend] };
            }
            return group;
        });
        setGroups(updatedGroups);
    };

    const handleDeleteFriend = (groupId, friendId) => {
        const updatedGroups = groups.map(group => {
            if (group.id === groupId) {
                const updatedFriends = group.friends.filter(friend => friend.id !== friendId);
                return { ...group, friends: updatedFriends };
            }
            return group;
        });
        setGroups(updatedGroups);
    };
    
    return (
        <FriendsPage
            groups={groups}
            selectedGroupId={selectedGroupId}
            handleBackToGroups={handleBackToGroups}
            handleAddFriend={handleAddFriend}
            handleDeleteFriend={handleDeleteFriend}
        />
    );
};

const FriendsPage = ({ groups, selectedGroupId, handleBackToGroups, handleAddFriend, handleDeleteFriend }) => {
    const selectedGroup = groups.find(group => group.id === selectedGroupId);

    return (
        <Frame>
            <FriendsNavigationBar title={selectedGroup.name} onBack={handleBackToGroups} />
            <div style={{ marginTop: '100px' }}>
                <SearchBar />
            </div>
            <ToggleButton />
            {groupSignifier(selectedGroup)}
            <FriendsContainer
                friends={selectedGroup.friends}
                onAddFriend={(friend) => handleAddFriend(selectedGroupId, friend)}
                onDeleteFriend={(friendId) => handleDeleteFriend(selectedGroupId, friendId)}
                showDeleteButton={false}
            />
        </Frame>
    );
};

export default GroupsPage;