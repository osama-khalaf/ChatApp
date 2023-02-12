import React from "react";

export default function Signup() {
  return(
    <div className="card">
      <h1>Chat App</h1>
      <span>Register</span>
      <form>
        <input type="text" placeholder="display name" />
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
      </form>
      <button>Sing up</button>
      <p>Do you have an accont? Login</p>
    </div>)
}
