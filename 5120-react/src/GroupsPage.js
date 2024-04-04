import React, { useState } from 'react';
import Frame from './Frame';
import StatusBar from './StatusBar';
import NavigationBar from './NavigationBar';
import SearchBar from './SearchBar';
import ToggleButton from './ToggleButton';
import Toolbar from './Toolbar';
import GroupsContainer from './GroupsContainer';
import GroupForm from './GroupForm';
import FriendsContainer from './FriendsContainer';
import groupSignifier from './GroupSignifier';
import brandonImage from './images/brandon.png';
import angelaImage from './images/angela.png';

const initialGroups = [
    { id: 1, name: 'Friends', emoji: '😀', backgroundColor: '#ff9a9e', friends: [
        { name: 'Brandon', message: 'Hello!', image: brandonImage, groupColor: '#ff9a9e' },
        { name: 'Angela', message: 'How are you?', image: angelaImage, groupColor: '#ff9a9e' },
    ] },
    { id: 2, name: 'Clubs', emoji: '⚽', backgroundColor: '#b8e1fc', friends: [] },
    { id: 3, name: 'Classes', emoji: '✏️', backgroundColor: '#ffc7a0', friends: [] },
    { id: 4, name: 'Family', emoji: '👨‍👩‍👧‍👦', backgroundColor: '#dbe7e4', friends: [] },
    { id: 5, name: 'Miscellaneous', emoji: '✨', backgroundColor: '#ffdcb8', friends: [] },
    { id: 6, name: 'Do Not Respond', emoji: '❌', backgroundColor: '#f4b6c2', friends: [] }
];

const GroupsPage = () => {
    const [groups, setGroups] = useState(initialGroups);
    const [mode, setMode] = useState('view'); // 'view', 'delete', 'edit'
    const [selectedGroup, setSelectedGroup] = useState(null);
    const [selectedGroupId, setSelectedGroupId] = useState(null);

    const handleAddGroup = () => {
        setSelectedGroup({ name: '', emoji: '', backgroundColor: '#cccccc' });
    };

    const handleDeleteGroup = (id) => {
        setGroups(groups.filter(group => group.id !== id));
    };

    const handleEditGroup = (group) => {
        setSelectedGroup(group);
    };

    const handleSubmitGroup = (group) => {
        if (group.id) {
            // Editing an existing group
            const updatedGroups = groups.map(g => g.id === group.id ? group : g);
            setGroups(updatedGroups);
        } else {
            // Adding a new group
            const newGroup = { ...group, id: Date.now() };
            setGroups([...groups, newGroup]);
        }
        setSelectedGroup(null);
    };

    const handleCancelForm = () => {
        setSelectedGroup(null);
    };

    const handleDeleteMode = () => {
        setMode(mode === 'delete' ? 'view' : 'delete');
    };

    const handleEditMode = () => {
        setMode(mode === 'edit' ? 'view' : 'edit');
    };

    const handleGroupClick = (groupId) => {
        setSelectedGroupId(groupId);
    };

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
        <Frame>
            <StatusBar />
            {selectedGroupId ? (
                <>
                    <NavigationBar title={groups.find(group => group.id === selectedGroupId).name} onBack={handleBackToGroups} />
                    <SearchBar />
                    <ToggleButton />
                    {groupSignifier(groups.find(group => group.id === selectedGroupId))}
                    <FriendsContainer
                        friends={groups.find(group => group.id === selectedGroupId).friends}
                        onAddFriend={(friend) => handleAddFriend(selectedGroupId, friend)}
                        onDeleteFriend={(friendId) => handleDeleteFriend(selectedGroupId, friendId)}
                        showDeleteButton={false}
                    />
                </>
            ) : (
                <>
                    <NavigationBar title="Groups" />
                    <SearchBar />
                    <ToggleButton />
                    <Toolbar onAdd={handleAddGroup} onDelete={handleDeleteMode} onEdit={handleEditMode} />
                    {selectedGroup && (
                        <GroupForm
                            initialGroup={selectedGroup}
                            onSubmit={handleSubmitGroup}
                            onCancel={handleCancelForm}
                        />
                    )}
                    <GroupsContainer
                        groups={groups}
                        mode={mode}
                        onDelete={handleDeleteGroup}
                        onEdit={handleEditGroup}
                        onGroupClick={handleGroupClick}
                    />
                </>
            )}
        </Frame>
    );
};

export default GroupsPage;