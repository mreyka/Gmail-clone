import React from 'react';
import './Header.css';
import { Avatar, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { auth } from './firebase';

function Header() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const signOut = () => {
    auth.signOut().then(() => {
      
      dispatch(logout());
    })

  }

  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img src="https://logodownload.org/wp-content/uploads/2018/03/gmail-logo-3-1.png" alt="" />
      </div>

      <div className="header__middle">
        <SearchIcon className="b"/>
        <input placeholder="Search mail" type="text" />
        <ArrowDropDownIcon className="header_inputCaret" />
      </div>

      <div className="header__right">
        <IconButton className="a">
          <AppsIcon />
        </IconButton>
        <IconButton className="a">
          <NotificationsIcon />
        </IconButton>
        <Avatar onClick={signOut} src={user?.photoUrl} className="a"/>
      </div>
    </div>
  )
}

export default Header
