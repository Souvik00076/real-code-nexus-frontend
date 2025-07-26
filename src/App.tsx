import type { FC } from 'react';
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { route } from './constants/routes';
import { AuthProvider } from './contexts/AuthContext';

export const App: FC = () => {
  const router = createBrowserRouter(route);
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};

export default App
