import React from 'react';
import newFolder from './images/newfolder.png'
import { useNavigate } from 'react-router-dom';

const GroupsNavigationBar = ({ title }) => {
    const navigate = useNavigate();

    const handleNewFolderClick = () => {
        navigate('/new-folder');
    }
    return (
        <div style={{ position: 'absolute', top: '40', left: '0', width: '100%', zIndex: '9998', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '30px' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <a href="/" style={{ textDecoration: 'none', color: 'blue', marginRight: '10px', fontSize: '18px' }}>
                    Edit
                </a>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ textDecoration: 'none', color: 'black', marginRight: '140px', fontSize: '18px', fontWeight: 'bold' }}>
                    Folders
                </span>
            <div style={{ display: 'flex', alignItems: 'center'}}>
                <button onClick={handleNewFolderClick} style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}>
                    <img src={newFolder} alt="new" style={{ width: '38px', height: '38px', marginRight: "40px" }} />
                </button>
            </div>
            </div>
        </div>
    );
};

export default GroupsNavigationBar;