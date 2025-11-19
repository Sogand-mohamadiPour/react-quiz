# React Quiz Application🎯

This app includes **React-only questions**, each with their own score value. You can see your points grow as you answer and view your final total at the end.

---

## 🚀 Live Demo  
👉 **[View on Vercel](https://react-quiz-three-phi.vercel.app/)**

---

## 🌟 Features

- **React-only quiz questions**  
- **useReducer-powered state management**  
- **Timer** for completing the quiz  
- **Score tracking**  
  - Each question has its own score  
  - You see your score **live while answering**  
  - Final total score displayed at the end  
- **Correct & wrong answer feedback**  
- **Clean UI with step-by-step question flow**

---  

## 🛠️ Tech Stack

- **React**  
- **useReducer** (main logic)  
- **JavaScript (ES6+)**  
- **CSS**

---
## 🧪 How It Works

1. Timer starts immediately  
2. Each question shows multiple choices  
3. When you select an answer:
   - You instantly see if it’s **correct** or **wrong**
   - Your score updates  
4. At the end, your **final score** appears  
5. Restart functionality will be added later

---

## 📥 Getting Started  

### Prerequisites  
- Node.js & npm installed

### How to Run the App  
This project uses a **fake API (json-server)** for loading the questions.  
You must run **both** the React app and the server:

```bash
npm run start    # Starts the React app
npm run server   # Starts the json-server (fake API)
```
The app will not work unless both commands are running.💥

---

### Installation  
```bash
git clone https://github.com/Sogand-mohamadiPour/react-quiz.git  
cd react-quiz  
npm install
```
