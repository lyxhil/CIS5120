import React, { useState } from 'react';
import Frame from './Frame';
import StatusBar from './StatusBar';
import SearchBar from './SearchBar';
import Keyboard from './Keyboard';
import { Link } from 'react-router-dom';


const ContactsPage = ({contacts}) => {
    const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

    const toggleKeyboard = () => {
        setIsKeyboardOpen(!isKeyboardOpen);
    }

    const renderContacts = () => {
        let currentGroup = '';
        // Sort contacts alphabetically by name
        const sortedContacts = contacts.sort((a, b) => a.name.localeCompare(b.name));
    
        return sortedContacts.map((contact, index) => {
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
                    </div>
                </React.Fragment>
            );
        });
    };
    
    
    return (
        <Frame>
            <StatusBar />
            <div style={{ top: '10', left: '0', width: '100%', zIndex: '9998', display: 'flex',  alignItems: 'center', paddingTop: '25px', marginTop: '10px'}}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Link to="/" style={{ textDecoration: 'none', color: 'blue', fontSize: '18px' }}>
                        Back
                    </Link>
                </div>
                <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', textAlign: 'center'}}>
                    <span style={{ textDecoration: 'none', color: 'black', fontSize: '18px', fontWeight: 'bold', marginRight: 'auto' }}>
                        Contacts
                    </span>
                </div>
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
        </Frame>
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

export default ContactsPage;