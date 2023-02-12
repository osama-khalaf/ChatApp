import React from 'react'

export default function Chating() {

  const element = document.getElementsByClassName("auto_height")
  console.log(element.scrollHeight)
  const style = {height:"100px",width: "100%"}
  console.log(element.style)
  // function auto_height(element) { 
  //   // element.style = {height :"100px"};
  //   // element.style = {height :(element.scrollHeight)+"px"};
  // }

  
  return (
    <div className='Chating'>
      <div className="input">
      <textarea rows="1" className="auto_height" style={style} ></textarea>
        <img src='/images/send-message.png' />
      </div>
    </div>
  )
}
