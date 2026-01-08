# 🏫 School Management System - SMC EduSystem 🎓 
Welcome to **SMC EduSystem**, the digital backbone of Sri Mahinda College. Whether you’re a student, teacher, or admin, this platform simplifies school management.
# 

A full-stack **School Management System** designed to support academic and administrative operations for students from **Grade 6 to Grade 13**, covering multiple academic streams such as **Commerce, Arts, Mathematics, Biology, and Agriculture**.

This system provides secure, role-based access for **Administrators, Teachers, and Students**, enabling efficient management of school activities.

---

![School Management System Dashboard](https://github.com/dinushasandamali/SMC_EduSystem/blob/main/frontend/public/SMC%20Edu%20System.png)

---

## ✨ Features

### 👨‍🎓 Student Management
- Add, update, view, and delete student records
- Manage students by grade and academic stream

### 👩‍🏫 Teacher Management
- Teacher CRUD operations
- Assign subjects and responsibilities

### 📚 Subject Management
- Manage subjects based on grade and stream

### 📝 Attendance Management
- Record and view student attendance
- Restricted access for teachers and administrators

### 📊 Marks & Exams
- Manage examination results
- Students can view their own marks

### 🔐 Authentication & Authorization
- Role-based access control:
  - **ADMIN** – Full system access
  - **TEACHER** – Attendance and marks management
  - **STUDENT** – View-only access
- Secure authentication using **JWT**

### 📄 API Documentation
- Interactive API documentation using **Swagger / OpenAPI**

---

## 🛠️ Tech Stack

### Backend
- Java
- Spring Boot
- Spring Security
- JWT Authentication
- JPA / Hibernate
- PostgreSQL
- Swagger / OpenAPI

### Frontend
- Next.js (App Router)
- TypeScript (TSX)
- CSS Modules
- Responsive UI Design

### Tools
- Git & GitHub
- IntelliJ IDEA
- VS Code

---

## 🧱 Architecture

- Follows **MVC (Model–View–Controller)** architecture
- Clean separation of concerns:
  - Controller Layer
  - Service Layer
  - Repository Layer
- RESTful API design principles

---

## 🚀 Getting Started

### 🔧 Prerequisites
- Java 17+
- Node.js 18+
- PostgreSQL
- Maven

---

### Backend Setup
1. Clone the repository
   ```bash
   git clone https://github.com/dinushasandamali/SMC_EduSystem.git

2. Navigate to backend folder
   ```bash
   cd backend

3. Configure database in application.properties
   ```bash
   spring.datasource.url=jdbc:postgresql://localhost:5432/school_db
   spring.datasource.username=postgres
   spring.datasource.password=your_password
   spring.jpa.hibernate.ddl-auto=update

4. Run the application
5. Backend will run on:
   ```bash
   http://localhost:8081

---

### 🎨 Frontend Setup

1. Navigate to frontend folder
   ```bash
   cd frontend

2. Install dependencies
   ```bash
   npm install

3. Run development server
   ```bash
   npm run dev

4. Open browser:
   ```bash
   http://localhost:3000

---

### 👩‍💻 Author

Dinusha Sandamali
