วิธีการ Run
1. clone project นี้ลงไป
2. แก้ไขไฟล์ .env ที่ root ของ project ให้แก้ username, password, key, secret และ NEXT_PUBLIC_BASE_URL, NEXT_PUBLIC_API_URL, NEXT_STRAPI_URL โดยสำหรับ NEXT_PUBLIC_BASE_URL, NEXT_PUBLIC_API_URL, NEXT_STRAPI_URL ให้เปลี่ยน ```http://env-2193314.th1.proen.cloud``` เป็น domain ที่จะใช้
3. ใช้คำสั่ง ```docker compose up -d```
4. ให้ run คำสั่ง ```docker exec -it itechgrad-strapi npm run strapi import -- -f data.tar.gz.enc --force --key themes12``` เพื่อ import เพื่อเพิ่มข้อมูลตัวอย่างและ configuration ลงไป
5. เข้าไปที่หน้า admin โดยใช้ port ```1337``` และ path ```/admin``` เช่น ```http://env-2193314.th1.proen.cloud:1337/admin``` จากนั้นสร้าง account สำหรับ admin
สามารถเข้าถึงหน้าเว็บได้ที่ url หลัก เช่น http://env-2193314.th1.proen.cloud
