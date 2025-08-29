# TaskStacker

TaskStacker is a full-stack web application designed to help you manage and prioritize your tasks effectively. It features a Spring Boot backend and a React frontend.

## Features

- Create, Read, Update, and Delete tasks.
- Mark tasks as complete.
- Prioritize tasks based on perceived and business importance.
- View a list of all incomplete tasks.

## Technologies Used

### Backend

- Java 8
- Spring Boot 2.4.1
- Spring Data JPA
- Spring Data REST
- H2 Database

### Frontend

- React 17
- React Router
- Axios
- Formik
- React Bootstrap
- React Datepicker

## Getting Started

### Prerequisites

- Java 8 or later
- Maven
- Node.js and npm

### Installation and Running

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd taskstacker
    ```

2.  **Run the backend:**
    ```bash
    cd taskstacker_backend
    mvn spring-boot:run
    ```
    The backend will be running on `http://localhost:8080`.

3.  **Run the frontend:**
    ```bash
    cd ../taskstacker_frontend
    npm install
    npm start
    ```
    The frontend will be running on `http://localhost:3000`.

Open your browser and navigate to `http://localhost:3000` to use the application.

## API Endpoints

The backend exposes the following REST endpoints:

- `GET /api/tasks`: Retrieve all tasks.
- `GET /api/tasks/{id}`: Retrieve a specific task.
- `POST /api/tasks`: Create a new task.
- `PUT /api/tasks/{id}`: Update an existing task.
- `DELETE /api/tasks/{id}`: Delete a task.
- `GET /api/task_actions/complete_task/{taskId}`: Mark a task as complete.
- `GET /api/task_actions/find_all_not_complete`: Retrieve all incomplete tasks.

## Project Structure

The project is organized into two main directories:

- `taskstacker_backend`: Contains the Spring Boot application.
- `taskstacker_frontend`: Contains the React application.
