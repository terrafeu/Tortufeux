import React, { useState, useEffect } from 'react';
import FluidBackground from './components/FluidBackground';
import Navigation from './components/Navigation';
import PostComposer from './components/PostComposer';
import PostCard from './components/PostCard';
import ProfileTab from './components/ProfileTab';
import { Tab, User, Post } from './types';
import { defaultUser } from './utils/data';

function App() {
  const [activeTab, setActiveTab] = useState<Tab>('vida-loca');
  const [user, setUser] = useState<User>(defaultUser);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('posts');
    if (stored) {
      const parsed: Post[] = JSON.parse(stored);
      const postsWithDates = parsed.map(post => ({
        ...post,
        createdAt: new Date(post.createdAt),
        comments: post.comments.map(comment => ({
          ...comment,
          createdAt: new Date(comment.createdAt),
        })),
      }));
      setPosts(postsWithDates);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts));
  }, [posts]);

  const handlePost = (content: string) => {
    const newPost: Post = {
      id: Date.now().toString(),
      content,
      author: user,
      createdAt: new Date(),
      likes: 0,
      likedByUser: false,
      comments: [],
    };

    setPosts(prevPosts => [newPost, ...prevPosts]);
  };

  const handleLike = (postId: string) => {
    setPosts(prevPosts =>
      prevPosts.map(post => {
        if (post.id === postId) {
          const isLiked = post.likedByUser;
          return {
            ...post,
            likedByUser: !isLiked,
            likes: isLiked ? post.likes - 1 : post.likes + 1,
          };
        }
        return post;
      })
    );
  };

  const handleComment = (postId: string, content: string) => {
    setPosts(prevPosts =>
      prevPosts.map(post => {
        if (post.id === postId) {
          const newComment = {
            id: Date.now().toString(),
            content,
            author: user,
            createdAt: new Date(),
          };
          return {
            ...post,
            comments: [...post.comments, newComment],
          };
        }
        return post;
      })
    );
  };

  const handleUpdateProfile = (updates: Partial<User>) => {
    setUser(prevUser => ({ ...prevUser, ...updates }));
  };

  return (
    <div className="min-h-screen">
      <FluidBackground />
      
      <div className="relative z-10">
        <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
        
        <main className="max-w-4xl mx-auto px-4 py-8">
          {activeTab === 'vida-loca' ? (
            <div className="max-w-2xl mx-auto">
              <PostComposer user={user} onPost={handlePost} />
              
              <div className="space-y-4">
                {posts.map(post => (
                  <PostCard
                    key={post.id}
                    post={post}
                    currentUser={user}
                    onLike={handleLike}
                    onComment={handleComment}
                  />
                ))}
              </div>
            </div>
          ) : (
            <ProfileTab user={user} onUpdateProfile={handleUpdateProfile} />
          )}
        </main>
      </div>
    </div>
  );
}

export default App;