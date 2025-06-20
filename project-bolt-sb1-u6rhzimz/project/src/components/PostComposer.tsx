import React, { useState } from 'react';
import { Send, Image } from 'lucide-react';
import { User } from '../types';

interface PostComposerProps {
  user: User;
  onPost: (content: string) => void;
}

const PostComposer: React.FC<PostComposerProps> = ({ user, onPost }) => {
  const [content, setContent] = useState('');
  const [wordCount, setWordCount] = useState(0);

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    const words = text.trim() ? text.trim().split(/\s+/).length : 0;
    
    if (words <= 200) {
      setContent(text);
      setWordCount(words);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (content.trim() && wordCount > 0) {
      onPost(content.trim());
      setContent('');
      setWordCount(0);
    }
  };

  const isOverLimit = wordCount > 200;
  const isNearLimit = wordCount > 180;

  return (
    <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 p-6 mb-6">
      <form onSubmit={handleSubmit}>
        <div className="flex space-x-4">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-12 h-12 rounded-full ring-2 ring-white shadow-lg"
          />
          
          <div className="flex-1">
            <textarea
              value={content}
              onChange={handleContentChange}
              placeholder="Qu'est-ce qui se passe dans votre vida loca ?"
              className="w-full h-24 p-3 border-0 resize-none bg-transparent text-gray-800 placeholder-gray-500 focus:outline-none text-lg"
              style={{ minHeight: '96px' }}
            />
            
            <div className="flex items-center justify-between pt-3 border-t border-gray-100">
              <div className="flex items-center space-x-4">
                <button
                  type="button"
                  className="p-2 text-gray-500 hover:text-blue-500 hover:bg-blue-50 rounded-full transition-all duration-200"
                >
                  <Image size={20} />
                </button>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className={`text-sm font-medium ${
                  isOverLimit ? 'text-red-500' : 
                  isNearLimit ? 'text-orange-500' : 
                  'text-gray-500'
                }`}>
                  {wordCount}/200 mots
                </div>
                
                <button
                  type="submit"
                  disabled={!content.trim() || wordCount === 0 || isOverLimit}
                  className="flex items-center space-x-2 px-6 py-2 bg-gradient-to-r from-pink-500 to-blue-500 text-white rounded-full font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  <Send size={16} />
                  <span>Poster</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PostComposer;