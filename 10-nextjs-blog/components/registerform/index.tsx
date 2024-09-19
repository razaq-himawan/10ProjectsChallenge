'use client';

import { register } from '@/lib/actions';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useFormState } from 'react-dom';

export const RegisterForm = () => {
  const [state, formAction] = useFormState(register, undefined);
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
        type="email"
        placeholder="email"
        name="email"
      />
      <input
        className="p-5 bg-dark text-white rounded-md"
        type="password"
        placeholder="password"
        name="password"
      />
      <input
        className="p-5 bg-dark text-white rounded-md"
        type="password"
        placeholder="password again"
        name="passwordRepeat"
      />
      <button className="p-5 bg-primary text-white font-bold rounded-md">
        Register
      </button>
      {state?.error}
      <Link href="/login">
        Have an account? <b>Login</b>
      </Link>
    </form>
  );
};
