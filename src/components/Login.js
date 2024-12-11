import React, { useEffect, useState } from "react";
import "./Login.css";

const Login = () => {
  const [accessToken, setAccessToken] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const hash = window.location.hash;
    const params = new URLSearchParams(hash.replace("#", ""));
    const token = params.get("access_token");

    if (token) {
      setAccessToken(token);
      fetchUserInfo(token);
    }
  }, []);

  const fetchUserInfo = async (token) => {
    try {
      const response = await fetch(
        `https://graph.facebook.com/me?fields=id,name,picture,email&access_token=${token}` // เพิ่ม email
      );
      if (!response.ok) throw new Error("Failed to fetch user information.");
      const data = await response.json();
      setUserInfo(data);
    } catch (error) {
      console.error("Error fetching user info:", error);
    }
  };

  return (
    <div>
      <h1>Facebook Login</h1>
      {!accessToken ? (
        <div id="login-form">
          <form>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" required />
            <br />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
            <br />
          </form>
          <div id="login-button">
            <a
              href="https://www.facebook.com/v17.0/dialog/oauth?client_id=1247680383201599&redirect_uri=https://af9a-2405-9800-b550-1a21-edc5-6f54-1ca2-22c2.ngrok-free.app/user-info&response_type=token&scope=email,public_profile"
            >
              Login
            </a>
          </div>
        </div>
      ) : (
        <div id="user-info">
          {userInfo ? (
            <>
              <img src={userInfo.picture.data.url} alt={userInfo.name} />
              <h2>Welcome, {userInfo.name}!</h2>
              <p>Email: {userInfo.email}</p>
              <p>User ID: {userInfo.id}</p>
            </>
          ) : (
            <p>Loading user information...</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Login;
