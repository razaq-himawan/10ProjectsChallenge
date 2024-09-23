'use client';

import { addUser } from '@/lib/actions';
import { useFormState } from 'react-dom';

export const AdminUserForm = () => {
  const [state, formAction] = useFormState(addUser, undefined);
  return (
    <form
      action={formAction}
      className="flex flex-col gap-5"
    >
      <h1 className="text-xl font-bold">Add New Post</h1>
      <input
        className="p-5 bg-bgsoft rounded-md text-white"
        type="text"
        name="username"
        placeholder="username"
      />
      <input
        className="p-5 bg-bgsoft rounded-md text-white"
        type="text"
        name="email"
        placeholder="email"
      />
      <input
        className="p-5 bg-bgsoft rounded-md text-white"
        type="password"
        name="password"
        placeholder="password"
      />
      <input
        className="p-5 bg-bgsoft rounded-md text-white"
        type="text"
        name="img"
        placeholder="img"
      />
      <select
        className="p-5 bg-bgsoft rounded-md text-white"
        name="isAdmin"
      >
        <option value="false">Is Admin?</option>
        <option value="false">No</option>
        <option value="True">Yes</option>
      </select>
      <button className="p-5 bg-primary rounded-md text-white font-bold">
        Add
      </button>
      {state && state.error}
    </form>
  );
};
