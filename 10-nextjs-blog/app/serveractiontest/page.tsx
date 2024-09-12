import { addPost, deletePost } from '@/lib/actions';

const ServerActionTestPage = () => {
  return (
    <div className="text-black">
      <form action={addPost}>
        <input
          type="text"
          name="title"
          placeholder="title"
        />
        <input
          type="text"
          name="desc"
          placeholder="desc"
        />
        <input
          type="text"
          name="slug"
          placeholder="slug"
        />
        <input
          type="text"
          name="userId"
          placeholder="userId"
        />
        <button className="bg-blue-400">Create</button>
      </form>

      <form action={deletePost}>
        <input
          type="text"
          name="id"
          placeholder="id"
        />
        <button className="bg-blue-400">Delete</button>
      </form>
    </div>
  );
};
export default ServerActionTestPage;
