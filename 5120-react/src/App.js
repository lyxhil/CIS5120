import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import GroupsPage from './GroupsPage';
import ContactsPage from './ContactsPage';
import FriendsPage from './FriendsPage';
import BrandonPage from './BrandonPage';
import NewFolderPage from './NewFolderPage';
import ContactMessagesPage from './ContactMessagesPage';

import brandonImage from './images/brandon.png';
import mrsSmithImage from './images/mrssmith.png';
import mrDrewImage from './images/mrdrew.png';
import angelinaImage from './images/angelina.png';
import donaldImage from './images/donald.png';

const App = () => {
    const initialGroups = [
        { id: 1, name: 'Friends', emoji: '🥰', backgroundColor: '#24B247', friends: ['Alex', 'John', 'Alice'] },
        { id: 2, name: 'Clubs', emoji: '🏊‍♀️', backgroundColor: '#42BDEB', friends: [] },
        { id: 3, name: 'Classes', emoji: '📖', backgroundColor: '#FFB434', friends: ['David'] },
        { id: 4, name: 'Family', emoji: '👨‍👩‍👧', backgroundColor: '#A988FD', friends: [] },
        { id: 5, name: 'Miscellaneous', emoji: '❓', backgroundColor: '#FFA0E7', friends: [] },
        { id: 6, name: 'Do Not Respond', emoji: '❌', backgroundColor: '#FF7D88', friends: [] }
    ];

    const initialContacts = [
        {
            id: 1,
            name: 'Alex',
            group: 'A',
            image: brandonImage,
            messages: [
                { name: 'Alex', message: "Hey there! Just wanted to say hi 😊" },
                { name: 'user', message: "Did you know that cats can make over 100 different sounds? 🐱" },
                { name: 'user', message: "Guess what? I learned a new recipe today! 🍲" }
            ]
        },
        {
            id: 2,
            name: 'John',
            group: 'J',
            image: mrDrewImage,
            messages: [
                { name: 'John', message: "Hey, it's John here! Ready for some fun facts?" },
                { name: 'John', message: "Did you know that the shortest war in history lasted only 38 minutes? 😮" },
                { name: 'John', message: "Here's another one: Bananas are berries, but strawberries aren't! 🍓🍌" },
                { name: 'user', message: "Hey John, that's fascinating! Thanks for sharing!" },
                { name: 'user', message: "By the way, did you know that ants never sleep? 🐜" }
            ]
        },
        {
            id: 3,
            name: 'Emily',
            group: 'E',
            image: mrsSmithImage,
            messages: [
                { name: 'Emily', message: "Hi there! How's your day going? 😊" },
                { name: 'user', message: "Hey Emily, did you hear about the new movie coming out next week?" },
                { name: 'Emily', message: "Oh, I heard about it! I'm so excited to watch it with you! 🎬" },
                { name: 'user', message: "Emily, that sounds like a plan! It'll be so much fun!" }
            ]
        },
        {
            id: 4,
            name: 'Michael',
            group: 'M',
            image: donaldImage,
            messages: [
                { name: 'Michael', message: "Hello, it's Michael! Ready for an adventure?" },
                { name: 'user', message: "Hi Michael, absolutely! Where are we going this time?" },
                { name: 'Michael', message: "How about a hike in the mountains? It'll be amazing! ⛰️" },
                { name: 'user', message: "sounds fantastic! Let's do it!" }
            ]
        },
        {
            id: 5,
            name: 'Sarah',
            group: 'S',
            image: angelinaImage,
            messages: [
                { name: 'Sarah', message: "Hi, I'm Sarah! Did you know that the Earth is smoother than a billiard ball?" },
                { name: 'Sarah', message: "And here's another one: Honey never spoils! 🍯" },
                { name: 'user', message: "those are some interesting facts! Thanks for sharing!" }
            ]
        },
        {
            id: 6,
            name: 'David',
            group: 'D',
            image: brandonImage,
            messages: [
                { name: 'David', message: "Hello there, it's David! Have you ever tried skydiving?" },
                { name: 'David', message: "It's an adrenaline rush like no other! You should give it a try sometime! 🪂" },
                { name: 'user', message: "skydiving sounds thrilling! I might consider it someday!" }
            ]
        },
        {
            id: 7,
            name: 'Alice',
            group: 'A',
            image: mrsSmithImage,
            messages: [
                { name: 'Alice', message: "Hey, I'm Alice! Did you know that flamingos can only eat when their heads are upside down?" },
                { name: 'Alice', message: "Isn't nature fascinating? 🦩" },
                { name: 'user', message: "Alice, nature is indeed fascinating! I never knew that about flamingos!" }
            ]
        }
        // Add more contacts as needed
    ];
        
    const [groups, setGroups] = useState([...initialGroups]); // Initial groups state
    const [contacts, setContacts] = useState([...initialContacts]); // Initial groups state
  
    // Function to add a new group
    const addGroup = (newGroup) => {
      setGroups([...groups, newGroup]);
    };

    const editGroupFriends = (groupId, updatedFriends) => {
        setGroups(groups.map(group => {
            if (group.id === groupId) {
                return { ...group, friends: updatedFriends };
            }
            return group;
        }));
    };
  
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage contacts={contacts}/>} />
                <Route path="/groups" element={<GroupsPage groups={groups} contacts={contacts} editGroupFriends={editGroupFriends}/>} />
                <Route path="/contacts" element={<ContactsPage contacts={contacts}/>} />
                <Route path="/friends-page" element={<FriendsPage contacts={contacts}/>} />
                <Route path="/brandon-page" element={<BrandonPage />} />
                <Route path="/new-folder" element={<NewFolderPage addGroup={addGroup} groups={groups}/>} />
                <Route path="/messages/:contactId" element={<ContactMessagesPage contacts={contacts}/>} />
            </Routes>
        </Router>
    );
};

export default App;