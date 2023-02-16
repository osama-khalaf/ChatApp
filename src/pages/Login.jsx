import React from "react";

export default function Login() {
  return(
    <div className="card">
      <h1>Chat App</h1>
      <span>Login</span>
      <form>
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
      </form>
      <button>Login</button>
      <p>Do not have an accont? Sign up</p>
    </div>)
}
