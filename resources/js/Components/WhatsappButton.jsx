import React from "react";

const WhatsappButton = ({ children, whatsappNumber, people, travel }) => {
  // Define the WhatsApp message
  const whatsappMessage = encodeURIComponent(
    `Halo min, saya ingin memesan travel ${travel.name} jumlah ${people} orang`
  );

  // Create the WhatsApp link
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      className="bg-[#FF8C0D] text-white py-3 px-6 rounded-md text-center font-semibold transition duration-300 hover:bg-[#E07600] focus:outline-none focus:ring focus:border-blue-300 md:w-fit w-full"
    >
      {children}
    </a>
  );
};

export default WhatsappButton;
