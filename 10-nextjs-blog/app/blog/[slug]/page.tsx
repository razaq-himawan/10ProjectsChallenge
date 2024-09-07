import Image from 'next/image';

const SinglePostPage = () => {
  return (
    <div className="flex gap-24">
      <div className="flex-1 relative h-[calc(100vh_-_160px)] max-md:hidden">
        <Image
          src="https://images.pexels.com/photos/27947208/pexels-photo-27947208/free-photo-of-vietcombank-tower.jpeg"
          alt=""
          fill
          className="object-cover"
        />
      </div>
      <div className="flex-[2] flex flex-col gap-12">
        <h1 className="text-6xl font-bold">Title</h1>
        <div className="flex gap-2">
          <Image
            src="/noavatar.png"
            alt=""
            width={52}
            height={52}
            className="object-cover rounded-full p-1"
          />
          <div className="flex flex-col gap-1">
            <span className="text-gray-500 font-bold">Author</span>
            <span className="font-medium">Rojak Himawan</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-gray-500 font-bold">Published</span>
            <span className="font-medium">01.01.2024</span>
          </div>
        </div>
        <div className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
          obcaecati deleniti incidunt excepturi vero, recusandae maxime
          dignissimos officiis perspiciatis totam nihil molestiae tempore veniam
          asperiores nemo sit libero vel debitis?
        </div>
      </div>
    </div>
  );
};
export default SinglePostPage;
