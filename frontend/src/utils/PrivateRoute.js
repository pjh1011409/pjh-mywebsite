import { Route, Routes, Navigate } from 'react-router-dom';
import React, { useContext } from 'react';
import AuthContext from 'context/AuthContext';

function PrivateRoute({ children }) {
  const { user } = useContext(AuthContext);

  return !user ? <Navigate to="/login" /> : children;
}

export default PrivateRoute;
