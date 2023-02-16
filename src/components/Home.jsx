import React from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import ContactList from "./ContactList";
import Chating from "./Chating"

export default function Home() {
  return (
    <div className="home-container">
      <aside>
        <Navbar />
        <Search />
        <ContactList />
      </aside>
      <Chating />
    </div>
  )
}
