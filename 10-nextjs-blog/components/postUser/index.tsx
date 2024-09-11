import { getUser } from '@/lib/data';
import Image from 'next/image';

interface PostUserProps {
  userId: string;
}

// Fetch Data With An API
// const getData = async (userId: number): Promise<User> => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${userId}`,
//     {
//       next: { revalidate: 3600 },
//     }
//   );

//   if (!res.ok) {
//     throw new Error('Something went wrong');
//   }

//   return res.json();
// };

export const PostUser = async ({ userId }: PostUserProps) => {
  // Fetch Data With An API
  // const user = await getData(userId);

  // Fetch Data Without An API
  const user = await getUser(userId);

  return (
    <div className="flex items-center gap-1">
      <Image
        src={user?.img || '/noavatar.png'}
        alt=""
        width={52}
        height={52}
        className="object-cover rounded-full p-1"
      />
      <div className="flex flex-col gap-1">
        <span className="text-gray-500 font-bold">Author</span>
        <span className="font-medium">{user?.username}</span>
      </div>
    </div>
  );
};
