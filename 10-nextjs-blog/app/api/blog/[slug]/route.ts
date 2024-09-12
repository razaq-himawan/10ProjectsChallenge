import { Post } from '@/lib/models';
import { connectToDb } from '@/lib/utils';
import { NextResponse, type NextRequest } from 'next/server';

interface SinglePostParamsAPI {
  params: { slug: string };
}

export const GET = async (
  req: NextRequest,
  { params }: SinglePostParamsAPI
) => {
  const { slug } = params;
  try {
    connectToDb();
    const post = await Post.findOne({ slug });
    return NextResponse.json(post);
  } catch (err) {
    console.error(err);
    throw new Error('Failed to fetch post!');
  }
};

export const DELETE = async (
  req: NextRequest,
  { params }: SinglePostParamsAPI
) => {
  const { slug } = params;
  try {
    connectToDb();
    await Post.findOneAndDelete({ slug });
    return NextResponse.json('Post Deleted');
  } catch (err) {
    console.error(err);
    throw new Error('Failed to fetch post!');
  }
};
