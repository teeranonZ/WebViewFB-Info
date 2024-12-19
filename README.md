# Facebook WebView Info

โครงการนี้แสดงตัวอย่างการใช้ Facebook OAuth 2.0 เพื่อล็อกอินผู้ใช้งานและแสดงข้อมูลโปรไฟล์ใน WebView โดยใช้ React

---

## คุณสมบัติของระบบ
1. **ระบบล็อกอิน**
   - รองรับการล็อกอินด้วยชื่อผู้ใช้และรหัสผ่าน พร้อมการเชื่อมต่อผ่าน Facebook WebView Login
     <img src="https://cdn.discordapp.com/attachments/1036287077794463856/1318464710617858058/image.png?ex=67626b72&is=676119f2&hm=7630260fdef86af2f79fe744991b3ee2001463c749ff40cc1c115484029edd6e&](https://cdn.discordapp.com/attachments/1251726443940024402/1319184090297270332/Screenshot_2024-12-19_123426.png?ex=6765096c&is=6763b7ec&hm=8282899d2c72c8e93068bf536ee77525417d9ac168322f70f2e487bde064f639&)" alt="Facebook WebView Login" width="400" height="400" >
     
---

## การติดตั้งและการใช้งาน

### ความต้องการเบื้องต้น
- Node.js (แนะนำเวอร์ชัน 14 ขึ้นไป)
- บัญชีนักพัฒนาของ Facebook พร้อมตั้งค่าแอปใน [Facebook Developer Console](https://developers.facebook.com/)

### ขั้นตอนการติดตั้ง

1. **คัดลอกโครงการ**
   ```bash
   git clone https://github.com/teeranonZ/WebViewFB-Info
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
href="https://www.facebook.com/v17.0/dialog/oauth?client_id=<your-facebook-app-id>&redirect_uri=https://<your-ngrok-url>/user-info&response_type=token&scope=email,public_profile,pages_messaging"
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
###UserInfo.js

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
###  การตั้งค่า Facebook Messenger Profile
ไปที่ Facebook Developer Console.
เลือก Graph API Explorer จากเมนู Tools.
เลือก App ที่ต้องการใช้งาน.
ใช้ Access Token เพื่อเรียก API เอามาแทนที่ <YOUR_ACCESS_TOKEN>

### วิธีเช็ค Page ID โดยใช้ Graph API Explorer:
ไปที่ Graph API Explorer.

เลือก App ที่ต้องการใช้งาน.

เลือก Get User Access Token หรือ Get Page Access Token (ถ้าคุณต้องการเชื่อมต่อกับเพจ).
คำสั่งนี้จะดึงข้อมูลเกี่ยวกับเพจที่คุณเป็นผู้ดูแล และ Page ID จะอยู่ในผลลัพธ์ของการตอบกลับ.

กด Submit และดูผลลัพธ์.
ในช่อง API Endpoint ให้ใส่คำสั่งนี้:
```bash
/me/accounts
```
เพื่อเอามาใส่ <your-page-id>

### แล้วจึงไปที่ Facebook Developer Console > Messenger > Messenger Profile.
ใช้คำสั่ง cURL ใน Command Prompt หรือ Terminal เพื่อตั้งค่า Persistent Menu ใน Facebook Messenger:
โดยเริ่มจากอันนี้ก่อนเพื่อGetStart
```bash
curl -X POST "https://graph.facebook.com/v17.0/438978469308554/messenger_profile?access_token=YOUR_NEW_ACCESS_TOKEN" ^
-H "Content-Type: application/json" ^
-d "{ \"get_started\": { \"payload\": \"GET_STARTED_PAYLOAD\" } }"
```
#หมายเหตุ ต้องให้ มีการตอบกลับจากTerminal ว่า 
{"result":"success"}

```bash
curl -X POST "https://graph.facebook.com/v17.0/<your-page-id>/messenger_profile?access_token=<your-access-token>" -H "Content-Type: application/json" -d "{
  \"persistent_menu\": [
    {
      \"locale\": \"default\",
      \"composer_input_disabled\": false,
      \"call_to_actions\": [
        {
          \"type\": \"web_url\",
          \"title\": \"Open Home Page\",
          \"url\": \"https://<your-ngrok-url>/\",
          \"webview_height_ratio\": \"tall\",
          \"messenger_extensions\": false
        }
      ]
    }
  ]
}"
```

###แทนที่ <your-page-id> ด้วย Page ID ของคุณ.

###แทนที่ <your-access-token> ด้วย Page Access Token ของคุณ.

###แทนที่ <your-ngrok-url> ด้วย ngrok URL ที่ได้รับ.

#หมายเหตุ ต้องให้ มีการตอบกลับจากTerminal ว่า 
{"result":"success"}

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
