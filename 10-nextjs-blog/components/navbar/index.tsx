import Link from 'next/link';
import { Navigation } from './navigation';
import { auth } from '@/lib/auth';

export const Navbar = async () => {
  const session = await auth();
  return (
    <div className="h-20 flex justify-between items-center">
      <Link
        href="/"
        className="text-3xl font-bold"
      >
        Rojak
      </Link>
      <Navigation session={session} />
    </div>
  );
};
