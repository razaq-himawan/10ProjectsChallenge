import { PostUser } from '@/components/postUser';
import { getPost } from '@/lib/data';
import { PostType } from '@/lib/types';
import Image from 'next/image';
import { Suspense } from 'react';

interface BlogPostProps {
  params: {
    slug: string;
  };
}

// Fetch Data With An API
const getData = async (slug: string): Promise<PostType> => {
  const res = await fetch(`http://localhost:3000/api/blog/${slug}`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error('Something went wrong');
  }

  return res.json();
};

export const generateMetadata = async ({ params }: BlogPostProps) => {
  const { slug } = params;

  const post = await getPost(slug);

  return {
    title: post?.title,
    description: post?.desc,
  };
};

const SinglePostPage = async ({ params }: BlogPostProps) => {
  const { slug } = params;

  // Fetch Data With An API
  const post = await getData(slug);

  // Fetch Data Without An API
  // const post = await getPost(slug);
  return (
    <div className="flex gap-24">
      {post?.img && (
        <div className="flex-1 relative h-[calc(100vh_-_160px)] max-md:hidden">
          <Image
            src={post.img}
            alt=""
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="flex-[2] flex flex-col gap-12">
        <h1 className="text-6xl font-bold">{post?.title}</h1>
        {post && (
          <div className="flex gap-3">
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={post?.userId} />
            </Suspense>
            <div className="flex flex-col gap-1">
              <span className="text-gray-500 font-bold">Published</span>
              <span className="font-medium">
                {post?.createdAt.toString().split('T')[0]}
              </span>
            </div>
          </div>
        )}
        <div className="text-xl">{post?.desc}</div>
      </div>
    </div>
  );
};
export default SinglePostPage;
