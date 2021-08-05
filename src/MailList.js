import  './MailList.css';
import { Checkbox, IconButton } from '@material-ui/core';
import { db } from "./firebase";
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import RedoIcon from '@material-ui/icons/Redo';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide';
import SettingsIcon from '@material-ui/icons/Settings';
import InboxIcon from '@material-ui/icons/Inbox';
import PeopleIcon from '@material-ui/icons/People';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import React, { useEffect, useState } from 'react'
import Section from './Section';
import MailRow from './MailRow';

function MailList() {


  const [emails, setEmails] = useState([]);

  useEffect(() => {db.collection('emails').orderBy('timestamp', 'desc').onSnapshot((snapshot) => setEmails(snapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data(),

    }))))
  },[])

  return (
    <div className="mailList">
      <div className="mailList__settings">
        <div className="mailList__settingsLeft">
          <Checkbox/>
          <IconButton>
            <ArrowDropDown/>
          </IconButton>
          <IconButton>
            <RedoIcon/>
          </IconButton>
          <IconButton>
            <MoreVertIcon/>
          </IconButton>
          
        </div>
        <div className="mailList__settingsRight">
          <IconButton>
            <ChevronLeftIcon/>
          </IconButton>
          <IconButton>

            <ChevronRightIcon/>
          </IconButton>
          <IconButton>
            <KeyboardHideIcon/>
          </IconButton>
          <IconButton>
            <SettingsIcon/>
          </IconButton>
        </div>
      </div>

      <div className="mailList__sections">
        <Section Icon={InboxIcon} title="Primary" color="red" selected={true}/>
        <Section Icon={PeopleIcon} title="Social" color="#1A73E8" />
        <Section Icon={LocalOfferIcon} title="Promotions" color="green" />

      </div>


      <div className="mailList__list">
        {emails.map(({id, data: {to, subject, message, timestamp}}) => (

        <MailRow
          id={id}
          key={id}
          title={to}
          subject={subject}
          description={message}
          time={new Date(timestamp?.seconds * 1000).toUTCString()}
        
        />
        ))}
   
        
      </div>
    </div>
  )
}

export default MailList
