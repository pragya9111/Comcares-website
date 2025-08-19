import type { Blog } from "../types";

export const blogs: Blog[] = [
  {
    id: "react-server-components-2025",
    title: "React Server Components (RSC) in 2025 – The Future of Web Development",
    thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: [
      {
        heading: "Introduction",
        content:
          "React Server Components (RSC) are changing how we think about rendering. In 2025, the adoption has skyrocketed, especially with Next.js fully embracing it."
      },
      {
        heading: "Why RSC Matters",
        content:
          "RSC allows you to offload rendering to the server, reducing bundle sizes, improving TTI (Time to Interactive), and allowing zero-client JS for some components."
      },
      {
        heading: "Practical Use Cases",
        content:
          "Ideal for heavy data-fetching components, personalized dashboards, and complex UI where SEO is critical."
      },
      {
        heading: "Conclusion",
        content:
          "The future is server-first rendering for performance, SEO, and developer experience."
      }
    ],
    category: "React",
    date: "January 15, 2025",
    readTime: "5 min read",
    excerpt: "Discover how React Server Components are revolutionizing web development in 2025 with improved performance and developer experience.",
    author: {
      name: "Sarah Johnson",
      role: "Senior Frontend Engineer",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80"
    }
  },
  {
    id: "ai-coding-tools-2025",
    title: "AI-Powered Coding Tools – What's New in 2025?",
    thumbnail: "https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: [
      {
        heading: "Introduction",
        content:
          "From GitHub Copilot X to ChatGPT Code Interpreter, AI-assisted coding is now a daily reality for developers."
      },
      {
        heading: "Latest Trends",
        content:
          "2025 tools can refactor entire projects, auto-generate tests, and even perform performance optimization suggestions."
      },
      {
        heading: "Impact on Developers",
        content:
          "Developers now focus more on architecture and problem-solving, letting AI handle boilerplate and repetitive code."
      }
    ],
    category: "AI & Tools",
    date: "January 20, 2025",
    readTime: "4 min read",
    excerpt: "Explore the latest AI-powered coding tools that are transforming how developers write code in 2025.",
    author: {
      name: "Michael Chen",
      role: "AI Engineer",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80"
    }
  },
  {
    id: "web3-2025",
    title: "Web3 in 2025 – Beyond Cryptocurrency",
    thumbnail: "https://forkast.news/wp-content/uploads/2022/02/Web3ExplainerPhoto-1260x709.png",
    content: [
      {
        heading: "Introduction",
        content:
          "Web3 has evolved from hype to real-world applications, with decentralized apps (dApps) and blockchain-based identity systems."
      },
      {
        heading: "Practical Applications",
        content:
          "From secure supply chains to creator monetization, Web3 is solving real-world problems."
      },
      {
        heading: "Challenges Ahead",
        content:
          "User adoption, regulation, and scalability remain hurdles for mass adoption."
      }
    ],
    category: "Web3",
    date: "January 25, 2025",
    readTime: "6 min read",
    excerpt: "Discover how Web3 technologies are moving beyond cryptocurrency to solve real-world problems in 2025.",
    author: {
      name: "Emily Rodriguez",
      role: "Blockchain Developer",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80"
    }
  },
  {
    id: "nextjs-15-features",
    title: "Next.js 15 Features That Will Blow Your Mind",
    thumbnail: "https://prod-cms.sgp1.cdn.digitaloceanspaces.com/static/filer_public/c2/7e/c27e2955-a3f5-460a-a153-f99e87e31f8a/next_js.jpg",
    content: [
      {
        heading: "Revolutionary Features",
        content:
          "Next.js 15 introduces groundbreaking features including partial prerendering, improved caching, and enhanced developer experience."
      },
      {
        heading: "Performance Improvements",
        content:
          "Experience 40% faster build times and 60% smaller bundle sizes with the new compiler optimizations."
      },
      {
        heading: "Developer Experience",
        content:
          "New debugging tools, hot reloading improvements, and better error handling make development smoother than ever."
      }
    ],
    category: "Next.js",
    date: "February 1, 2025",
    readTime: "7 min read",
    excerpt: "Explore the revolutionary features in Next.js 15 that are changing the game for full-stack developers.",
    author: {
      name: "David Park",
      role: "Full-Stack Developer",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80"
    }
  },
  {
    id: "typescript-advanced-patterns",
    title: "Advanced TypeScript Patterns Every Developer Should Know",
    thumbnail: "https://file-uploads.teachablecdn.com/4c16c4adca0d401bb4295cfbda05ecf1/e1c0e6c521414dbfae2fe1ca931c2f8f",
    content: [
      {
        heading: "Advanced Types",
        content:
          "Master conditional types, mapped types, and template literal types to write more expressive and type-safe code."
      },
      {
        heading: "Design Patterns",
        content:
          "Learn how to implement common design patterns like Builder, Factory, and Observer patterns using TypeScript."
      },
      {
        heading: "Real-World Examples",
        content:
          "See these patterns in action with practical examples from production applications."
      }
    ],
    category: "TypeScript",
    date: "February 5, 2025",
    readTime: "8 min read",
    excerpt: "Master advanced TypeScript patterns that will make your code more robust and maintainable.",
    author: {
      name: "Lisa Wang",
      role: "TypeScript Expert",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80"
    }
  },
  {
    id: "css-grid-mastery",
    title: "CSS Grid Mastery: From Beginner to Expert",
    thumbnail: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&q=80",
    content: [
      {
        heading: "Grid Fundamentals",
        content:
          "Start with the basics of CSS Grid and understand how it differs from Flexbox."
      },
      {
        heading: "Advanced Layouts",
        content:
          "Create complex responsive layouts with grid areas, auto-fit, and minmax functions."
      },
      {
        heading: "Real-World Examples",
        content:
          "Build practical layouts including dashboards, galleries, and magazine-style designs."
      }
    ],
    category: "CSS",
    date: "February 10, 2025",
    readTime: "10 min read",
    excerpt: "Master CSS Grid from basic concepts to advanced layout techniques with practical examples.",
    author: {
      name: "James Wilson",
      role: "CSS Specialist",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80"
    }
  }
];
