# Apoorva Chandanshive - Portfolio Website

A modern, responsive portfolio website built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion** showcasing the professional journey of a Data Engineer.

## ✨ Features

- 🎨 **Modern & Unique Design** - Gradient animations, particle effects, and smooth transitions
- 🌗 **Dark/Light Mode** - Toggle between themes with smooth transitions
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- ⚡ **Performance Optimized** - Fast loading with Next.js optimizations
- 🎭 **Smooth Animations** - Framer Motion powered scroll-triggered animations
- 🎯 **Interactive Components** - Animated skill bars, typing effects, and hover states
- 🔍 **SEO Optimized** - Meta tags and semantic HTML

## 🚀 Tech Stack

- **Framework**: Next.js 14 (React 18)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React, React Icons
- **Type Animation**: React Type Animation

## 📁 Project Structure

```
Portfolio/
├── app/
│   ├── globals.css          # Global styles and custom CSS
│   ├── layout.tsx            # Root layout with metadata
│   └── page.tsx              # Main page component
├── components/
│   ├── About.tsx             # About section with highlights
│   ├── Contact.tsx           # Contact information and form
│   ├── Experience.tsx        # Work experience timeline
│   ├── Hero.tsx              # Landing section with animations
│   ├── Navbar.tsx            # Sticky navigation bar
│   ├── ParticlesBackground.tsx  # Animated particle effect
│   ├── Projects.tsx          # Featured projects showcase
│   ├── Skills.tsx            # Technical skills with progress bars
│   └── ThemeProvider.tsx     # Dark/Light theme management
├── public/                   # Static assets
├── .gitignore
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## 🎯 Sections

1. **Hero** - Eye-catching introduction with typing animation and key metrics
2. **About** - Professional summary with education and highlights
3. **Experience** - Timeline-based work history with achievements
4. **Projects** - Featured data engineering projects with tech stack
5. **Skills** - Categorized technical skills with animated progress bars
6. **Contact** - Multiple contact methods and social links

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Steps

1. **Navigate to the project directory**:
   ```powershell
   cd f:\Portfolio
   ```

2. **Install dependencies**:
   ```powershell
   npm install
   ```

3. **Run the development server**:
   ```powershell
   npm run dev
   ```

4. **Open your browser** and visit:
   ```
   http://localhost:3000
   ```

## 📦 Available Scripts

```powershell
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## 🎨 Customization

### Update Personal Information
Edit the component files in `/components` folder:
- Update contact details in `Contact.tsx`
- Modify experience in `Experience.tsx`
- Add/remove projects in `Projects.tsx`
- Update skills in `Skills.tsx`

### Change Theme Colors
Edit `tailwind.config.ts` to customize the color scheme:
```typescript
colors: {
  primary: {
    // Your custom colors
  },
}
```

### Modify Animations
Animation settings can be found in individual components using Framer Motion's `motion` components.

## 🌐 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import repository on [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms
- **Netlify**: Drag and drop the `.next` folder
- **AWS Amplify**: Connect GitHub repository
- **Custom Server**: Use `npm run build` and `npm start`

## 📧 Contact

- **Email**: apoorvachandanshive.sae.comp@gmail.com
- **Phone**: +91-9284028847
- **LinkedIn**: [apoorva-chandanshive](https://linkedin.com/in/apoorva-chandanshive)
- **GitHub**: [apoorvachandanshive](https://github.com/apoorvachandanshive)

## 📄 License

This project is open source and available for personal and commercial use.

## 🙏 Acknowledgments

Built with modern web technologies to showcase professional excellence in Data Engineering.

---

**Made with ❤️ by Apoorva Chandanshive**
