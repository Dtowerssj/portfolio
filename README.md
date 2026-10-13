# Portfolio

My personal developer portfolio: an interactive single-page site with 3D scenes, animated sections, my work experience and a project gallery grouped by category.

## Sections

- **Hero** with an interactive 3D desktop computer.
- **About** and the services I offer.
- **Experience** as a vertical timeline.
- **Tech** stack with technology icons.
- **Projects**, grouped into Web, Mobile and Others, with links to the code, documentation and live demos.
- **Contact** form with a 3D planet.

## Tech stack

- React 19 and React Router
- Vite 8
- Tailwind CSS 4
- Three.js with React Three Fiber and drei for the 3D scenes
- Motion for animations
- EmailJS for the contact form
- Vercel Analytics and Vercel for hosting

## Getting started

Node.js 22 is required.

```bash
git clone https://github.com/Dtowerssj/portfolio.git
cd portfolio
npm install
npm run dev
```

Other scripts: `npm run build` creates the production build and `npm run preview` serves it locally.

## Editing the content

Most of the content (experience, technologies, projects and testimonials) lives in `src/constants/constants.js`. Project images are in `src/assets`.

## Credits

The 3D models in `public/desktop_pc` and `public/planet` come with their own licences, included next to each model (`license.txt`).
