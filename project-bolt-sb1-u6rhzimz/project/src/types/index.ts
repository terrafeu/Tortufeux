export interface User {
  id: string;
  name: string;
  username: string;
  avatar: string;
}

export interface Post {
  id: string;
  content: string;
  author: User;
  createdAt: Date;
  likes: number;
  likedByUser: boolean;
  comments: Comment[];
}

export interface Comment {
  id: string;
  content: string;
  author: User;
  createdAt: Date;
}

export type Tab = 'vida-loca' | 'profile';