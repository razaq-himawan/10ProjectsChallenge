import { PostCard } from '@/components/postCard';

const BlogPage = () => {
  return (
    <div className="flex flex-wrap gap-8">
      <div className="w-[30%] max-md:w-full">
        <PostCard />
      </div>
      <div className="w-[30%] max-md:w-full">
        <PostCard />
      </div>
      <div className="w-[30%] max-md:w-full">
        <PostCard />
      </div>
      <div className="w-[30%] max-md:w-full">
        <PostCard />
      </div>
    </div>
  );
};
export default BlogPage;
