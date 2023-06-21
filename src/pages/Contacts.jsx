import { ContactForm } from 'components/Phonebook/ContactForm';
import { ContactList } from 'components/Phonebook/ContactList';
import { Filter } from 'components/Phonebook/Filter';
import React from 'react';

export const Contacts = () => {
  return (
    <div
      style={{
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
};
