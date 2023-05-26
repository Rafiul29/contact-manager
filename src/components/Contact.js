import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  TiArrowSortedDown,
  TiArrowSortedUp,
  TiDeleteOutline,
} from "react-icons/ti";
import { Consumer } from "./context";

class Contact extends Component {
  state = {
    showContactInfo: false,
  };

  onShowClick = () => {
    this.setState({
      showContactInfo: !this.state.showContactInfo,
    });
  };

  onDeleteCLick = (id,dispatch) => {
    dispatch({
      type:"DELETE_CONTACT",
      payload:id
    })
  };

  render() {
    const { id,name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <Consumer>
        {(value) => {
          const {dispatch}=value
          return (
            <div className="card card-body mb-3">
              <h4 className="d-flex justify-content-between align-items-center">
                <div>
                  {name}{" "}
                  {showContactInfo ? (
                    <TiArrowSortedUp
                      onClick={this.onShowClick}
                      style={{ cursor: "pointer" }}
                    />
                  ) : (
                    <TiArrowSortedDown
                      onClick={this.onShowClick}
                      style={{ cursor: "pointer" }}
                    />
                  )}
                </div>
                <TiDeleteOutline
                  onClick={this.onDeleteCLick.bind(this,id,dispatch)}
                  className="text-danger"
                  style={{ cursor: "pointer" }}
                />
              </h4>
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item"> Email: {email}</li>
                  <li className="list-group-item">Phone: {phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}
Contact.defaultProps = {
  name: "Islam",
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Contact;
