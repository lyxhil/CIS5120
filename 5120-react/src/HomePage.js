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
    { name: 'Brandon', message: 'Lorem ipsum...', image: brandonImage, groupColor: 'rgba(255, 99, 71, 0.5)' },
    { name: 'Mrs Smith', message: 'Lorem ipsum...', image: mrsSmithImage, groupColor: 'rgba(135, 206, 235, 0.5)' },
    { name: 'Mr Drew', message: 'Lorem ipsum...', image: mrDrewImage, groupColor: 'rgba(123, 104, 238, 0.5)' },
    { name: 'Angelina', message: 'Lorem ipsum...', image: angelinaImage, groupColor: 'rgba(60, 179, 113, 0.5)' },
    { name: 'Donald', message: 'Lorem ipsum...', image: donaldImage, groupColor: 'rgba(255, 165, 0, 0.5)' },
];

const HomePage = () => {
    return (
        <Frame>
            <StatusBar />
            <NavigationBar title="Home" />
            <SearchBar />
            <ToggleButton />
            <PinnedChats />
            <ChatList friends={allFriends} showDeleteButton={false}/>
        </Frame>
    );
};

export default HomePage;