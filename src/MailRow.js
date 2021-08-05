import { Checkbox, IconButton } from '@material-ui/core';
import React from 'react'
import'./MailRow.css';
import LabelOutlinedIcon from '@material-ui/icons/LabelOutlined';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import { useHistory } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { selectMail } from './features/mailSlice';

function MailRow({ id, title, subject, description, time }) {

  const history = useHistory();
  const dispatch = useDispatch();



  const openMail = () => {
    dispatch(selectMail({
      id, title, subject, description, time,
    }));

    history.push("/mail");
  }

  return (
    <div onClick={openMail} className="mailRow">
      <div className="mailRow__Options">
        <Checkbox/>
        <IconButton>
          <StarBorderOutlinedIcon/>
        </IconButton>
        <IconButton>
         <LabelOutlinedIcon/>
        </IconButton>
      </div>

     

      <h4 className="mailRow__title">
        {title}
      </h4>
      <div className="mailRow__message">
        <h4>{subject}
        <span className="mailRow__description">
          {description}
        </span>
        </h4>
      </div>
      <p className="mailRow__time">
        {time}
      </p>
      
    </div>
  )
}

export default MailRow
