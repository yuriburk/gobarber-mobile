import React from 'react';
import { ActivityIndicator } from 'react-native';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';
import { useAuth } from '../hooks/auth';

const Routes: React.FC = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <ActivityIndicator style={{ flex: 1 }} size="large" color="#ff9000" />
    );
  }

  return user ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
