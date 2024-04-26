import React from 'react';
import Frame from './Frame'; 
import StatusBar from './StatusBar';
import NewFolderNavBar from './NewFolderNavigationBar';

const NewFolderPage = () => {
  return (
    <Frame>
        <StatusBar />
        <NewFolderNavBar />
        <h2>Create New Folder</h2>
      <form>
        <label htmlFor="folderName">Folder Name:</label>
        <input type="text" id="folderName" name="folderName" placeholder="Enter folder name" />
        <button type="submit">Create Folder</button>
      </form>
    </Frame>
  );
};

export default NewFolderPage;