import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Sparkles, 
  Cpu, 
  HeartHandshake, 
  ArrowRight, 
  MessageCircle, 
  Clock, 
  Award, 
  Layers 
} from 'lucide-react';
import PageMeta from '../components/PageMeta';

const AboutPage = () => {
  return (
    <div className="bg-[#FBF9F5]">
      <PageMeta 
        title="আমাদের গল্প | আইডিয়া অ্যাডভার্টাইজিং" 
        description="২০০৩ সাল থেকে হেয়াকো বাজারে দুই দশকেরও বেশি সময় ধরে বিশ্বাস ও ভালোবাসার সাথে গ্রাফিক্স ডিজাইন ও প্রিন্টিং সেবা দিয়ে আসছে আইডিয়া অ্যাডভার্টাইজিং।"
      />

      {/* Page Header */}
      <section className="bg-[#141414] text-white py-16 border-b border-[#2C2820]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="inline-block bg-[#2B271C] text-[#FBB33C] font-semibold text-xs px-4 py-1.5 rounded-full mb-4">
            আমাদের পরিচিতি
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            আমাদের গল্প — <span className="text-[#E4212B]">আইডিয়া অ্যাডভার্টাইজিং</span>
          </h1>
          <p className="text-base sm:text-lg text-[#CFCABD] leading-relaxed">
            দুই দশকের ঐতিহ্য, সততা ও আধুনিক প্রযুক্তির মেলবন্ধনে গড়ে ওঠা এক নির্ভরযোগ্য প্রতিষ্ঠান
          </p>
        </div>
      </section>

      {/* Main Story & Profile Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Story Paragraphs */}
            <div className="lg:col-span-7 space-y-6 text-[#4A453A] leading-relaxed text-base sm:text-[17px]">
              
              <div className="border-l-4 border-[#E4212B] pl-4 italic text-[#232019] font-medium text-lg bg-white/60 p-4 rounded-r-xl border border-[#ECE7DA]">
                "একটি ব্র্যান্ডের জন্ম হয় একটি নিঃশব্দ ভাবনা থেকে। আর সেই ভাবনাই যখন মানুষের প্রয়োজনের স্পর্শ পায়, তখন তা কেবল ধারণা থাকে না — তা হয়ে ওঠে একটি নাম, একটি বিশ্বাস — আইডিয়া অ্যাডভার্টাইজিং।"
              </div>

              <p>
                ২০০৩ সালের এক সময়ে, হেয়াকো বাজারের রঙিন গলিতে, যখন বিজ্ঞাপন মানেই ছিল হাতে আঁকা অক্ষর আর যত্নে গড়া পরিচয়, তখনই যাত্রা শুরু হয় এই প্রতিষ্ঠানের। শুরুর দিনগুলো ছিল সাধারণ, কিন্তু স্বপ্নগুলো ছিল দূরদৃষ্টিসম্পন্ন। সময়ের সাথে সাথে প্রযুক্তি এগিয়েছে, আর আইডিয়া অ্যাডভার্টাইজিংও বদলেছে সেই গতির সাথে তাল মিলিয়ে।
              </p>

              <p>
                পরিবর্তনকে ভয় না পেয়ে আমরা তাকে গ্রহণ করেছি — ঐতিহ্যবাহী সাইন-মেকিং থেকে শুরু করে ধাপে ধাপে পা রেখেছি অফসেট প্রিন্টিং, ডিজিটাল প্রিন্টিং এবং আধুনিক ডিজাইনের বিস্তৃত জগতে।
              </p>

              <p>
                দুই দশকেরও বেশি সময় ধরে আইডিয়া অ্যাডভার্টাইজিং বেড়ে উঠেছে হেয়াকোর মানুষের বিশ্বাস ও ভালোবাসার হাত ধরে — প্রতিষ্ঠাতা <strong>কাজী আবুল কালাম সিদ্দিক</strong>-এর আদর্শ ও পরিশ্রমের পথ ধরে, যা আজও আমরা এগিয়ে নিয়ে চলেছি।
              </p>

              <p>
                প্রজন্ম বদলেছে, হাত বদলেছে, কিন্তু বদলায়নি আমাদের মূল্যবোধ — <strong>সততা, গুণগত মান আর সৃজনশীলতা</strong>। প্রতিটি কাজে আমরা দায়িত্ব খুঁজি, প্রতিটি ডিজাইনে খুঁজি প্রতিফলন — ছোট্ট একটি সাইনবোর্ড থেকে শুরু করে পূর্ণাঙ্গ ব্র্যান্ড পরিচয় পর্যন্ত।
              </p>

              <p className="font-medium text-[#232019]">
                আজ, আইডিয়া অ্যাডভার্টাইজিং শুধু একটি প্রতিষ্ঠান নয় — এটি একটি আস্থা, একটি নির্ভরতার নাম। যার শিকড় গভীরে প্রোথিত ঐতিহ্যে, আর চোখ রাখা আগামীর স্বপ্নে।
              </p>

            </div>

            {/* Profile Cards Column */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Present Owner Card */}
              <div className="bg-white rounded-2xl border border-[#ECE7DA] p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-[4/5] bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-xl flex flex-col items-center justify-center text-neutral-400 p-6 text-center border border-neutral-200 mb-5 relative overflow-hidden">
                  <div className="w-24 h-24 rounded-full bg-[#E4212B]/10 text-[#E4212B] flex items-center justify-center font-heading font-bold text-3xl mb-3 border-2 border-[#E4212B]/30">
                    KYM
                  </div>
                  <span className="font-semibold text-neutral-600">মালিকের ছবি বসবে</span>
                  <span className="text-xs text-neutral-400 mt-1">placeholder — পরে আসল ছবি বসানো হবে</span>
                </div>
                
                <div className="text-center space-y-1">
                  <h3 className="font-heading text-2xl font-bold text-[#141414]">কাজী ইয়াসিন মাহমুদ</h3>
                  <p className="text-sm font-semibold text-[#E4212B]">স্বত্বাধিকারী, আইডিয়া অ্যাডভার্টাইজিং</p>
                  <p className="text-xs text-[#6B6558] pt-2">
                    পেয়ার প্লাজা (২য় তলা), হেয়াকো বাজার, ফটিকছড়ি উত্তর, চট্টগ্রাম
                  </p>
                </div>
              </div>

              {/* Founder Legacy Badge */}
              <div className="bg-[#1D1A14] text-white p-6 rounded-2xl border border-[#322E22] space-y-2">
                <div className="flex items-center gap-2 text-[#FBB33C] text-xs font-bold uppercase tracking-wider">
                  <Award className="w-4 h-4" />
                  <span>প্রতিষ্ঠাতা ও প্রেরণা</span>
                </div>
                <h4 className="font-heading text-xl font-bold text-white">কাজী আবুল কালাম সিদ্দিক</h4>
                <p className="text-xs text-[#A49F8F] leading-relaxed">
                  ২০০৩ সালে তাঁর সততা, অক্লান্ত পরিশ্রম ও অনুপ্রেরণামূলক দিকনির্দেশনায় শুরু হয় হেয়াকো বাজারের প্রথম আধুনিক প্রিন্টিং ও বিজ্ঞাপন প্রতিষ্ঠান।
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="py-16 bg-[#141414] text-white border-t border-b border-[#2C2820]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            
            <div className="p-4 border-r border-[#2C2820] last:border-none">
              <span className="font-heading text-4xl sm:text-5xl font-bold text-[#E4212B] block mb-2">২০০৩</span>
              <span className="text-sm text-[#CFCABD] font-medium">প্রতিষ্ঠাকাল</span>
            </div>

            <div className="p-4 md:border-r border-[#2C2820]">
              <span className="font-heading text-4xl sm:text-5xl font-bold text-[#FBB33C] block mb-2">২০+ বছর</span>
              <span className="text-sm text-[#CFCABD] font-medium">গ্রাহক সন্তুষ্টি ও অভিজ্ঞতা</span>
            </div>

            <div className="p-4 border-r border-[#2C2820] last:border-none">
              <span className="font-heading text-4xl sm:text-5xl font-bold text-[#6FA84B] block mb-2">৩০+</span>
              <span className="text-sm text-[#CFCABD] font-medium">সার্ভিস ক্যাটাগরি ও আইটেম</span>
            </div>

            <div className="p-4">
              <span className="font-heading text-4xl sm:text-5xl font-bold text-white block mb-2">১০ মিনিট</span>
              <span className="text-sm text-[#CFCABD] font-medium">দ্রুততম ডেলিভারি সময়</span>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-[#FBF9F5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block bg-[#FDECEB] text-[#E4212B] font-semibold text-xs px-4 py-1.5 rounded-full mb-3">
              আমাদের মূলনীতি
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#141414]">
              যে মূল্যবোধে আমরা অবিচল
            </h2>
            <p className="text-[#6B6558] mt-3 text-base">
              প্রতিটি ছাপার কাজ ও ডিজাইনে আমরা বজায় রাখি সর্বোচ্চ পেশাদারিত্ব
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="bg-white p-8 rounded-2xl border border-[#ECE7DA] hover:border-[#E4212B] transition-all duration-200">
              <div className="w-12 h-12 rounded-xl bg-[#E4212B]/10 text-[#E4212B] flex items-center justify-center mb-5">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-xl text-[#141414] mb-3">সততা ও বিশ্বাস</h3>
              <p className="text-sm text-[#6B6558] leading-relaxed">
                সঠিক হিসাব, সঠিক মেটেরিয়াল এবং নির্ধারিত সময়ে কাজ বুঝিয়ে দেওয়া আমাদের দীর্ঘ ২০ বছরের মূল ভিত্তি।
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-[#ECE7DA] hover:border-[#FBB33C] transition-all duration-200">
              <div className="w-12 h-12 rounded-xl bg-[#FBB33C]/20 text-[#D98200] flex items-center justify-center mb-5">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-xl text-[#141414] mb-3">গুণগত মান ও সৃজনশীলতা</h3>
              <p className="text-sm text-[#6B6558] leading-relaxed">
                প্রতিটি ডিজাইন আকর্ষণীয় ও আধুনিক করতে আমাদের টিম সর্বদা ট্রেন্ড ও মানের প্রতি সর্বোচ্চ যত্নশীল।
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-[#ECE7DA] hover:border-[#6FA84B] transition-all duration-200">
              <div className="w-12 h-12 rounded-xl bg-[#6FA84B]/10 text-[#6FA84B] flex items-center justify-center mb-5">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-xl text-[#141414] mb-3">আধুনিক প্রযুক্তি</h3>
              <p className="text-sm text-[#6B6558] leading-relaxed">
                নিজস্ব হাই-স্পিড ডিজিটাল ও সাবলিমেশন মেশিনের সাহায্যে এখন যেকোনো জরুরি ব্যানার, ক্রেস্ট ও মগ প্রিন্ট মাত্র ১০ মিনিটে।
              </p>
            </div>

          </div>

          <div className="mt-14 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-[#E4212B] hover:bg-[#c71822] text-white font-semibold px-8 py-4 rounded-xl text-base shadow hover:shadow-lg transition-all"
            >
              <span>আমাদের সার্ভিসগুলো ঘুরে দেখুন</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
};

export default AboutPage;
