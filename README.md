ระบบล็อกอิน Facebook บน WebView
โครงการนี้แสดงตัวอย่างการใช้ Facebook OAuth 2.0 เพื่อล็อกอินผู้ใช้งานและแสดงข้อมูลโปรไฟล์ใน WebView โดยใช้ React

คุณสมบัติของระบบ
ระบบล็อกอิน Facebook

รองรับการล็อกอินผ่าน Facebook OAuth 2.0
รับ Access Token และข้อมูลโปรไฟล์ผู้ใช้ เช่น ชื่อ อีเมล รูปภาพ และ User ID
แสดงข้อมูลโปรไฟล์ผู้ใช้

แสดงข้อมูลโปรไฟล์ของผู้ใช้งานหลังจากล็อกอินสำเร็จ
ระบบออกจากระบบ

สามารถกดปุ่ม Log Out เพื่อลบข้อมูลและกลับไปยังหน้าล็อกอิน
ออกแบบให้รองรับอุปกรณ์ทุกชนิด (Responsive Design)

รองรับทั้งการใช้งานบนอุปกรณ์มือถือและเดสก์ท็อป
การติดตั้งและการใช้งาน
ความต้องการเบื้องต้น
Node.js (แนะนำเวอร์ชัน 14 ขึ้นไป)
บัญชีนักพัฒนาของ Facebook พร้อมตั้งค่าแอปใน Facebook Developer Console
ขั้นตอนการติดตั้ง
คัดลอกโครงการ

bash
Copy code
git clone [https://github.com/your-username/facebook-webview-login.git](https://github.com/teeranonZ/demo1234.git)
cd facebook-webview-login
ติดตั้ง Dependencies

bash
Copy code
npm install
ตั้งค่าไฟล์ .env

สร้างไฟล์ .env ในโฟลเดอร์หลักของโปรเจกต์
เพิ่มค่าดังนี้:
makefile
Copy code
REACT_APP_FACEBOOK_CLIENT_ID=your-facebook-client-id
REACT_APP_REDIRECT_URI=https://your-redirect-url
เริ่มต้นเซิร์ฟเวอร์

bash
Copy code
npm start
โครงสร้างโปรเจกต์
java
Copy code
facebook-webview-login/
├── public/
│   ├── index.html
├── src/
│   ├── components/
│   │   ├── Login.js
│   │   ├── UserInfo.js
│   ├── App.js
│   ├── index.js
│   ├── Login.css
│   ├── UserInfo.css
├── .env
├── package.json
├── README.md
การใช้งาน
เปิดแอปพลิเคชันในเบราว์เซอร์.
กดปุ่ม "Login" เพื่อเข้าสู่ระบบผ่าน Facebook.
หลังล็อกอินสำเร็จ จะสามารถดูข้อมูลโปรไฟล์ (ชื่อ, อีเมล, User ID, และรูปภาพ) ได้.
กดปุ่ม "Log Out" เพื่อกลับไปยังหน้าล็อกอิน.
การตั้งค่าใน Facebook Developer Console
สร้าง Facebook App

ไปที่ Facebook Developer Console
สร้างแอปใหม่และตั้งค่าให้เป็น Web App
ตั้งค่า OAuth Redirect URI

ไปที่ Settings > Basic
เพิ่มค่า REACT_APP_REDIRECT_URI ใน Valid OAuth Redirect URIs
เปิดใช้งาน Permissions

เปิดสิทธิ์ email และ public_profile ใน Facebook Login Settings
รับ App ID

คัดลอก App ID และอัปเดตในตัวแปร REACT_APP_FACEBOOK_CLIENT_ID ในไฟล์ .env
คอมโพเนนต์ที่สำคัญ
Login.js
จัดการกระบวนการล็อกอินและดึง Access Token จาก Facebook.

UserInfo.js
ดึงและแสดงข้อมูลโปรไฟล์ผู้ใช้งานจาก Facebook.

Dependencies
React: ใช้สำหรับพัฒนา UI
React Router DOM: ใช้สำหรับการนำทางในแอป
Facebook Graph API: ใช้สำหรับดึงข้อมูลโปรไฟล์ผู้ใช้
ตัวอย่างโค้ด
การดึงข้อมูลโปรไฟล์
javascript
Copy code
const fetchUserInfo = async (token) => {
  try {
    const response = await fetch(
      `https://graph.facebook.com/me?fields=id,name,picture,email&access_token=${token}`
    );
    const data = await response.json();
    setUserInfo(data);
  } catch (error) {
    console.error("Error fetching user info:", error);
  }
};
การออกจากระบบ
javascript
Copy code
const handleLogout = () => {
  setUserInfo(null);
  window.location.href = "/";
};
