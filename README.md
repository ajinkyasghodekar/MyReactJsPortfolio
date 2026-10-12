
# Ajinkya Ghodekar | Developer Portfolio

A modern, responsive personal portfolio built with **React.js** to showcase my professional experience, technical skills, projects, and contact information as a Senior .NET Full Stack Developer.

🌐 **Live Portfolio:** [ajinkya-ghodekar-portfolio.vercel.app](https://ajinkya-ghodekar-portfolio.vercel.app/)

💼 **LinkedIn:** [Ajinkya Ghodekar](https://www.linkedin.com/in/ajinkya-ghodekar)

💻 **GitHub:** [ajinkyasghodekar](https://github.com/ajinkyasghodekar)

---

## 📌 About the Project

This portfolio provides an overview of my software development experience, technical expertise, and projects. It features a modern dark-themed interface, responsive layouts, and dedicated sections for professional experience, education, skills, projects, and contact information.

The project is built with React.js and can be deployed as a static frontend application using Vercel.

## ✨ Features

- **Responsive Design** — Optimized for desktop, tablet, and mobile devices.
- **Modern UI** — Dark-themed interface with gradients, animations, and clean layouts.
- **About Me** — Professional summary and areas of technical expertise.
- **Technical Skills** — Organized overview of backend, frontend, cloud, database, and automation skills.
- **Projects Showcase** — Project descriptions, GitHub repositories, and live demos where available.
- **Work Experience** — Professional experience, responsibilities, technologies, and career progression.
- **Education** — Academic qualifications and education details.
- **Contact Form** — Contact form with submission feedback and email integration.
- **Contact Information** — Quick access to email, phone, WhatsApp, and professional profiles.
- **Resume Access** — Direct access to my resume.
- **API Integration** — Axios-based HTTP requests for dynamic portfolio data and contact submissions.
- **Fallback Data** — Local JSON data can be used when configured API requests fail.
- **Deployment** — Hosted on Vercel for public access.

## 🛠️ Technologies Used

### Frontend
- React.js
- JavaScript (ES6+)
- HTML5
- CSS3
- Bootstrap
- React Icons
- Framer Motion

### API & Integration
- Axios
- REST API integration
- EmailJS for contact-form email delivery
- Local JSON fallback data

### Development & Deployment
- Node.js and npm
- Git and GitHub
- Visual Studio Code
- Vercel

### Backend & Cloud Experience
My professional development experience also includes:

- C# and .NET / ASP.NET Core
- RESTful Web APIs
- Entity Framework Core and LINQ
- Microsoft SQL Server
- Microsoft Azure
- Azure DevOps and YAML-based CI/CD pipelines
- Azure App Service, Key Vault, and Azure SQL
- Python and PowerShell automation
- AI/NLP and Named Entity Recognition (NER) workflows

> The backend and cloud technologies listed above represent my broader professional experience; they are not necessarily all implemented within this portfolio repository.

## 📂 Project Structure

```text
MyReactJsPortfolio/
├── public/
│   ├── images/
│   ├── resume.pdf
│   └── index.html
├── src/
│   ├── components/
│   ├── PortfolioJs/
│   ├── PortfolioStyle/
│   ├── App.js
│   ├── App.css
│   ├── fallbackData.json
│   └── index.js
├── package.json
└── README.md
```

*The structure above is representative. Folder names and files may vary depending on the current implementation.*

## 🚀 Getting Started

### Prerequisites

Install the following before running the project:

- [Node.js](https://nodejs.org/)
- npm (included with Node.js)
- Git

### 1. Clone the repository

```bash
git clone https://github.com/ajinkyasghodekar/MyReactJsPortfolio.git
```

### 2. Navigate to the project directory

```bash
cd MyReactJsPortfolio
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm start
```

Open the local URL shown in your terminal, typically:

```text
http://localhost:3000
```

### 5. Create a production build

```bash
npm run build
```

The optimized production files will be generated in the `build/` directory for deployment.

## ⚙️ Configuration

### API Endpoints

If the portfolio uses a backend API, configure the application to point to the correct backend URL.

**Important:** Avoid hardcoding `https://localhost:7083` as the production API URL. Localhost refers to the visitor's own machine, not your deployed server.

Use environment variables for environment-specific configuration, for example:

```env
REACT_APP_API_BASE_URL=https://your-api-domain.com/api
```

Access it in React using:

```javascript
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
```

Replace the example domain with your actual deployed API URL. If using Create React App, variables prefixed with `REACT_APP_` are available to the frontend at build time.

### Contact Form

The contact form can use the configured backend API and/or EmailJS, depending on the implementation.

Before deployment, verify that:
- EmailJS service and template settings are correct.
- Form validation and error messages work as expected.
- API endpoints are accessible from the deployed website.
- No private credentials or server-side secrets are included in frontend code.

## 🌐 Deployment

This portfolio is deployed using [Vercel](https://vercel.com/).

To deploy your own version:

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Configure any required environment variables.
4. Deploy the application.
5. Test navigation, project links, resume access, and the contact form on the live website.

## 📁 Featured Projects

Some projects showcased in the portfolio include:

| Project | Description | Repository |
|---|---|---|
| MyReactJsPortfolio | Responsive React.js portfolio | [GitHub](https://github.com/ajinkyasghodekar/MyReactJsPortfolio) |
| Bulky_MVC | E-commerce application built with ASP.NET MVC | [GitHub](https://github.com/ajinkyasghodekar/Bulky_MVC) |
| MyMagicVilla_API | .NET Core Web API for booking management | [GitHub](https://github.com/ajinkyasghodekar/MyMagicVilla_API) |
| Authentication Service | ASP.NET MVC authentication and authorization application | [GitHub](https://github.com/ajinkyasghodekar/AuthServiceWebApp) |

## 🎯 Purpose

This portfolio is designed to present my software development journey, demonstrate selected projects, and make it easier for recruiters, hiring managers, and fellow developers to explore my technical background.

## 📬 Contact

**Ajinkya Ghodekar**  
Senior .NET Full Stack Developer

- **Portfolio:** https://ajinkya-ghodekar-portfolio.vercel.app/
- **LinkedIn:** https://www.linkedin.com/in/ajinkya-ghodekar
- **GitHub:** https://github.com/ajinkyasghodekar
- **Email:** ajinkyasghodekar@gmail.com

---

⭐ If you find this project useful or interesting, feel free to explore the repository and share your feedback.

**Thank you for visiting my portfolio!**
