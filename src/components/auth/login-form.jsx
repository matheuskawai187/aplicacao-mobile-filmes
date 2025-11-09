import { useState } from 'react';
import { ErrorMessage } from './error-message';
import { Button } from '../common/button';

export const LoginForm = ({ onLogin, onSignup, error }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(formData);
  };

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="text-white text-sm mb-2 block">Email</label>
        <input
          type="email"
          placeholder="seu@email.com"
          value={formData.email}
          onChange={handleChange('email')}
          className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>

      <div>
        <label className="text-white text-sm mb-2 block">Senha</label>
        <input
          type="password"
          placeholder="Digite sua senha"
          value={formData.password}
          onChange={handleChange('password')}
          className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>

      <ErrorMessage message={error} />

      <Button type="submit" className="w-full">
        Entrar
      </Button>

      <div className="text-center text-sm">
        <span className="text-gray-400">Não tem uma conta? </span>
        <button
          type="button"
          onClick={() => onSignup(formData)}
          className="text-red-500 hover:text-red-400 font-semibold"
        >
          Cadastre-se
        </button>
      </div>
    </form>
  );
};
