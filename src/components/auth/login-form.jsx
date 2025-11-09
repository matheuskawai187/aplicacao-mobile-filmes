import { useState } from 'react';
import { ErrorMessage } from './error-message';
import { Button } from '../common/button';

export const LoginForm = ({ onLogin, onSignup, error }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [validationError, setValidationError] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setValidationError('');

    console.log('Validando:', formData);

    // Validação manual
    if (!formData.email.trim()) {
      setValidationError('Por favor, insira um email');
      return;
    }

    if (!validateEmail(formData.email)) {
      setValidationError('Por favor, insira um email válido (exemplo: usuario@email.com)');
      return;
    }

    if (!formData.password) {
      setValidationError('Por favor, insira uma senha');
      return;
    }

    if (formData.password.length < 6) {
      setValidationError('A senha deve ter no mínimo 6 caracteres');
      return;
    }

    onLogin(formData);
  };

  const handleSignup = () => {
    setValidationError('');

    if (!formData.email.trim()) {
      setValidationError('Por favor, insira um email');
      return;
    }

    if (!validateEmail(formData.email)) {
      setValidationError('Por favor, insira um email válido (exemplo: usuario@email.com)');
      return;
    }

    if (!formData.password) {
      setValidationError('Por favor, insira uma senha');
      return;
    }

    if (formData.password.length < 6) {
      setValidationError('A senha deve ter no mínimo 6 caracteres');
      return;
    }

    onSignup(formData);
  };

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
    if (validationError) {
      setValidationError('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div>
        <label htmlFor="email-input" className="text-white text-sm mb-2 block">Email</label>
        <input
          id="email-input"
          name="email"
          type="text"
          placeholder="seu@email.com"
          value={formData.email}
          onChange={handleChange('email')}
          className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>

      <div>
        <label htmlFor="password-input" className="text-white text-sm mb-2 block">Senha</label>
        <input
          id="password-input"
          name="password"
          type="password"
          placeholder="Digite sua senha"
          value={formData.password}
          onChange={handleChange('password')}
          className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>

      {validationError && <ErrorMessage message={validationError} />}
      <ErrorMessage message={error} />

      <Button type="submit" className="w-full">
        Entrar
      </Button>

      <div className="text-center text-sm">
        <span className="text-gray-400">Não tem uma conta? </span>
        <button
          type="button"
          onClick={handleSignup}
          className="text-red-500 hover:text-red-400 font-semibold"
        >
          Cadastre-se
        </button>
      </div>
    </form>
  );
};