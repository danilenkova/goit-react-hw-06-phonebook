import {
  Contacts,
  ContactsItem,
  ContactInfo,
  ContactName,
  DeleteButton,
} from "./ContactList.styled";
import { useSelector, useDispatch } from "react-redux";
import {
  getFilter,
  getVisibleTodos,
} from "../../redux/contacts/contacts-selectors";
import { deleteContact } from "../../redux/contacts/contacts-actions";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getVisibleTodos);
  const filter = useSelector(getFilter);

  return (
    <>
      {contacts.length ? (
        <Contacts>
          {contacts.map(({ id, name, number }) => (
            <ContactsItem key={id}>
              <ContactInfo>
                <ContactName>{name}</ContactName>
                {number}
              </ContactInfo>
              <DeleteButton
                type="submit"
                onClick={() => dispatch(deleteContact(id))}
              >
                Delete
              </DeleteButton>
            </ContactsItem>
          ))}
        </Contacts>
      ) : (
        <p>No contacts by name {filter.toUpperCase()} in PhoneBook</p>
      )}
    </>
  );
};

export default ContactList;
