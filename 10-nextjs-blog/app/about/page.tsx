import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Page',
  description: 'About description',
};

const AboutPage = () => {
  return (
    <div className="flex gap-24 my-4">
      <div className="flex-1 flex flex-col gap-12">
        <h2 className="text-primary font-bold text-xl">About Agency</h2>
        <h1 className="text-5xl font-bold">
          We create digital ideas that are bigger, bolder, braver, and better.
        </h1>
        <p className="text-xl font-light">
          We create digital ideas that are bigger, bolder, braver, and better.
          We believe in good ideas flexibility and precision. We are world's Our
          Special Team best consulting & finance solution provider. Wide range
          of web and software development services.
        </p>
        <div className="flex items-center justify-between max-md:flex-col max-md:gap-12 max-md:text-center">
          <div className="flex flex-col gap-2.5">
            <h3 className="text-primary text-4xl font-bold">10 K+</h3>
            <p>Year of experience</p>
          </div>
          <div className="flex flex-col gap-2.5">
            <h3 className="text-primary text-4xl font-bold">234 K+</h3>
            <p>People reached</p>
          </div>
          <div className="flex flex-col gap-2.5">
            <h3 className="text-primary text-4xl font-bold">5 K+</h3>
            <p>Services and plugins</p>
          </div>
        </div>
      </div>
      <div className="relative flex-1 max-md:hidden">
        <Image
          src="/about.png"
          alt="About"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
};
export default AboutPage;
