import React, { useState, useEffect } from 'react';
import Frame from './Frame';
import StatusBar from './StatusBar';
import SearchBar from './SearchBar';
import Keyboard from './Keyboard';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const AddGroupContactsPage = ({group, contacts, setIsContactsPage, editGroupFriends, setForceRemount}) => {
    const [selectedContacts, setSelectedContacts] = useState([]);
    const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

    const handleCheckboxChange = (contact) => {
        if (selectedContacts.includes(contact)) {
            setSelectedContacts(selectedContacts.filter((c) => c !== contact));
        } else {
            setSelectedContacts([...selectedContacts, contact]);
        }
    };
    const navigate = useNavigate();

    const handleDone = () => {
        editGroupFriends(group.id, selectedContacts.map(contact => contact.name));
        setIsContactsPage(false);
        setForceRemount(prevState => !prevState);
        navigate('/');
    };

    const toggleKeyboard = () => {
        setIsKeyboardOpen(!isKeyboardOpen);
    }
    const closePage = () => {
        setIsContactsPage(false);
    }

    const renderContacts = () => {
        let currentGroup = '';
        return contacts.map((contact, index) => {
            let groupHeader = null;
            if (contact.group !== currentGroup) {
                currentGroup = contact.group;
                groupHeader = <div key={`group-${currentGroup}`} style={styles.groupHeader}>{currentGroup}</div>;
            }
            return (
                <React.Fragment key={`contact-${index}`}>
                    {groupHeader}
                    <div style={styles.contactRow}>
                        <span style={styles.contactName}>{contact.name}</span>
                        <input 
                            type="checkbox" 
                            style={styles.checkbox} 
                            checked={selectedContacts.includes(contact)}
                            onChange={() => handleCheckboxChange(contact)}
                        />
                    </div>
                </React.Fragment>
            );
        });
    };

    const isDoneButtonVisible = selectedContacts.length > 0;

    useEffect(() => {
        // Pre-select friends already in the group
        const selected = contacts.filter(contact => group.friends.includes(contact.name));
        setSelectedContacts(selected);
    }, [group, contacts]);


    return (
        <>
            <StatusBar />
            <div style={styles.topBar}>
                <span style={styles.addTo}>Add to {group.name}</span>
            </div>
            <div style={styles.topBarRight}>
                <button onClick={isDoneButtonVisible ? handleDone : closePage} style={styles.cancel}>
                    {isDoneButtonVisible ? 'Done' : 'Cancel'}
                </button>
            </div>
            <SearchBar style={styles.searchBar} onClick={toggleKeyboard} />
            <div style={styles.contactList}>
                {renderContacts()}
            </div>
            <div style={styles.alphabetBar}>
                <ol style={styles.alphabetList}>
                    <li><a href="#A">A</a></li>
                    <li><a href="#B">B</a></li>
                    <li><a href="#C">C</a></li>
                    <li><a href="#D">D</a></li>
                    <li><a href="#E">E</a></li>
                    <li><a href="#F">F</a></li>
                    <li><a href="#G">G</a></li>
                    <li><a href="#H">H</a></li>
                    <li><a href="#I">I</a></li>
                    <li><a href="#J">J</a></li>
                    <li><a href="#K">K</a></li>
                    <li><a href="#L">L</a></li>
                    <li><a href="#M">M</a></li>
                    <li><a href="#N">N</a></li>
                    <li><a href="#O">O</a></li>
                    <li><a href="#P">P</a></li>
                    <li><a href="#Q">Q</a></li>
                    <li><a href="#R">R</a></li>
                    <li><a href="#S">S</a></li>
                    <li><a href="#T">T</a></li>
                    <li><a href="#U">U</a></li>
                    <li><a href="#V">V</a></li>
                    <li><a href="#W">W</a></li>
                    <li><a href="#X">X</a></li>
                    <li><a href="#Y">Y</a></li>
                    <li><a href="#Z">Z</a></li>
                    <li><a href="#num">#</a></li>
                </ol>
            </div>
            {isKeyboardOpen && <Keyboard onKeyPress={(key) => console.log(key)} />}
        </>
    );
};

const styles = {
    topBar: {
        textAlign: 'center',
        marginTop: '28px',
    },
    addTo: {
        fontSize: '18px',
        fontWeight: 'bold',
    },
    topBarRight: {
        position: 'absolute',
        top: '48px',
        right: '10px',
    },
    cancel: {
        textDecoration: 'none',
        color: 'blue',
        fontSize: '18px'
    },
    searchBar: {
        marginTop: '0px', 
    },
    contactList: {
        width: '90%',
        margin: '20px auto',
        fontFamily: 'Arial, sans-serif',
    },
    groupHeader: {
        color: '#606262',
        padding: '5px',
    },
    contactRow: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '5px',
        borderBottom: '1px solid #333',
    },
    contactName: {
        color: '#000',
    },
    checkbox: {
        marginLeft: '10px',
    },
    alphabetBar: {
        position: 'absolute',
        top: '180px',
        right: '0',
        width: '20px',
        padding: '0',
        textAlign: 'center',
        zIndex: '9999',
    },
    alphabetList: {
        listStyleType: 'none',
        padding: '0',
        margin: '0',
        counterReset: 'alphabet',
    },
    alphabetListItem: {
        marginBottom: '10px',
        '::before': {
            content: 'counter(alphabet)',
            counterIncrement: 'alphabet',
        },
    },
    alphabetLink: {
        display: 'block',
        textDecoration: 'none',
        color: 'blue',
        fontSize: '9px',
    },
    alphabetLinkHover: {
        textDecoration: 'underline',
    },
};

export default AddGroupContactsPage;