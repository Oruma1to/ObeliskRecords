import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUser } from '../../services/apiUsers';
import './MyProfile.css';

export default function MyProfile() {
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
  //   const [userInformation, setUserInformation] = useState(false);

  //This is to get the state of the current User
  const isLogged = useSelector(state => state.isLogged);

  //this will run after the rendering and only once
  useEffect(() => {
    loadUsersInfo();
  }, [isLogged]);

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
  if (!isLogged) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div>
        <div className='myProfile-main-container'>
          <div className='myProfile-title'>
            Welcome <span className='myProfile-UserName'>{username}</span>
          </div>
          <div className='myProfile-innerContainer'>
            <div className='myProfile-Label'>
              Email:
              <span>{email}</span>
            </div>
            <div className='myProfile-Label'>
              Full Name:
              <span>{fullName}</span>
            </div>
            <div className='myProfile-Label'>
              Contact:
              <span>{phoneNumber}</span>
            </div>
            <div className='myProfile-Label'>
              Address:
              <span className='myProfile-Address'>
                {address1}
                <br />
                {city}, {state} {zipcode}
              </span>
            </div>
          </div>
          <Link to={`/edit-MyProfile/${isLogged.user.id}`}>
            <button className='myProfile-button'>Edit</button>
          </Link>
        </div>
      </div>
    );
  }
}
