import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react';
import SwatchStrip from './SwatchStrip';

const Footer = () => {
  return (
    <footer className="bg-[#141414] text-[#CFCABD] pt-14 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="font-heading text-2xl font-bold text-white flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#E4212B] rounded-sm"></span>
              আইডিয়া <span className="text-[#FBB33C]">অ্যাডভার্টাইজিং</span>
            </div>
            <p className="text-sm text-[#A49F8F] leading-relaxed max-w-sm">
              ২০০৩ সাল থেকে হেয়াকো বাজারের বিশ্বস্ত গ্রাফিক্স ডিজাইন ও প্রিন্টিং প্রতিষ্ঠান। অফসেট প্রিন্ট, ডিজিটাল ব্যানার এবং কাস্টম গিফট আইটেমের সেরা সমাধান।
            </p>
            <div className="flex items-center gap-2 text-xs text-[#FBB33C] bg-[#1D1A14] py-1.5 px-3 rounded-md w-fit border border-[#322E22]">
              <Clock className="w-3.5 h-3.5" />
              <span>১০ মিনিটে ব্যানার, ক্রেস্ট ও মগ প্রিন্ট ডেলিভারি</span>
            </div>
          </div>

          {/* Offset Print Col */}
          <div>
            <h4 className="font-heading text-white font-bold text-base mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#E4212B]"></span>
              অফসেট প্রিন্ট
            </h4>
            <ul className="space-y-2 text-sm text-[#A49F8F]">
              <li><Link to="/services" className="hover:text-[#FBB33C] transition-colors">ভিজিটিং কার্ড</Link></li>
              <li><Link to="/services" className="hover:text-[#FBB33C] transition-colors">বিয়ের কার্ড ও ইনভেলাপ</Link></li>
              <li><Link to="/services" className="hover:text-[#FBB33C] transition-colors">ক্যালেন্ডার ও ডায়েরী</Link></li>
              <li><Link to="/services" className="hover:text-[#FBB33C] transition-colors">ক্যাশ মেমো ও চালান বই</Link></li>
              <li><Link to="/services" className="hover:text-[#FBB33C] transition-colors">পোস্টার ও লিফলেট</Link></li>
            </ul>
          </div>

          {/* Digital Print Col */}
          <div>
            <h4 className="font-heading text-white font-bold text-base mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FBB33C]"></span>
              ডিজিটাল প্রিন্ট
            </h4>
            <ul className="space-y-2 text-sm text-[#A49F8F]">
              <li><Link to="/services" className="hover:text-[#FBB33C] transition-colors">পিভিসি ব্যানার (১০ মিনিট)</Link></li>
              <li><Link to="/services" className="hover:text-[#FBB33C] transition-colors">পিভিসি-পানা ফ্লেক্স</Link></li>
              <li><Link to="/services" className="hover:text-[#FBB33C] transition-colors">এনকার্ড ও ভিনাইল স্টিকার</Link></li>
              <li><Link to="/services" className="hover:text-[#FBB33C] transition-colors">ওয়ান ওয়ে ভিশন স্টিকার</Link></li>
              <li><Link to="/services" className="hover:text-[#FBB33C] transition-colors">রিফ্লেক্টিভ স্টিকার</Link></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="font-heading text-white font-bold text-base mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#6FA84B]"></span>
              যোগাযোগ
            </h4>
            <ul className="space-y-3 text-sm text-[#A49F8F]">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#FBB33C] flex-shrink-0 mt-1" />
                <span>পেয়ার প্লাজা (২য় তলা), হেয়াকো বাজার, ফটিকছড়ি, চট্টগ্রাম</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#6FA84B] flex-shrink-0" />
                <a href="tel:01811940042" className="hover:text-white transition-colors">০১৮১১-৯৪০০৪২</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#E4212B] flex-shrink-0" />
                <a href="mailto:ideayasin@gmail.com" className="hover:text-white transition-colors">ideayasin@gmail.com</a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Signature 5-Color Swatch Stripe */}
      <SwatchStrip />

      {/* Copyright Bar */}
      <div className="border-t border-[#2C2820] py-4 bg-[#0E0E0E]">
        <div className="max-w-6xl mx-auto px-4 text-center text-xs text-[#8A8574] flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>© ২০২৬ আইডিয়া অ্যাডভার্টাইজিং। সর্বস্বত্ব সংরক্ষিত।</span>
          <span className="text-[#6B6558]">স্বত্বাধিকারী: কাজী ইয়াসিন মাহমুদ</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
