import React from "react";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import ContactList from "../components/ContactList";
import Chating from "../components/Chating"

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
