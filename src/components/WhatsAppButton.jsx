import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = '8801811940042';
  const defaultText = encodeURIComponent('আসসালামু আলাইকুম, আমি প্রিন্টিং ও ডিজাইন সম্পর্কে জানতে চাই।');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultText}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center group">
      {/* Tooltip on hover */}
      <span className="hidden sm:inline-block mr-3 bg-[#141414] text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap border border-neutral-700">
        WhatsApp এ কথা বলুন 💬
      </span>

      {/* Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
        className="w-14 h-14 bg-[#6FA84B] hover:bg-[#5e913e] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 pulse-wa"
      >
        <MessageCircle className="w-7 h-7 fill-current" />
      </a>
    </div>
  );
};

export default WhatsAppButton;
