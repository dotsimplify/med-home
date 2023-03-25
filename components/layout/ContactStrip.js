import React from "react";
import { FiPhoneCall } from "react-icons/fi";
const ContactStrip = () => {
  return (
    <div className="fixed bottom-0 z-50 max-w-[2000px] mx-auto  w-full py-4  text-white bg-theme-green">
      <a href="tel:+789141581503">
        <div className="flex items-center justify-center">
          <FiPhoneCall className="mr-2 text-xl" /> <h3>+79141581503</h3>
        </div>
      </a>
    </div>
  );
};

export default ContactStrip;
