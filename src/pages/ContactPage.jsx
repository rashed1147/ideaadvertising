import React, { useState } from 'react';
import { MapPin, Phone, Mail, MessageCircle, Send, Clock, CheckCircle2 } from 'lucide-react';
import PageMeta from '../components/PageMeta';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    serviceType: 'অফসেট প্রিন্ট',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = '8801811940042';
    
    // Construct pre-filled Bengali WhatsApp message
    const lines = [
      '👋 আসসালামু আলাইকুম, আমি আইডিয়া অ্যাডভার্টাইজিং-এ অর্ডার/অনুসন্ধান পাঠাচ্ছি:',
      `👤 নাম: ${formData.name || 'উল্লেখ নেই'}`,
      `📞 ফোন: ${formData.phone || 'উল্লেখ নেই'}`,
      `📦 সার্ভিস: ${formData.serviceType}`,
      `📝 বিস্তারিত: ${formData.message || 'বিস্তারিত তথ্য জানাতে চাই'}`
    ];

    const fullMessage = lines.join('\n');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(fullMessage)}`;

    setFormSubmitted(true);
    
    // Redirect / open WhatsApp
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-[#FBF9F5] min-h-screen">
      <PageMeta 
        title="যোগাযোগ ও অর্ডার | আইডিয়া অ্যাডভার্টাইজিং" 
        description="আইডিয়া অ্যাডভার্টাইজিং এর সাথে সরাসরি যোগাযোগ করুন। ঠিকানা: পেয়ার প্লাজা (২য় তলা), হেয়াকো বাজার, ফটিকছড়ি। ফোন: ০১৮১১-৯৪০০৪২।"
      />

      {/* Header */}
      <section className="bg-[#141414] text-white py-16 border-b border-[#2C2820]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="inline-block bg-[#2B271C] text-[#FBB33C] font-semibold text-xs px-4 py-1.5 rounded-full mb-4">
            সরাসরি যোগাযোগ
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            আমাদের সাথে যোগাযোগ করুন
          </h1>
          <p className="text-base sm:text-lg text-[#CFCABD] leading-relaxed">
            যেকোনো নতুন কাজের অর্ডার, খরচের হিসাব বা বিস্তারিত তথ্যের জন্য আমাদের দোকানে চলে আসুন অথবা অনলাইনে WhatsApp এ মেসেজ দিন।
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white p-7 rounded-2xl border border-[#ECE7DA] shadow-sm space-y-6">
              <h2 className="font-heading text-2xl font-bold text-[#141414] border-b border-[#ECE7DA] pb-4">
                ঠিকানা ও যোগাযোগের মাধ্যম
              </h2>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#141414] text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-[#FBB33C]" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#8A8574] uppercase">ঠিকানা</span>
                  <p className="font-semibold text-sm text-[#141414] mt-0.5 leading-snug">
                    পেয়ার প্লাজা (২য় তলা), হেয়াকো বাজার, ফটিকছড়ি উত্তর, চট্টগ্রাম
                  </p>
                </div>
              </div>

              {/* Phone / WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#141414] text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone className="w-5 h-5 text-[#6FA84B]" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#8A8574] uppercase">ফোন / হোয়াটসঅ্যাপ</span>
                  <p className="font-semibold text-sm text-[#141414] mt-0.5">
                    <a href="tel:01811940042" className="hover:text-[#E4212B] transition-colors">
                      ০১৮১১-৯৪০০৪২
                    </a>
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#141414] text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail className="w-5 h-5 text-[#E4212B]" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#8A8574] uppercase">ইমেইল</span>
                  <p className="font-semibold text-sm text-[#141414] mt-0.5">
                    <a href="mailto:ideayasin@gmail.com" className="hover:text-[#E4212B] transition-colors">
                      ideayasin@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              {/* Facebook Page */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#141414] text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-[#1877F2] fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
                <div>
                  <span className="text-xs font-bold text-[#8A8574] uppercase">ফেসবুক পেজ</span>
                  <p className="font-semibold text-sm text-[#141414] mt-0.5">
                    Idea Advertising
                  </p>
                </div>
              </div>

              {/* Big Direct WhatsApp CTA */}
              <div className="pt-2">
                <a
                  href="https://wa.me/8801811940042"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#6FA84B] hover:bg-[#5e913e] text-white font-semibold py-3.5 px-5 rounded-xl flex items-center justify-center gap-3 transition-colors shadow-md text-base"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>সরাসরি WhatsApp এ চ্যাট করুন</span>
                </a>
              </div>

            </div>

            {/* Quick Timing Card */}
            <div className="bg-[#1D1A14] text-white p-6 rounded-2xl border border-[#322E22] space-y-2">
              <div className="flex items-center gap-2 text-[#FBB33C] text-xs font-bold">
                <Clock className="w-4 h-4" />
                <span>দ্রুততম সার্ভিস ডেলিভারি</span>
              </div>
              <p className="text-xs text-[#CFCABD] leading-relaxed">
                জরুরি ব্যানার, সম্মাননা ক্রেস্ট ও কাস্টম মগ প্রিন্ট আমাদের নিজস্ব মেশিনে মাত্র <strong>১০ মিনিটে</strong> ডেলিভারি দেওয়া হয়।
              </p>
            </div>

          </div>

          {/* Right: Interactive Order Form & Map */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* WhatsApp Pre-filled Order Form */}
            <div className="bg-white p-8 rounded-2xl border border-[#ECE7DA] shadow-sm">
              <div className="mb-6">
                <span className="text-xs font-bold text-[#E4212B] uppercase tracking-wider">
                  অনলাইন অনুসন্ধান ও অর্ডার
                </span>
                <h2 className="font-heading text-2xl font-bold text-[#141414] mt-1">
                  অর্ডার বা বিস্তারিত জানতে ফর্ম পূরণ করুন
                </h2>
                <p className="text-xs text-[#6B6558] mt-1">
                  ফর্মটি সাবমিট করলে সরাসরি আপনার তথ্যসহ WhatsApp এ মেসেজ তৈরি হবে।
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold text-[#141414] uppercase mb-1.5">
                      আপনার নাম <span className="text-[#E4212B]">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="যেমন: কাজী রাশেদ"
                      className="w-full bg-[#FBF9F5] border border-[#DDD6C4] focus:border-[#E4212B] text-sm text-[#141414] rounded-xl px-4 py-3 outline-none transition-colors"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-bold text-[#141414] uppercase mb-1.5">
                      ফোন নম্বর <span className="text-[#E4212B]">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="যেমন: ০১৭১২-৩৪৫৬৭৮"
                      className="w-full bg-[#FBF9F5] border border-[#DDD6C4] focus:border-[#E4212B] text-sm text-[#141414] rounded-xl px-4 py-3 outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Service Type Dropdown */}
                <div>
                  <label className="block text-xs font-bold text-[#141414] uppercase mb-1.5">
                    সার্ভিস বাছাই করুন <span className="text-[#E4212B]">*</span>
                  </label>
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full bg-[#FBF9F5] border border-[#DDD6C4] focus:border-[#E4212B] text-sm text-[#141414] rounded-xl px-4 py-3 outline-none transition-colors font-medium"
                  >
                    <option value="অফসেট প্রিন্ট (ভিজিটিং কার্ড, বিয়ের কার্ড, মেমো ইত্যাদি)">
                      অফসেট প্রিন্ট (ভিজিটিং কার্ড, বিয়ের কার্ড, ক্যাশ মেমো ইত্যাদি)
                    </option>
                    <option value="ডিজিটাল প্রিন্ট (ব্যানার, ফ্লেক্স, স্টিকার ইত্যাদি)">
                      ডিজিটাল প্রিন্ট (ব্যানার, ফ্লেক্স, বিভিন্ন স্টিকার ইত্যাদি)
                    </option>
                    <option value="গিফট আইটেম (মগ, ক্রেস্ট, টি-শার্ট, জার্সি ইত্যাদি)">
                      গিফট আইটেম (মগ, ক্রেস্ট, টি-শার্ট, জার্সি ইত্যাদি)
                    </option>
                    <option value="জরুরি ১০ মিনিটে ব্যানার/ক্রেস্ট/মগ প্রিন্ট">
                      জরুরি ১০ মিনিটে ব্যানার / ক্রেস্ট / মগ প্রিন্ট
                    </option>
                    <option value="অন্যান্য কাস্টম ডিজাইন বা প্রিন্টিং">
                      অন্যান্য কাস্টম ডিজাইন বা প্রিন্টিং
                    </option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-[#141414] uppercase mb-1.5">
                    আপনার প্রয়োজন / কাজের বিবরণ
                  </label>
                  <textarea
                    rows="4"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="কাজের পরিমাণ, সাইজ বা কোনো নির্দিষ্ট চাহিদা থাকলে এখানে লিখুন..."
                    className="w-full bg-[#FBF9F5] border border-[#DDD6C4] focus:border-[#E4212B] text-sm text-[#141414] rounded-xl px-4 py-3 outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#E4212B] hover:bg-[#c71822] text-white font-semibold py-4 rounded-xl text-base flex items-center justify-center gap-2 transition-all shadow-md active:scale-[0.99]"
                >
                  <Send className="w-4 h-4" />
                  <span>WhatsApp এর মাধ্যমে মেসেজ পাঠান</span>
                </button>

                {formSubmitted && (
                  <div className="p-3 bg-[#EBF7EE] text-[#2E7D32] text-xs font-medium rounded-lg flex items-center gap-2 border border-[#C8E6C9]">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                    <span>WhatsApp উইন্ডো খোলা হয়েছে! অনুগ্রহ করে মেসেজটি সেন্ড করুন।</span>
                  </div>
                )}

              </form>
            </div>

            {/* Location Map Frame */}
            <div className="bg-white p-6 rounded-2xl border border-[#ECE7DA] shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-heading font-bold text-lg text-[#141414] flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#E4212B]" />
                  <span>দোকানের অবস্থান (Google Map)</span>
                </h3>
                <span className="text-xs text-[#6B6558]">পেয়ার প্লাজা, হেয়াকো বাজার</span>
              </div>

              {/* Map Embed Container */}
              <div className="aspect-[16/9] w-full rounded-xl overflow-hidden border border-[#ECE7DA] relative bg-neutral-100">
                <iframe
                  title="Idea Advertising Location Map"
                  src="https://maps.google.com/maps?q=Heyako+Bazar,+Fatikchhari,+Chittagong&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

export default ContactPage;
