import React, { useReducer } from "react";
import uuid from "uuid";
import ContactContext from "./ContactContext";
import contactReducer from "./ContactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from "../types";

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        type: "profesionnal",
        name: "Simon Blackquill",
        email: "simon.blackquill@gmail.com",
        phone: "122-122-4444"
      },
      {
        id: 2,
        type: "personal",
        name: "Ted Tonate",
        email: "ted@gmail.com",
        phone: "222-222-2222"
      }
    ]
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add Contact

  //Delete Contact

  //Set Current Contact

  //Clear Current Contact

  //Update Contact

  //Filter Contact

  // Clear Filter

  return (
    <ContactContext.Provider value={{ contacts: state.contacts }}>
      {" "}
      {props.children}{" "}
    </ContactContext.Provider>
  );
};

export default ContactState;
