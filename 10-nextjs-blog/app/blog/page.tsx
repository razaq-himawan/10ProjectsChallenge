import { PostCard } from '@/components/postCard';
import { getPosts } from '@/lib/data';
import { PostType } from '@/lib/types';

// Fetch Data With An API
const getData = async (): Promise<PostType[]> => {
  const res = await fetch('http://localhost:3000/api/blog', {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error('Something went wrong');
  }

  return res.json();
};

const BlogPage = async () => {
  // Fetch Data With An API
  const posts = await getData();

  // Fetch Data Without An API
  // const posts = await getPosts();

  return (
    <div className="flex flex-wrap gap-8">
      {posts.map((post) => (
        <div
          className="w-[30%] max-md:w-full"
          key={post._id}
        >
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};
export default BlogPage;
