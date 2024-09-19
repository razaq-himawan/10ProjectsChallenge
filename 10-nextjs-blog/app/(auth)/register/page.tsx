import { RegisterForm } from '@/components/registerform';

const RegisterPage = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-[500px] bg-bgsoft p-12 flex flex-col text-center gap-7 rounded-md">
        <RegisterForm />
      </div>
    </div>
  );
};
export default RegisterPage;
