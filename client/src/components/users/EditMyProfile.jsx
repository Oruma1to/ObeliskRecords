import React, { useState, useEffect } from 'react';
import { getUser, editUser } from '../../services/apiUsers';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './EditMyProfile.css';

export default function EditMyProfile() {
  //Setting all the fields for the User's profile
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [fullName, setFullname] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipcode, setZipcode] = useState(0);
  const [phoneNumber, setPhoneNumber] = useState(0);

  //This is to get the state of the current User
  const isLogged = useSelector(state => state.isLogged);
  const history = useHistory();
  //this will run after the rendering and only once
  useEffect(() => {
    const loadUsersInfo = async () => {
    try {
      const response = await getUser(isLogged.user.id);
      console.log('loadUsersInfo', response);
      setUsername(response.username);
      setEmail(response.email);
      setFullname(response.fullName);
      setAddress1(response.address1);
      setAddress2(response.address2);
      setCity(response.city);
      setState(response.state);
      setZipcode(response.zipcode);
      setPhoneNumber(response.phoneNumber);
    } catch (error) {
      console.log(error);
    }
  };
    loadUsersInfo();
  }, [isLogged]);


  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await editUser(isLogged.user.id, {
        username,
        email,
        fullName,
        address1,
        address2,
        city,
        state,
        zipcode,
        phoneNumber,
      });

      console.log(response);
      alert('Succesfully Saved');
      history.push('/my-profile');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className='editMyProfile'>
        <h1>Edit Page</h1>
        <form className='editProfileForm' onSubmit={handleSubmit}>
          <label htmlFor='username'>username:</label>
          <input
            name='username'
            type='text'
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <label htmlFor='email'>Email:</label>
          <input name='email' type='text' value={email} onChange={e => setEmail(e.target.value)} />
          <label htmlFor='fullName'>Full Name:</label>
          <input
            name='fullName'
            type='text'
            value={fullName}
            onChange={e => setFullname(e.target.value)}
          />
          <label htmlFor='address1'>Address:</label>
          <input
            name='address1'
            type='text'
            value={address1}
            onChange={e => setAddress1(e.target.value)}
          />
          <label htmlFor='address2'>Address 2 (optional):</label>
          <input
            name='address2'
            type='text'
            value={address2}
            onChange={e => setAddress2(e.target.value)}
          />
          <label htmlFor='city'>City:</label>
          <input name='city' type='text' value={city} onChange={e => setCity(e.target.value)} />
          <label htmlFor='state'>State:</label>
          <input name='state' type='text' value={state} onChange={e => setState(e.target.value)} />
          <label htmlFor='zipcode'>Zipcode:</label>
          <input
            name='zipcode'
            type='number'
            value={zipcode}
            onChange={e => setZipcode(e.target.value)}
          />
          <label htmlFor='phoneNumber'>
            Phone Number:
            <span className='format'> format: 123-456-7890</span>
          </label>
          <input
            name='phoneNumber'
            type='tel'
            value={phoneNumber}
            pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
            onChange={e => setPhoneNumber(e.target.value)}
          />
          <button className='editSubmit'>Submit</button>
        </form>
      </div>
    </div>
  );
}
