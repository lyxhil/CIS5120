import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import GroupsPage from './GroupsPage';
import ContactsPage from './ContactsPage';
import FriendsPage from './FriendsPage';
import BrandonPage from './BrandonPage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/groups" element={<GroupsPage />} />
                <Route path="/contacts" element={<ContactsPage />} />
                <Route path="/friends-page" element={<FriendsPage />} />
                <Route path="/brandon-page" element={<BrandonPage />} />
            </Routes>
        </Router>
    );
};

export default App;