import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes,Route } from "react-router";
import Header from "./components/layout/Header";
import Contacts from "./components/contacts/Contacts";
import { Provider } from "./components/context";
import AddContact from "./components/contacts/AddContact";
import NotFound from "./components/NotFound";

class App extends Component {

  render() {
    return (
      <Provider>
      
      <div>
        <Header branding="Contact Manager" />
        <div className="container">
          <Routes>
            <Route path="/" element={<Contacts/>}/>
            <Route path="/contact/add" element={<AddContact/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
          
        </div>
      </div>
   
      </Provider>
    );
  }
}

export default App;
