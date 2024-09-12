import { PostType } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';

interface PostCardProps {
  post: PostType;
}

export const PostCard = ({ post }: PostCardProps) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex">
        {post.img && (
          <div className="w-[90%] h-[400px] relative">
            <Image
              src={post.img}
              alt=""
              fill
              className="object-cover"
            />
          </div>
        )}
        <span className="text-xs -rotate-90 m-auto">
          {post.createdAt.toString().split('T')[0]}
        </span>
      </div>
      <div className="">
        <h3 className="w-[90%] text-2xl mb-5 font-bold">{post.title}</h3>
        <p className="w-[90%] mb-5 font-light text-gray-400">{post.desc}</p>
        <Link
          href={`/blog/${post.slug}`}
          className="underline"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};
