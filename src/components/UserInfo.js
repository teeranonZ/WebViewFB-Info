import React, { useEffect, useState } from "react";
import "./UserInfo.css";

const UserInfo = () => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const hash = window.location.hash;
    const params = new URLSearchParams(hash.replace("#", ""));
    const accessToken = params.get("access_token");

    if (accessToken) {
      fetchUserInfo(accessToken);
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
      setUserInfo({ error: "Failed to fetch user information." });
    }
  };

  const handleLogout = () => {
    // ล้างข้อมูลและเปลี่ยนเส้นทางกลับไปยังหน้า Login
    setUserInfo(null);
    window.location.href = "/"; // เปลี่ยนเส้นทางไปยังหน้า Login
  };

  return userInfo ? (
    userInfo.error ? (
      <p>{userInfo.error}</p>
    ) : (
      <div className="user-info-container"> {/* ใช้คลาสนี้ */}
        <img src={userInfo.picture.data.url} alt={userInfo.name} />
        <h2>Welcome !</h2>
        <p>Name: {userInfo.name}</p>
        <p>Email: {userInfo.email}</p>
        <p>User ID: {userInfo.id}</p>
        <button onClick={handleLogout} className="logout-button">Log Out</button>
      </div>
    )
  ) : (
    <p>Loading...</p>
  );
  
};

export default UserInfo;
