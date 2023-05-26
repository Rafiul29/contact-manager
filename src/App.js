import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/layout/Header";
import Contacts from "./components/contacts/Contacts";
import { Provider } from "./components/context";
import AddContact from "./components/contacts/AddContact";

class App extends Component {

  render() {
    return (
      <Provider>
     
      <div>
        <Header branding="Contact Manager" />
        <div className="container">
          <AddContact/>
          <Contacts/>
        </div>
      </div>
      </Provider>
    );
  }
}

export default App;
