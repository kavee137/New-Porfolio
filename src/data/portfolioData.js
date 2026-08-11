export const personalInfo = {
  name: "Kaveesha Rukshan",
  role: "Frontend Engineer",
  title: "Frontend Engineer | Web & Mobile Developer",
  specialization: "Web & Mobile Frontend Development",
  headline: "Frontend Engineer building clean, scalable & engaging digital experiences.",
  bio: "I’m Kaveesha Rukshan, a frontend engineer focused on building modern web and mobile applications using React, React Native and modern frontend technologies.",
  aboutDetailed: "I'm a passionate Frontend Engineer who enjoys transforming ideas and designs into responsive, user-friendly digital products. I specialize in React-based web applications and React Native mobile applications, with a strong focus on clean UI, performance, maintainability, and great user experience.",
  availabilityBadge: "Available for Frontend Opportunities",
  location: "Sri Lanka",
  socials: {
    github: "https://github.com/kavee137",
    linkedin: "https://linkedin.com/in/kaveesha-rukshan",
    email: "kaveesharukshan137@gmail.com"
  },
  devCardSnippet: {
    tag: "<Frontend Engineer />",
    skills: ["React", "React Native", "JavaScript", "TypeScript"],
    code: `const developer = {
  name: "Kaveesha Rukshan",
  passion: "building products",
  focus: "user experience",
  stack: ["Web", "Mobile"],
  status: "ready_to_build"
};`
  }
};

export const aboutHighlights = [
  {
    id: "web",
    icon: "Globe",
    title: "Web Development",
    description: "Building modern, high-performance, and responsive web applications with clean component architecture."
  },
  {
    id: "mobile",
    icon: "Smartphone",
    title: "Mobile Development",
    description: "Creating smooth cross-platform mobile experiences for iOS and Android using React Native & Expo."
  },
  {
    id: "uiux",
    icon: "Layout",
    title: "UI/UX & Design",
    description: "Designing intuitive, accessible user interfaces with precise typography, spacing, and micro-interactions."
  }
];

export const focusAreas = [
  "Web Applications",
  "Mobile Applications",
  "UI/UX Design",
  "API Integration",
  "Authentication",
  "Responsive Design"
];

export const techStackCategories = [
  { id: "all", label: "All" },
  { id: "frontend", label: "Frontend" },
  { id: "mobile", label: "Mobile" },
  { id: "backend", label: "Backend & APIs" },
  { id: "database", label: "Database" },
  { id: "tools", label: "Tools" },
  { id: "other", label: "Other" }
];

export const techStack = [
  // Frontend
  { name: "React", category: "frontend", iconName: "Atom", level: "Expert" },
  { name: "JavaScript", category: "frontend", iconName: "Code2", level: "Expert" },
  { name: "TypeScript", category: "frontend", iconName: "FileCode2", level: "Advanced" },
  { name: "HTML5", category: "frontend", iconName: "Globe", level: "Expert" },
  { name: "CSS3", category: "frontend", iconName: "Palette", level: "Expert" },
  { name: "Tailwind CSS", category: "frontend", iconName: "Sparkles", level: "Expert" },
  { name: "Bootstrap", category: "frontend", iconName: "LayoutGrid", level: "Advanced" },

  // Mobile
  { name: "React Native", category: "mobile", iconName: "Smartphone", level: "Expert" },
  { name: "Expo", category: "mobile", iconName: "Zap", level: "Expert" },

  // Backend & APIs
  { name: "Java", category: "backend", iconName: "Coffee", level: "Intermediate" },
  { name: "Spring Boot", category: "backend", iconName: "Server", level: "Intermediate" },
  { name: "REST APIs", category: "backend", iconName: "ArrowRightLeft", level: "Advanced" },
  { name: "JWT", category: "backend", iconName: "KeyRound", level: "Advanced" },
  { name: "JSON", category: "backend", iconName: "FileJson", level: "Expert" },

  // Database
  { name: "MySQL", category: "database", iconName: "Database", level: "Intermediate" },
  { name: "Firebase", category: "database", iconName: "Flame", level: "Advanced" },

  // Tools
  { name: "Git", category: "tools", iconName: "GitBranch", level: "Advanced" },
  { name: "GitHub", category: "tools", iconName: "Github", level: "Advanced" },
  { name: "Figma", category: "tools", iconName: "Figma", level: "Advanced" },
  { name: "Postman", category: "tools", iconName: "Send", level: "Advanced" },
  { name: "IntelliJ IDEA", category: "tools", iconName: "Terminal", level: "Intermediate" },
  { name: "VS Code", category: "tools", iconName: "Code", level: "Expert" },

  // Other
  { name: "AdMob", category: "other", iconName: "Megaphone", level: "Advanced" },
  { name: "Firebase Authentication", category: "other", iconName: "ShieldCheck", level: "Advanced" },
  { name: "Firebase Firestore", category: "other", iconName: "Layers", level: "Advanced" },
  { name: "ModelMapper", category: "other", iconName: "Repeat", level: "Intermediate" },
  { name: "Hibernate", category: "other", iconName: "Cpu", level: "Intermediate" }
];

