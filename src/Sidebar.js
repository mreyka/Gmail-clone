import { Button, IconButton } from '@material-ui/core';
import React from 'react'
import './Sidebar.css';
import AddIcon from '@material-ui/icons/Add';
import SidebarOption from './SidebarOption';
import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import NearMeIcon from '@material-ui/icons/NearMe';
import NoteIcon from '@material-ui/icons/Note';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PersonIcon from '@material-ui/icons/Person';
import DuoIcon from '@material-ui/icons/Duo';
import PhoneIcon from '@material-ui/icons/Phone';
import { useDispatch } from 'react-redux';
import { openSendMessage } from './features/mailSlice';


function Sidebar() {


  const dispatch = useDispatch();


  return (
    <div className="sidebar">
      <Button onClick={() => dispatch(openSendMessage())} startIcon={<AddIcon fontSize='large' />}className="sidebar__compose" >Compose</Button>
      
      <div className="sidebar__OptionContainer">

        <SidebarOption Icon={InboxIcon} title="Inbox" number={42} selected={true}/>
        <SidebarOption Icon={StarIcon} title="Starred" number={25} />
        <SidebarOption Icon={AccessTimeIcon} title="Snozzed" number={1} />
        <SidebarOption Icon={LabelImportantIcon} title="Crucial" number={5} />
        <SidebarOption Icon={NearMeIcon} title="Sent" number={32} />
        <SidebarOption Icon={NoteIcon} title="Drafts" number={7} />
        <SidebarOption Icon={ExpandMoreIcon} title="More" number={13} />
      </div>

      <div className="sidebar__footer">
        <div className="sidebar__footerIcons">
          <IconButton>
            <PersonIcon/>
          </IconButton>
          <IconButton>
            <DuoIcon/>
          </IconButton>
          <IconButton>
            <PhoneIcon/>
          </IconButton>
        </div>
      </div>
      

      
    </div>
  )
}

export default Sidebar
