import React from 'react'
import ReactDOM from "react-dom/client";
import Input from './Input';
import Messages from './Messages';

export default function Chating() {

  return (
    <div className='Chating'>
      <div className="chat-info">
          <img src='/images/Default-user-icon.jpg' />
          <h4>friend name</h4>
      </div>
      <Messages/>
      <Input />
    </div>
  )
}
