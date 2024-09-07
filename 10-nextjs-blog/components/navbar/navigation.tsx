'use client';

import { useState } from 'react';
import { NavLink } from './nav-link';
import Image from 'next/image';

const navigations = [
  { title: 'Homepage', path: '/' },
  { title: 'About', path: '/about' },
  { title: 'Contact', path: '/contact' },
  { title: 'Blog', path: '/blog' },
];

export const Navigation = () => {
  const [open, setOpen] = useState(false);

  // Temporary
  const session = true;
  const isAdmin = true;

  return (
    <div>
      <div className="h-20 flex justify-between items-center gap-2.5 max-md:hidden">
        {navigations.map((navItem) => (
          <NavLink
            key={navItem.path}
            item={navItem}
          />
        ))}
        {isAdmin && <NavLink item={{ title: 'Admin', path: '/admin' }} />}
        {session && (
          <button className="p-2.5 font-bold bg-white text-dark rounded-md">
            Logout
          </button>
        )}
        {!session && <NavLink item={{ title: 'Login', path: '/login' }} />}
      </div>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="md:hidden"
      >
        <Image
          src="/menu.png"
          alt=""
          width={32}
          height={32}
        />
      </button>
      {open && (
        <div className="absolute top-20 right-0 w-1/2 h-[calc(100vh_-_80px)] z-10 bg-dark flex flex-col items-center justify-center gap-2.5 md:hidden">
          {navigations.map((navItem) => (
            <NavLink
              key={navItem.path}
              item={navItem}
            />
          ))}
        </div>
      )}
    </div>
  );
};
