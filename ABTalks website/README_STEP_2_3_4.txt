ABTalks Redesign — Combined Steps 2, 3 & 4

This package contains the cumulative project files for:
- Step 2: React + Vite foundation and routing
- Step 3: Landing Page (/)
- Step 4: Student Dashboard (/dashboard)

Required routes:
/
 /dashboard
/day/12

Current status:
- / is fully designed
- /dashboard is fully designed
- /day/12 is still a Step 2 placeholder and will be built in Step 5

If you already have a Vite React project:
1. Keep your package.json, vite.config.js, index.html, etc.
2. Copy this package's src folder into your project.
3. Copy PROMPTS.md into your project root.
4. Install React Router if needed:
   npm install react-router-dom
5. Run:
   npm run dev

If starting from scratch:
1. Create/open a folder named abtalks-redesign.
2. Run:
   npm create vite@latest . -- --template react
3. Run:
   npm install
4. Run:
   npm install react-router-dom
5. Copy the included src folder into the project.
6. Copy PROMPTS.md into the project root.
7. Run:
   npm run dev
