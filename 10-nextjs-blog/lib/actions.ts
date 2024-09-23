'use server';

import { revalidatePath } from 'next/cache';
import { Post, User } from './models';
import { connectToDb } from './utils';
import { signIn, signOut } from './auth';
import bcrypt from 'bcryptjs';

interface ErrorState {
  error: string;
  success?: undefined;
}

interface SuccessState {
  success: boolean;
  error?: undefined;
}

type FormState = ErrorState | SuccessState | undefined;

export const addPost = async (_prevState: FormState, formData: FormData) => {
  const { title, desc, slug, userId } = Object.fromEntries(formData);

  try {
    connectToDb();
    const newPost = new Post({
      title,
      desc,
      slug,
      userId,
    });

    await newPost.save();
    console.log('Saved to db');
    revalidatePath('/blog');
    revalidatePath('/admin');
  } catch (err) {
    console.error(err);
    return {
      error: 'Something went wrong!',
    };
  }
};

export const deletePost = async (formData: FormData) => {
  const id = formData.get('id');
  try {
    connectToDb();
    await Post.findByIdAndDelete(id);

    revalidatePath('/blog');
    revalidatePath('/admin');
  } catch (err) {
    console.error(err);
    return {
      error: 'Something went wrong!',
    };
  }
};

export const addUser = async (_prevState: FormState, formData: FormData) => {
  const { username, email, password, img } = Object.fromEntries(formData);

  try {
    connectToDb();
    const newUser = new User({ username, email, password, img });

    await newUser.save();
    console.log('Saved to db');
    revalidatePath('/admin');
  } catch (err) {
    console.error(err);
    return {
      error: 'Something went wrong!',
    };
  }
};

export const deleteUser = async (formData: FormData) => {
  const id = formData.get('id');
  try {
    connectToDb();

    await Post.deleteMany({ userId: id });
    await User.findByIdAndDelete(id);

    revalidatePath('/admin');
  } catch (err) {
    console.error(err);
    return {
      error: 'Something went wrong!',
    };
  }
};

export const handleGithubLogin = async () => {
  await signIn('github');
};

export const handleLogout = async () => {
  await signOut();
};

export const register = async (_prevState: FormState, formData: FormData) => {
  const { username, email, img, password, passwordRepeat } =
    Object.fromEntries(formData);

  if (password !== passwordRepeat) {
    return { error: 'Password do not match' };
  }

  try {
    connectToDb();

    const user = await User.findOne({ username });

    if (user) {
      return { error: 'User already exists' };
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password.toString(), salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img,
    });

    await newUser.save();
    return { success: true };
  } catch (err) {
    console.error(err);
    return { error: 'Something went wrong!' };
  }
};

export const login = async (_prevState: FormState, formData: FormData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn('credentials', {
      username,
      password,
    });
    return { success: true };
  } catch (err: unknown) {
    console.error(err);

    const errorMsg = (err as Error).message || '';

    if (errorMsg.includes('CredentialsSignin')) {
      return { error: 'Invalid username or password' };
    }

    throw err;
  }
};
