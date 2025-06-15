React + Vite Boilerplate (TS, Tailwind, Sass, shadcn/ui)
A modern React + TypeScript boilerplate powered by Vite, TailwindCSS, Sass, shadcn/ui, React Router, and Prettier — with a clean and scalable folder structure designed for production-ready apps.

🛠️ Tech Stack
React + TypeScript + Vite – Fast and strongly-typed development
TailwindCSS – Utility-first styling
Sass – Support for SCSS modules and stylesheets
shadcn/ui – Accessible and beautifully designed UI components
React Router – Declarative routing
Prettier – Code formatting
Modular Architecture – Easy to scale and maintain

Folder Structure
src/
├── assets/       # Images, fonts, etc.
├── common/       # Utilities, constants, types
├── hooks/        # Custom hooks
├── layouts/      # Shared layouts and wrappers
├── lib/          # External libraries, API clients
├── modules/      # Feature modules (UI + logic per feature)
├── routes/       # Route config and route-based guards
├── stores/       # State management (e.g. Zustand, Jotai)
├── App.tsx
└── main.tsx

🚀 Getting Started

1. Clone the Repo
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

3. Install Dependencies
npm install or yarn

4. Start Development Server
npm run dev

📦 Scripts
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
npm run format     # Format with Prettier

📝 Notes
TailwindCSS is fully configured.
SCSS support requires .scss files and is compatible with CSS modules.
Prettier config is included. Make sure your editor is set up to auto-format on save.
