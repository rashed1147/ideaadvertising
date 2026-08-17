import React from 'react';
import { MessageCircle, CheckCircle } from 'lucide-react';

const ServiceCard = ({ item, categoryId }) => {
  const phoneNumber = '8801811940042';
  const message = encodeURIComponent(`আসসালামু আলাইকুম, আমি "${item.name}" সম্পর্কে জানতে ও অর্ডার করতে চাই।`);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  // Category indicator color
  const dotColor =
    categoryId === 'offset'
      ? 'bg-[#E4212B]'
      : categoryId === 'digital'
      ? 'bg-[#FBB33C]'
      : 'bg-[#6FA84B]';

  return (
    <div className="bg-[#1D1A14] hover:bg-[#25221B] border border-[#322E22] hover:border-[#4A4433] rounded-xl p-5 transition-all duration-200 flex flex-col justify-between group shadow-sm hover:shadow-md">
      <div>
        <div className="flex items-start justify-between gap-2 mb-2">
          <div className="flex items-center gap-2.5">
            <span className={`w-2.5 h-2.5 rounded-sm flex-shrink-0 ${dotColor}`}></span>
            <h3 className="font-heading font-bold text-lg text-white group-hover:text-[#FBB33C] transition-colors">
              {item.name}
            </h3>
          </div>
          {item.fast && (
            <span className="bg-[#FBB33C] text-[#141414] text-[11px] font-extrabold px-2.5 py-0.5 rounded-full whitespace-nowrap shadow-sm">
              {item.fastText || '⚡ ১০ মিনিট'}
            </span>
          )}
        </div>

        {item.desc && (
          <p className="text-sm text-[#A49F8F] pl-5 mb-4 leading-relaxed">
            {item.desc}
          </p>
        )}
      </div>

      <div className="pt-2 border-t border-[#2C2820] flex items-center justify-between mt-auto">
        <span className="text-xs text-[#8A8574] flex items-center gap-1">
          <CheckCircle className="w-3.5 h-3.5 text-[#6FA84B]" /> প্রিমিয়াম কোয়ালিটি
        </span>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FBB33C] hover:text-white bg-[#2A261E] hover:bg-[#E4212B] px-3 py-1.5 rounded-md transition-all duration-150"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>অর্ডার করুন</span>
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;
