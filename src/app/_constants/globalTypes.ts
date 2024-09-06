export interface Comment {
  id: string;
  createdAt: Date;
  content: string;
  userId: string;
  postId: string;
  username: string;
  userImage: string;
  replies: unknown[];
}

export interface User {
  id: string;
  name: string | null;
  email: string | null;
  emailVerified: Date | null;
  image: string | null;
}