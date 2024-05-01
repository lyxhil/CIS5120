import React from 'react';
import newFolder from './images/newfolder.png'
import { Link } from 'react-router-dom';

const NewFolderNavigationBar = ({ title }) => {
    // const navigate = useNavigate();

    // const handleCancel = () => {
    //     navigate('/groups-page');
    // }
    return (
        <div style={{ position: 'absolute', top: '10', left: '0', width: '100%', zIndex: '9998', display: 'flex',  alignItems: 'center', padding: '30px' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Link to="/groups" style={{ textDecoration: 'none', color: 'blue', fontSize: '18px' }}>
                    Cancel
                </Link>
                <span style={{ fontSize: '20px' }}>{title}</span>
            </div>
            <div style={{ position: 'absolute', left: '45%', transform: 'translateX(-50%)', textAlign: 'center'}}>
                <span style={{ textDecoration: 'none', color: 'black', fontSize: '18px', fontWeight: 'bold', marginRight: 'auto' }}>
                    New Chat Folder
                </span>
            </div>
        </div>
    );
};

export default NewFolderNavigationBar;