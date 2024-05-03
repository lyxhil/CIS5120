import React from 'react';
import { useParams, Link } from 'react-router-dom';
import microphoneIcon from './images/microphone-icon.png';
import addIcon from './images/add.png';
import facetimeIcon from './images/facetime.png';

const outerCircleStyle = (groupColor) => ({
  width: '55px',
  height: '55px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: `0 0 0 5px ${groupColor}`,
  marginLeft: 'auto',
  marginRight: 'auto',
});

const messageBarStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  marginTop: '460px',
  backgroundColor: '#E2E7EB',
  borderRadius: '10px',
  padding: '1px',
  width: '370px',
};

const ContactMessagesPage = ({ contacts }) => {
  const { contactId } = useParams();
    
  // Find the contact with the matching contactId
  const contact = contacts.find(contact => contact.id === parseInt(contactId));
  return (
    <div style={styles.frameStyle}>
    <div style={styles.container}>
      <div style={styles.contactDetails}>
        <Link style={styles.back} to='/'>{'<'}</Link>
        <div>
          <div style={{justifyContent: 'center', width: '100%'}}>
            <div style={outerCircleStyle(contact.groupColor)}>
              <div style={{ width: '45px', height: '45px', borderRadius: '50%', overflow: 'hidden'}}>
                <img src={contact.image} alt={contact.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
          </div>
          <h1 style={styles.header}>{contact.name}</h1>
        </div>
        <img src={facetimeIcon} alt="Facetime" style={styles.facetimeIcon} />
      </div>
      <div style={styles.messageContainer}>
        {contact.messages.map((message, index) => (
          <div key={index} style={{ ...styles.message, 
            backgroundColor: message.name === 'user' ? '#218aff' : '#d8d8d8',
            color: message.name === 'user' ? 'white' : 'black',
            alignSelf: message.name === 'user' ? 'flex-end' : 'flex-start' }}>
            <p style={styles.messageText}>{message.message}</p>
          </div>
        ))}
      </div>
      <div style={messageBarStyle}>
        <img src={addIcon} alt="Add" style ={{ width: '40px', height: '40px', margin:'0px'}} />
          <input type="text" placeholder="iMessage" style={{
              flex: '1',
              border: 'none',
              background: 'none',
              outline: 'none',
              padding: '2px',
          }} />
          <button style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '5px' }}>
              <img src={microphoneIcon} alt="Microphone" style={{ width: '20px', height: '20px' }} />
          </button>
      </div>
    </div>
    </div>
  );
};
// #218aff
const styles = {
  frameStyle: {
    width: '454px',
    height: '900px',
    backgroundColor: '#ffffff',
    borderRadius: '50px',
    margin: 'auto',
    marginTop: '40px',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)',
    padding: '0px',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  back: {
    textDecoration: 'none',
    marginLeft: '10px',
    fontSize: '30px',
    color: '#218aff',
  },
  contactDetails: {
    paddingTop: '30px',
    paddingLeft:'28px',
    width: '100%',
    backgroundColor: '#f2f2f2',
    display: 'grid',
    gridTemplateColumns: '170px 70px 180px', // Two columns: auto for contact info, 30px for the back link
    alignItems: 'center',
    borderBottom: '1px solid #ccc',
  },
  facetimeIcon: {
    justifySelf: 'end',
    height: '35px',
  },
  header: {
    fontSize: '18px',
    marginBottom: '10px',
    textAlign: 'center',
  },
  messageContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    padding: '20px',
  },
  message: {
    maxWidth: '70%',
    padding: '10px',
    borderRadius: '10px',
    backgroundColor: '#EFEFEF',
  },
  messageText: {
    margin: '0',
  },
};

export default ContactMessagesPage;
