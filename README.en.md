# Kisagu - AI-Powered Security Analysis Platform (Frontend Demo)

[🇹🇷 Türkçe README](./README.md)

**Kisagu** is an AI-powered security analysis and management platform developed for modern web applications. This repo contains the **Frontend** demo version of the project. There is no backend dependency, and all data flow is simulated with `mock` data.

## 🚀 Features

*   **Modern UI/UX**: Stylish interface built with Next.js 14, TailwindCSS, and Lucide icons.
*   **Role-Based Access (Mock)**: 
    *   **Platform Admin**: Super user managing the entire system (Kisagu).
    *   **Organization Admin**: Company owner role (Robert Davis).
    *   **Organization Member**: Team member role (James Wilson).
*   **Realistic Simulation**:
    *   `localStorage` based session management.
    *   Artificial Latency.
    *   Dynamic Dashboard and Reporting screens.
*   **Database Independent**: No DB connection required, works immediately.

## 📸 Screenshots

### Hero Section
![Hero Section](/screenshots/Hero.png)

### Features
![Features](/screenshots/Features.png)

### Prices
![Prices](/screenshots/Prices.png)

### Scenarios
![Scenarios](/screenshots/Scenarios.png)

### Services
![Services](/screenshots/Services.png)

### Blogs
![Blogs](/screenshots/Blogs.png)

### Single Blog
![Single Blog](/screenshots/Single_Blog.png)

### Login
![Login](/screenshots/Login.png)

### Admin Dashboard
![Admin Dashboard](/screenshots/Admin_Dashboard.png)

### Logs (Admin)
![Logs](/screenshots/Logs.png)


## 🛠️ Installation

To run the project in your local environment:

```bash
# Clone the repo
git clone https://github.com/jxpyter/kisagu.git

# Enter the folder
cd kisagu

# Install dependencies
npm install

# Start the development server
npm run dev
```

Go to `http://localhost:3000` in your browser.

## 👤 Demo Users

You can use the buttons on the login screen to test the system or explore the profiles below:

| Role | Name | Authority |
|---|---|---|
| **Platform Admin** | Kisagu | Full System Access |
| **Org Admin** | Robert Davis | Company Management, Add Team |
| **Org Member** | James Wilson | View Only |

---
*Note: This project is a demo work and does not perform a real security scan.*
