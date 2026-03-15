# 📌 Project Management System API

A **Node.js + Express + MongoDB** backend for a Project Management System with authentication, email verification, and secure API architecture.

This project demonstrates **modern backend development practices**, including JWT authentication, password hashing, email verification, and scalable folder structure.

---

# 🚀 Features

* 🔐 User Authentication (Register / Login)
* 🔑 JWT Access Token & Refresh Token
* 🔒 Password Hashing using bcrypt
* 📧 Email Verification using Mailtrap + Mailgen
* ⚡ Async Error Handling Middleware
* 🧩 Modular Express Architecture
* 🗄 MongoDB with Mongoose
* 🌐 REST API Structure
* 🧪 API testing with Postman

---

# 🛠 Tech Stack

**Backend**

* Node.js
* Express.js

**Database**

* MongoDB
* Mongoose

**Authentication**

* JWT (jsonwebtoken)
* bcrypt

**Email Service**

* Nodemailer
* Mailtrap
* Mailgen

**Utilities**

* dotenv
* crypto

---

# 📂 Project Structure

```
src
│
├── controllers
│   └── auth.controller.js
│
├── models
│   └── user.models.js
│
├── routes
│   └── auth.routes.js
│
├── utils
│   ├── api-error.js
│   ├── api-response.js
│   ├── async-handler.js
│   └── mail.js
│
├── app.js
└── index.js
```

---

# ⚙️ Environment Variables

Create a `.env` file in the root directory.

```
PORT=8000

MONGODB_URI=your_mongodb_connection_string

ACCESS_TOKEN_SECRET=your_access_token_secret
ACCESS_TOKEN_EXPIRY=1d

REFRESH_TOKEN_SECRET=your_refresh_token_secret
REFRESH_TOKEN_EXPIRY=10d

MAILTRAP_SMTP_HOST=sandbox.smtp.mailtrap.io
MAILTRAP_SMTP_PORT=2525
MAILTRAP_SMTP_USER=your_mailtrap_username
MAILTRAP_SMTP_PASS=your_mailtrap_password
```

---

# 📦 Installation

Clone the repository

```
git clone https://github.com/dev-pritam-2005/projmanage.git
```

Go to project folder

```
cd projmanage
```

Install dependencies

```
npm install
```

Run the server

```
npm run dev
```

Server will start at:

```
http://localhost:8000
```

---

# 📡 API Endpoints

## Register User

POST

```
/api/v1/authRouter/register
```

Body Example:

```
{
  "email": "user@gmail.com",
  "username": "dev_user",
  "password": "password123"
}
```

Response:

```
User registered successfully and verification email sent.
```

---

# 📧 Email Verification

When a user registers, a verification email is sent using **Mailtrap**.

The user must click the verification link to activate their account.

---

# 🔐 Authentication Flow

1️⃣ User registers
2️⃣ Verification email sent
3️⃣ User verifies email
4️⃣ Login generates JWT tokens
5️⃣ Access protected routes using access token

---

# 🧪 API Testing

Use **Postman** to test the APIs.

Example:

```
POST http://localhost:8000/api/v1/authRouter/register
```

---

# 📸 Example Response

```
{
  "statusCode": 200,
  "data": {
    "user": {
      "_id": "12345",
      "username": "project_admin",
      "email": "user@gmail.com"
    }
  },
  "message": "User registered successfully",
  "success": true
}
```

---

# 📚 Future Improvements

* Project CRUD APIs
* Task Management
* Role Based Access Control
* File Upload (Cloudinary)
* Notification System
* API Documentation (Swagger)

---

# 👨‍💻 Author

**Pritam Dutta**

GitHub
https://github.com/dev-pritam-2005

---

# ⭐ Support

If you like this project, please give it a ⭐ on GitHub.
