'use client';

import { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';

const PartnerSection = () => {
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');

  const handleSearch = () => {
    console.log('Searching for POS in country:', country, 'and city:', city);
  };

  const handleMap = () => {
    console.log('Opening map for:', country, city);
  };

  const handleCreateForm = () => {
    console.log('Creating partner form...');
  };

  return (
    <div className="w-full px-4 py-8">
      {/* باکس اصلی با عرض محدود و مرکز‌گذاری */}
      <div className="max-w-7xl mx-auto relative">
        {/* لایه عکس پس‌زمینه داخلی */}
        <div 
          className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg border border-blue-300/20"
          style={{
            backgroundImage: "url('commercial-hvac.png')", // عکس باید در public/images باشد
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* لایه overlay برای خوانایی */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

          {/* محتوای کامپوننت روی لایه overlay */}
          <div className="relative z-10 p-8 md:p-12 lg:p-16 bg-transparent">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Column - Find a Point of Sale */}
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-white">Find a Point of Sale</h2>

                <div className="space-y-4">
                  <Select value={country} onValueChange={setCountry}>
                    <SelectTrigger className="w-full px-4 py-2 bg-white/20 border border-white/30 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none">
                      <SelectValue placeholder="Country" />
                    </SelectTrigger>
                    <SelectContent className="bg-white text-gray-900">
                      <SelectGroup>
                        <SelectLabel>Country</SelectLabel>
                        <SelectItem value="iran">Iran</SelectItem>
                        <SelectItem value="iraq">Iraq</SelectItem>
                        <SelectItem value="saudi-arabia">Saudi Arabia</SelectItem>
                        <SelectItem value="uae">United Arab Emirates</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>

                  <Select value={city} onValueChange={setCity}>
                    <SelectTrigger className="w-full px-4 py-2 bg-white/20 border border-white/30 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none">
                      <SelectValue placeholder="City" />
                    </SelectTrigger>
                    <SelectContent className="bg-white text-gray-900">
                      <SelectGroup>
                        <SelectLabel>City</SelectLabel>
                        <SelectItem value="tehran">Tehran</SelectItem>
                        <SelectItem value="baghdad">Baghdad</SelectItem>
                        <SelectItem value="riyadh">Riyadh</SelectItem>
                        <SelectItem value="abu-dhabi">Abu Dhabi</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>

                  <div className="flex space-x-4 space-x-reverse">
                    <Button 
                      onClick={handleSearch}
                      className="px-6 py-2 
           bg-[#25408f] 
           hover:bg-[#263f88] 
           text-white 
           rounded-lg 
           transition-colors 
           duration-200"
                    >
                      Search
                    </Button>
                    <Button 
                      onClick={handleMap}
                      variant="outline"
                      className="px-6 py-2 border border-white/30 text-white hover:bg-white/10 rounded-lg transition-colors"
                    >
                      Map
                    </Button>
                  </div>
                </div>
              </div>

              {/* Right Column - Become Our Partner */}
              <div className="flex flex-col justify-center space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-white">Become Our Partner</h2>
                <p className="text-gray-300 leading-relaxed">
                  If you want to be an Emirplast business partner, please fill out the form and we will contact you as soon as possible and evaluate what we can do together.
                </p>
                <Button 
                  onClick={handleCreateForm}
                  variant="outline"
                  className="px-6 py-2 border border-white/30 text-white hover:bg-white/10 rounded-lg transition-colors w-fit"
                >
                  Create form
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerSection;