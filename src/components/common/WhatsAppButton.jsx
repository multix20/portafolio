// Componente WhatsAppButton.jsx
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/56951569704"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50"
      aria-label="WhatsApp"
    >
      <FaWhatsapp size={28} />
    </a>
  );
};

export default WhatsAppButton;