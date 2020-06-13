import React from 'react';
import { Link, Routes, Route } from 'react-router-dom'

import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />} >
        <Route path="/purchases" element={<h2>Purchases</h2>} />
        <Route path="/password" element={(
          <>
            <h2>Change Password</h2>
            <Link to="/">Dashboard</Link>
          </>
        )} />
      </Route>

      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  );
}
