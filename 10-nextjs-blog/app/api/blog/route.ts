import { Post } from '@/lib/models';
import { connectToDb } from '@/lib/utils';
import { type NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest) => {
  try {
    connectToDb();
    const posts = await Post.find();
    return NextResponse.json(posts);
  } catch (err) {
    console.error(err);
    throw new Error('Failed to fetch posts!');
  }
};
