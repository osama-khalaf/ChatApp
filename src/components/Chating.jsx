import React from 'react'
import ReactDOM from "react-dom/client";

export default function Chating() {

  return (
    <div className='Chating'>
      <div className="input">
      <textarea rows="1" className="auto_height" placeholder="Type a message" ></textarea>
        <img src='/images/send-message.png' />
      </div>
    </div>
  )
}
