# Facebook WebView Info

โครงการนี้แสดงตัวอย่างการใช้ Facebook OAuth 2.0 เพื่อล็อกอินผู้ใช้งานและแสดงข้อมูลโปรไฟล์ใน WebView โดยใช้ React

---

## คุณสมบัติของระบบ

- **ระบบล็อกอิน Facebook**
  - รองรับการล็อกอินผ่าน Facebook OAuth 2.0
  - รับ Access Token และข้อมูลโปรไฟล์ผู้ใช้ เช่น ชื่อ, อีเมล, รูปภาพ และ User ID
- **แสดงข้อมูลโปรไฟล์ผู้ใช้**
  - แสดงข้อมูลโปรไฟล์ของผู้ใช้งานหลังจากล็อกอินสำเร็จ
- **ระบบออกจากระบบ**
  - สามารถกดปุ่ม Log Out เพื่อลบข้อมูลและกลับไปยังหน้าล็อกอิน
- **ออกแบบให้รองรับอุปกรณ์ทุกชนิด (Responsive Design)**
  - รองรับทั้งการใช้งานบนอุปกรณ์มือถือและเดสก์ท็อป

---

## การติดตั้งและการใช้งาน

### ความต้องการเบื้องต้น
- Node.js (แนะนำเวอร์ชัน 14 ขึ้นไป)
- บัญชีนักพัฒนาของ Facebook พร้อมตั้งค่าแอปใน [Facebook Developer Console](https://developers.facebook.com/)

### ขั้นตอนการติดตั้ง

1. **คัดลอกโครงการ**
   ```bash
   git clone https://github.com/teeranonZ/demo1234.git
   cd MY-APP123
ติดตั้ง Dependencies
bash

ติดตั้งไลบรารีที่จำเป็น:
   ```bash
   npm install
   ```
ตั้งค่าไฟล์ .env

สร้างไฟล์ .env ในโฟลเดอร์หลักของโปรเจกต์
เพิ่มค่าดังนี้:

 ```bash
HTTPS=true
```

เริ่มต้นเซิร์ฟเวอร์

bash
 ```bash
npm start
```


โครงสร้างโปรเจกต์

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
เปิดแอปพลิเคชันในเบราว์เซอร์
กดปุ่ม "Login" เพื่อเข้าสู่ระบบผ่าน Facebook
หลังล็อกอินสำเร็จ จะสามารถดูข้อมูลโปรไฟล์ (ชื่อ, อีเมล, User ID และรูปภาพ) ได้
กดปุ่ม "Log Out" เพื่อกลับไปยังหน้าล็อกอิน
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

คัดลอก App ID และอัปเดตในตัวแปร REACT_APP_FACEBOOK_CLIENT_ID ในไฟล์ 

Login.js


Facebook App ID เป็นค่าที่ใช้เชื่อมต่อกับ Facebook API เพื่อรับข้อมูลผู้ใช้ของคุณ

การเปลี่ยนค่าในโค้ด
ในไฟล์ Login.js ให้แก้ไข client_id ในลิงก์ URL:


```bash
href="https://www.facebook.com/v17.0/dialog/oauth?client_id=<your-facebook-app-id>&redirect_uri=https://<your-ngrok-url>/user-info&response_type=token&scope=email,public_profile"
```
แทนที่ <your-facebook-app-id> ด้วย App ID ของคุณที่ได้จาก Facebook Developer Console.
การตั้งค่าใน Facebook Developer Console
ไปที่ Facebook Developer Console.
เลือกแอปของคุณ และไปที่ Settings > Basic.
ตรวจสอบและคัดลอก App ID.
ใช้ App ID ที่คัดลอกมาแทนค่าในโค้ด.
การเปลี่ยน ngrok URL
ngrok ใช้สร้าง URL แบบ HTTPS สำหรับทดสอบแอปพลิเคชันใน WebView หรือ Facebook Login

ด้วย URL ใหม่ที่ได้จาก ngrok.
การตั้งค่า ngrok
เปิดเทอร์มินัลและรันคำสั่ง:
```bash
ngrok http https://localhost:3000
```
คัดลอก URL แบบ HTTPS ที่แสดงขึ้น เช่น:

```bash
https://1234abcd.ngrok.io
```
แทนที่ URL ในโค้ด redirect_uri ด้วย URL ที่คัดลอกมา.

 การอัปเดต Valid OAuth Redirect URIs
Facebook กำหนดให้ URL ที่ใช้ต้องตรงกับค่าใน Valid OAuth Redirect URIs ที่กำหนดใน Facebook Developer Console

ขั้นตอนการอัปเดต
ไปที่ Facebook Developer Console.
เลือกแอปของคุณ และไปที่ Facebook Login > Settings.
ในส่วน Valid OAuth Redirect URIs:
เพิ่ม URL ที่คุณใช้ในโค้ด เช่น:
```bash
https://1234abcd.ngrok.io/user-info
```

จัดการกระบวนการล็อกอินและดึง Access Token จาก Facebook
UserInfo.js

ดึงและแสดงข้อมูลโปรไฟล์ผู้ใช้งานจาก Facebook
ตัวอย่างโค้ด
การดึงข้อมูลโปรไฟล์



```bash
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
```
การออกจากระบบ
javascript

```bash
const handleLogout = () => {
  setUserInfo(null);
  window.location.href = "/";
};
```
### หมายเหตุ: ถ้าต้องการให้ผู้ใช้รายอื่นใช้งาน ต้องไปตั้งค่าใน บทบาท บัญชีนักพัฒนาของ Facebook พร้อมตั้งค่าแอปใน [Facebook Developer Console](https://developers.facebook.com/)
เพื่อที่จะเพิ่มRole ในการให้บทบาทของแค่คนที่เพิ่ม Tester แต่ถ้า ต้องการให้ใช้งานได้ทุกคนต้องไปเปิด Live (เปลี่ยนจากDevelopMode เป็น Live )  และต้องตั้งค่า ยืนยัน ธุรกิจของบริษัท หรือ Platform Page เพื่อที่จะได้เปิดเป็น Local โดยที่ ไม่ค้องเพิ่ม Role ให้เปิดเป็น Public Project 
