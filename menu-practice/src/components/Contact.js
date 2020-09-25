import React from "react";
import ContactCard from "./ContactCard";
function Contact() {
  return (
    <div className="contact-list">
      <ContactCard
        contact={{
          name: "Tuan",
          imgUrl: "http://placekitten.com/300/200",
          phone: "0703-320-323",
          email: "1123@gmail.com",
        }}
      />
      <ContactCard
        contact={{
          name: "Tuan",
          imgUrl: "http://placekitten.com/300/200",
          phone: "0703-320-323",
          email: "1123@gmail.com",
        }}
      />
      <ContactCard
        contact={{
          name: "Tuan",
          imgUrl: "http://placekitten.com/300/200",
          phone: "0703-320-323",
          email: "1123@gmail.com",
        }}
      />
      <ContactCard
        contact={{
          name: "Tuan",
          imgUrl: "http://placekitten.com/300/200",
          phone: "0703-320-323",
          email: "1123@gmail.com",
        }}
      />
    </div>
  );
}

export default Contact;
