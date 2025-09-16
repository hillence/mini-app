import React, { useState } from 'react';

const HoldMarketHomepage = () => {
  const [activeCategory, setActiveCategory] = useState('Категории');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Status Bar */}
      <div className="flex justify-between items-center px-4 py-2 bg-white">
        <div className="flex items-center space-x-2">
          <button className="flex items-center space-x-2 bg-gray-200 rounded-full px-3 py-1 text-sm">
            <span>✕</span>
            <span>Закрыть</span>
          </button>
        </div>
        <div className="w-4 h-4 bg-green-400 rounded-full"></div>
        <div className="flex items-center space-x-2">
          <button className="flex items-center space-x-2 bg-gray-200 rounded-full px-3 py-1 text-sm">
            <span>✓</span>
            <span>•••</span>
          </button>
        </div>
      </div>

      {/* Header */}
      <div className="bg-white px-4 py-4 flex items-center justify-between">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-600">
          <path d="M3 12h18m-9 9V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M3 6h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
        <h1 className="text-xl font-bold text-gray-900">HOLD market</h1>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-blue-500">
          <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
          <path d="m21 21-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </div>

      {/* Navigation */}
      <div className="bg-white px-4 py-2 flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 flex items-center justify-center">
            <svg className="w-3 h-3" viewBox="0 0 12 12" fill="currentColor">
              <path d="M6 0L8 4H12L8.5 6.5L10 12L6 9L2 12L3.5 6.5L0 4H4L6 0Z"/>
            </svg>
          </div>
        </div>
        <button className="flex items-center space-x-2 text-gray-900">
          <span>{activeCategory}</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
        <div className="text-gray-600">В НАЛИЧИИ</div>
        <div className="text-gray-600">ПОД ЗАКАЗ</div>
      </div>

      {/* Main Banner */}
      <div className="mx-4 mt-4 mb-6 bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 rounded-2xl p-6 relative overflow-hidden">
        <div className="text-white">
          <h2 className="text-2xl font-bold mb-2">ОСЕНЬ</h2>
          <p className="text-white/90 mb-6">одежда и обувь</p>
        </div>
        
        <div className="flex space-x-4 relative z-10">
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 w-16 h-16 flex items-center justify-center">
            <div className="w-8 h-8 bg-white/30 rounded"></div>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 w-16 h-16 flex items-center justify-center">
            <div className="w-8 h-8 bg-white/30 rounded"></div>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 w-16 h-16 flex items-center justify-center">
            <div className="w-8 h-8 bg-white/30 rounded"></div>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 w-16 h-16 flex items-center justify-center">
            <div className="w-8 h-8 bg-white/30 rounded"></div>
          </div>
        </div>
        
        <div className="absolute top-0 left-0 w-32 h-32 bg-orange-400 rounded-full -translate-x-16 -translate-y-8 opacity-60"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-blue-400 rounded-full translate-x-8 translate-y-8 opacity-60"></div>
      </div>

      {/* Category Grid */}
      <div className="px-4 mb-6">
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-gradient-to-br from-cyan-200 to-blue-300 rounded-2xl p-4 h-24 flex items-center justify-center relative overflow-hidden">
            <div className="w-12 h-12 bg-white/30 rounded-full z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/10"></div>
          </div>
          <div className="bg-gradient-to-br from-pink-200 to-purple-300 rounded-2xl p-4 h-24 flex items-center justify-center relative overflow-hidden">
            <div className="w-12 h-12 bg-white/30 rounded z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/10"></div>
          </div>
          <div className="bg-gradient-to-br from-orange-300 to-yellow-400 rounded-2xl p-4 h-24 flex items-center justify-center relative overflow-hidden">
            <div className="text-center z-10">
              <div className="text-white text-sm font-medium">ОБУВЬ ДО</div>
              <div className="text-white text-xl font-bold">10K</div>
              <div className="text-2xl">🙂</div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/10"></div>
          </div>
        </div>
      </div>

      {/* Product Cards */}
      <div className="px-4 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
            <div className="aspect-square bg-gray-100 p-4">
              <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-400 text-sm">Adidas Samba</span>
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between mb-1">
                <span className="text-lg font-bold text-gray-900">11 747 ₽</span>
                <span className="text-sm text-gray-500 line-through">15 750 ₽</span>
              </div>
              <p className="text-sm text-gray-700 font-medium">Adidas Samba "Wonder</p>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
            <div className="aspect-square bg-gray-100 p-4 relative">
              <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-400 text-sm">Adidas Samba OG</span>
              </div>
              <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full flex items-center justify-center w-6 h-6 font-bold">
                1
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between mb-1">
                <span className="text-lg font-bold text-gray-900">9 650 ₽</span>
                <span className="text-sm text-gray-500 line-through">11 650 ₽</span>
              </div>
              <p className="text-sm text-gray-700 font-medium">Adidas "Samba OG Black"</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Indicator */}
      <div className="fixed bottom-0 left-0 right-0 h-1 bg-black"></div>
      
      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6">
        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
          <div className="text-white text-xl">😊</div>
        </div>
      </div>
    </div>
  );
};

export default HoldMarketHomepage;