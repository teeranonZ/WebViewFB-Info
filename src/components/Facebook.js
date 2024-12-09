/* global FB */
import React, { useEffect, useState } from 'react';

const FacebookLoginCheck = () => {
  const [userStatus, setUserStatus] = useState(null);
  const [userInfo, setUserInfo] = useState(null); // เก็บข้อมูลผู้ใช้

  useEffect(() => {
    // ตรวจสอบสถานะการเข้าสู่ระบบเมื่อหน้าโหลด
    FB.getLoginStatus((response) => {
      statusChangeCallback(response);
    });
  }, []);

  const statusChangeCallback = (response) => {
    console.log('Login status:', response);
    setUserStatus(response);

    if (response.status === 'connected') {
      fetchUserInfo(); // ดึงข้อมูลผู้ใช้
    }
  };

  const fetchUserInfo = () => {
    FB.api('/me', { fields: 'name,email,picture' }, (response) => {
      console.log('User info:', response);
      setUserInfo(response); // เก็บข้อมูลผู้ใช้
    });
  };

  const handleLogin = () => {
    FB.login(
      (response) => {
        if (response.status === 'connected') {
          statusChangeCallback(response);
        }
      },
      { scope: 'email,public_profile' } // ขอสิทธิ์ดึงอีเมลและโปรไฟล์
    );
  };

  return (
    <div>
      <h1>Facebook Login</h1>
      {userStatus && userStatus.status === 'connected' ? (
        userInfo ? (
          <div>
            <img src={userInfo.picture.data.url} alt={userInfo.name} />
            <h2>Welcome, {userInfo.name}!</h2>
            <p>Email: {userInfo.email}</p>
          </div>
        ) : (
          <p>Loading user info...</p>
        )
      ) : (
        <p>Please log in</p>
      )}
      <button onClick={handleLogin}>Login with Facebook</button>
    </div>
  );
};

export default FacebookLoginCheck;
