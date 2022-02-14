import { createAction } from "@reduxjs/toolkit";
import shortid from "shortid";

export const addContact = createAction("contacts/Add", ({ name, number }) => ({
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
}));

export const deleteContact = createAction("contacts/Delete");

export const changeFilter = createAction("contacts/changeFilter");
