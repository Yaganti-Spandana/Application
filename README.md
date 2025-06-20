# 🎬 Hotstar / Amazon Prime UI Clone

A sleek and dynamic UI clone of video streaming platforms like *Hotstar* and *Amazon Prime Video, built with **React* and styled using *Material UI. This project focuses on replicating the interactive layout and user experience of popular OTT platforms, with a focus on **responsive design, **category filtering, and **preview modals*.

## 🚀 Live Demo

👉 [View Deployed App on Netlify/Vercel](http://localhost:3000/)

---

## 📌 Features

- 🔥 Homepage with multiple horizontal carousels (Continue Watching, Thriller, Trending, Genres.)
- 🎥 Video preview popup on hover or click
- 📁 Category tabs with smooth filtering
- 🖼️ Static JSON data for movie/show posters and details
- ✨ Hover effects and animated transitions
- 📱 Fully responsive design (mobile/tablet/desktop)
- 📦 Deployed to Netlify or Vercel

---

## 📁 Project Structure

application/ ├── public/ │   └── index.html ├── 
src/ │   ├── assets/                
# Static images & thumbnails
│   ├── components/            
# Reusable components (7-8 minimum) 
│   │   ├── Header.jsx │   │   ├── CarouselSection.jsx │   │   ├── VideoCard.jsx │   │   ├── VideoModel.jsx │   │   ├── App.jsx │   │   ├── App.css │   │   └── VideoCrd.css │   ├── data/ │   │   └── videos.json        
# Static JSON with titles, posters, categories 
│   ├── App.js │   ├── index.js │   └── styles/ │       └── App.css ├── .gitignore ├── package.json └── README.md

---

## 🛠️ Technologies Used

- *React* (with hooks)
- *Material UI* (or Bootstrap Grid)
- *React Modal / Dialog* for preview popups
- *CSS Modules or Styled Components*
- *Responsive Flexbox/Grid Layout*
- *Static JSON for content simulation*

---

## 📦 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Yaganti-Spandana/Application.git
cd application

2. Install dependencies

npm install

3. Run the project locally

npm start

The app should open automatically at http://localhost:3000.


---

🧪 Deployment

Deploy the app using:

Netlify

Vercel


Example (Netlify CLI):

npm run build
netlify deploy


---

📄 Sample JSON Structure (videos.json)

[
  {
    "title": "/assets/dark-knight.jpg",
    "poster": "url",
    "description": "Shubam"
  },
  {
    "title": "/assets/stranger-things.jpg",
    "poster": "url",
    "description": "Hit-3"
  }
]


---

💡 Future Enhancements

Search functionality

Authentication (Login/Signup)

Backend integration (Firebase or API)

Video playback support



---

Output screenshots:

![Screenshot 2025-06-20 205426](https://github.com/user-attachments/assets/7995f078-1c7f-4e92-9ae8-f665d5063cd4)
 

📬 Contact

Developer:https://github.com/Yaganti-Spandana.com
Made with ❤️ by Yaganti Spandana
Feel free to fork, star ⭐, and contribute!

---

