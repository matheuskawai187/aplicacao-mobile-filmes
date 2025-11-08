// ========================================
// 📄 src/hooks/use-auth.jsx
// ========================================
import { useState, useEffect } from 'react';

export const useAuth = () => {
  const [userData, setUserData] = useState(null);
  const [loginError, setLoginError] = useState('');

  const authService = {
    getUsers: () => JSON.parse(localStorage.getItem('movieAppUsers') || '[]'),
    saveUser: (user) => {
      const users = authService.getUsers();
      users.push(user);
      localStorage.setItem('movieAppUsers', JSON.stringify(users));
    },
    findUser: (email, password) => {
      const users = authService.getUsers();
      return users.find(u => u.email === email && u.password === password);
    },
    userExists: (email) => {
      const users = authService.getUsers();
      return users.some(u => u.email === email);
    },
  };

  useEffect(() => {
    const lastUser = localStorage.getItem('lastLoggedUser');
    if (lastUser) {
      const user = authService.getUsers().find(u => u.email === lastUser);
      if (user) setUserData(user);
    }
  }, []);

  const login = ({ email, password }) => {
    setLoginError('');
    if (!email || !password) {
      setLoginError('Preencha todos os campos');
      return false;
    }

    const user = authService.findUser(email, password);
    if (user) {
      setUserData(user);
      localStorage.setItem('lastLoggedUser', user.email);
      return true;
    }
    
    setLoginError('Email ou senha incorretos');
    return false;
  };

  const signup = ({ email, password }) => {
    setLoginError('');
    if (!email || !password) {
      setLoginError('Preencha todos os campos');
      return false;
    }

    if (authService.userExists(email)) {
      setLoginError('Email já cadastrado');
      return false;
    }

    const newUser = {
      email,
      password,
      createdAt: new Date().toISOString()
    };

    authService.saveUser(newUser);
    setUserData(newUser);
    localStorage.setItem('lastLoggedUser', newUser.email);
    return true;
  };

  const logout = () => {
    localStorage.removeItem('lastLoggedUser');
    setUserData(null);
  };

  return { userData, loginError, login, signup, logout };
};