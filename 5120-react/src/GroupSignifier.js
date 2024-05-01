import React, {useEffect} from 'react';
import { IoIosAddCircle } from "react-icons/io";
import ChatList from './ChatList';
import { Link, useNavigate, useParams } from 'react-router-dom';
import StatusBar from './StatusBar';
import Frame from './Frame';
import SearchBar from './SearchBar';
import GroupsNavigationBar from './GroupsNavigationBar';

const groupSignifierStyle = (backgroundColor) => ({
    backgroundColor,
    borderRadius: '15px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '80px',
    margin: '10px',
    marginTop: '20px',
    width: '115px',
    fontSize: '40px',
});

const GroupSignifier = ({groups, contacts, deleteGroup, setContacts}) => {
    const navigate = useNavigate();
    const handleBackToGroups = () => {
        navigate('/groups');
    };
    const { groupId } = useParams();
    const group = groups.find(group => group.id === parseInt(groupId));

    const filteredContacts = contacts.filter(contact => group.friends.includes(contact.name));
    const handleDeleteGroup = () => {
        // Delete the group from the groups array
        deleteGroup(groupId);

        // Remove the group from the groupList of all contacts that have it
        const updatedContacts = contacts.map(contact => {
            if (contact.groupList.includes(group.name)) {
                // Filter out the group name from the groupList
                const updatedGroupList = contact.groupList.filter(groupName => groupName !== group.name);
                // Return a new contact object with updated groupList
                return { ...contact, groupList: updatedGroupList };
            }
            return contact;
        });

        // Update the contacts state
        setContacts(updatedContacts);

        // Navigate back to the 'groups' page
        navigate('/groups');
    };
    return (
        <>
        <Frame style={{position: 'relative', marginBottom: '300px'}}>
        <StatusBar />
        <GroupsNavigationBar title={group.id ? groups.find(group => group.id === group.id).name : null} />
            <div style={{ marginTop: '70px' }}>
                <SearchBar />
            </div>
        <div>
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center' , marginTop: '20px', justifyContent: 'space-between'}}>
        <button onClick={handleBackToGroups} style={{  marginLeft: '5px', textDecoration: 'none', fontSize: '20px', backgroundColor: 'transparent', border: 'none', color: 'blue'}}>{'< '}Back</button>
        <Link to={`/groupsContacts/${group.id}`}> 
            <IoIosAddCircle style={{height:"35px", width:"35px"}}/>
        </Link>
        </div>
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
            <div style={groupSignifierStyle(group.backgroundColor)}>
                {group.emoji}
            </div>
            <span style={{fontSize: '35px', fontWeight: 'bold'}}>{group.name}</span>
        </div>
        <ChatList groups={groups} friends={filteredContacts} showDeleteButton={false} renderItem={(friend) => (
                    // <Link to={friend.route} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                            <img src={friend.image} alt={friend.name} />
                            <div style={{ marginLeft: '10px'}}>
                                <h3>{friend.messages[-1].message}</h3>
                                <p>{friend.name}</p>
                            </div>
                        </div>
                    // </Link>
                )}/>
            <div
                style={{
                    position: 'absolute',  // Changed from 'fixed' to 'absolute'
                    bottom: '20px',
                    left: '50%',            // Center it relative to the frame
                    transform: 'translateX(-50%)', // Keep the centering consistent
                    backgroundColor: 'red',
                    color: 'white',
                    borderRadius: '20px',
                    padding: '10px 20px',
                    cursor: 'pointer',
                    width: '50px',
                    textAlign: 'center',
                }} 
                onClick={handleDeleteGroup}
            >
                Delete Group
            </div>
        </div>
        </Frame>
        </>
    );
};

export default GroupSignifier;