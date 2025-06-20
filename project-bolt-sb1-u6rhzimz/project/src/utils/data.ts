import { User, Post, Comment } from '../types';

export const defaultUser: User = {
  id: '1',
  name: 'Maria Santos',
  username: 'maria_vida',
  avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400',
};

export const sampleUsers: User[] = [
  {
    id: '2',
    name: 'Carlos Rodriguez',
    username: 'carlos_loco',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: '3',  
    name: 'Luna Garcia',
    username: 'luna_dreams',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: '4',
    name: 'Diego Martinez',
    username: 'diego_libre',
    avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
];

export const generateSamplePosts = (): Post[] => {
  const posts: Post[] = [
    {
      id: '1',
      content: 'La vida loca commence aujourd\'hui ! ☀️ Prêt à vivre chaque moment avec passion et authenticité. Parfois il faut sortir de sa zone de confort pour découvrir qui on est vraiment.',
      author: sampleUsers[0],
      createdAt: new Date(Date.now() - 1000 * 60 * 15), // 15 minutes ago
      likes: 23,
      likedByUser: false,
      comments: [
        {
          id: 'c1',
          content: 'Tellement vrai ! L\'authenticité c\'est la clé 🔑',
          author: sampleUsers[1],
          createdAt: new Date(Date.now() - 1000 * 60 * 10),
        },
      ],
    },
    {
      id: '2',
      content: 'Nouveau projet créatif en cours... La créativité naît souvent du chaos le plus total. Parfois les meilleures idées arrivent quand on s\'y attend le moins, dans ces moments de pure spontanéité.',
      author: sampleUsers[1],
      createdAt: new Date(Date.now() - 1000 * 60 * 45), // 45 minutes ago
      likes: 12,
      likedByUser: true,
      comments: [],
    },
    {
      id: '3',
      content: 'Méditation matinale terminée 🧘‍♀️ Il n\'y a rien de plus puissant que ces moments de silence intérieur. C\'est là qu\'on trouve les réponses aux questions qu\'on n\'osait même pas se poser.',
      author: sampleUsers[2],
      createdAt: new Date(Date.now() - 1000 * 60 * 120), // 2 hours ago
      likes: 34,
      likedByUser: false,
      comments: [
        {
          id: 'c2',
          content: 'J\'adore ces moments de paix ! 🕯️',
          author: defaultUser,
          createdAt: new Date(Date.now() - 1000 * 60 * 90),
        },
        {
          id: 'c3',
          content: 'Tu as raison, la méditation change tout',
          author: sampleUsers[3],
          createdAt: new Date(Date.now() - 1000 * 60 * 80),
        },
      ],
    },
  ];

  return posts;
};