// ----------------react & hooks-------------------------------------
import { Routes, Route } from 'react-router-dom';
import React from 'react';
// ----------------style & css---------------------------------------
import './App.css';

// ----------------components & data---------------------------------
import { Header, LoginRecordHeader } from 'components/common';
// ------------------authentication(utils & context)---------------------------
import PrivateRoute from 'utils/PrivateRoute';
import { AuthProvider } from 'context/AuthContext';
import LoginPage from './loginPage/loginPage';
import { StudyDetail, StudyWrite, StudyUpdate, StudyMain } from './studyPage';
import MainPage from './mainPage/mainPage';

function App() {
  return (
    <div style={{ margin: '0', width: '100vm', overflowX: 'hidden' }}>
      <Routes>
        <Route
          exact
          path="/studyMain/*"
          element={
            <AuthProvider>
              <PrivateRoute>
                <StudyMain>
                  <Header />
                </StudyMain>
              </PrivateRoute>
            </AuthProvider>
          }
        />

        <Route
          exact
          path="/studyDetail/:id"
          element={
            <AuthProvider>
              <PrivateRoute>
                <StudyDetail />
              </PrivateRoute>
            </AuthProvider>
          }
        />

        <Route
          exact
          path="/"
          element={
            <AuthProvider>
              <MainPage>
                <Header />
              </MainPage>
            </AuthProvider>
          }
        />
        <Route
          exact
          path="/login"
          element={
            <AuthProvider>
              <LoginPage>
                <LoginRecordHeader />
              </LoginPage>
            </AuthProvider>
          }
        />
        <Route
          exact
          path="/studyWrite"
          element={
            <AuthProvider>
              <PrivateRoute>
                <StudyWrite />
              </PrivateRoute>
            </AuthProvider>
          }
        />
        <Route
          exact
          path="/studyUpdate/:id"
          element={
            <AuthProvider>
              <PrivateRoute>
                <StudyUpdate />
              </PrivateRoute>
            </AuthProvider>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
