import React, { Component } from "react";
import { Consumer } from "../context";
import { v4 as uuidv4 } from "uuid";
import TextInputGroup from "../layout/TextInputGroup";



class AddContact extends Component {


  state = {
    name: "",
    email: "",
    phone: "",
    errors:{}
  };
  //onchnage method reusable
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = (dispatch, e) => {
    e.preventDefault();
   
    const { name, email, phone } = this.state;

    //check error
    if(name===""){
      this.setState({errors:{name:"Name is required"}})
      return
    }
    if(email===""){
      this.setState({errors:{email:"Email is required"}})
      return
    }
    if(phone===""){
      this.setState({errors:{phone:"Phone is required"}})
      return
    }

    const newContact = {
      id: uuidv4(),
      name,
      email,
      phone,

    };
    dispatch({
      type: "ADD_CONTACT",
      payload: newContact,
    });

    //clear state
    this.setState({
      name: "",
      email: "",
      phone: "",
      errors:{}
    });

this.props.history.replace("/")
  };

  render() {
    const { name, email, phone ,errors} = this.state;
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form
                  className="d-flex flex-column gap-3"
                  onSubmit={this.handleSubmit.bind(this, dispatch)}
                >
                  <TextInputGroup
                    type="text"
                    name="name"
                    label="Name"
                    value={name}
                    placeholder={"Enter name..."}
                    onChange={this.onChange}
                    error={errors.name}
                  />
                    <TextInputGroup
                    type="email"
                    name="email"
                    label="Email"
                    value={email}
                    placeholder={"Enter Email..."}
                    onChange={this.onChange}
                    error={errors.email}
                  />
                   <TextInputGroup
                    type="text"
                    name="phone"
                    label="Phone"
                    value={phone}
                    placeholder={"Enter Phone..."}
                    onChange={this.onChange}
                    error={errors.phone}
                  />
                
       
             <input
                    type="submit"
                    value="Add Contact"
                    className="btn btn-success btn-block py-2"
                  />
      
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}


export default AddContact;
