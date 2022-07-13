import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/phonebook/phonebook-actions';
import ContactItem from 'components/ContactItem';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const deleteContacts = contactsId => {
    dispatch(deleteContact(contactsId));
  };
  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <ul>
      {getVisibleContacts().map(({ name, number, id }) => {
        return (
          <ContactItem
            name={name}
            number={number}
            key={id}
            id={id}
            onDeleteContacts={deleteContacts}
          />
        );
      })}
    </ul>
  );
};


export default ContactList;