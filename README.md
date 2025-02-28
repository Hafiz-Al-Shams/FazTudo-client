# TudoSpeedo - Task Management Application

## Live Project  
🔗 [TudoSpeedo Live1 -- Netlify](https://tudospeedo.netlify.app/)
🔗 [TudoSpeedo Live2 -- Firebase](https://faztudo-8a1ba.web.app/)

## Overview  
This Task Management Application will help users efficiently organize and track their tasks by providing a simple, drag-and-drop interface to manage tasks in different stages: To-Do, In Progress, and Done. With real-time updates and persistence, users can stay productive and ensure their task progress is always up-to-date across devices. The clean, responsive design ensures ease of use on both desktop and mobile.

## Technologies Used  
- **Frontend:** React, React Router, React Hook Form, Tailwind CSS
- **Drag & Drop Functionality:** DnD Kit (Core, Sortable, Utilities)
- **Backend & Database:** expressJS, mongoDB
- **State Management & Utilities:** React Query, Axios, Match Sorter, LocalForage
- **Authentication & Database:** Firebase
- **UI Enhancements:** SweetAlert2

## Key Features  
✅ **Drag-and-Drop Task Management:**  Easily move tasks between "To-Do," "In Progress," and "Done" columns using an intuitive drag-and-drop interface.  

✅ **Real-Time Data Persistence:** Tasks are saved using Firebase, ensuring seamless synchronization across devices.

✅ **Responsive Design:** Optimized for both desktop and mobile with a clean, user-friendly interface.

✅ **Task Filtering & Sorting:** Users can efficiently search, filter, and sort tasks using Match Sorter for better organization.

✅ **Local Storage Support:** Offline task management with LocalForage, ensuring data is retained even when the network is unavailable.

✅ **Interactive UI Elements:** SweetAlert2-powered popups for task confirmations, deletions, and alerts.

✅ **Form Validation & Input Handling:** React Hook Form integration for seamless task creation and updates.

✅ **Secure Social Authentication:** Firebase-based authentication with Google login option.


## Dependencies  
The following dependencies are used in the project:  

```json
{
  "@dnd-kit/core": "^6.3.1",
    "@dnd-kit/sortable": "^10.0.0",
    "@dnd-kit/utilities": "^3.2.2",
    "@tailwindcss/vite": "^4.0.7",
    "@tanstack/react-query": "^5.66.9",
    "axios": "^1.7.9",
    "firebase": "^11.3.1",
    "localforage": "^1.10.0",
    "match-sorter": "^8.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-hook-form": "^7.54.2",
    "react-router-dom": "^7.2.0",
    "sort-by": "^1.2.0",
    "sweetalert2": "^11.17.2",
    "tailwindcss": "^4.0.7"
}
```

## Installation & Running Locally  
Follow these steps to run the project locally:

1. **Clone the repository:**  
   ```sh
   git clone https://github.com/Hafiz-Al-Shams/FazTudo-client
   cd FazTudo-client
   ```

2. **Install dependencies:**  
   ```sh
   npm install
   ```

3. **Set up environment variables:**  
   Create a `.env.local` file in the root directory and add the following variables:

   ```sh
   VITE_apiKey=YOUR_FIREBASE_API_KEY
   VITE_authDomain=YOUR_FIREBASE_AUTH_DOMAIN
   VITE_projectId=YOUR_FIREBASE_PROJECT_ID
   VITE_storageBucket=YOUR_FIREBASE_STORAGE_BUCKET
   VITE_messagingSenderId=YOUR_FIREBASE_MESSAGING_SENDER_ID
   VITE_appId=YOUR_FIREBASE_APP_ID
   ```

4. **Start the development server:**  
   ```sh
   npm run dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) in your browser to see the app in action.


---

🚀 **Developed by Hafiz Al Shams**

