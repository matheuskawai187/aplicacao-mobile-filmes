export const authService = {
  getUsers: () => {
    return JSON.parse(localStorage.getItem('movieAppUsers') || '[]');
  },

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

  getLastLoggedUser: () => {
    return localStorage.getItem('lastLoggedUser');
  },

  setLastLoggedUser: (email) => {
    localStorage.setItem('lastLoggedUser', email);
  },

  clearLastLoggedUser: () => {
    localStorage.removeItem('lastLoggedUser');
  },
};