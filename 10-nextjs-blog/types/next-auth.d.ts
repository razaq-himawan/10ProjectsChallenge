import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      isAdmin: boolean;
    };
  }

  interface User {
    id: string;
    username?: string;
    email?: string;
    img?: string;
    isAdmin: boolean;
  }
}
