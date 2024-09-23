'use client';

import { addPost } from '@/lib/actions';
import { useFormState } from 'react-dom';

interface AdminPostFormProps {
  userId: string;
}

export const AdminPostForm = ({ userId }: AdminPostFormProps) => {
  const [state, formAction] = useFormState(addPost, undefined);
  return (
    <form
      action={formAction}
      className="flex flex-col gap-5"
    >
      <h1 className="text-xl font-bold">Add New Post</h1>
      <input
        className="p-5 bg-bgsoft rounded-md text-white"
        type="hidden"
        name="userId"
        value={userId}
      />
      <input
        className="p-5 bg-bgsoft rounded-md text-white"
        type="text"
        name="title"
        placeholder="Title"
      />
      <input
        className="p-5 bg-bgsoft rounded-md text-white"
        type="text"
        name="slug"
        placeholder="slug"
      />
      <input
        className="p-5 bg-bgsoft rounded-md text-white"
        type="text"
        name="img"
        placeholder="img"
      />
      <textarea
        className="p-5 bg-bgsoft rounded-md text-white"
        name="desc"
        placeholder="desc"
        rows={10}
      ></textarea>
      <button className="p-5 bg-primary rounded-md text-white font-bold">
        Add
      </button>
      {state && state.error}
    </form>
  );
};
