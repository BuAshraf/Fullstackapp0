# Fullstackapp0

A full-stack CRUD application built with React (frontend) and Spring Boot (backend) that lets you **add**, **view**, **update**, and **delete** user records.

---

## 📁 Project Structure

```bash
Fullstackapp0/
├── FrontEnd/              # React application
│   ├── public/
│   ├── src/
│   │   ├── layout/
│   │   │   └── Navbar.js
│   │   ├── pages/
│   │   │   └── Home.js
│   │   ├── users/
│   │   │   ├── AddUser.js
│   │   │   ├── EditUser.js
│   │   │   └── ViewUser.js
│   │   └── services/
│   │       └── UserService.js
│   ├── package.json
│   └── .gitignore

└── BackEnd/               # Spring Boot application
    ├── src/main/java/
    │   └── com/buashraf/fullstack_backend/
    │       ├── FullstackBackendApplication.java
    │       ├── controller/
    │       │   └── UserController.java
    │       ├── exception/
    │       │   └── UserNotFoundException.java
    │       ├── model/
    │       │   └── User.java
    │       └── repository/
    │           └── UserRepository.java
    ├── build.gradle (or pom.xml)
    └── .gitignore
```

---

## 🚀 Features

* **Create** (Add User)
* **Read** (List & View User)
* **Update** (Edit User)
* **Delete** (Remove User)
* Responsive UI with Bootstrap
* RESTful API endpoints

---

## 🛠️ Tech Stack

* **Frontend**: React, React Router, Axios, Bootstrap
* **Backend**: Spring Boot, Spring Web, Spring Data JPA
* **Database**: MySQL (via JDBC/HikariCP)
* **Build**: npm/Yarn (frontend), Gradle or Maven (backend)

---

## 📋 Prerequisites

* Node.js & npm (or Yarn)
* Java 17+
* MySQL database
* (Optional) Maven or Gradle CLI

---

## 🔧 Setup & Run

### 1. Backend

1. Navigate to the `BackEnd` folder:

   ```bash
   cd BackEnd
   ```
2. Configure your MySQL connection in `src/main/resources/application.properties`:

   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/emsdb?useSSL=false&serverTimezone=UTC
   spring.datasource.username=<your-username>
   spring.datasource.password=<your-password>

   spring.jpa.hibernate.ddl-auto=update
   spring.jpa.show-sql=true
   ```
3. Build and run:

   * **Using Gradle**:

     ```bash
     ./gradlew bootRun
     ```
   * **Using Maven**:

     ```bash
     mvn spring-boot:run
     ```
4. The API will be available at `http://localhost:8081` (or configured port).

#### API Endpoints

| Method | URL           | Description             |
| ------ | ------------- | ----------------------- |
| GET    | `/users`      | List all users          |
| GET    | `/users/{id}` | View a specific user    |
| POST   | `/users`      | Create a new user       |
| PUT    | `/users/{id}` | Update an existing user |
| DELETE | `/users/{id}` | Delete a user           |

---

### 2. Frontend

1. Navigate to the `FrontEnd` folder:

   ```bash
   cd FrontEnd
   ```
2. Install dependencies:

   ```bash
   npm install
   ```
3. Start the dev server:

   ```bash
   npm start
   ```
4. Open `http://localhost:3000` in your browser.

> The frontend proxies API calls to the backend on port 8081 (configured in `package.json`).

---

## 🧪 Usage

1. **Home**: View a list of users.
2. **Add User**: Fill out the form and hit **Submit** to create a user.
3. **Edit User**: Click **Edit** on a user row to modify details.
4. **View User**: Click **View** to see user details.
5. **Delete User**: Click **Delete** to remove a user.

---

## 📂 Directory Conventions

* Keep **frontend** and **backend** code separate under their respective folders.
* Do not commit sensitive files (e.g., `application.properties`, `credentials.json`).

---

## 🤝 Contributing

Feel free to open issues or create pull requests to improve this boilerplate.

---

## 🙏 Acknowledgments

This project follows the tutorials and code examples provided by **Arjun Gautam**:

* GitHub: [arjungautam1](https://github.com/arjungautam1)
* YouTube Channel: [@CodeWithArjun](https://www.youtube.com/@CodeWithArjun)

---
---

## ✉ License  
This project is licensed under the MIT License. See `LICENSE` for details.

---

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)![Java](https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white)![Angular](https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white)![Gradle](https://img.shields.io/badge/Gradle-02303A.svg?style=for-the-badge&logo=Gradle&logoColor=white)![Apache](https://img.shields.io/badge/apache-%23D42029.svg?style=for-the-badge&logo=apache&logoColor=white)![Apache Maven](https://img.shields.io/badge/Apache%20Maven-C71A36?style=for-the-badge&logo=Apache%20Maven&logoColor=white)![Google Cloud](https://img.shields.io/badge/GoogleCloud-%234285F4.svg?style=for-the-badge&logo=google-cloud&logoColor=white)

---
## 💬 Get to Know Me  😁 👨‍💻

- 💼 **LinkedIn:** [Connect with me](www.linkedin.com/in/muhammed-alkulaib-773492238)

- ✖ **Twitter:** [Follow me](https://twitter.com/bo_ashraf)

- 📬 **Email:** [Connect with me](muhammedalmugera21@gmail.com)
© 2025 Fullstackapp0 Team
