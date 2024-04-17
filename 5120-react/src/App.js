import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import GroupsPage from './GroupsPage';
import ContactsPage from './ContactsPage';
import FriendsPage from './FriendsPage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/groups" element={<GroupsPage />} />
                <Route path="/contacts" element={<ContactsPage />} />
            </Routes>
        </Router>
    );
};

export default App;