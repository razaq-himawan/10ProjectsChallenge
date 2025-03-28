import { LoginForm } from '@/components/loginForm';
import { handleGithubLogin } from '@/lib/actions';

const LoginPage = async () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-[500px] bg-bgsoft p-12 flex flex-col text-center gap-7 rounded-md">
        <form action={handleGithubLogin}>
          <button className="w-full p-5 bg-soft text-black">
            Login with Github
          </button>
        </form>
        <LoginForm />
      </div>
    </div>
  );
};
export default LoginPage;
