import React, { useState } from 'react';
import { Heart, MessageCircle, Share, MoreHorizontal } from 'lucide-react';
import { Post, Comment, User } from '../types';

interface PostCardProps {
  post: Post;
  currentUser: User;
  onLike: (postId: string) => void;
  onComment: (postId: string, content: string) => void;
}

const PostCard: React.FC<PostCardProps> = ({ post, currentUser, onLike, onComment }) => {
  const [showComments, setShowComments] = useState(false);
  const [commentContent, setCommentContent] = useState('');

  const formatTimeAgo = (date: Date): string => {
    const now = new Date();
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
    
    if (diffInMinutes < 1) return 'à l\'instant';
    if (diffInMinutes < 60) return `${diffInMinutes}m`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h`;
    return `${Math.floor(diffInMinutes / 1440)}j`;
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (commentContent.trim()) {
      onComment(post.id, commentContent.trim());
      setCommentContent('');
    }
  };

  return (
    <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-white/20 p-6 mb-4 hover:shadow-xl transition-all duration-300">
      {/* Header */}
      <div className="flex items-start space-x-3 mb-4">
        <img
          src={post.author.avatar}
          alt={post.author.name}
          className="w-12 h-12 rounded-full ring-2 ring-white shadow-md"
        />
        
        <div className="flex-1">
          <div className="flex items-center space-x-2">
            <h3 className="font-bold text-gray-900">{post.author.name}</h3>
            <span className="text-gray-500">@{post.author.username}</span>
            <span className="text-gray-400">·</span>
            <span className="text-gray-500 text-sm">{formatTimeAgo(post.createdAt)}</span>
          </div>
        </div>
        
        <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-all duration-200">
          <MoreHorizontal size={20} />
        </button>
      </div>

      {/* Content */}
      <div className="mb-4">
        <p className="text-gray-800 text-lg leading-relaxed whitespace-pre-wrap">
          {post.content}
        </p>
      </div>

      {/* Actions */}
      <div className="flex items-center space-x-6 py-2 border-t border-gray-100">
        <button
          onClick={() => setShowComments(!showComments)}
          className="flex items-center space-x-2 text-gray-500 hover:text-blue-500 transition-colors duration-200 group"
        >
          <div className="p-2 rounded-full group-hover:bg-blue-50 transition-colors duration-200">
            <MessageCircle size={18} />
          </div>
          <span className="text-sm font-medium">{post.comments.length}</span>
        </button>

        <button
          onClick={() => onLike(post.id)}
          className={`flex items-center space-x-2 transition-colors duration-200 group ${
            post.likedByUser ? 'text-red-500' : 'text-gray-500 hover:text-red-500'
          }`}
        >
          <div className="p-2 rounded-full group-hover:bg-red-50 transition-colors duration-200">
            <Heart size={18} fill={post.likedByUser ? 'currentColor' : 'none'} />
          </div>
          <span className="text-sm font-medium">{post.likes}</span>
        </button>

        <button className="flex items-center space-x-2 text-gray-500 hover:text-green-500 transition-colors duration-200 group">
          <div className="p-2 rounded-full group-hover:bg-green-50 transition-colors duration-200">
            <Share size={18} />
          </div>
        </button>
      </div>

      {/* Comments Section */}
      {showComments && (
        <div className="mt-4 pt-4 border-t border-gray-100">
          {/* Comment Form */}
          <form onSubmit={handleCommentSubmit} className="mb-4">
            <div className="flex space-x-3">
              <img
                src={currentUser.avatar}
                alt={currentUser.name}
                className="w-8 h-8 rounded-full"
              />
              <div className="flex-1">
                <input
                  type="text"
                  value={commentContent}
                  onChange={(e) => setCommentContent(e.target.value)}
                  placeholder="Ajouter un commentaire..."
                  className="w-full p-2 bg-gray-50 rounded-full border-0 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                />
              </div>
            </div>
          </form>

          {/* Comments List */}
          <div className="space-y-3">
            {post.comments.map((comment) => (
              <div key={comment.id} className="flex space-x-3">
                <img
                  src={comment.author.avatar}
                  alt={comment.author.name}
                  className="w-8 h-8 rounded-full"
                />
                <div className="flex-1 bg-gray-50 rounded-2xl px-4 py-2">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="font-medium text-sm text-gray-900">{comment.author.name}</span>
                    <span className="text-xs text-gray-500">{formatTimeAgo(comment.createdAt)}</span>
                  </div>
                  <p className="text-gray-800 text-sm">{comment.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PostCard;