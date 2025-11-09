import { Logo } from '../components/common/logo';
import { LoginForm } from '../components/auth/login-form';

export const LoginScreen = ({ onLogin, onSignup, error }) => {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-start px-6 pt-16">
      <div className="w-full max-w-md">
        <div className="mb-12">
          <Logo />
        </div>

        <h1 className="text-white text-3xl font-bold text-center mb-10">
          Bem-vindo
        </h1>

        <LoginForm
          onLogin={onLogin}
          onSignup={onSignup}
          error={error}
        />
      </div>
    </div>
  );
};