import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Award, 
  Zap, 
  Banknote, 
  Layers, 
  ArrowRight, 
  Printer, 
  Gift, 
  Clock, 
  CheckCircle2, 
  MapPin, 
  Phone, 
  Mail,
  ChevronRight,
  MessageCircle
} from 'lucide-react';
import PageMeta from '../components/PageMeta';

const HomePage = () => {
  return (
    <div>
      <PageMeta 
        title="আইডিয়া অ্যাডভার্টাইজিং | গ্রাফিক্স ডিজাইন ও প্রিন্টিং স্টোর" 
        description="২০০৩ সাল থেকে হেয়াকো বাজারের বিশ্বস্ত প্রতিষ্ঠান — অফসেট প্রিন্ট, ডিজিটাল প্রিন্ট ও গিফট আইটেম। মাত্র ১০ মিনিটে ব্যানার, ক্রেস্ট ও মগ প্রিন্ট।"
      />

      {/* Hero Section */}
      <section className="relative bg-[#141414] text-white pt-20 pb-24 overflow-hidden border-b border-[#2C2820]">
        
        {/* Background Swatch Floating Grids */}
        <div className="absolute -top-10 -right-10 grid grid-cols-3 gap-3 transform rotate-12 opacity-80 pointer-events-none hidden lg:grid" aria-hidden="true">
          <div className="w-20 h-14 rounded bg-[#E4212B] shadow-lg"></div>
          <div className="w-20 h-14 rounded bg-[#FBB33C] shadow-lg"></div>
          <div className="w-20 h-14 rounded bg-[#6FA84B] shadow-lg"></div>
          <div className="w-20 h-14 rounded bg-white shadow-lg"></div>
          <div className="w-20 h-14 rounded bg-[#3A3A3A] shadow-lg"></div>
          <div className="w-20 h-14 rounded bg-[#E4212B]/70 shadow-lg"></div>
          <div className="w-20 h-14 rounded bg-[#FBB33C]/70 shadow-lg"></div>
          <div className="w-20 h-14 rounded bg-[#6FA84B]/70 shadow-lg"></div>
          <div className="w-20 h-14 rounded bg-[#232019] border border-neutral-700 shadow-lg"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 text-[#FBB33C] font-semibold text-sm tracking-wider uppercase mb-5">
              <span className="w-6 h-0.5 bg-[#E4212B]"></span>
              <span>২০০৩ সাল থেকে হেয়াকো বাজারে বিশ্বস্ত</span>
            </div>

            {/* Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              সুলভ মূল্যে <span className="text-[#E4212B]">আকর্ষণীয় ডিজাইন</span>, নির্ভরযোগ্য ছাপার প্রতিষ্ঠান
            </h1>

            {/* Sub-headline */}
            <p className="text-lg text-[#CFCABD] leading-relaxed mb-8 max-w-xl">
              অফসেট প্রিন্ট, ডিজিটাল প্রিন্ট ও গিফট আইটেম — সব ধরনের ছাপার কাজ এখন এক ছাদের নিচে, আইডিয়া অ্যাডভার্টাইজিং-এ।
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="https://wa.me/8801811940042?text=আমি%20প্রিন্টিং%20অর্ডার%20দিতে%20চাই"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#6FA84B] hover:bg-[#5e913e] text-white font-semibold px-7 py-4 rounded-xl text-base flex items-center justify-center gap-3 transition-all duration-150 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>WhatsApp এ অর্ডার করুন</span>
              </a>

              <Link
                to="/services"
                className="border-2 border-[#4A4636] hover:border-[#FBB33C] text-white hover:text-[#FBB33C] font-semibold px-7 py-4 rounded-xl text-base flex items-center justify-center gap-2 transition-all duration-150 hover:-translate-y-0.5"
              >
                <span>আমাদের সার্ভিস দেখুন</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="mt-10 pt-8 border-t border-[#2C2820] flex flex-wrap items-center gap-6 text-sm text-[#A49F8F]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#6FA84B]" />
                <span>২০+ বছরের অভিজ্ঞতা</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FBB33C]" />
                <span>১০ মিনিটে দ্রুততম প্রিন্ট</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E4212B]" />
                <span>হেয়াকো বাজারের প্রাণকেন্দ্রে</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlight Banner (New Feature) */}
      <div className="bg-[#FBB33C] text-[#141414] py-4 px-4 shadow-inner">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 text-center text-sm sm:text-base font-semibold">
          <span className="bg-[#141414] text-white text-xs px-2.5 py-0.5 rounded-full uppercase font-bold">
            নতুন সংযোজন
          </span>
          <span>
            সম্পূর্ণ নতুন ও নিজস্ব মেশিনে মাত্র <strong className="font-heading font-extrabold text-lg underline">১০ মিনিটে</strong> ব্যানার, ক্রেস্ট ও মগ প্রিন্ট — এখন হেয়াকোতেই!
          </span>
        </div>
      </div>

      {/* Why Choose Us */}
      <section className="py-20 bg-[#FBF9F5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block bg-[#FDECEB] text-[#E4212B] font-semibold text-xs px-4 py-1.5 rounded-full mb-3">
              কেন আমরা
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#141414]">
              কেন আইডিয়া অ্যাডভার্টাইজিং বেছে নেবেন
            </h2>
            <p className="text-[#6B6558] mt-3 text-base">
              দীর্ঘদিনের সুনাম ও প্রযুক্তির সমন্বয়ে আমরা দিচ্ছি সেরা প্রিন্টিং সমাধান
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1 */}
            <div className="bg-white p-7 rounded-2xl border border-[#ECE7DA] hover:border-[#E4212B] hover:shadow-lg transition-all duration-200 group">
              <div className="w-12 h-12 rounded-xl bg-[#E4212B] text-white flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-lg text-[#141414] mb-2">
                দুই দশকের অভিজ্ঞতা
              </h3>
              <p className="text-sm text-[#6B6558] leading-relaxed">
                ২০০৩ সাল থেকে হেয়াকো বাজারের মানুষের গভীর আস্থা ও ভালোবাসা অর্জন করে আসছি।
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-7 rounded-2xl border border-[#ECE7DA] hover:border-[#FBB33C] hover:shadow-lg transition-all duration-200 group">
              <div className="w-12 h-12 rounded-xl bg-[#FBB33C] text-[#141414] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-lg text-[#141414] mb-2">
                দ্রুত ডেলিভারি
              </h3>
              <p className="text-sm text-[#6B6558] leading-relaxed">
                নিজস্ব আধুনিক মেশিনে মাত্র ১০ মিনিটে ব্যানার, মগ ও ক্রেস্ট প্রিন্ট করে ডেলিভারি।
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-7 rounded-2xl border border-[#ECE7DA] hover:border-[#6FA84B] hover:shadow-lg transition-all duration-200 group">
              <div className="w-12 h-12 rounded-xl bg-[#6FA84B] text-white flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Banknote className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-lg text-[#141414] mb-2">
                সাশ্রয়ী মূল্য
              </h3>
              <p className="text-sm text-[#6B6558] leading-relaxed">
                সুলভ মূল্যে মানসম্মত ও আকর্ষণীয় ডিজাইন — কোয়ালিটির সাথে কোনো আপোষ নেই।
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-7 rounded-2xl border border-[#ECE7DA] hover:border-[#141414] hover:shadow-lg transition-all duration-200 group">
              <div className="w-12 h-12 rounded-xl bg-[#141414] text-white flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-lg text-[#141414] mb-2">
                সব এক জায়গায়
              </h3>
              <p className="text-sm text-[#6B6558] leading-relaxed">
                অফসেট, ডিজিটাল ও গিফট প্রিন্টিং — সব ধরনের সমাধান একই ছাদের নিচে।
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 bg-[#141414] text-white border-t border-b border-[#2C2820]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="inline-block bg-[#2B271C] text-[#FBB33C] font-semibold text-xs px-4 py-1.5 rounded-full mb-3">
                আমাদের সার্ভিস
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold">
                যাবতীয় ছাপার কাজের নির্ভরযোগ্য প্রতিষ্ঠান
              </h2>
              <p className="text-[#A49F8F] mt-2 max-w-xl text-base">
                আমাদের প্রতিটি ক্যাটাগরির সার্ভিস আধুনিক প্রযুক্তিতে নিখুঁতভাবে তৈরি করা হয়
              </p>
            </div>

            <Link
              to="/services"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-[#FBB33C] hover:text-white font-semibold text-sm transition-colors group"
            >
              <span>সব সার্ভিস বিস্তারিত দেখুন</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Category Card 1: Offset */}
            <div className="bg-[#1D1A14] border border-[#322E22] hover:border-[#E4212B] rounded-2xl p-7 flex flex-col justify-between transition-all duration-200 group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#E4212B]/20 text-[#E4212B] flex items-center justify-center mb-5 group-hover:bg-[#E4212B] group-hover:text-white transition-colors">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-white mb-2">
                  অফসেট প্রিন্ট
                </h3>
                <p className="text-[#A49F8F] text-sm mb-6 leading-relaxed">
                  পোস্টার, লিফলেট, ভিজিটিং কার্ড, বিয়ের কার্ড, ক্যালেন্ডার, মেমো ও রসিদ বই সহ প্রাতিষ্ঠানিক সকল প্রিন্টিং।
                </p>
                <ul className="space-y-2 text-sm text-[#CFCABD] mb-6">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E4212B]"></span> ভিজিটিং কার্ড ও লেটার প্যাড
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E4212B]"></span> বিয়ের কার্ড ও খাম
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E4212B]"></span> ক্যাশ মেমো ও চালান বই
                  </li>
                </ul>
              </div>

              <Link
                to="/services"
                className="w-full bg-[#2A261E] hover:bg-[#E4212B] text-white text-center py-3 rounded-xl text-sm font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <span>অফসেট সার্ভিসসমূহ দেখুন</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Category Card 2: Digital */}
            <div className="bg-[#1D1A14] border border-[#322E22] hover:border-[#FBB33C] rounded-2xl p-7 flex flex-col justify-between transition-all duration-200 group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#FBB33C]/20 text-[#FBB33C] flex items-center justify-center mb-5 group-hover:bg-[#FBB33C] group-hover:text-[#141414] transition-colors">
                  <Printer className="w-6 h-6" />
                </div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-heading text-2xl font-bold text-white">
                    ডিজিটাল প্রিন্ট
                  </h3>
                  <span className="bg-[#FBB33C] text-[#141414] text-xs font-bold px-2.5 py-0.5 rounded-full">
                    ১০ মিনিট
                  </span>
                </div>
                <p className="text-[#A49F8F] text-sm mb-6 leading-relaxed">
                  উচ্চমানের পিভিসি ব্যানার, পানা ফ্লেক্স, এনকার্ড স্টিকার, ভিনাইল ও ওয়ান ওয়ে ভিশন স্টিকার প্রিন্ট।
                </p>
                <ul className="space-y-2 text-sm text-[#CFCABD] mb-6">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FBB33C]"></span> ব্যানার (১০ মিনিটে রেডি)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FBB33C]"></span> পিভিসি-পানা ও রিভার্স ফ্লেক্স
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FBB33C]"></span> ম্যাট, গ্লোসি ও থ্রিডি স্টিকার
                  </li>
                </ul>
              </div>

              <Link
                to="/services"
                className="w-full bg-[#2A261E] hover:bg-[#FBB33C] hover:text-[#141414] text-white text-center py-3 rounded-xl text-sm font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <span>ডিজিটাল সার্ভিসসমূহ দেখুন</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Category Card 3: Gift Items */}
            <div className="bg-[#1D1A14] border border-[#322E22] hover:border-[#6FA84B] rounded-2xl p-7 flex flex-col justify-between transition-all duration-200 group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#6FA84B]/20 text-[#6FA84B] flex items-center justify-center mb-5 group-hover:bg-[#6FA84B] group-hover:text-white transition-colors">
                  <Gift className="w-6 h-6" />
                </div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-heading text-2xl font-bold text-white">
                    গিফট আইটেম
                  </h3>
                  <span className="bg-[#6FA84B] text-white text-xs font-bold px-2.5 py-0.5 rounded-full">
                    কাস্টমাইজড
                  </span>
                </div>
                <p className="text-[#A49F8F] text-sm mb-6 leading-relaxed">
                  ছবি ও লোগো সম্বলিত কাস্টম সিরামিক মগ, সম্মাননা স্মারক ক্রেস্ট, টি-শার্ট, জার্সি ও ফটো ফ্রেম।
                </p>
                <ul className="space-y-2 text-sm text-[#CFCABD] mb-6">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6FA84B]"></span> মগ ও ক্রেস্ট প্রিন্ট (১০ মিনিট)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6FA84B]"></span> কাস্টমাইজড টি-শার্ট ও জার্সি
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6FA84B]"></span> চাবির রিং, ক্যাপ ও ফ্রেম
                  </li>
                </ul>
              </div>

              <Link
                to="/services"
                className="w-full bg-[#2A261E] hover:bg-[#6FA84B] text-white text-center py-3 rounded-xl text-sm font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <span>গিফট আইটেমসমূহ দেখুন</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-[#FBF9F5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Photo / Visual Frame */}
            <div className="lg:col-span-5">
              <div className="bg-white p-5 rounded-2xl border border-[#ECE7DA] shadow-sm">
                <div className="aspect-[4/5] bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-xl flex flex-col items-center justify-center text-neutral-400 p-6 text-center border border-neutral-200">
                  <div className="w-20 h-20 rounded-full bg-[#E4212B]/10 text-[#E4212B] flex items-center justify-center font-heading font-bold text-2xl mb-3 border border-[#E4212B]/20">
                    KYM
                  </div>
                  <span className="font-semibold text-neutral-600">মালিকের ছবি বসবে</span>
                  <span className="text-xs text-neutral-400 mt-1">(কাজী ইয়াসিন মাহমুদ)</span>
                </div>
                <div className="text-center pt-4">
                  <h4 className="font-heading font-bold text-lg text-[#141414]">কাজী ইয়াসিন মাহমুদ</h4>
                  <p className="text-xs text-[#6B6558]">স্বত্বাধিকারী, আইডিয়া অ্যাডভার্টাইজিং</p>
                </div>
              </div>
            </div>

            {/* Story Teaser */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-block bg-[#FDECEB] text-[#E4212B] font-semibold text-xs px-4 py-1.5 rounded-full">
                আমাদের গল্প
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#141414] leading-snug">
                একটি নিঃশব্দ ভাবনা থেকে একটি বিশ্বাসের নাম
              </h2>
              <p className="text-[#4A453A] leading-relaxed text-base">
                একটি ব্র্যান্ডের জন্ম হয় একটি নিঃশব্দ ভাবনা থেকে। ২০০৩ সালে হেয়াকো বাজারের রঙিন গলি থেকে শুরু হওয়া আইডিয়া অ্যাডভার্টাইজিং আজ শহরের মতোই বিশ্বাসযোগ্য এক প্রতিষ্ঠান।
              </p>
              <p className="text-[#4A453A] leading-relaxed text-base">
                পরিবর্তনকে ভয় না পেয়ে আমরা গ্রহণ করেছি — ঐতিহ্যবাহী সাইন-মেকিং থেকে শুরু করে অফসেট প্রিন্টিং, ডিজিটাল প্রিন্টিং এবং আধুনিক ডিজাইনের বিস্তৃত জগতে।
              </p>

              {/* Stats Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-[#ECE7DA]">
                <div>
                  <span className="font-heading text-3xl font-extrabold text-[#E4212B] block">২০০৩</span>
                  <span className="text-xs text-[#6B6558]">প্রতিষ্ঠাকাল</span>
                </div>
                <div>
                  <span className="font-heading text-3xl font-extrabold text-[#FBB33C] block">২০+</span>
                  <span className="text-xs text-[#6B6558]">বছরের অভিজ্ঞতা</span>
                </div>
                <div>
                  <span className="font-heading text-3xl font-extrabold text-[#6FA84B] block">৩০+</span>
                  <span className="text-xs text-[#6B6558]">সার্ভিস ক্যাটাগরি</span>
                </div>
                <div>
                  <span className="font-heading text-3xl font-extrabold text-[#141414] block">১০ মিনিট</span>
                  <span className="text-xs text-[#6B6558]">দ্রুততম ডেলিভারি</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 bg-[#141414] hover:bg-[#25221B] text-white font-semibold px-6 py-3 rounded-xl text-sm transition-all shadow hover:shadow-md"
                >
                  <span>আমাদের সম্পূর্ণ গল্প পড়ুন</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Quick Contact CTA Strip */}
      <section className="bg-[#1D1A14] border-t border-[#322E22] py-12 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 bg-[#232019] p-8 sm:p-10 rounded-2xl border border-[#3A362A]">
            <div className="space-y-2 text-center lg:text-left">
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">
                যেকোনো প্রিন্টিং কাজের জন্য আজই যোগাযোগ করুন
              </h3>
              <p className="text-sm text-[#A49F8F] flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#FBB33C]" /> পেয়ার প্লাজা (২য় তলা), হেয়াকো বাজার, ফটিকছড়ি, চট্টগ্রাম
                </span>
                <span className="flex items-center gap-1.5">
                  <Phone className="w-4 h-4 text-[#6FA84B]" /> ০১৮১১-৯৪০০৪২
                </span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
              <a
                href="https://wa.me/8801811940042"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-[#6FA84B] hover:bg-[#5e913e] text-white font-semibold px-6 py-3.5 rounded-xl text-sm flex items-center justify-center gap-2 transition-all shadow"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp এ কথা বলুন</span>
              </a>
              <Link
                to="/contact"
                className="w-full sm:w-auto bg-[#E4212B] hover:bg-[#c71822] text-white font-semibold px-6 py-3.5 rounded-xl text-sm flex items-center justify-center gap-2 transition-all shadow"
              >
                <span>অর্ডার ফর্ম পূরণ করুন</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;
