import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        {
          id: 1,
          name: "Rafiul islam",
          email: "rafulislam@gmail.com",
          phone: "2323-2323-2323",
        },
        {
          id: 2,
          name: "Henry islam",
          email: "henry.com",
          phone: "2321-5643-2322",
        },
        {
          id: 3,
          name: "abdulla ",
          email: "rafulislam@gmail.com",
          phone: "122-453-321",
        },
      ],
    };
  }

  deleteContact = (id) => {
    console.log(id);
    const newContacts = this.state.contacts.filter(
      (contact) => contact.id !== id
    );
    this.setState({
      contacts: newContacts,
    });
  };

  render() {
    const { contacts } = this.state;

    return (
      <React.Fragment>
        {contacts.map((contact) => (
          <Contact
            key={contact.key}
            contact={contact}
            deleteClickHandler={this.deleteContact.bind(this, contact.id)}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;
