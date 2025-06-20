import React from 'react';
import { User, Settings } from 'lucide-react';
import { Tab } from '../types';

interface NavigationProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeTab, onTabChange }) => {
  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
              Vida Loca
            </h1>
            
            <div className="flex space-x-1">
              <button
                onClick={() => onTabChange('vida-loca')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-200 ${
                  activeTab === 'vida-loca'
                    ? 'bg-gradient-to-r from-pink-500 to-blue-500 text-white shadow-lg'
                    : 'text-gray-600 hover:bg-white/50 hover:text-gray-800'
                }`}
              >
                <User size={20} />
                <span className="font-medium">Vida Loca</span>
              </button>
              
              <button
                onClick={() => onTabChange('profile')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-200 ${
                  activeTab === 'profile'
                    ? 'bg-gradient-to-r from-pink-500 to-blue-500 text-white shadow-lg'
                    : 'text-gray-600 hover:bg-white/50 hover:text-gray-800'
                }`}
              >
                <Settings size={20} />
                <span className="font-medium">Profil</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;