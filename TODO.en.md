# Backend TODO List

[🇹🇷 Türkçe Sürüm](./TODO.md)

This file tracks the backend (server-side) development tasks for the Kisagu project.

## 🛠️ Infrastructure & Setup
- [ ] Initialize Backend Project (Node.js / Python)
- [ ] Database Design and Setup (PostgreSQL / MongoDB)
- [ ] ORM/ODM Setup (Prisma / Mongoose)
- [ ] Environment Variables Configuration
- [ ] Swagger / OpenAPI Documentation Setup
- [ ] Docker and Docker Compose Configuration

## 🔐 Authentication & Authorization
- [ ] User Registration and Login endpoints
- [ ] JWT (JSON Web Token) Integration
- [ ] Role-Based Access Control (RBAC) middleware
  - [ ] Platform Admin
  - [ ] Organization Admin
  - [ ] Organization Member
- [ ] Forgot Password / Reset Flows
- [ ] OAuth2 (Google/GitHub) Integration (Optional)

## 🏢 Organization & Multi-tenancy
- [ ] Organization creation and updates
- [ ] Invite users to organization
- [ ] Team member management (Add/Remove/Change Role)
- [ ] Organization settings endpoints

## 🧠 Scan & Analysis Engine (Core Logic)
- [ ] Start Scan endpoint
- [ ] Queue System Setup (Redis/RabbitMQ) - For asynchronous scans
- [ ] AI Model / Security Engine Integration Service
- [ ] Saving scan results to database
- [ ] Webhook support (Notification upon scan completion)

## 📊 Dashboard & Reporting
- [ ] Summary statistics and metrics endpoints
- [ ] Historical scan lists and filtering
- [ ] Detailed security report generation (JSON/PDF)
- [ ] Logging and Audit trail (Who did what?)

## 💳 Subscription & Payments (Optional)
- [ ] Stripe/Iyzico Integration
- [ ] Subscription Plans Management
- [ ] Invoice Generation
