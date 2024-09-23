import { deletePost } from '@/lib/actions';
import { getPosts } from '@/lib/data';
import Image from 'next/image';

export const AdminPosts = async () => {
  const posts = await getPosts();

  // const deletePostWithId = async (id: string) => {
  //   'use server';
  //   return deletePost.bind(null, id);
  // };

  return (
    <div className="flex flex-col gap-5 my-5">
      <h1 className="font-bold text-xl">Posts</h1>
      {posts.map((post) => (
        <div
          className="mx-2.5 flex items-center justify-between gap-5"
          key={post.id}
        >
          <div className="flex items-center gap-5">
            <Image
              className="object-cover rounded-full"
              src={post.img || '/noavatar.png'}
              alt=""
              width={50}
              height={50}
            />
            <span>{post.title}</span>
          </div>

          {/* <form action={() => deletePostWithId(post.id)}> */}
          <form action={deletePost}>
            <input
              type="hidden"
              name="id"
              value={post.id}
            />
            <button className="p-1 bg-[rgba(220,20,60,0.593)] text-white rounded-md">
              Delete
            </button>
          </form>
        </div>
      ))}
    </div>
  );
};
