import React from 'react';

class ContactsApp extends React.Component {
    render() {
        return (
            <div>
                <h1>Contact List.</h1>
                <ContactsTable contacts={this.props.contacts} />  {/* CHANGE */}
            </div>
        );

class Contact extends React.Component {
    render() {
        return (
            <tr >
                {
                    "friends": [
                    {
                    "id": 1,
                     "name": "Joe Bloggs",
                    "address": "1 Main Street",
                     "email": "jbloggs@here.con"
                    },
                    {
                    "id": 2,
                    "name": "Paula Smith",
                    "address": "5 High Street",
                    "email": "psmith@here.con"
                     },
                    {
                    "id": 3,
                    "name": "Catherine Dwyer",
                    "address": "2 Upper Street",
                    "email": "cdwyer@here.con"
                    },
                    {
                    "id": 4,
                    "name": "Paul Briggs",
                    "address": "3 Side Street",
                    "email": "pbriggs@here.con"
                    }
                ]
            }
            </tr>
        );
    }
}

class ContactList extends React.Component {
    render() {
        var contactRows = null;  // TODO
        return (
            <li>
                <h2>{this.props.friend.name}</h2>
                <a href={'mailto:' + this.props.friend.email}>
                    {this.props.friend.email} </a>
            </li>
        );
    }
}

class ContactsTable extends React.Component {
     render() {
         return (
             <table className="table table-bordered">
                        . . . . . . . .
             <ContactList contacts={this.props.contacts} />   {/* CHANGE */}
                    </table>
                );
            }
        }

class ContactsApp extends React.Component {
    render() {
        return (
            <div>
                <h1>Contact List.</h1>
                <ContactsTable />
            </div>
        );
    }
}

export default ContactsApp;