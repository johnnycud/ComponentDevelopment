import '../node_modules/bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import FanApp from './App';

var fans = [
    {
        "name": "Peter Byrne",
        "fan_name": "Picard",
        "phone_number": "058-42150"
    },

    {
        "name": "Kenny Murphy",
        "fan_name": "Tuvok",
        "phone_number": "021-829653"
    },

    {
        "name": "Kenny Kilagrew",
        "fan_name": "Ryker",
        "phone_number": "051-654214"
    },

    {
        "name": "Peter Hayes",
        "fan_name": "scotty",
        "phone_number": "087-7513361"
    },

    {
        "name": "John Keating",
        "fan_name": "Archer",
        "phone_number": "085-4515561"
    }
  ] ;       

ReactDOM.render(
  <FanApp  fans={fans}  />,
      document.getElementById('root')
);