export const projects = [
  {
    id: "ai-dog-identifier",
    title: "AI Dog Breed Identifier",
    tag: "AI / Mobile App",
    category: "mobile",
    description: "AI-powered mobile application that identifies dog breeds instantly using artificial intelligence and camera recognition.",
    fullDescription: "AI Dog Breed Identifier is a cutting-edge mobile application designed to identify dog breeds in real time. Powered by Google's Gemini Vision API and built with React Native & Expo, it delivers high-accuracy breed recognition, detailed physical trait summaries, care guidelines, temperament insights, and monetized ad integration.",
    technologies: ["React Native", "Expo", "Gemini API", "Tailwind CSS", "AdMob"],
    features: [
      "Real-time AI camera scanning & gallery photo upload",
      "Comprehensive breed profiles & care recommendations",
      "Scanned breed history & favorite bookmarks",
      "Monetized using Google AdMob banner & interstitial ads"
    ],
    github: "https://github.com/kavee137",
    liveUrl: "https://github.com/kavee137",
    playStore: "https://play.google.com/store",
    accentColor: "indigo",
    badgeType: "Featured Mobile"
  },
  {
    id: "cloud-attend",
    title: "Cloud Attend",
    tag: "Mobile App",
    category: "mobile",
    description: "A mobile attendance management application designed to simplify attendance tracking, reporting, and staff management.",
    fullDescription: "Cloud Attend is a streamlined mobile solution built for organizations to monitor attendance effortlessly. Featuring real-time Firebase syncing, employee check-in/check-out logs, automated monthly reporting, and AdMob integration, Cloud Attend eliminates manual paperwork.",
    technologies: ["React Native", "Firebase", "AdMob"],
    features: [
      "One-tap employee check-in and check-out tracking",
      "Real-time Firebase Cloud Firestore data sync",
      "Automated attendance logs & summary reports",
      "AdMob integration for ad monetization"
    ],
    github: "https://github.com/kavee137",
    playStore: "https://play.google.com/store",
    buttonText: "View on Google Play",
    accentColor: "blue",
    badgeType: "Google Play App"
  },
  {
    id: "live-bus-tracking",
    title: "Live Bus Tracking Application",
    tag: "Mobile App",
    category: "mobile",
    description: "A mobile application that allows users to track buses in real-time and access live transportation info and schedules.",
    fullDescription: "Live Bus Tracking Application empowers commuters with real-time transit awareness. Built with React Native, Firebase, and custom geolocation REST APIs, commuters can view live bus positions on interactive maps, calculate accurate ETA arrival predictions, and receive route updates.",
    technologies: ["React Native", "Firebase", "REST API"],
    features: [
      "Live GPS location mapping for active public buses",
      "Estimated time of arrival (ETA) calculation engine",
      "Route search & bus stop bookmarking",
      "Push alerts for delays and schedule changes"
    ],
    github: "https://github.com/kavee137",
    liveUrl: "https://github.com/kavee137",
    accentColor: "sky",
    badgeType: "Transit App"
  },
  {
    id: "classified-ads-platform",
    title: "Classified Ads Platform",
    tag: "Fullstack Web",
    category: "web",
    description: "A modern classified advertisement platform inspired by marketplace applications, designed for Sri Lankan users.",
    fullDescription: "Classified Ads Platform is a full-stack e-commerce marketplace built specifically for Sri Lankan buyers and sellers. It features robust backend authentication with Spring Boot and JWT, Hibernate ORM data access, dynamic location filters, multi-image upload workflows, user messaging, and a responsive React frontend interface.",
    technologies: ["Spring Boot", "Hibernate", "MySQL", "JWT", "React"],
    features: [
      "Secure JWT user registration, login & session handling",
      "Comprehensive ad creation, edit, renewal & deletion lifecycle",
      "Hierarchical categories, Sri Lankan district & city filters",
      "Multi-image file upload & Cloud storage integration",
      "Saved favorite ads & saved filter alerts",
      "Direct buyer-to-seller messaging portal"
    ],
    github: "https://github.com/kavee137",
    liveUrl: "https://github.com/kavee137",
    accentColor: "violet",
    badgeType: "Fullstack Web"
  },
  {
    id: "tailor-shop-management",
    title: "Tailor Shop Management System",
    tag: "Desktop System",
    category: "fullstack",
    description: "A desktop management system designed to manage tailoring customers, custom orders, payments, and business operations.",
    fullDescription: "Tailor Shop Management System is a specialized desktop ERP application created with Java, JavaFX, and MySQL. It empowers tailoring businesses to catalog customer body measurements, manage garment order pipelines, track payment installments, and print professional customer receipts using JasperReports.",
    technologies: ["Java", "JavaFX", "MySQL", "JasperReports"],
    features: [
      "Customer body measurement database & historical logs",
      "Custom order status tracking (Received, Stitching, Trial, Ready)",
      "Payment processing & invoice printing via JasperReports",
      "Material inventory monitoring & revenue summaries"
    ],
    github: "https://github.com/kavee137",
    liveUrl: "https://github.com/kavee137",
    accentColor: "emerald",
    badgeType: "Desktop ERP"
  }
];

