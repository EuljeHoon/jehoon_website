# Jehoon Park Portfolio

Personal portfolio website built with Next.js 15 and TypeScript, deployed on Vercel.

## Deployment Information

- **Deployment Platform**: Vercel
- **Live URL**: https://jehoon-website.vercel.app/
- **Deployment Method**: Automatic deployment via GitHub repository integration with Vercel

## 📁 Project Structure

### Core Files

```
jehoon-portfolio/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Main page (combines all sections)
│   │   ├── layout.tsx        # Global layout configuration
│   │   └── globals.css       # Global styles
│   ├── components/           # React components
│   │   ├── Header.tsx        # Navigation header
│   │   ├── Hero.tsx          # Main introduction section
│   │   ├── About.tsx         # About me section
│   │   ├── Skills.tsx        # Skills section
│   │   ├── ContactForm.tsx   # Contact form
│   │   ├── projects/         # Project-related components
│   │   ├── experience/       # Experience-related components
│   │   ├── common/           # Common components (modals, etc.)
│   │   └── ui/               # Base UI components
│   └── data/                 # Data files
│       ├── projects.ts       # Project information
│       └── experiences.ts    # Experience information
└── public/                   # Static files
    ├── projects/             # Project images
    ├── logo/                 # Company/institution logos
    └── *.png                 # Personal images
```

## Data Management

### Project Information (`src/data/projects.ts`)
- Project titles, roles, descriptions
- Technology stacks and achievements
- GitHub links and project image paths

### Experience Information (`src/data/experiences.ts`)
- Company names, positions, durations
- Technology stacks and key achievements
- Company logo paths

## Image and Static File Management

### Image Storage Locations
- **Personal Images**: `public/` (jehoon_image.png, Jehoon_suite image.png)
- **Project Images**: `public/projects/` (Block.png, Chess.png, Assembly.png)
- **Logo Images**: `public/logo/` (various company/institution logos)

### Image Usage Method
- Referenced in components as `/projects/filename.png`
- Utilizes Next.js static file serving functionality

## Technology Stack

### Frontend
- **Next.js 15**: React framework
- **TypeScript**: Type safety
- **Tailwind CSS**: Styling
- **React 19**: Latest React version

### Deployment and Tools
- **Vercel**: Hosting and deployment
- **GitHub**: Version control
- **EmailJS**: Contact form functionality

## Development and Deployment Process

### Local Development
```bash
npm install
npm run dev
```

### Deployment Process
1. Push code to GitHub repository
2. Vercel automatically detects changes
3. Build and deployment runs automatically
4. Available at https://jehoon-website.vercel.app/

## Responsive Design

- Mobile, tablet, and desktop support
- Utilizes Tailwind CSS responsive classes
- Mobile-optimized header navigation

## Key Features

- **Section-based Layout**: Hero, About, Experience, Projects, Skills, Contact
- **Modal Functionality**: Detailed experience information display
- **AI Chat**: Ask questions about Jehoon's background, powered by a separate backend
- **Backend Warm-up**: Pre-wakes the free-tier chat backend to hide cold-start latency
- **Contact Form**: Email sending via EmailJS
- **Responsive Layout**: Support for all devices
- **Sliding Animations**: CSS animations with Intersection Observer for Experience timeline

### Experience Section Animations
- **Intersection Observer**: Detects when timeline items enter viewport
- **Alternating Slide Directions**: Left-to-right for even items, right-to-left for odd items
- **Staggered Animation Delays**: Each item animates with 0.2s delay between items
- **Smooth Transitions**: 1-second ease-out animations with opacity and transform effects
- **Performance Optimized**: Animations only trigger when elements become visible

#### How It Works

**Intersection Observer**: Monitors when timeline items enter the viewport and triggers animations only when elements become visible, improving performance.

**Alternating Animation Pattern**: Even-numbered items slide in from the left, odd-numbered items slide in from the right, creating a visually appealing zigzag effect.

**Staggered Timing**: Each item animates with a 0.2-second delay after the previous one, creating a smooth sequential reveal effect.

**CSS Transforms**: Uses translateX and opacity transitions for smooth, hardware-accelerated animations that perform well on all devices.

## AI Chat Backend Warm-up

The AI chat feature (`src/components/AiChat.tsx`) talks to a separate backend
hosted on Render's free tier (`https://portfolio-ai-chat.onrender.com`). On the
free tier, the backend spins down after ~15 minutes of inactivity, so the first
request after idle triggers a cold start that can take 30 seconds or more.

To hide this latency from users, the frontend pre-warms the backend before a
message is ever sent.

### How It Works

**Warm-up on mount**: When the chat component loads, it sends a lightweight
`GET /health/` request to the backend in the background. This kicks off the
cold start while the visitor is still reading other sections of the page.

**Warm-up on focus**: When the user focuses the chat input, the warm-up runs
again, covering cases where the initial request happened too long ago.

**Single-shot guard**: A `warmedRef` flag ensures the warm-up fires only once
per session, avoiding duplicate requests.

**Fire-and-forget**: The warm-up request ignores its response and silently
swallows errors. Its only purpose is to trigger the server's cold start early,
not to fetch data. Even if `/health/` returns 404, the request still wakes the
server.

### Backend Requirement

The backend exposes a `GET /health/` endpoint that returns an immediate,
lightweight `200` response without calling the AI model or touching the
database. This keeps the warm-up fast and cheap while still waking the process.

### Why Not a Cron Job

A free external cron pinging the backend every ~14 minutes could keep it awake
permanently, but Render's free tier caps instance run time at ~750 hours/month.
Keeping the server awake around the clock would consume nearly the entire
monthly allowance, so the on-demand warm-up above was chosen instead — it hides
cold starts for real visitors without burning the free-tier budget.

## Performance Optimization

- Next.js automatic code splitting
- Image optimization (Next.js Image component)
- Static file caching
- Vercel CDN utilization
