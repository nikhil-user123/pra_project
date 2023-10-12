"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation'
import users from '@/app/data';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    const user = users.find((u) => u.username === username && u.password === password);

    if (user) {
      sessionStorage.setItem('user', JSON.stringify(user));
      router.push('/dashboard');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginForm;
