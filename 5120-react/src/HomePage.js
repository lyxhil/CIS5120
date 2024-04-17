import React from 'react';
import Frame from './Frame';
import StatusBar from './StatusBar';
import NavigationBar from './NavigationBar';
import SearchBar from './SearchBar';
import ToggleButton from './ToggleButton';
import PinnedChats from './PinnedChats';
import ChatList from './ChatList';

import brandonImage from './images/brandon.png';
import mrsSmithImage from './images/mrssmith.png';
import mrDrewImage from './images/mrdrew.png';
import angelinaImage from './images/angelina.png';
import donaldImage from './images/donald.png';

const allFriends = [
    { name: 'Brandon', message: 'Are you free for lunch?', image: brandonImage, groupColor: '#000000' },
    { name: 'Mrs Smith', message: 'Yes, tomorrow 3pm works', image: mrsSmithImage, groupColor: '#24b247' },
    { name: 'Mr Drew', message: 'How has school been?', image: mrDrewImage, groupColor: 'rgba(123, 104, 238, 0.5)' },
    { name: 'Angelina', message: 'Sure!', image: angelinaImage, groupColor: 'rgba(60, 179, 113, 0.5)' },
    { name: 'Donald', message: 'Lorem ipsum...', image: donaldImage, groupColor: 'rgba(255, 165, 0, 0.5)' },
];

const HomePage = () => {
    return (
        <Frame>
            <StatusBar />
            <NavigationBar />
            <div style={{ marginTop: '70px' }}> {/* Adjust margin-top to create space below the navigation bar */}
                <SearchBar />
                <ToggleButton />
                <PinnedChats />
                <ChatList friends={allFriends} showDeleteButton={false}/>
            </div>
        </Frame>
    );
};

export default HomePage;