export const whatIBring = [
  {
    title: "Clean Code",
    description: "Writing maintainable, reusable, and scalable frontend code following industry best practices and design patterns.",
    icon: "Code2"
  },
  {
    title: "Responsive Design",
    description: "Creating fluid interfaces that adapt seamlessly across mobile phones, tablets, laptops, and ultra-wide displays.",
    icon: "MonitorSmart"
  },
  {
    title: "API Integration",
    description: "Connecting frontend UIs with RESTful APIs, JSON data schemas, Firebase backend services, and JWT authentication.",
    icon: "Workflow"
  },
  {
    title: "UI/UX Focus",
    description: "Translating wireframes and Figma designs into pixel-perfect, intuitive, and visually pleasing user experiences.",
    icon: "Sparkles"
  },
  {
    title: "Problem Solving",
    description: "Deconstructing complex technical challenges into modular, practical, and efficient software solutions.",
    icon: "Lightbulb"
  },
  {
    title: "Performance",
    description: "Building lightweight, lightning-fast web and mobile apps optimized for low latency and smooth animations.",
    icon: "Zap"
  }
];

export const experienceTimeline = [
  {
    role: "Associate Frontend Engineer (Web & Mobile)",
    type: "Port City BPO (200M)",
    period: "Sep 2026 – Present",
    description: "Engaged in hands-on web and mobile frontend engineering projects, focusing on responsive web applications, cross-platform mobile development, clean UI engineering, API integration, and seamless user experiences.",
    highlights: [
      "Developed responsive web interfaces and cross-platform mobile application features using React and React Native.",
      "Built reusable and customizable UI components based on Figma designs and project requirements.",
      "Integrated RESTful APIs, Firebase Authentication, and Cloud Firestore across web and mobile applications.",
      "Implemented responsive layouts and optimized user interfaces for different screen sizes and devices.",
      "Utilized Git & GitHub for feature branching, collaborative development, commit workflows, and version management.",
      "Assisted in testing, debugging, performance optimization, and resolving frontend issues across web and mobile platforms."
    ],
    tech: [
      "React",
      "React Native",
      "Expo",
      "JavaScript",
      "Tailwind CSS",
      "REST APIs",
      "Firebase",
      "Git",
      "GitHub"
    ]
  },
  {
    role: "React Native Mobile Developer Intern",
    type: "Cybernetic Technologies (Pvt) Ltd",
    period: "Recent / Practical Experience",
    description: "Engaged in hands-on frontend and mobile engineering projects focusing on cross-platform application development and clean UI engineering.",
    highlights: [
      "Developed mobile application features using React Native and Expo based on mockups.",
      "Integrated RESTful APIs, Firebase Authentication, and Cloud Firestore databases.",
      "Utilized Git & GitHub for feature branching, commit workflows, and version management.",
      "Implemented responsive layouts and customizable UI components for mobile and web views.",
      "Assisted in testing, debugging, and optimizing app performance and load times."
    ],
    tech: ["React Native", "Expo", "REST APIs", "Firebase", "Git", "GitHub", "JavaScript", "Tailwind CSS"]
  }
];

export const uiuxDesignTokens = {
  title: "Design Meets Development",
  subtitle: "I also have a strong interest in UI/UX design and enjoy converting ideas and Figma designs into polished, functional interfaces.",
  tools: ["Figma", "Mobile UI", "Responsive Design", "Wireframing", "Design Systems"]
};

export const stats = [
  { label: "Development Experience", value: 2, suffix: "+ years" },
  { label: "Projects Built", value: 5, suffix: "+" },
  { label: "Platforms — Web & Mobile", value: 2, suffix: "" },
  { label: "Technologies Mastered", value: 10, suffix: "+" }
];
