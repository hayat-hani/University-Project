🚀 University Project - Setup Guide
Quick Start
1. Clone the Repository
bash
git clone https://github.com/hayat-hani/University-Project.git
cd University-Project
2. Install Dependencies
bash
npm install
3. Start Development Server
bash
npm run dev
4. View Your Application
Open your browser and visit: http://localhost:3000

Git Workflow
Always Work on a New Branch
bash
# Get latest changes
git pull origin main

# Create your feature branch
git checkout -b feature/your-feature-name

# Examples:
git checkout -b feature/login-page
git checkout -b feature/user-profile
git checkout -b fix/header-styling
After Making Changes
bash
# Add changes
git add .

# Commit changes
git commit -m "Describe your changes"

# Push to GitHub
git push origin feature/your-feature-name
Create Pull Request
Go to GitHub repository

Click "Pull Requests" → "New Pull Request"

Select your branch

Add description and create PR

Wait for review before merging

# Project Structure
text
project/
├── app.js
├── package.json
├── public/
│   ├── index.html
│   ├── css/
│   ├── js/
│   └── images/
└── README.md
Available Commands
npm run dev - Start development server

npm start - Start production server

npm install - Install dependencies

# Branch Naming
feature/ - New features

fix/ - Bug fixes

hotfix/ - Urgent fixes

docs/ - Documentation

# Important Rules
Never push directly to main

Always create a branch for your work

Pull latest changes before starting

Create PRs for code review

