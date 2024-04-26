import React from 'react';
import newFolder from './images/newfolder.png'
import { useNavigate } from 'react-router-dom';

const NewFolderNavigationBar = ({ title }) => {
    const navigate = useNavigate();

    const handleCancel = () => {
        navigate('/groups-page');
    }
    return (
        <div style={{ position: 'absolute', top: '40', left: '0', width: '100%', zIndex: '9998', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '30px' }}>
            {/* <div style={{ display: 'flex', alignItems: 'center' }}>
                <a href="/" style={{ textDecoration: 'none', color: 'blue', marginRight: '10px', fontSize: '18px' }}>
                    Edit
                </a>
                <span style={{ fontSize: '20px' }}>{title}</span>
            </div> */}
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ textDecoration: 'none', color: 'black', marginRight: '140px', fontSize: '18px', fontWeight: 'bold' }}>
                    Create New Folder
                </span>
            <div style={{ display: 'flex', alignItems: 'center'}}>
                <button onClick={handleCancelClick} style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}>
                    <a href="/" style={{ textDecoration: 'none', color: 'blue', marginLeft: '10px', fontSize: '18px'}} />
                </button>
            </div>
            </div>
        </div>
    );
};

export default GroupsNavigationBar;