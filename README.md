# Academic Calculators

A simple, fast, and accurate web application for calculating course grades and semester GPA.

## Features

### 📈 Grade Calculator
- Calculate overall course percentage based on component grades and weightages
- Add/remove multiple grade components
- Customizable component names
- Real-time calculation

### 🎓 GPA Calculator
- Calculate semester GPA using standard 4.0 scale
- Support for multiple courses
- Credit-weighted calculation
- Grade scale reference included

## Tech Stack

- **React** - UI library
- **Vite** - Build tool
- **React Router** - Routing
- **CSS** - Styling

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd calculator-apps
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Deployment

### Vercel

1. Push your code to GitHub
2. Import the repository in Vercel
3. Vercel will automatically detect Vite and deploy

The `vercel.json` file is already configured for client-side routing.

### Other Platforms

The app can be deployed to any static hosting service:
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Any other static hosting service

## Project Structure

```
calculator-apps/
├── src/
│   ├── components/
│   │   ├── GradeCalculator.jsx
│   │   ├── GradeCalculator.css
│   │   ├── GPACalculator.jsx
│   │   └── GPACalculator.css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── vercel.json
└── README.md
```

## License

MIT License - feel free to use this project for your own purposes.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
