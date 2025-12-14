# Lab 2.1 – Full-Stack Web Application

รายวิชา: Web Application Development
ผู้พัฒนา: (ชื่อ – รหัสนักศึกษา)
Repository: (แนบลิงก์ GitHub)

---

## วัตถุประสงค์

พัฒนาเว็บแอปพลิเคชันแบบ Full-Stack โดยเชื่อมต่อ Frontend และ Backend ผ่าน REST API พร้อมจัดการโค้ดด้วย Git อย่างเป็นขั้นตอน

---

## ภาพรวมโปรเจกต์

โปรเจกต์นี้ประกอบด้วย

* Backend: Express + Prisma เชื่อมต่อฐานข้อมูล PostgreSQL (Supabase)
* Frontend: Quasar Framework เรียกใช้งาน REST API
* มีการแยกส่วน frontend และ backend อย่างชัดเจน

---

## ฟังก์ชันที่พัฒนา

* สร้าง (Create) ข้อมูล Task
* แสดงรายการ Task (Read)
* แก้ไข Task (Update)
* ลบ Task (Delete)

---

## REST API (Backend)

Base URL:

```
/api/tasks
```

* GET /      : ดึงข้อมูลทั้งหมด
* POST /     : เพิ่มข้อมูล
* PATCH /:id : แก้ไขข้อมูล
* DELETE /:id: ลบข้อมูล

---

## Frontend

* แสดงรายการข้อมูลจาก Backend
* เพิ่มและลบข้อมูลผ่านหน้าเว็บ
* เชื่อมต่อ Backend ด้วย REST API

---

## การใช้งาน Git

มีการ commit แยกตามขั้นตอนการพัฒนา เช่น

* ตั้งค่า backend และ database
* พัฒนา REST API
* เชื่อมต่อ frontend กับ backend

เพื่อให้สามารถตรวจสอบประวัติการพัฒนาได้อย่างชัดเจน

---

## สรุป

Lab 2.1 แสดงให้เห็นกระบวนการพัฒนาเว็บแอปพลิเคชันแบบ Full-Stack ตั้งแต่ backend, database, frontend และการจัดการโค้ดด้วย Git

---

*เอกสารนี้จัดทำเพื่อใช้ในการส่งงาน Lab 2.1*
