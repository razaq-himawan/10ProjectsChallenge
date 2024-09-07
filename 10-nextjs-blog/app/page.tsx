import Image from 'next/image';

const HomePage = () => {
  return (
    <div className="flex gap-24 max-lg:flex-col">
      <div className="flex-1 flex flex-col gap-12">
        <h1 className="text-8xl font-bold max-md:text-6xl">
          Creative Thoughts Agency.
        </h1>
        <p className="text-xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
          amet nobis ea doloremque magni asperiores.
        </p>
        <div className="flex gap-5">
          <button className="p-3 min-w-28 rounded-md bg-primary text-white">
            Learn More
          </button>
          <button className="p-3 min-w-28 rounded-md bg-white text-dark">
            Contact
          </button>
        </div>
        <div className="relative w-[500px] h-12 grayscale max-md:w-full">
          <Image
            src="/brands.png"
            alt=""
            fill
            className=""
          />
        </div>
      </div>
      <div className="relative flex-1 max-lg:hidden">
        <Image
          src="/hero.gif"
          alt=""
          fill
          className=""
        />
      </div>
    </div>
  );
};
export default HomePage;
