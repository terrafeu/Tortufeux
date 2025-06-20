import React, { useState } from 'react';
import { Camera, Save, User } from 'lucide-react';
import { User as UserType } from '../types';

interface ProfileTabProps {
  user: UserType;
  onUpdateProfile: (updates: Partial<UserType>) => void;
}

const ProfileTab: React.FC<ProfileTabProps> = ({ user, onUpdateProfile }) => {
  const [name, setName] = useState(user.name);
  const [username, setUsername] = useState(user.username);
  const [selectedAvatar, setSelectedAvatar] = useState(user.avatar);

  const avatarOptions = [
    'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
  ];

  const handleSave = () => {
    onUpdateProfile({
      name,
      username,
      avatar: selectedAvatar,
    });
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 p-8">
        <div className="text-center mb-8">
          <div className="relative inline-block">
            <img
              src={selectedAvatar}
              alt="Profile"
              className="w-32 h-32 rounded-full ring-4 ring-white shadow-xl mx-auto"
            />
            <div className="absolute -bottom-2 -right-2 p-3 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full text-white shadow-lg">
              <Camera size={20} />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mt-4">Profil</h2>
          <p className="text-gray-600">Personnalisez votre identité Vida Loca</p>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nom d'affichage
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200"
              placeholder="Votre nom"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nom d'utilisateur
            </label>
            <div className="relative">
              <span className="absolute left-3 top-3 text-gray-500">@</span>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value.replace(/[^a-zA-Z0-9_]/g, ''))}
                className="w-full p-3 pl-8 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200"
                placeholder="username"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-4">
              Photo de profil
            </label>
            <div className="grid grid-cols-3 gap-4">
              {avatarOptions.map((avatar, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedAvatar(avatar)}
                  className={`relative overflow-hidden rounded-xl transition-all duration-200 ${
                    selectedAvatar === avatar
                      ? 'ring-4 ring-blue-500 shadow-lg scale-105'
                      : 'hover:scale-105 hover:shadow-md'
                  }`}
                >
                  <img
                    src={avatar}
                    alt={`Avatar option ${index + 1}`}
                    className="w-full h-24 object-cover"
                  />
                  {selectedAvatar === avatar && (
                    <div className="absolute inset-0 bg-blue-500/20 flex items-center justify-center">
                      <div className="p-2 bg-white/90 rounded-full">
                        <User size={16} className="text-blue-500" />
                      </div>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleSave}
            className="w-full flex items-center justify-center space-x-2 py-3 px-6 bg-gradient-to-r from-pink-500 to-blue-500 text-white rounded-xl font-medium hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200"
          >
            <Save size={20} />
            <span>Enregistrer les modifications</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileTab;