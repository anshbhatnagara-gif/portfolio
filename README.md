# Ansh Bhatnagar - Personal Portfolio 2.0

> 🚀 **Live Deployment:** [https://portfolio2-0-has4cchle-anshbhatnagara-free-course.vercel.app/](https://portfolio2-0-has4cchle-anshbhatnagara-free-course.vercel.app/)

A modern, responsive, developer-focused portfolio website built with **React**, **Vite**, **Tailwind CSS v4**, **Framer Motion**, and **Lucide Icons** featuring a **Cyber / Hacker Theme**.

---

## 🚀 Quick Start (Run Locally)

1. **Install dependencies** (if not already installed):
   ```bash
   npm install
   ```

2. **Start the local development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

---

## 🛠 Customizing Content

All text, links, and content are centralized in **`src/data/portfolio.js`**. You do not need to modify any component code to update your information.

### 1. Edit Profile Information & Socials
Open `src/data/portfolio.js` and modify `personalInfo`:
- `name`, `tagline`, `intro`
- `email`, `github`, `linkedin`, `location`

### 2. Add Your Profile Photo
- Place your photo at: **`src/assets/profile.jpg`**
- If the image is missing, the website automatically falls back to an elegant gradient avatar with your initials (`AB`).

### 3. Add Your Resume
- Place your resume PDF at: **`public/resume.pdf`**
- The "Download Resume" button in the Hero section links directly to this file.

### 4. Add Certifications
In `src/data/portfolio.js`, update the `certificationsData` array when you receive certificates:
```javascript
export const certificationsData = [
  {
    title: "Full-Stack Web Development",
    issuer: "Coursera / Meta",
    year: "2026",
    link: "https://example.com/certificate/123" // optional
  }
];
```

### 5. EmailJS Setup (Optional)
To receive messages sent through the contact form directly to your email:
1. Create a free account at [EmailJS](https://www.emailjs.com/).
2. Create an Email Service and an Email Template.
3. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
4. Fill in your keys:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```
*Note: If these keys are not set, the contact form automatically falls back to opening your visitor's default email client with a pre-filled mailto message.*

---

## 🌐 Deploying to Vercel

1. Push your repository to GitHub:
   ```bash
   git add .
   git commit -m "My updated portfolio"
   git push origin main
   ```
2. Go to [Vercel](https://vercel.com) and log in with GitHub.
3. Click **"Add New"** > **"Project"** and select `portfolio2.0`.
4. Vercel automatically detects **Vite**:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. (Optional) Add your EmailJS environment variables in the Vercel Project Settings.
6. Click **Deploy**. Your portfolio is live with free SSL and worldwide CDN!
