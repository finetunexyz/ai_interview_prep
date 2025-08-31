<div align="center">

<!-- PROJECT LOGO -->

<!-- You can add your logo here -->

<img width="4800" height="2520" alt="prepviewai" src="https://github.com/user-attachments/assets/758731bc-4ad2-4287-b758-65e176149fc2" />
 alt="PrepViewAI Logo" width="120" height="120">

<h1 style="font-size: 3rem; font-weight: bold; border-bottom: none;">
PrepViewAI
</h1>

<p style="font-size: 1.2rem;">
Your Personal AI Interview Coach. Practice, get feedback, and land your dream job.
</p>

<!-- BADGES/SHIELDS -->

<p>
<img src="https://www.google.com/search?q=https://img.shields.io/github/stars/YOUR_USERNAME/prepviewAI%3Fstyle%3Dfor-the-badge%26logo%3Dgithub%26color%3D181717%26logoColor%3Dwhite" alt="Stars">
<img src="https://www.google.com/search?q=https://img.shields.io/github/forks/YOUR_USERNAME/prepviewAI%3Fstyle%3Dfor-the-badge%26logo%3Dgithub%26color%3D181717%26logoColor%3Dwhite" alt="Forks">
<img src="https://www.google.com/search?q=https://img.shields.io/github/license/YOUR_USERNAME/prepviewAI%3Fstyle%3Dfor-the-badge%26color%3D181717" alt="License">
</p>
</div>

PrepViewAI is an intelligent interview preparation platform that leverages cutting-edge AI to provide a realistic, conversational interview experience. Our advanced AI voice agent doesn't just ask questions—it listens, understands, and provides instant, actionable feedback to help you improve.

<br />

<!-- DEMO/SCREENSHOT -->

<div align="center">
<img src="[PLACEHOLDER_FOR_DEMO_GIF_OR_SCREENSHOT]" alt="PrepViewAI Demo">
<p><em>A glimpse of the AI interview in action.</em></p>
</div>

✨ Key Features
PrepViewAI is packed with features designed to build your confidence and polish your interview skills.

Feature

Description

🤖 Conversational AI Agent

Engage in natural, back-and-forth conversations with an AI powered by Vapi for a hyper-realistic interview simulation.

🧠 Dynamic Question Engine

Powered by Google Gemini, the AI generates unique, role-specific questions on the fly, ensuring no two interviews are the same.

📊 Instant AI Feedback

Receive a detailed report after each session, analyzing your answers, speech clarity, pace, and use of keywords.

📈 Track Your Progress

A personalized dashboard to manage and review all your past interviews, transcripts, and AI-generated feedback.

🔐 Secure Authentication

Safe and secure user sign-up and login handled by Firebase Authentication, with all interview data stored in Firestore.

📱 Fully Responsive Design

Practice anytime, anywhere. A seamless experience on desktop, tablet, and mobile devices.

🚀 The AI Magic: How It Works
Our goal was to create more than just a Q&A bot. Here’s a look at the AI pipeline that makes PrepViewAI so effective:

Initiate Call: The user starts an interview session from the UI, initiating a call with our Vapi AI Voice Assistant.

Conduct Interview: The assistant asks a series of pre-defined or dynamically generated questions, collecting the user's spoken responses.

Send to Backend: Once the interview is complete, Vapi ends the call and sends the full conversation transcript to a dedicated Next.js API endpoint in our backend.

Analyze with Gemini: Our API route securely feeds the transcript to the Google Gemini model for in-depth analysis.

Generate Feedback & Store: Gemini returns structured feedback on the user's performance. Our backend then stores the transcript and the AI feedback in the user's Firestore database document.

Display Results: The user is redirected to a results page where they can see their full transcript and the newly generated AI feedback.

🛠️ Tech Stack
This project is built with a modern, AI-first technology stack.

<div align="center" style="display: flex; justify-content: center; align-items: center; gap: 10px; flex-wrap: wrap;">
<a href="https://nextjs.org/" target="_blank">
<img src="https://www.google.com/search?q=https://img.shields.io/badge/Next.js-000000%3Fstyle%3Dfor-the-badge%26logo%3Dnextdotjs%26logoColor%3Dwhite" alt="Next.js">
</a>
<a href="https://vapi.ai/" target="_blank">
<img src="https://www.google.com/search?q=https://img.shields.io/badge/Vapi_AI-5DFECA%3Fstyle%3Dfor-the-badge%26logo%3Dvapi%26logoColor%3Dblack" alt="Vapi AI">
</a>
<a href="https://gemini.google.com/" target="_blank">
<img src="https://www.google.com/search?q=https://img.shields.io/badge/Google_Gemini-8E75B8%3Fstyle%3Dfor-the-badge%26logo%3Dgoogle-gemini%26logoColor%3Dwhite" alt="Google Gemini">
</a>
<a href="https://tailwindcss.com/" target="_blank">
<img src="https://www.google.com/search?q=https://img.shields.io/badge/Tailwind_CSS-06B6D4%3Fstyle%3Dfor-the-badge%26logo%3Dtailwindcss%26logoColor%3Dwhite" alt="Tailwind CSS">
</a>
<a href="https://firebase.google.com/" target="_blank">
<img src="https://www.google.com/search?q=https://img.shields.io/badge/Firebase-FFCA28%3Fstyle%3Dfor-the-badge%26logo%3Dfirebase%26logoColor%3Dblack" alt="Firebase">
</a>
<a href="https://ui.shadcn.com/" target="_blank">
<img src="https://www.google.com/search?q=https://img.shields.io/badge/shadcn/ui-000000%3Fstyle%3Dfor-the-badge%26logo%3Dshadcn-ui%26logoColor%3Dwhite" alt="shadcn/ui">
</a>
</div>

🏗️ Project Setup & Structure
This project was bootstrapped with create-next-app using the following configuration:

Framework: Next.js (with App Router)

Styling: Tailwind CSS

Linting: ESLint

Directory Structure: Code is organized inside a src/ directory.

Route Organization: We use Next.js Route Groups (..) to organize routes and create distinct application layouts (e.g., one for auth pages, one for the main app).

🤸 Quick Start
Ready to run PrepViewAI locally? Follow these steps.

Clone the repository

git clone [https://github.com/YOUR_USERNAME/prepviewAI.git](https://github.com/YOUR_USERNAME/prepviewAI.git)
cd prepviewAI

Install dependencies

npm install
# or
yarn install
# or
pnpm install

Set up environment variables

Create a .env.local file in the root of your project.

Add the necessary API keys and configuration values from your Firebase and AI service providers:

# Firebase Config
NEXT_PUBLIC_FIREBASE_API_KEY=...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=...
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=...
NEXT_PUBLIC_FIREBASE_APP_ID=...

# Vapi AI API Key
NEXT_PUBLIC_VAPI_API_KEY=...

# Google Gemini API Key
NEXT_PUBLIC_GEMINI_API_KEY=...

Run the development server

npm run dev

Open http://localhost:3000 in your browser to see the result.

🤝 Contributing
Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

Please feel free to fork the repo, create a feature branch, and submit a pull request!

📜 License
Distributed under the MIT License. See LICENSE for more information.

<div align="center">
<p>Made with ❤️ by [Your Name/Team]</p>
</div>
