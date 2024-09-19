'use client';

import { login } from '@/lib/actions';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useFormState } from 'react-dom';

export const LoginForm = () => {
  const [state, formAction] = useFormState(login, undefined);
  const router = useRouter();

  useEffect(() => {
    state?.success && router.push('/login');
  }, [state?.success, router]);

  return (
    <form
      className="flex flex-col text-center gap-7"
      action={formAction}
    >
      <input
        className="p-5 bg-dark text-white rounded-md"
        type="text"
        placeholder="username"
        name="username"
      />
      <input
        className="p-5 bg-dark text-white rounded-md"
        type="password"
        placeholder="password"
        name="password"
      />
      <button className="p-5 bg-primary text-white font-bold rounded-md">
        Login
      </button>
      {state?.error}
      <Link href="/register">
        {"Don't have an account?"} <b>Register</b>
      </Link>
    </form>
  );
};
