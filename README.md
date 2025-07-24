# 1. Task Management System (To-Do App)

This is a RESTful API built with Node.js, Express, and TypeScript to manage tasks in a simple To-Do application. It allows users to create, retrieve, update, delete, search, and filter tasks using an in-memory array as a data store.

# Features

- CRUD operations: Create, Read, Update, Delete tasks
- Pagination support for listing tasks
- Search tasks by title (case-insensitive)
- Filter tasks by status: PENDING, IN_PROGRESS, COMPLETED
- UUID-based task IDs
- Built with Express.js and TypeScript

# Technologies Used

- Node.js
- Express.js
- TypeScript
- UUID (for unique task IDs)
- Postman (for API testing)

# Project Structure

todo-api/
├── src/
│ ├── controllers/
│ │ └── taskController.ts # Contains logic for CRUD, filters, pagination
│ ├── models/
│ │ └── taskModel.ts # Task interface and in-memory array
│ ├── routes/
│ │ └── taskRoutes.ts # API routes for task endpoints
│ ├── utils/
│ │ └── validators.ts # (Optional) Input validation functions
│ └── index.ts # Entry point of the app
├── package.json # Dependencies and scripts
├── tsconfig.json # TypeScript configuration
├── README.md # Project documentation


## 2. Setup Instructions

### Prerequisites

- Node.js installed (version 16 or higher recommended)
- npm (comes with Node.js)

### Installation Steps

1. Clone the repository:
```bash
git clone https://github.com/<your-username>/Task-Management-System-To-Do-app.git
cd Task-Management-System-To-Do-app
npm install


### API Documentation
Base URL : http://localhost:3000/api
1. Create a Task
POST /tasks
Body:
{
  "title": "Buy groceries",
  "description": "Milk, eggs, bread",
  "status": "PENDING"
}

2. Get All Tasks (with Filters & Pagination)
GET /tasks
Optional Query Parameters:
page: Page number (default: 1)
limit: Tasks per page (default: 10)
title: Filter by task title
status: Filter by status (PENDING, COMPLETED, IN_PROGRESS)

Example:
/api/tasks?title=buy&status=PENDING&page=1&limit=5

3. Get Task by ID
GET /tasks/:id
Returns the task if found, otherwise 404.

4. Update Task
PUT /tasks/:id
Body:
{
  "title": "Buy fruits",
  "status": "IN_PROGRESS"
}

5. Delete Task
DELETE /tasks/:id
Returns a message confirming deletion.
