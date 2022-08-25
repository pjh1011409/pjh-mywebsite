// ----------------react & hooks-------------------------------------
import { Routes, Route } from 'react-router-dom'

// ----------------style & css---------------------------------------
import './App.css'

// ----------------components & data---------------------------------
import MainPage from './mainPage/mainPage'
import LoginPage from './loginPage/loginPage'
import { StudyDetail, StudyWrite, StudyUpdate, StudyMain } from './studyPage'
import { Header, LoginRecordHeader } from 'components/common'
import Test from 'test'
//------------------authentication(utils & context)---------------------------
import PrivateRoute from 'utils/PrivateRoute'
import { AuthProvider } from 'context/AuthContext'

function App() {
    return (
        <div style={{ margin: '0', width: '100vm', overflowX: 'hidden' }}>
            <Routes>
                <Route
                    exact
                    path="/studyMain/*"
                    element={
                        <AuthProvider>
                            <StudyMain>
                                <Header></Header>
                            </StudyMain>
                        </AuthProvider>
                    }
                />

                <Route
                    exact
                    path="/studyDetail/:id"
                    element={
                        <AuthProvider>
                            <PrivateRoute>
                                <StudyDetail></StudyDetail>
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
                                <Header></Header>
                            </MainPage>
                        </AuthProvider>
                    }
                ></Route>
                <Route
                    exact
                    path="/login"
                    element={
                        <AuthProvider>
                            <LoginPage>
                                <LoginRecordHeader></LoginRecordHeader>
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
                <Route
                    exact
                    path="/test"
                    element={
                        <AuthProvider>
                            <PrivateRoute>
                                <Test />
                            </PrivateRoute>
                        </AuthProvider>
                    }
                ></Route>
            </Routes>
        </div>
    )
}

export default App
