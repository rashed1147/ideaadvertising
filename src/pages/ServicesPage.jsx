import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Layers, Printer, Gift, Sparkles, MessageCircle, CheckCircle2, Search } from 'lucide-react';
import { serviceCategories } from '../data/servicesData';
import ServiceCard from '../components/ServiceCard';
import PageMeta from '../components/PageMeta';

const ServicesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('cat') || 'all';
  const [activeTab, setActiveTab] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const cat = searchParams.get('cat');
    if (cat && ['offset', 'digital', 'gift'].includes(cat)) {
      setActiveTab(cat);
    }
  }, [searchParams]);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    if (tabId === 'all') {
      searchParams.delete('cat');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ cat: tabId });
    }
  };

  const getFilteredCategories = () => {
    return serviceCategories.map((category) => {
      // If tab is not 'all' and doesn't match this category, skip
      if (activeTab !== 'all' && activeTab !== category.id) {
        return null;
      }

      // Filter items by search query if any
      const filteredItems = category.items.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.desc && item.desc.toLowerCase().includes(searchQuery.toLowerCase()))
      );

      return {
        ...category,
        items: filteredItems,
      };
    }).filter(Boolean);
  };

  const displayedCategories = getFilteredCategories();
  const totalItemCount = serviceCategories.reduce((acc, cat) => acc + cat.items.length, 0);

  return (
    <div className="bg-[#141414] text-white min-h-screen">
      <PageMeta 
        title="আমাদের সার্ভিসসমূহ | আইডিয়া অ্যাডভার্টাইজিং" 
        description="অফসেট প্রিন্ট, ডিজিটাল ব্যানার এবং কাস্টমাইজড গিফট আইটেম — আইডিয়া অ্যাডভার্টাইজিং এর সব সার্ভিসের বিস্তারিত তালিকা।"
      />

      {/* Page Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-[#2C2820] bg-gradient-to-b from-[#1D1A14] to-[#141414]">
        <div className="max-w-6xl mx-auto text-center max-w-3xl">
          <span className="inline-block bg-[#2B271C] text-[#FBB33C] font-semibold text-xs px-4 py-1.5 rounded-full mb-4">
            আমাদের সার্ভিস তালিকা ({totalItemCount}+ টি আইটেম)
          </span>
          <h1 className="font-heading text-3xl sm:text-5xl font-bold mb-4">
            যাবতীয় ছাপার কাজ ও আকর্ষণীয় ডিজাইন
          </h1>
          <p className="text-base sm:text-lg text-[#A49F8F] leading-relaxed">
            অফসেট প্রেস প্রিন্ট থেকে ডিজিটাল ব্যানার ও পার্সোনালাইজড গিফট আইটেম — আপনার প্রয়োজনীয় সার্ভিসটি বেছে নিয়ে সরাসরি WhatsApp এ অর্ডার করুন।
          </p>

          {/* Quick 10-Minute Alert */}
          <div className="mt-6 inline-flex items-center gap-2 bg-[#2A261E] border border-[#FBB33C]/40 text-[#FBB33C] px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium">
            <Sparkles className="w-4 h-4 text-[#FBB33C]" />
            <span>নিজস্ব মেশিনে মাত্র <strong>১০ মিনিটে</strong> ব্যানার, ক্রেস্ট ও মগ প্রিন্ট ডেলিভারি!</span>
          </div>
        </div>
      </section>

      {/* Interactive Controls & Tab Navigation */}
      <div className="sticky top-20 z-30 bg-[#141414]/95 backdrop-blur border-b border-[#2C2820] py-4 px-4 shadow-md">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Tab Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => handleTabChange('all')}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                activeTab === 'all'
                  ? 'bg-white text-[#141414] shadow'
                  : 'bg-[#1D1A14] text-[#CFCABD] hover:bg-[#25221B] border border-[#322E22]'
              }`}
            >
              সব সার্ভিস ({totalItemCount})
            </button>

            <button
              onClick={() => handleTabChange('offset')}
              className={`px-4 py-2 rounded-xl text-sm font-semibold flex items-center gap-2 transition-all ${
                activeTab === 'offset'
                  ? 'bg-[#E4212B] text-white shadow'
                  : 'bg-[#1D1A14] text-[#CFCABD] hover:bg-[#25221B] border border-[#322E22]'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-[#E4212B]"></span>
              <span>অফসেট প্রিন্ট (১৪)</span>
            </button>

            <button
              onClick={() => handleTabChange('digital')}
              className={`px-4 py-2 rounded-xl text-sm font-semibold flex items-center gap-2 transition-all ${
                activeTab === 'digital'
                  ? 'bg-[#FBB33C] text-[#141414] shadow font-bold'
                  : 'bg-[#1D1A14] text-[#CFCABD] hover:bg-[#25221B] border border-[#322E22]'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-[#FBB33C]"></span>
              <span>ডিজিটাল প্রিন্ট (১০)</span>
            </button>

            <button
              onClick={() => handleTabChange('gift')}
              className={`px-4 py-2 rounded-xl text-sm font-semibold flex items-center gap-2 transition-all ${
                activeTab === 'gift'
                  ? 'bg-[#6FA84B] text-white shadow'
                  : 'bg-[#1D1A14] text-[#CFCABD] hover:bg-[#25221B] border border-[#322E22]'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-[#6FA84B]"></span>
              <span>গিফট আইটেম (৯)</span>
            </button>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-[#8A8574] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="সার্ভিস খুঁজুন..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#1D1A14] border border-[#322E22] focus:border-[#FBB33C] text-white placeholder-[#6B6558] text-sm rounded-xl pl-10 pr-4 py-2 outline-none transition-colors"
            />
          </div>

        </div>
      </div>

      {/* Services List Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-16">
        {displayedCategories.map((category) => {
          const IconComponent =
            category.id === 'offset'
              ? Layers
              : category.id === 'digital'
              ? Printer
              : Gift;

          const badgeColor =
            category.id === 'offset'
              ? 'bg-[#E4212B] text-white'
              : category.id === 'digital'
              ? 'bg-[#FBB33C] text-[#141414]'
              : 'bg-[#6FA84B] text-white';

          return (
            <div key={category.id} id={category.id} className="scroll-mt-40">
              
              {/* Category Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-[#2C2820] gap-4">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold ${badgeColor}`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white">
                      {category.title}
                    </h2>
                    <p className="text-sm text-[#A49F8F]">
                      {category.description}
                    </p>
                  </div>
                </div>

                <span className="text-xs text-[#8A8574] font-medium bg-[#1D1A14] px-3.5 py-1.5 rounded-lg border border-[#2C2820] w-fit">
                  মোট {category.items.length} টি সার্ভিস পাওয়া গেছে
                </span>
              </div>

              {/* Items Grid */}
              {category.items.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {category.items.map((item) => (
                    <ServiceCard
                      key={item.id}
                      item={item}
                      categoryId={category.id}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-[#1D1A14] rounded-xl border border-[#322E22]">
                  <p className="text-[#8A8574] text-sm">
                    "{searchQuery}" এর জন্য কোনো সার্ভিস খুঁজে পাওয়া যায়নি।
                  </p>
                </div>
              )}

            </div>
          );
        })}

        {displayedCategories.length === 0 && (
          <div className="text-center py-20 bg-[#1D1A14] rounded-2xl border border-[#322E22]">
            <p className="text-[#A49F8F] text-base mb-4">
              আপনার অনুসন্ধানের সাথে কোনো সার্ভিস মিলছে না।
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveTab('all');
              }}
              className="bg-[#E4212B] text-white text-sm font-semibold px-5 py-2.5 rounded-lg"
            >
              সব সার্ভিস পুনরায় দেখুন
            </button>
          </div>
        )}
      </section>

      {/* Direct Order Notice Banner */}
      <section className="py-12 bg-[#1D1A14] border-t border-[#2C2820]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <h3 className="font-heading text-2xl font-bold text-white">
            তালিকার বাইরে আপনার বিশেষ কোনো সাইজ বা ডিজাইনের প্রয়োজন?
          </h3>
          <p className="text-sm text-[#A49F8F] max-w-xl mx-auto">
            আমরা যেকোনো কাস্টম সাইজ ও স্পেসিফিকেশন অনুযায়ী প্রিন্টিং কাজ করে থাকি। বিস্তারিত জানাতে আমাদের সাথে সরাসরি WhatsApp বা ফোনে কথা বলুন।
          </p>
          <div className="pt-2 flex justify-center">
            <a
              href="https://wa.me/8801811940042?text=আসসালামু%20আলাইকুম,%20আমার%20একটি%20কাস্টম%20প্রিন্টিং%20কাজের%20দরকার।"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#6FA84B] hover:bg-[#5e913e] text-white font-semibold px-7 py-3.5 rounded-xl text-sm transition-colors shadow"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>কাস্টম কাজের জন্য WhatsApp করুন</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ServicesPage;
