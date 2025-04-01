# Eyego-Dashboard

This project is built with **[Next.js](https://nextjs.org)**, leveraging **[Redux Toolkit](https://redux-toolkit.js.org/)** for state management, **[Firebase](https://firebase.google.com/)** for backend services, and **Tailwind CSS** for styling. It provides a responsive and interactive dashboard for users with sorting, filtering, pagination, authentication functionalities, and **data visualization using charts**.

## Getting Started

To get started with this project, follow the steps below:

### Prerequisites

- **Node.js** (version 14 or above) must be installed on your machine.
- You will also need **Firebase** credentials for authentication and data fetching.

### Steps to Run Locally

1. Clone the repository:

    ```bash
    git clone <repository-url>
    cd Eyego-Dashboard
    ```

2. Install the dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

3. Run the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    ```

4. Open your browser and navigate to [http://localhost:3000/login](http://localhost:3000/login) to view the dashboard.

---

## Features

### 🔹 **Authentication & Logout**
- **Firebase Authentication** is integrated to handle **user login** and **logout** functionality. Only authorized users (admin) can access the dashboard. 
- Credentials:
  - **Email**: `ahmedafd@gmail.com`
  - **Password**: `20202025`

### 🔹 **Data Display & Fetching from Firebase**
- Data is fetched from **Firebase** using **Redux Toolkit**. The data is stored in the Redux state and is rendered in the dashboard, allowing users to interact with it dynamically.

### 🔹 **Sorting**
- Users can sort the data based on various criteria, such as date, name, or value. This allows for easier navigation and retrieval of specific data entries.

### 🔹 **Filtering**
- A filter functionality has been implemented to allow users to narrow down the data they are viewing based on specific criteria, such as categories or status, making data management more efficient.

### 🔹 **Pagination**
- To improve performance and user experience, the data is divided into pages, displaying a limited number of entries per page. This helps to manage large data sets efficiently and reduces load time.

### 🔹 **Charts & Data Visualization**
- **Charts** are integrated to visualize key business data in graphical formats like line charts, bar charts, and pie charts. This feature allows users to analyze trends and patterns in their data easily.
- The charting library used in this project provides dynamic and interactive chart components, making it highly useful for monitoring and decision-making.

### 🔹 **Responsive Design**
- The layout is fully responsive, using **Tailwind CSS** to ensure it works seamlessly across different screen sizes. The design adapts to mobile, tablet, and desktop views for an optimal user experience.

### 🔹 **User Interface & Styling**
- The user interface is styled with **Tailwind CSS**, providing a clean, modern, and minimalistic design.
- Responsive and accessible components are used to ensure the dashboard functions well on all devices.
- The application uses utility-first CSS for fast styling with custom configurations.

---

## Implementation Details

### **Next.js**
- The project is bootstrapped with **Next.js**, utilizing server-side rendering (SSR) for faster loading and SEO optimization.
- The pages are dynamically generated with the `app` directory in Next.js, which includes the necessary API routes for interacting with Firebase.

### **Redux Toolkit**
- **Redux Toolkit** is used for managing the global state of the application. This includes storing the user authentication state, handling data fetching and updates, and managing the loading/error states.
- **Thunk middleware** is used to perform async operations like fetching data from Firebase.

### **Firebase Integration**
- Firebase is used to handle user authentication (with Firebase Auth) and data storage (Firestore).
- Authentication is integrated into the login form, where the credentials are checked against the Firebase Auth service.

---

## Learn More

- [Next.js Documentation](https://nextjs.org/docs) for more details on Next.js features.
- [Redux Toolkit Documentation](https://redux-toolkit.js.org/) for state management best practices.
- [Firebase Documentation](https://firebase.google.com/docs) for backend and authentication setup.
- [Charting Library Documentation] - if available, to explain the charts implementation (if you are using a specific charting library, such as Chart.js, Recharts, etc.).

<<<<<<< HEAD
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
# Eyego-Dashboard
=======
Feel free to reach out if you have any questions or suggestions! 😊
>>>>>>> 35c01c9696429373f87f0dc94b0363f7a10b11ea
