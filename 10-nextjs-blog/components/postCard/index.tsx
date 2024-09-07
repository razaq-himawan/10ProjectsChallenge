import Image from 'next/image';
import Link from 'next/link';

export const PostCard = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex">
        <div className="w-[90%] h-[400px] relative">
          <Image
            src="https://images.pexels.com/photos/27947208/pexels-photo-27947208/free-photo-of-vietcombank-tower.jpeg"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <span className="text-xs -rotate-90 m-auto">10.09.2024</span>
      </div>
      <div className="">
        <h3 className="w-[90%] text-2xl mb-5 font-bold">Title</h3>
        <p className="w-[90%] mb-5 font-light text-gray-400">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate ut
          dolor reiciendis, consectetur voluptatibus expedita nobis pariatur quo
          nulla, saepe voluptas modi iste veniam officia consequatur neque
          ratione accusantium provident!
        </p>
        <Link
          href="/blog/post"
          className="underline"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};
