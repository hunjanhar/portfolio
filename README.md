# Developer & Cloud/DevOps Portfolio

A modern, responsive personal portfolio website designed to showcase full-stack projects, cloud architecture, and DevOps workflows featuring a secure serverless contact form.

---

## 🎨 Design & Features

* **Responsive & Modern UI:** Clean, structured layout built for seamless viewing across desktop and mobile viewports.
* **Rich Visual Media:** Incorporates custom graphics (`ci-cd.png`, `cloud-computing.png`, `devsecops.png`) alongside a background hero video (`desktop-video.mp4`) for an engaging user experience.
* **Secure Serverless Contact Form:** Protects API credentials by routing form submissions through a backend serverless endpoint instead of exposing keys in client-side code.

---

## 🛠️ Built With

* **Frontend:** HTML5, Tailwind CSS, Alpine.js, Vanilla JavaScript
* **Typography & Styling:** Google Fonts (`PT Sans` & `DM Sans`), custom CSS keyframe animations, SVG noise texture overlay
* **Serverless Backend:** Cloudflare Pages Functions (`/functions/api/submit.js`)
* **Form Handling:** Web3Forms API
* **Hosting & CI/CD:** Cloudflare Pages

---

## 🎨 Design & UI Highlights

* **Dark & Light Mode:** Persistent theme switching powered by Alpine.js and Tailwind's class-based dark mode.
* **Interactive Animations:** Scroll-triggered reveal transitions, custom CSS shimmer effects, and animated role-switching typography in the hero section.
* **Responsive Navigation:** Sticky glassmorphism header with active section tracking and a mobile drawer menu.
* **Single-Page Architecture:** Smooth-scrolling sections covering Hero, About, Resume, Services, Projects, Certifications, and Contact.

---

## 📂 Repository Structure

```text
portfolio/
├── assets/
│   ├── images/
│   │   ├── ci-cd.png
│   │   ├── cloud-computing.png
│   │   ├── developer.png
│   │   ├── devsecops.png
│   │   └── user.jpg
│   ├── js/
│   │   └── script.js
│   └── videos/
│       └── desktop-video.mp4
├── functions/
│   └── api/
│       └── submit.js      # Serverless proxy for Web3Forms
├── index.html             # Main application entry point
├── LICENCE                # MIT License
└── README.md              # Project documentation
```

---

## ☁️ Deployment

This project is designed to be deployed on **Cloudflare Pages** with zero build steps required for the static frontend.

### Deployment Configuration
1. **Connect Repository:** Link this GitHub repository to a new project in the **Cloudflare Pages** dashboard.
2. **Build Settings:** 
   * **Framework preset:** `None`
   * **Build command:** *(Leave blank)*
   * **Build output directory:** `/`
3. **Environment Variables:** Navigate to **Settings > Environment variables** in Cloudflare Pages and add:
   * `WEB3FORMS_ACCESS_KEY` — Your access key from [Web3Forms](https://web3forms.com/) used by `/functions/api/submit.js` to dispatch contact form emails.
4. **Deploy:** Any push to the `main` branch automatically triggers a deployment to Cloudflare's global edge network.

---

## 📄 License

This project is licensed under the MIT License — see the [LICENCE](./LICENCE) file for details.