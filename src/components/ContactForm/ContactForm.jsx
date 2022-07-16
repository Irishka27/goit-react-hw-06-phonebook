import { useState } from 'react';
import s from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getItemsValueState } from '../../redux/phonebook/phonebook-selectors';
import { addContact } from '../../redux/phonebook/phonebook-actions';


function ContactForm () {

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const contacts = useSelector(getItemsValueState);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const addContacts = ({name, number}) => {
    const normalizedName = name.toLowerCase();
    if(contacts.find(({name}) => name.toLowerCase() === normalizedName)) {
      alert(`${name} is already in contacts`);
    }
    
    else {
      return dispatch(addContact({name, number}));
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setNumber("");
    return addContacts({name, number});
  };

  return (
      <div>
        <form className={s.form} onSubmit={handleSubmit}>
          <label className={s.label}>
            Name
            <input
              className={s.input}
              type="text"
              name="name"
              value={name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={handleChange}
            />
          </label>
          <label className={s.label}>
            Number
            <input
              className={s.input}
              type="tel"
              name="number"
              value={number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={handleChange}
            />
          </label>
          <button className={s.button} type="submit">
          Add contact{''}
          </button>
        </form>
      </div>
    );
  }


export default ContactForm;
