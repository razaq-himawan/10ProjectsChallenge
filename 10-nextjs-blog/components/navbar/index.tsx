import { Navigation } from './navigation';

export const Navbar = () => {
  return (
    <div className="h-20 flex justify-between items-center">
      <div className="text-3xl font-bold">Logo</div>
      <Navigation />
    </div>
  );
};
