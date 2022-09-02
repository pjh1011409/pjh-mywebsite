import React, { createContext, useState, useEffect, useMemo } from 'react';
import jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export default AuthContext;

export function AuthProvider({ children }) {
  const [authTokens, setAuthTokens] = useState(() =>
    // 최신 토큰 확인 가능
    localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null,
  );
  const [user, setUser] = useState(() =>
    localStorage.getItem('authTokens') ? jwtDecode(localStorage.getItem('authTokens')) : null,
  );
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const loginUser = async e => {
    e.preventDefault();
    const response = await fetch('http://127.0.0.1:8000/api/token/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // 실시간으로 입력한 아이디, 비번을 JSON형식으로 담는다.
      body: JSON.stringify({
        username: e.target.username.value,
        password: e.target.password.value,
      }),
    });
    const data = await response.json();

    if (response.status === 200) {
      setAuthTokens(data);
      setUser(jwtDecode(data.access));
      localStorage.setItem('authTokens', JSON.stringify(data));
      navigate('/');
    } else {
      // eslint-disable-next-line no-alert
      alert('Please enter your correct ID or password');
    }
  };

  const logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem('authTokens');
    navigate('/login');
  };

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const contextData = {
    user,
    authTokens,
    setAuthTokens,
    setUser,
    loginUser,
    logoutUser,
  };

  useEffect(() => {
    if (authTokens) {
      setUser(jwtDecode(authTokens.access));
    }
    setLoading(false);
  }, [authTokens, loading]);
  return <AuthContext.Provider value={contextData}>{loading ? null : children}</AuthContext.Provider>;
}
