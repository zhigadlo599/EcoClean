# EcoClean

**Version 1.0.0**

EcoClean Pro is a modern web application that provides professional cleaning services. This application is designed to offer a seamless user experience for both residential and commercial clients, allowing them to easily book services, manage appointments, and get quotes. Built with a robust and modern technology stack, EcoClean Pro ensures reliability, scalability, and a user-friendly interface.

## Technologies

- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- React Router
- Vite

## Installation

1. Clone the repository:
```bash
git clone <REPO_URL>
```

2. Install the dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

## Available Scripts

- `npm run dev`: Starts the development server
- `npm run build`: Compiles the project for production
- `npm run preview`: Previews the production build
- `npm run lint`: Runs the linter

## Deploy to Vercel

This project is a Vite app and can be deployed to Vercel easily.

1. Option A — connect GitHub repo in Vercel dashboard:

  - Push your local repository to GitHub (see commands below).
  - In Vercel, Import Project → select your GitHub repo → Accept defaults (Build: `npm run build`, Output: `dist`).

2. Option B — use Vercel CLI:

```bash
npx vercel login
npx vercel --prod
```

Commands to push this repo to your GitHub (replace `<YOUR_GIT_URL>`):

```bash
git remote add origin <YOUR_GIT_URL>
git branch -M main
git add .
git commit -m "Prepare for Vercel deploy"
git push -u origin main
```

## Project Structure

```
src/
  ├── components/     # Reusable components
  ├── pages/         # Application pages
  ├── data/          # Static data
  ├── styles/        # Global styles
  └── utils/         # Utilities
```

## Features

- Presentation of cleaning services
- Detailed pages for each service
- Contact form
- Responsive design
- Smooth animations

## Contribution

Contributions are welcome! Feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
