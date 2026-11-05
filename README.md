# Portfolio Website

Welcome to my personal portfolio website! This project showcases my work, skills, and projects.

## 🚀 Tech Stack
* **Frontend:** HTML5, Tailwind CSS
* **Hosting:** Cloudflare Pages
* **Backend/Proxy:** Cloudflare Functions (Serverless)
* **Form Handling:** Web3Forms API (Secure Proxy implementation)

## 🔐 Security Architecture
This project implements a **Server-Side Proxy** pattern to ensure API keys remain secure. Instead of exposing keys in the client-side code, all form submissions are routed through a serverless function (`/functions/api/submit.js`), which injects the environment variables on the server side.

## 🛠️ Deployment Requirements
To deploy this project successfully, you must configure the following in your Cloudflare Pages dashboard:

1. **Environment Variables:** You must add the `WEB3FORMS_ACCESS_KEY` to your Cloudflare Functions settings.
2. **Build Settings:** Cloudflare will automatically detect the `/functions` directory and deploy the serverless functions.

## 📄 License
This project is licensed under the MIT License - see the [LICENSE](/LICENCE) file for details.