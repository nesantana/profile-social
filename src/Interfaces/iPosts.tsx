export interface iPost {
  id: number;
  title: string;
  body: string;
  userId: number;
  image?: string;
  comments: iComment[];
}

export interface iComment {
  id: number;
  body: string;
  postId: number;
  name: string;
  email: string;
}
