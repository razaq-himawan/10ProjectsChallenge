'use server';

import { revalidatePath } from 'next/cache';
import { Post } from './models';
import { connectToDb } from './utils';

export const addPost = async (formData: FormData) => {
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

    console.log('Deleted from db');
    revalidatePath('/blog');
  } catch (err) {
    console.error(err);
    return {
      error: 'Something went wrong!',
    };
  }
};
