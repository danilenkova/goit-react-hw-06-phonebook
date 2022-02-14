import { useSelector } from "react-redux";
import { getContacts } from "../../redux/contacts/contacts-selectors";
import Container from "../container";
import { Section } from "../section";
import ContactForm from "../form";
import Filter from "../filter";
import ContactList from "../contactList";

const Main = () => {
  const contacts = useSelector(getContacts);

  return (
    <section>
      <Container>
        <Section title="Add new contact">
          <ContactForm />
        </Section>
        <Section title="Contacts">
          {contacts.length ? (
            <>
              <Filter />
              <ContactList />
            </>
          ) : (
            <p>No contacts in PhoneBook</p>
          )}
        </Section>
      </Container>
    </section>
  );
};

export default Main;
