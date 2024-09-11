export interface PostType {
  _id: string;
  userId: string;
  title: string;
  desc: string;
  slug: string;
  img?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserType {
  _id: string;
  username: string;
  email: string;
  password: string;
  img?: string;
  isAdmin: boolean;
  createdAt: Date;
  updatedAt: Date;
}
