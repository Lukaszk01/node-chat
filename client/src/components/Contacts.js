import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { useContacts } from '../contexts/ContactsProvider';

export default function Contacts() {
  const { contacts } = useContacts()

  return (
    <ListGroup variant="flush">
      {contacts.map(contact => (
        <ListGroup.Item className="d-flex justify-content-start h4" key={contact.id}>
        <div style={{ backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundImage: `url("https://png.pngitem.com/pimgs/s/627-6275734_profile-icon-contacts-hd-png-download.png")`,
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            boxShadow: '1px 1px 3px black',
            marginRight: '5px',
          }}></div>{contact.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}