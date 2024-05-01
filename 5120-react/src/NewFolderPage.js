import React, { useState } from 'react';
import Frame from './Frame'; 
import NewFolderNavBar from './NewFolderNavigationBar';
import { useNavigate } from 'react-router-dom';

const NewFolderPage  = ({ addGroup, groups }) => {

  const [folderName, setFolderName] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [folderColor, setFolderColor] = useState('#00C7BE');
  const [selectedEmoji, setSelectedEmoji] = useState('');
  const navigate = useNavigate();

  const handleColorChange = (color) => {
    setFolderColor(color);
  };

  const handleModalToggle = () => {
    setModalOpen(!modalOpen);
  };

  const handleEmojiSelection = (emoji) => {
    setSelectedEmoji(emoji);
    setModalOpen(false);
  };

  const handleFolderNameChange = (event) => {
    setFolderName(event.target.value.slice(0, 16)); // Limiting to 16 characters
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic to create folder with folderName, folderColor, and selectedEmoji
    console.log(`Folder name: ${folderName}, Color: ${folderColor}, Emoji: ${selectedEmoji}`);
    const newGroup = { id: groups.length + 1, name: folderName, emoji: selectedEmoji, backgroundColor: folderColor, friends: [] };
    addGroup(newGroup);

    setFolderName('');
    setFolderColor('#00C7BE');
    setSelectedEmoji('');
    navigate('/groups');
  };

  return (
    <Frame>
        <NewFolderNavBar />
        <div style={{ textAlign: 'center' , marginTop: '30%'}}>
          <button onClick={handleModalToggle} style={{ margin: '20px', fontSize: '18px' }}>Add Emoji</button>
          <div style={{ backgroundColor: folderColor, width: '160px', height: '120px', borderRadius: '10px', margin: '20px auto' , paddingTop: '40px'}}>
            <span style={{ fontSize: '65px' }}>{selectedEmoji}</span>
          </div>
          <div>
          <button onClick={() => handleColorChange('#FF7D88')} style={{ backgroundColor: '#FF7D88', borderRadius: '50%', width: '30px', height: '30px', margin: '5px', border: 'none' }}></button>
          <button onClick={() => handleColorChange('#FFB434')} style={{ backgroundColor: '#FFB434', borderRadius: '50%', width: '30px', height: '30px', margin: '5px', border: 'none' }}></button>
          <button onClick={() => handleColorChange('#24B247')} style={{ backgroundColor: '#24B247', borderRadius: '50%', width: '30px', height: '30px', margin: '5px', border: 'none' }}></button>
          <button onClick={() => handleColorChange('#42BDEB')} style={{ backgroundColor: '#42BDEB', borderRadius: '50%', width: '30px', height: '30px', margin: '5px', border: 'none' }}></button>
          <button onClick={() => handleColorChange('#A988FD')} style={{ backgroundColor: '#A988FD', borderRadius: '50%', width: '30px', height: '30px', margin: '5px', border: 'none' }}></button>
          <button onClick={() => handleColorChange('#FFA0E7')} style={{ backgroundColor: '#FFA0E7', borderRadius: '50%', width: '30px', height: '30px', margin: '5px', border: 'none' }}></button>
          </div>

          <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <input type="text" value={folderName} onChange={handleFolderNameChange} maxLength={16} style={{ width: '60%', margin: '20px', fontSize: '18px', textAlign: 'center'}} />
            <button type="submit" disabled={folderName === ''} style={{fontSize: '18px', width: '40%'}}>Create Folder</button>
          </form>
          {/* Render modal */}
          {modalOpen && (
            <div style={{ width: '60%', position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <h3>Select an Emoji:</h3>
              <div>
                <div>
                  <button onClick={() => handleEmojiSelection('😍')} style={{ fontSize: '24px', margin: '5px', border: 'none' }}>😍</button>
                  <button onClick={() => handleEmojiSelection('👨‍👩‍👧‍👦')} style={{ fontSize: '24px', margin: '5px', border: 'none' }}>👨‍👩‍👧‍👦</button>
                  <button onClick={() => handleEmojiSelection('💼')} style={{ fontSize: '24px', margin: '5px', border: 'none' }}>💼</button>
                </div>
                <div> 
                  <button onClick={() => handleEmojiSelection('✏️')} style={{ fontSize: '24px', margin: '5px', border: 'none' }}>✏️</button>
                  <button onClick={() => handleEmojiSelection('👻')} style={{ fontSize: '24px', margin: '5px', border: 'none' }}>👻</button>
                  <button onClick={() => handleEmojiSelection('💃')} style={{ fontSize: '24px', margin: '5px', border: 'none' }}>💃</button>
                </div>
                {/* Add more emoji buttons */}
              </div>
              <button onClick={handleModalToggle} style={{ margin: '10px' }}>Close</button>
            </div>
          )}
        </div>

    </Frame>
  );
};

export default NewFolderPage;