import React, { useState } from 'react';
import Frame from './Frame';
import StatusBar from './StatusBar';
import GroupsNavigationBar from './GroupsNavigationBar';
import SearchBar from './SearchBar';
import ToggleButton from './ToggleButton';
import GroupsContainer from './GroupsContainer';
import GroupForm from './GroupForm';
import groupSignifier from './GroupSignifier';

const initialGroups = [
    { id: 1, name: 'Friends', emoji: '❤️', backgroundColor: '#ff9a9e', friends: [] },
    { id: 2, name: 'Clubs', emoji: '🏊‍♀️', backgroundColor: '#ffb434', friends: [] },
    { id: 3, name: 'Classes', emoji: '📖', backgroundColor: '#24b247', friends: [] },
    { id: 4, name: 'Family', emoji: '👨‍👩‍👧', backgroundColor: '#a988fd', friends: [] },
    { id: 5, name: 'Miscellaneous', emoji: '❓', backgroundColor: '#ffdcb8', friends: [] },
    { id: 6, name: 'Do Not Respond', emoji: '❌', backgroundColor: '#f4b6c2', friends: [] }
];

const GroupsPage = () => {
    const [groups, setGroups] = useState(initialGroups);
    const [mode, setMode] = useState('view'); // 'view', 'delete', 'edit'
    const [selectedGroup, setSelectedGroup] = useState(null);
    const [selectedGroupId, setSelectedGroupId] = useState(null);
    const [isHomeActive, setIsHomeActive] = useState(false);

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
    
    const handleToggleClick = (isHome) => {
        setIsHomeActive(isHome);
    }

    return (
        <Frame>
            <StatusBar />
            <GroupsNavigationBar title={selectedGroupId ? groups.find(group => group.id === selectedGroupId).name : null} onBack={handleBackToGroups} />
            <div style={{ marginTop: '70px' }}>
                <SearchBar />
            </div>
            <ToggleButton isHomeActive={isHomeActive} onToggleClick={handleToggleClick} />
            {selectedGroupId ? (
                <>
                    {groupSignifier(groups.find(group => group.id === selectedGroupId))}
                    {/* <FriendsContainer
                        friends={groups.find(group => group.id === selectedGroupId).friends}
                        onAddFriend={(friend) => handleAddFriend(selectedGroupId, friend)}
                        onDeleteFriend={(friendId) => handleDeleteFriend(selectedGroupId, friendId)}
                        showDeleteButton={false}
                    /> */}
                </>
            ) : (
                <>
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