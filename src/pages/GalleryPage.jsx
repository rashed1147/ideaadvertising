import React, { useState } from 'react';
import { ImageIcon, Layers, Printer, Gift, Eye, X, MessageCircle, Sparkles } from 'lucide-react';
import { galleryItems } from '../data/galleryData';
import PageMeta from '../components/PageMeta';

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [previewItem, setPreviewItem] = useState(null);

  const filteredItems = selectedCategory === 'all'
    ? galleryItems
    : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="bg-[#FBF9F5] min-h-screen">
      <PageMeta 
        title="কাজের গ্যালারি ও পোর্টফোলিও | আইডিয়া অ্যাডভার্টাইজিং" 
        description="আইডিয়া অ্যাডভার্টাইজিং এর সাম্প্রতিক প্রিন্ট ও ডিজাইন কাজের নমুনা — ব্যানার, ভিজিটিং কার্ড, মগ প্রিন্ট, স্টিকার ও গিফট আইটেম।"
      />

      {/* Header */}
      <section className="bg-[#141414] text-white py-16 border-b border-[#2C2820]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="inline-block bg-[#2B271C] text-[#FBB33C] font-semibold text-xs px-4 py-1.5 rounded-full mb-4">
            আমাদের কাজ
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            পোর্টফোলিও ও কাজের গ্যালারি
          </h1>
          <p className="text-base sm:text-lg text-[#CFCABD] leading-relaxed">
            বিগত বছরগুলোতে আমরা হেয়াকো বাজার ও বিভিন্ন এলাকার ব্যক্তি, ক্লাব ও ব্যবসা প্রতিষ্ঠানের জন্য যে সকল আকর্ষণীয় কাজ সম্পন্ন করেছি তার নির্বাচিত নমুনা।
          </p>
          <div className="mt-4 text-xs text-[#8A8574] italic">
            * এখানে কাজের প্রাথমিক প্লেসহোল্ডার ডেমো প্রদর্শিত হচ্ছে — পরবর্তীতে আসল কাজের উচ্চমানের ছবি সংযুক্ত করা হবে।
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b border-[#ECE7DA] sticky top-20 z-30 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all ${
              selectedCategory === 'all'
                ? 'bg-[#141414] text-white shadow'
                : 'bg-[#FBF9F5] text-[#6B6558] hover:bg-[#ECE7DA] border border-[#ECE7DA]'
            }`}
          >
            সব কাজ ({galleryItems.length})
          </button>

          <button
            onClick={() => setSelectedCategory('offset')}
            className={`px-5 py-2 rounded-xl text-sm font-semibold flex items-center gap-2 transition-all ${
              selectedCategory === 'offset'
                ? 'bg-[#E4212B] text-white shadow'
                : 'bg-[#FBF9F5] text-[#6B6558] hover:bg-[#ECE7DA] border border-[#ECE7DA]'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>অফসেট প্রিন্ট</span>
          </button>

          <button
            onClick={() => setSelectedCategory('digital')}
            className={`px-5 py-2 rounded-xl text-sm font-semibold flex items-center gap-2 transition-all ${
              selectedCategory === 'digital'
                ? 'bg-[#FBB33C] text-[#141414] shadow font-bold'
                : 'bg-[#FBF9F5] text-[#6B6558] hover:bg-[#ECE7DA] border border-[#ECE7DA]'
            }`}
          >
            <Printer className="w-4 h-4" />
            <span>ডিজিটাল প্রিন্ট</span>
          </button>

          <button
            onClick={() => setSelectedCategory('gift')}
            className={`px-5 py-2 rounded-xl text-sm font-semibold flex items-center gap-2 transition-all ${
              selectedCategory === 'gift'
                ? 'bg-[#6FA84B] text-white shadow'
                : 'bg-[#FBF9F5] text-[#6B6558] hover:bg-[#ECE7DA] border border-[#ECE7DA]'
            }`}
          >
            <Gift className="w-4 h-4" />
            <span>গিফট আইটেম</span>
          </button>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => {
            const badgeBg =
              item.category === 'offset'
                ? 'bg-[#E4212B] text-white'
                : item.category === 'digital'
                ? 'bg-[#FBB33C] text-[#141414]'
                : 'bg-[#6FA84B] text-white';

            return (
              <div
                key={item.id}
                onClick={() => setPreviewItem(item)}
                className="bg-white rounded-2xl border border-[#ECE7DA] overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-200 cursor-pointer group flex flex-col justify-between"
              >
                {/* Visual Placeholder Frame */}
                <div className="aspect-[4/3] bg-gradient-to-br from-neutral-800 to-neutral-900 relative p-4 flex flex-col items-center justify-center text-center overflow-hidden">
                  
                  {/* Subtle color glow accent */}
                  <div
                    className="absolute -right-8 -top-8 w-24 h-24 rounded-full blur-2xl opacity-40"
                    style={{ backgroundColor: item.colorTheme }}
                  ></div>

                  <div className="w-12 h-12 rounded-xl bg-white/10 text-white flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                    <ImageIcon className="w-6 h-6" />
                  </div>

                  <span className="font-heading text-white font-bold text-base px-2 z-10">
                    {item.title}
                  </span>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-[#141414]/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-xs font-semibold">
                    <Eye className="w-4 h-4" />
                    <span>বিস্তারিত দেখুন</span>
                  </div>
                </div>

                {/* Bottom Details */}
                <div className="p-4 bg-white flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${badgeBg}`}>
                        {item.categoryName}
                      </span>
                      <span className="text-[11px] text-[#6B6558] font-medium bg-[#FBF9F5] px-2 py-0.5 rounded border border-[#ECE7DA]">
                        {item.tag}
                      </span>
                    </div>
                    <p className="text-xs text-[#6B6558] line-clamp-2 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-[#ECE7DA] flex items-center justify-between text-xs text-[#E4212B] font-semibold group-hover:underline">
                    <span>প্রিভিউ দেখুন</span>
                    <span>→</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Modal Preview */}
      {previewItem && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setPreviewItem(null)}
        >
          <div 
            className="bg-[#141414] text-white rounded-2xl max-w-lg w-full border border-neutral-700 overflow-hidden shadow-2xl animate-scaleUp"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-5 border-b border-neutral-800">
              <div>
                <span className="text-xs font-bold text-[#FBB33C] uppercase tracking-wider">
                  {previewItem.categoryName}
                </span>
                <h3 className="font-heading text-xl font-bold text-white">
                  {previewItem.title}
                </h3>
              </div>
              <button
                onClick={() => setPreviewItem(null)}
                className="text-neutral-400 hover:text-white p-1 rounded-lg hover:bg-neutral-800 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Body / Image placeholder */}
            <div className="p-6 space-y-4">
              <div className="aspect-video bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-xl border border-neutral-700 flex flex-col items-center justify-center p-6 text-center text-neutral-400">
                <ImageIcon className="w-12 h-12 text-neutral-500 mb-2" />
                <span className="text-sm font-semibold text-neutral-300">আসল কাজের ছবি এখানে প্রতিস্থাপিত হবে</span>
                <span className="text-xs text-neutral-500 mt-1">({previewItem.title})</span>
              </div>

              <div className="bg-[#1D1A14] p-4 rounded-xl border border-[#322E22] space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#8A8574]">ক্যাটাগরি:</span>
                  <span className="text-white font-medium">{previewItem.categoryName}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#8A8574]">বিশেষ বৈশিষ্ট্য:</span>
                  <span className="text-[#FBB33C] font-semibold">{previewItem.tag}</span>
                </div>
                <div className="pt-2 border-t border-[#2C2820] text-sm text-[#CFCABD]">
                  {previewItem.desc}
                </div>
              </div>
            </div>

            {/* Modal Footer / WhatsApp Action */}
            <div className="p-5 bg-[#0E0E0E] border-t border-neutral-800 flex items-center justify-between gap-3">
              <button
                onClick={() => setPreviewItem(null)}
                className="px-4 py-2.5 rounded-xl text-sm text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
              >
                বন্ধ করুন
              </button>

              <a
                href={`https://wa.me/8801811940042?text=${encodeURIComponent(`আসসালামু আলাইকুম, আমি "${previewItem.title}" ডিজাইনের মতো একটি কাজ করাতে চাই।`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#6FA84B] hover:bg-[#5e913e] text-white px-5 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2 transition-colors shadow"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>এটির মতো অর্ডার করুন</span>
              </a>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default GalleryPage;
