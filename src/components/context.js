import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
      default:
        return state;
  }
};


export class Provider extends Component {
  state = {
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
    dispatch:action=>{
      this.setState(state=>reducer(state,action))
    }
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
