วิธีการ Run
1. clone project นี้ลงไป
2. แก้ไขไฟล์ .env ที่ root ของ project ให้แก้ username, password, key, secret เป็น string ที่สร้างขึ้นมาใหม่ (ให้ทำตอน production)
3. เข้าไปที่ itechgrad/.env.example ให้เปลี่ยน NEXT_PUBLIC_BASE_URL เป็น domain ที่จะใช้ สำหรับพัฒนาในเครื่องตัวเอง (local/development) ให้ใช้ IP address ของเครื่องเอง ให้ใช้คำสั่งนี้เพื่อดู IP สำหรับ Mac/Linux ```ifconfig | grep inet```, สำหรับ Windows ```ipconfig``` สำหรับ Production ให้ใช้ IP/Domain ของ Server จากนั้น Save และเปลี่ยนชื่อไฟล์เป็น .env ***สำคัญ: ต้องตามหลังด้วย Port 1337 เช่น http://192.168.1.1:1337***
4. ใช้คำสั่ง ```docker compose up -d```
5. ให้ run คำสั่ง ```docker exec -it itechgrad-strapi npm run strapi import -- -f data.tar.gz.enc --force --key themes12``` เพื่อ import เพื่อเพิ่มข้อมูลตัวอย่างและ configuration ลงไป (รูปจากข้อมูลตัวอย่างจะไม่ขึ้นในหน้าเว็บต้องใส่รูปเอง)
6. เข้าไปที่หน้า admin โดยใช้ port ```1337``` และ path ```/admin``` เช่น ```http://192.168.1.1:1337/admin``` จากนั้นสร้าง account สำหรับ admin
สามารถเข้าถึงหน้าเว็บได้ที่ url หลัก เช่น http://192.168.1.1
