"use client"

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'

const Dashboard = () => {
  const router = useRouter();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem('user'));

    if (!user) {
      router.push('/');
    } else {
      setUserData(user);
    }
  }, [router]);

  const handleLogout = () => {
    sessionStorage.removeItem('user');
    router.push('/');
  };

  return (
    <div>
      <h1>Dashboard</h1>
      {userData && (
        <div>
          <p>Welcome to the dashboard, {userData.username}!</p>
          <p>User ID: {userData.id}</p>
        </div>
      )}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
