import axios from 'axios';
// const BACE_URL = 'https://648db06a2de8d0ea11e81ed0.mockapi.io/contacts';

export const getContactsFromApi = async () => {
  const data = await axios.get(
    'https://connections-api.herokuapp.com/contacts'
  );
  console.log(data.data);
  return data.data;
};

export const postContactsFromApi = async contact => {
  const data = await axios.post(
    'https://connections-api.herokuapp.com/contacts',
    contact
  );
  console.log(data.data);
  return data.data;
};

export const deleteContactsFromApi = async id => {
  const data = await axios.delete(
    `https://connections-api.herokuapp.com/contacts/${id}`
  );
  console.log(data.data);
  return data.data;
};
