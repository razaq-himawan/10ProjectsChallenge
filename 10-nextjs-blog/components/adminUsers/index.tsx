import { deleteUser } from '@/lib/actions';
import { getUsers } from '@/lib/data';
import Image from 'next/image';

export const AdminUsers = async () => {
  const users = await getUsers();

  return (
    <div className="flex flex-col gap-5 my-5">
      <h1 className="font-bold text-xl">Users</h1>
      {users.map((user) => (
        <div
          className="mx-2.5 flex items-center justify-between gap-5"
          key={user.id}
        >
          <div className="flex items-center gap-5">
            <Image
              className="object-cover rounded-full"
              src={user.img || '/noavatar.png'}
              alt=""
              width={50}
              height={50}
            />
            <span>{user.username}</span>
          </div>

          {/* <form action={() => deletePostWithId(user.id)}> */}
          <form action={deleteUser}>
            <input
              type="hidden"
              name="id"
              value={user.id}
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
