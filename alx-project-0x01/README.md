# alx-project-0x01

## 📌 Project Overview
This project is a base application built with **Next.js** (via `create-next-app@latest`) as part of the **ALX Frontend Specialization**.  
It demonstrates how to set up a modern React application with **TypeScript**, **Tailwind CSS**, and **ESLint**, while implementing navigation, reusable UI components, and dynamic data fetching with JSONPlaceholder APIs.

---

## ⚙️ Tech Stack
- [Next.js](https://nextjs.org/) – React Framework
- [TypeScript](https://www.typescriptlang.org/) – Static Typing
- [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS
- [ESLint](https://eslint.org/) – Linting
- [JSONPlaceholder API](https://jsonplaceholder.typicode.com/) – Mock Data

---

## 📂 Project Structure
alx-project-0x01/
│── components/
│ ├── common/
│ │ ├── Button.tsx
│ │ ├── PostCard.tsx
│ │ ├── UserCard.tsx
│ │ ├── PostModal.tsx
│ │ └── UserModal.tsx
│ └── layout/
│ ├── Header.tsx
│ └── Footer.tsx
│── interfaces/
│ └── index.ts
│── pages/
│ ├── index.tsx
│ ├── posts/
│ │ └── index.tsx
│ └── users/
│ └── index.tsx
│── public/
│ └── assets/images/
│── styles/
│ └── globals.css
│── package.json
│── tsconfig.json
│── webpack.config.js

---

## 🚀 Features
1. **Base Setup**  
   - Initialized with `create-next-app@latest`
   - Configured with ESLint, Tailwind CSS, and Import Aliases  

2. **Navigation**  
   - A reusable `Header` component with links to `/`, `/posts`, `/users`  

3. **Posts Page**  
   - Fetches posts from JSONPlaceholder API  
   - Displays them using the `PostCard` component  
   - Includes a modal (`PostModal`) to add new posts  

4. **Users Page**  
   - Fetches users from JSONPlaceholder API  
   - Displays them using the `UserCard` component  
   - Includes a modal (`UserModal`) to add new users  

5. **Reusable Components**  
   - `Button`, `PostCard`, `UserCard`, `PostModal`, `UserModal`  
   - `Header` and `Footer` layout components  

---

## 🛠️ Installation & Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/peter-adjao/alx-project-0x01-setup.git
   cd alx-project-0x01
Install Dependencies

bash
npm install
Run the Development Server

bash
npm run dev -- -p 3000
Open in Browser

📸 Preview
Home Page – Welcome screen with Tailwind styling

Posts Page – Dynamic list of posts + add new post modal

Users Page – Dynamic list of users + add new user modal

✨ Author
Peter Adjao-ALX Frontend Specialization Student
Project: 0x01-setup

📜 License
This project is for educational purposes under the ALX program.

