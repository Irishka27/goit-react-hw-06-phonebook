import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter';
import s from './App.module.css';
// import { useDispatch, useSelector } from 'react-redux';

 function App () {
   return (
      <div className={s.container}>
        <ContactForm />
        <h3>Contacts</h3>
        <Filter />
        <ContactList  />
      </div>
    );
 
}

export default App;
