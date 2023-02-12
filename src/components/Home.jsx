import React from "react";
import Navbar from "./Navbar";
import ContactList from "./ContactList";
import Chating from "./Chating"

export default function Home() {
  return (
    <div className="home-container">
      <section>
      <Navbar />
      <ContactList />
      </section>
      <Chating />
    </div>
  )
}
