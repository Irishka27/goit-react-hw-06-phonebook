import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/phonebook/phonebook-actions';
import { getItemsValueState, getFilterValueState } from '../../redux/phonebook/phonebook-selectors';
import ContactListItem from './ContactListItem';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getItemsValueState);
  const filter = useSelector(getFilterValueState);
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
          <ContactListItem
            name={name}
            number={number}
            key={id}
            id={id}
            onDeleteContacts={deleteContacts}
          />
        )
      })}
    </ul>
  );
};


export default ContactList;