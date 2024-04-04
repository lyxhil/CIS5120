import React from 'react';
import Frame from './Frame';
import StatusBar from './StatusBar';
import NavigationBar from './NavigationBar';
import ToggleButton from './ToggleButton';
import SearchBar from './SearchBar';

const contacts = [
    { group: 'A', name: 'Amos' },
    { group: 'A', name: 'Angela' },
    { group: 'A', name: 'Angelica' },
    { group: 'A', name: 'Angelina' },
    { group: 'A', name: 'Anmol' },
    { group: 'A', name: 'Anthony' },
    { group: 'A', name: 'Aunt Mary' },
    { group: 'A', name: 'Aunt Claudia' },
    { group: 'B', name: 'Benjamin' },
    { group: 'B', name: 'Betty' },
    { group: 'B', name: 'Bill' },
    { group: 'B', name: 'Bob' },
    { group: 'B', name: 'Brandon' },
    { group: 'B', name: 'Brett' },
    { group: 'B', name: 'Briana' },
    { group: 'C', name: 'Cameron' },
    { group: 'C', name: 'Catherine' },
    { group: 'C', name: 'Carlie' },
    { group: 'C', name: 'Carter' },
    { group: 'C', name: 'Charis' },
    { group: 'C', name: 'Cheryl' },
    { group: 'C', name: 'Christian' },
    { group: 'C', name: 'Clarissa' },
    { group: 'C', name: 'Clarista' },
];

const ContactsPage = () => {
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
                        <input type="checkbox" style={styles.checkbox} />
                    </div>
                </React.Fragment>
            );
        });
    };

    return (
        <Frame>
            <StatusBar />
            <div style={styles.topBar}>
                <span style={styles.addTo}>Add to Friends</span>
            </div>
            <div style={styles.topBarRight}>
                <a href="/" style={styles.cancel}>Cancel</a>
            </div>
            <SearchBar />
            <ToggleButton />
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
        </Frame>
    );
};

const styles = {
    topBar: {
        textAlign: 'center',
    },
    addTo: {
        fontSize: '18px',
        fontWeight: 'bold',
    },
    topBarRight: {
        position: 'absolute',
        top: '10px',
        right: '10px',
    },
    cancel: {
        textDecoration: 'none',
        color: 'blue',
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