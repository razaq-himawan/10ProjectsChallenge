import Link from 'next/link';
import { Navigation } from './navigation';

export const Navbar = () => {
  return (
    <div className="h-20 flex justify-between items-center">
      <Link
        href="/"
        className="text-3xl font-bold"
      >
        Rojak
      </Link>
      <Navigation />
    </div>
  );
};
