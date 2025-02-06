# Task Manager App

This React application provides a simple and efficient way to manage your tasks. It allows you to add, view, mark as complete, and delete tasks. Task data is persisted using local storage, so your tasks are saved even if you close the browser. The app also includes a login feature (currently mocked) and a details view for individual tasks.

## Features

- **Add Tasks:** Create new tasks with a title, description, and due date.
- **View Tasks:** See a list of all your tasks.
- **Mark as Complete:** Toggle the completion status of a task.
- **Delete Tasks:** Remove tasks you no longer need.
- **Local Storage:** Tasks are saved in your browser's local storage.
- **Task Details:** View more information about a specific task.
- **Login (Mocked):** A placeholder login form is included. Currently, it accepts any input and grants access. _Note: This login functionality is not fully implemented and should be replaced with a secure authentication system._
- **Logout:** A logout button is included, which currently redirects to the login page.

## Technologies Used

- **React:** A JavaScript library for building user interfaces.
- **uuid:** For generating unique task IDs.
- **lucide-react:** For icons (ChevronLeftIcon).
- **react-router-dom:** For navigation between components (routing).
- **Tailwind CSS:** For styling.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/OlaiaAly/task-manager
   ```

2. Navigate to the project directory:

   ```bash
   cd task-manager-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Usage

1. Start the development server:

   ```bash
   npm start
   ```

2. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) (or the address shown in your terminal).
