import PropTypes from 'prop-types';
import s from './ContactListItem.module.css';
const ContactListItem = ({ name, number, id, onDeleteContacts }) => {
  return (
    <li className={s.li}>
      <div className={s.container}>
        {name}: {number}
        <button
          type="button"
          className={s.button}
          onClick={() => onDeleteContacts(id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.any,
  name: PropTypes.string,
  number: PropTypes.string,
  onDeleteContacts: PropTypes.func,
};

export default ContactListItem;