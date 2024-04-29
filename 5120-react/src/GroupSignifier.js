import React, {useEffect} from 'react';
import { IoIosAddCircle } from "react-icons/io";
import ChatList from './ChatList';
import AddGroupContactsPage from './AddGroupContactsPage';

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

const GroupSignifier = (group, setSelectedGroupId, contacts, isContactsPage, setIsContactsPage, editGroupFriends, forceRemount, setForceRemount) => {
    const handleBackToGroups = () => {
        setSelectedGroupId(null);
    };
    const addContacts = () => {
        setIsContactsPage(true);
    };

    // useEffect(() => {
    //     // This effect will run whenever forceRemount changes
    //     // You can perform any necessary actions here
    //     console.log("GroupSignifier remounted");
    // }, [forceRemount]);

    const filteredContacts = contacts.filter(contact => group.friends.includes(contact.name));

    return (
        <>
        {isContactsPage ? (<AddGroupContactsPage group={group} contacts={contacts} setIsContactsPage={setIsContactsPage} editGroupFriends={editGroupFriends} setForceRemount={setForceRemount}/>) :
        (<div>
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center' , marginTop: '20px', justifyContent: 'space-between'}}>
        <button onClick={handleBackToGroups} style={{  marginLeft: '5px', textDecoration: 'none', fontSize: '20px', backgroundColor: 'transparent', border: 'none', color: 'blue'}}>{'< '}Back</button>
        <IoIosAddCircle onClick={addContacts} style={{height:"35px", width:"35px"}}/>
        </div>
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
            <div style={groupSignifierStyle(group.backgroundColor)}>
                {group.emoji}
            </div>
            <span style={{fontSize: '35px', fontWeight: 'bold'}}>{group.name}</span>
        </div>
        <ChatList friends={filteredContacts} showDeleteButton={false} renderItem={(friend) => (
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
        </div>)
        }
        </>
    );
};

export default GroupSignifier;