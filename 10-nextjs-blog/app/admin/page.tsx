import { AdminPostForm } from '@/components/adminPostForm';
import { AdminPosts } from '@/components/adminPosts';
import { AdminUserForm } from '@/components/adminUserForm';
import { AdminUsers } from '@/components/adminUsers';
import { auth } from '@/lib/auth';
import { Suspense } from 'react';

const AdminPage = async () => {
  const session = await auth();
  return (
    <div className="mt-12 flex flex-col gap-24">
      <div className="flex gap-24 max-md:flex-col">
        <div className="flex-1">
          <Suspense fallback={<div>Loading...</div>}>
            <AdminPosts />
          </Suspense>
        </div>
        <div className="flex-1">
          <AdminPostForm userId={session?.user.id || ''} />
        </div>
      </div>

      <div className="flex gap-24 max-md:flex-col">
        <div className="flex-1">
          <Suspense fallback={<div>Loading...</div>}>
            <AdminUsers />
          </Suspense>
        </div>
        <div className="flex-1">
          <AdminUserForm />
        </div>
      </div>
    </div>
  );
};
export default AdminPage;
