import { createAsyncThunk } from '@reduxjs/toolkit';

import { privateApi } from '../http/api';

export const getContactsThunk = createAsyncThunk('getContacts', async () => {
  const responce = await privateApi.get('/contacts');
  return responce.data;
});

export const postContactsThunk = createAsyncThunk(
  'postContacts',
  async newContact => {
    const responce = await privateApi.post('/contacts', newContact);
    return responce.data;
  }
);

export const deleteContactsThunk = createAsyncThunk(
  'deleteContacts',
  async id => {
    const responce = await privateApi.delete('/contacts/' + id);
    return responce.data;
  }
);
