import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/phonebook/phonebook-actions';
import { getVisibleContacts } from '../../redux/phonebook/phonebook-selectors';
import ContactListItem from './ContactListItem';

const ContactList = () => {
  const visibleContacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  const deleteContacts = contactsId => {
    dispatch(deleteContact(contactsId));
  };
 
  return (
    <ul>
      {visibleContacts.map(({ name, number, id }) => {
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