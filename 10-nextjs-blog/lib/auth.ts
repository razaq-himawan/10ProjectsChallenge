import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';
import { connectToDb } from './utils';
import { User } from './models';
import credentials from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import { authConfig } from './auth.config';

interface LoginUserType {
  id: string;
  username: string;
  email: string;
  isAdmin: boolean;
}

interface Credentials {
  username: string;
  password: string;
}

const login = async (
  credentials: Credentials
): Promise<LoginUserType | null> => {
  try {
    connectToDb();
    const user = await User.findOne({ username: credentials.username });
    if (!user) {
      throw new Error('Wrong credentials!');
    }

    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      user.password
    );

    if (!isPasswordCorrect) {
      throw new Error('Wrong credentials!');
    }

    const plainUser: LoginUserType = {
      id: user._id.toString(),
      username: user.username,
      email: user.email,
      isAdmin: user.isAdmin,
    };

    return plainUser;
  } catch (err) {
    console.error(err);
    throw new Error('Failed to login!');
  }
};

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    credentials({
      async authorize(credentials: Partial<Credentials> | undefined) {
        try {
          const user = await login(credentials as Credentials);
          return user;
        } catch (err) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account?.provider === 'github') {
        connectToDb();
        try {
          const user = await User.findOne({ email: profile?.email });
          if (!user) {
            const newUser = new User({
              username: profile?.login,
              email: profile?.email,
              image: profile?.avatar_url,
            });

            await newUser.save();
          }
        } catch (err) {
          console.error(err);
          return false;
        }
      }
      return true;
    },
    ...authConfig.callbacks,
  },
});
