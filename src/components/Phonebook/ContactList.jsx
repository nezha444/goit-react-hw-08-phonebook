import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteContactsThunk,
  getContactsThunk,
} from 'components/redux/Phonebook/phonebookThunk';
import { useEffect } from 'react';
import { selectIsAuth } from 'components/redux/auth/authSelector';

export const ContactList = () => {
  const dispatch = useDispatch();
  const { contacts, filter } = useSelector(state => state.phonebook);
  const isAuth = useSelector(selectIsAuth);

  useEffect(() => {
    if (isAuth) {
      dispatch(getContactsThunk());
    }
  }, [dispatch, isAuth]);

  const getFilterContacts = () => {
    return contacts.items.filter(
      contact =>
        contact.name &&
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  return (
    <div>
      <p>Contacts</p>
      <ul>
        {getFilterContacts().map(contact => (
          <li key={contact.id}>
            <p>
              {contact.name}: {contact.number}
            </p>
            <button
              onClick={() => {
                console.log(contact.id);
                return dispatch(deleteContactsThunk(contact.id));
              }}
              type="button"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
ContactList.propTypes = {
  contacts: PropTypes.array,
  deleteContact: PropTypes.func,
};
