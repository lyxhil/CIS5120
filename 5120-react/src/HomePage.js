import React, { useState } from 'react';
import Frame from './Frame';
import StatusBar from './StatusBar';
import NavigationBar from './NavigationBar';
import SearchBar from './SearchBar';
import ToggleButton from './ToggleButton';
import PinnedChats from './PinnedChats';
import ChatList from './ChatList';
import { Link } from 'react-router-dom';
import Keyboard from './Keyboard';

const HomePage = ({groups, contacts}) => {
    const [isHomeActive, setIsHomeActive] = useState(true);
    const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

    const handleToggleClick = (isHome) => {
        setIsHomeActive(isHome);
    };

    const toggleKeyboard = () => {
        setIsKeyboardOpen(!isKeyboardOpen);
    }
    return (
        <Frame>
            <StatusBar />
            <NavigationBar />
            <div style={{ marginTop: '70px' }}> 
                <SearchBar onClick={toggleKeyboard} />
                <ToggleButton isHomeActive={isHomeActive} onToggleClick={handleToggleClick} />
                <PinnedChats contacts={contacts} groups={groups}/>
                <ChatList 
                    groups={groups}
                    friends={contacts.slice(-6)} // This slices the array to include only the last 6 elements
                    showDeleteButton={false}
                    renderItem={(friend) => (
                        <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                            <img src={friend.image} alt={friend.name} />
                            <div style={{ marginLeft: '10px'}}>
                                <h3>{friend.messages[friend.messages.length - 1].message}</h3> {/* Fixed index access */}
                                <p>{friend.name}</p>
                            </div>
                        </div>
                    )}
                />
            </div>
            {isKeyboardOpen && <Keyboard onKeyPress={(key) => console.log(key)} />}
        </Frame>
    );
};

export default HomePage;