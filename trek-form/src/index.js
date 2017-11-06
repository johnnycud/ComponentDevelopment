import '../node_modules/bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import ContactsApp from './App';

var contacts = [
    {
        "name": "Peter Byrne",
        "fan-name": "Picard",
        "phone_number": "058-42150"
    },

    {
        "name": "Kenny Murphy",
        "fan-name": "Tuvok",
        "phone_number": "021-829653"
    },

    {
        "name": "Kenny Kilagrew",
        "fan-name": "Ryker",
        "phone_number": "051-654214"
    },

    {
        "name": "Peter Hayes",
        "fan-name": "scotty",
        "phone_number": "087-7513361"
    },

    {
        "name": "John Keating",
        "fan-name": "Archer",
        "phone_number": "085-4515561"
    }
  ] ;       

ReactDOM.render(
  <FanApp  contacts={contacts}  />,
      document.getElementById('root')
);
