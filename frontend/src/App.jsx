import React, { useCallback, useEffect, useState } from 'react';
import { useRoutes, Link } from 'react-router-dom';
import './App.css';
import TopBar from './component/TopBar/TopBar';
import routes from './router';
import MainHeaders from './component/mainHeader/MainHeaders';
import Footer from './component/Footer/Footer';
import AuthContext from './Contexts/AuthContext';
function App() {
  const route = useRoutes(routes);
  const [userId, setUserId] = useState(null);

  const [userInfo, setUserInfo] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const GetUser = () => {
    fetch('https://rubikmarket.iran.liara.run/apis/user_api.php')
      .then((res) => {
        console.log('res', res);
        res.blob();
      })
      .then((result) => {
        console.log('result => ', result);
      });
  };
  const login = (userInfo, id) => {
    setUserId(id);

    setUserInfo(userInfo);
    setIsLoggedIn(true);

    localStorage.setItem('user', JSON.stringify(id));
  };
  const logout = useCallback(() => {
    setUserId(null);
    setUserInfo(null);
    localStorage.removeItem('user');
  }, []);
  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem('user'));
    console.log('localStorageDate', localStorageData);
    if (localStorageData) {
      fetch('http://localhost:4000/v1/auth/me', {
        headers: {
          Authorization: `Bearer ${localStorageData}`,
        },
      })
        .then((res) => res.json())
        .then((userData) => {
          setIsLoggedIn(true);
          setUserInfo(userData);
          console.log(isLoggedIn);
        });
    } else {
      setIsLoggedIn(false);
    }
    GetUser();
  }, [login, logout]);
  return (
    <AuthContext.Provider
      value={{
        userId,
        userInfo,
        login,
        logout,
        isLoggedIn,
      }}>
      {/* {userInfo.role === "USER" ? (
        <>
          <TopBar />
          <MainHeaders />
        </>
      ) : ("")} */}
      <TopBar />
      <MainHeaders />

      {route}

      <Footer />
      {/* {userInfo.role === "USER" ? (


        <Footer />

      ) : ("")} */}
    </AuthContext.Provider>
  );
}

export default App;
