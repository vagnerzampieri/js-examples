import React from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

export default function Profile() {
  const navigate = useNavigate();

  return (
    <>
      <h1>
        Profile
        <button onClick={() => navigate("/")}>Dashboard</button>
      </h1>

      <Outlet />
    </>
  );
}
