# 🎥 YouTube Clone - MERN-Stack Web Application

A MERN-stack YouTube-like web application where users can **watch videos**, **create channels**, **upload videos**, and **engage with content through comments**. This project demonstrates a modern web development stack with a **responsive** and **interactive user interface**.

---

## 🚀 Features

### 🌐 Backend
- **Built with**: Node.js, Express.js, MongoDB
- **Authentication**: Secure user login and registration with JSON Web Tokens (JWT).
- **Video Management**:
  - Videos are uploaded to **Cloudinary** for storage and optimization.
  - **Multer** middleware ensures proper file validation before upload.
- **RESTful APIs**:
  - APIs for managing users, channels, videos, and comments.

### 🖥️ Frontend
- **Built with**: React.js, TypeScript, Tailwind CSS
- **Responsive Design**: Fully responsive UI for seamless experience across devices (mobile, tablet, desktop).
- **State Management**: Global state is managed using **Redux**.
- **Dynamic Features**:
  - Browse and watch videos directly on the homepage.
  - Signed-in users can:
    - Create and manage their own channels.
    - Upload, edit, and delete videos.
    - Add, edit, or delete comments on videos.

---

## 🛠️ Technology Stack

### Backend:
- **Node.js**: JavaScript runtime for building the server.
- **Express.js**: Web framework for RESTful APIs.
- **MongoDB**: NoSQL database for storing user, video, and comment data.
- **Cloudinary**: Media storage and optimization for video uploads.
- **Multer**: Middleware for handling file uploads.
- **JWT**: Secure authentication and authorization.

### Frontend:
- **React.js**: JavaScript library for building interactive UIs.
- **TypeScript**: Ensures safer and more reliable code with static type checking.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **Redux**: Predictable state container for managing global application state.

---

## ⚙️ Installation Guide

### Prerequisites
Before you begin, ensure you have the following installed:
- **Node.js** and **npm**
- **MongoDB** (local installation or use MongoDB Atlas for a cloud instance)
- **Cloudinary** account for managing video uploads

### Clone the Repository
```bash
git clone https://github.com/aadarshraj02/youtube-clone
cd youtube-clone
```

### ENV
PORT=5000
MONGO_URI=your-mongodb-uri
CLOUDINARY_NAME=your-cloudinary-name
CLOUDINARY_API_KEY=your-cloudinary-api-key
CLOUDINARY_API_SECRET=your-cloudinary-api-secret
JWT_SECRET=your-jwt-secret

### Frontend Setup
Start the frontend development server:
```bash
cd client
npm install
npm run dev
```
The frontend will now be running on http://localhost:3000.

### Backend Setup
```bash
Start the backend development server:
cd server
npm install
npm start
```
The backend will now be running on http://localhost:5000.
