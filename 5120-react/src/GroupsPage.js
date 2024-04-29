import React, { useState, useEffect } from 'react';
import Frame from './Frame';
import StatusBar from './StatusBar';
import GroupsNavigationBar from './GroupsNavigationBar';
import SearchBar from './SearchBar';
import ToggleButton from './ToggleButton';
import GroupsContainer from './GroupsContainer';
import GroupForm from './GroupForm';
import GroupSignifier from './GroupSignifier';

const GroupsPage = ({groups, contacts, editGroupFriends}) => {
    const [groupsList, setGroups] = useState(groups);
    const [mode, setMode] = useState('view'); // 'view', 'delete', 'edit'
    const [selectedGroup, setSelectedGroup] = useState(null);
    const [selectedGroupId, setSelectedGroupId] = useState(null);
    const [isHomeActive, setIsHomeActive] = useState(false);
    const [isContactsPage, setIsContactsPage] = useState(false);
    const [forceRemount, setForceRemount] = useState(false); // New state for forcing remount

    useEffect(() => {
        console.log("isContactsPage:", isContactsPage);
    }, [isContactsPage]);


    const handleAddGroup = () => {
        setSelectedGroup({ name: '', emoji: '', backgroundColor: '#cccccc' });
    };

    const handleDeleteGroup = (id) => {
        setGroups(groupsList.filter(group => group.id !== id));
    };

    const handleEditGroup = (group) => {
        setSelectedGroup(group);
    };

    const handleSubmitGroup = (group) => {
        if (group.id) {
            // Editing an existing group
            const updatedGroups = groupsList.map(g => g.id === group.id ? group : g);
            setGroups(updatedGroups);
        } else {
            // Adding a new group
            const newGroup = { ...group, id: Date.now() };
            setGroups([...groupsList, newGroup]);
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

    
    const handleToggleClick = (isHome) => {
        setIsHomeActive(isHome);
    }

    return (
        <Frame style={{marginBottom: '300px'}}>
            <StatusBar />
            {isContactsPage ? (<></>) : 
            (
            <>           
            <GroupsNavigationBar title={selectedGroupId ? groupsList.find(group => group.id === selectedGroupId).name : null} />
            <div style={{ marginTop: '70px' }}>
                <SearchBar />
            </div>
            </> 
            )}
            {!selectedGroupId && <ToggleButton isHomeActive={isHomeActive} onToggleClick={handleToggleClick} />}
            {selectedGroupId ? (
                <>
                    {GroupSignifier(groupsList.find(group => group.id === selectedGroupId), setSelectedGroupId, contacts, isContactsPage, setIsContactsPage, editGroupFriends, forceRemount, setForceRemount)}
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
                        groups={groupsList}
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