import React from 'react'

export default function Input() {
  return (
    <div className="input">
      <textarea rows="1" className="auto_height" placeholder="Type a message" ></textarea>
        <img src='/images/send-message.png' />
      </div>
  )
}
