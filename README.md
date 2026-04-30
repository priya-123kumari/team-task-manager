


# 🚀 Team Task Manager (Full-Stack)

A full-stack web application that allows teams to manage projects, assign tasks, and track progress with role-based access control.

---

## 📌 Features

- 🔐 User Authentication (Signup/Login)
- 👤 Role-Based Access (Admin / Member)
- 📁 Project Management
- ✅ Task Creation & Assignment
- 📊 Dashboard with Task Statistics
- ⏰ Overdue Task Tracking
- 🔄 Task Status Updates (Todo → In Progress → Done)

---

## 🛠️ Tech Stack

### Frontend
- React.js (Vite)
- Tailwind CSS
- Axios
- React Router

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- Bcrypt.js

---

## 📂 Project Structure
team-task-manager/
├── Backend/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── middleware/
│ └── server.js
│
├── frontend/
│ ├── src/
│ │ ├── pages/
│ │ ├── api/
│ │ ├── components/
│ │ └── App.jsx
│
└── README.md


---

## ⚙️ Installation & Setup

### 🔹 Clone the repository

git clone https://github.com/priya-123kumari/team-task-manager.git

cd team-task-manager


---

### 🔹 Backend Setup

cd Backend
npm install


Create `.env` file inside Backend folder:


MONGO_URI=your_mongodb_connection_string
JWT_SECRET=123secret
PORT=5000


Run backend:

npm run dev


---

### 🔹 Frontend Setup

cd frontend
npm install
npm run dev


---

## 🌐 API Endpoints (Sample)

| Method | Endpoint | Description |
|--------|---------|------------|
| POST | /api/auth/signup | Register user |
| POST | /api/auth/login | Login user |
| GET | /api/projects | Get all projects |
| POST | /api/projects | Create project (Admin) |
| POST | /api/tasks | Create task |
| GET | /api/tasks/project/:id | Get tasks by project |
| GET | /api/tasks/dashboard | Dashboard stats |

---

## 🔐 Role-Based Access

- **Admin**
  - Create projects
  - Assign tasks
- **Member**
  - View projects
  - Update task status

---

## 📊 Dashboard Includes

- Total Tasks
- Completed Tasks
- Pending Tasks
- Overdue Tasks

---

## 🚀 Future Improvements

- Drag & Drop Kanban Board
- Email Notifications
- File Attachments in Tasks
- Team Collaboration Chat

---

## 👨‍💻 Author

- Name: Priya Kumari
- GitHub: https://github.com/priya-123kumari

---

## ⭐ If you like this project

Give it a star ⭐ on GitHub!
✅ What You Should Change

Before uploading:

Replace:
your-username

👉 with your GitHub username

Replace:
Your Name
🚀 Next Step

After adding README:

git add .
git commit -m "Added README"
git push
