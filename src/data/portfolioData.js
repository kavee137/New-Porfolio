import cvPdf from '../assets/MobileDeveloper.pdf';

export const personalInfo = {
  name: "Kaveesha Rukshan",
  role: "Mobile Application Developer & Frontend Engineer",
  title: "Undergraduate | BSc(Hons) in Computer Science",
  specialization: "React Native Mobile & Frontend Development",
  headline: "Mobile Application Developer building scalable, real-world digital experiences.",
  bio: "A motivated and enthusiastic Mobile Application Developer currently pursuing BSc(Hons) in Computer Science, with hands-on industry experience in React Native mobile application development. Experienced in building and deploying real-world mobile applications to the Google Play Store.",
  aboutDetailed: "A motivated and enthusiastic Mobile Application Developer currently pursuing BSc(Hons) in Computer Science, with six months of hands-on industry experience in React Native mobile application development. Experienced in building and deploying real-world mobile applications. Eager to further enhance technical skills while contributing to impactful projects in a collaborative environment.",
  availabilityBadge: "Available for Opportunities",
  location: "Mathugama, Sri Lanka",
  phone: "+94705879156",
  cvPdf: cvPdf,
  socials: {
    github: "https://github.com/kavee137",
    linkedin: "https://linkedin.com/in/kaveesha-rukshan/",
    email: "kaveesharukshan137@gmail.com",
    playConsole: "https://play.google.com/store/apps/dev?id=8535787029159101193"
  },
  devCardSnippet: {
    tag: "<Mobile & Frontend Dev />",
    skills: ["React Native", "Expo", "TypeScript", "JavaScript", "Firebase"],
    code: `const developer = {
  name: "Kaveesha Rukshan",
  role: "Mobile App Developer",
  focus: "React Native & Expo",
  platforms: ["Android", "iOS", "Web"],
  status: "ready_to_build"
};`
  }
};

export const aboutHighlights = [
  {
    id: "mobile",
    icon: "Smartphone",
    title: "Mobile Application Development",
    description: "Developing and deploying cross-platform mobile applications using React Native, Expo, and Firebase with Google Play publishing experience."
  },
  {
    id: "web",
    icon: "Globe",
    title: "Web & Frontend Engineering",
    description: "Building responsive, modern, and high-performance web applications using React, TypeScript, and Tailwind CSS."
  },
  {
    id: "uiux",
    icon: "Layout",
    title: "UI/UX Design",
    description: "Designing intuitive and user-friendly mobile application interfaces with modern UI/UX principles, wireframing, and Figma."
  }
];

export const focusAreas = [
  "React Native Apps",
  "Expo & EAS Build",
  "Google Play Console",
  "Firebase & Cloud APIs",
  "UI/UX Mobile Design",
  "AdMob Monetization"
];

export const techStackCategories = [
  { id: "all", label: "All" },
  { id: "mobile", label: "Mobile" },
  { id: "languages", label: "Languages" },
  { id: "frameworks", label: "Frameworks & Libraries" },
  { id: "cloud", label: "Cloud & Version Control" },
  { id: "design", label: "UI/UX & Tools" }
];

export const techStack = [
  // Mobile & Frameworks
  { name: "React Native", category: "mobile", iconName: "Smartphone", level: "Expert" },
  { name: "Expo", category: "mobile", iconName: "Zap", level: "Expert" },
  { name: "ReactJS", category: "frameworks", iconName: "Atom", level: "Expert" },
  { name: "Redux", category: "frameworks", iconName: "Layers", level: "Advanced" },
  { name: "Context API", category: "frameworks", iconName: "Repeat", level: "Expert" },
  { name: "EAS Build", category: "mobile", iconName: "Terminal", level: "Advanced" },
  { name: "Android Studio", category: "mobile", iconName: "Smartphone", level: "Advanced" },
  { name: "Xcode", category: "mobile", iconName: "Smartphone", level: "Intermediate" },

  // Languages
  { name: "TypeScript", category: "languages", iconName: "FileCode2", level: "Advanced" },
  { name: "JavaScript", category: "languages", iconName: "Code2", level: "Expert" },
  { name: "Java", category: "languages", iconName: "Coffee", level: "Intermediate" },
  { name: "HTML5", category: "languages", iconName: "Globe", level: "Expert" },
  { name: "CSS3", category: "languages", iconName: "Palette", level: "Expert" },
  { name: "Nativewind", category: "languages", iconName: "Sparkles", level: "Advanced" },
  { name: "SQL", category: "languages", iconName: "Database", level: "Intermediate" },

  // Cloud, Platforms & OS
  { name: "Firebase", category: "cloud", iconName: "Flame", level: "Advanced" },
  { name: "Google AdMob", category: "cloud", iconName: "Megaphone", level: "Advanced" },
  { name: "Google Play Console", category: "cloud", iconName: "Smartphone", level: "Expert" },
  { name: "GCP", category: "cloud", iconName: "Server", level: "Intermediate" },
  { name: "Git", category: "cloud", iconName: "GitBranch", level: "Advanced" },
  { name: "GitHub", category: "cloud", iconName: "Github", level: "Advanced" },

  // Tools & Design
  { name: "Figma", category: "design", iconName: "Figma", level: "Advanced" },
  { name: "Tailwind CSS", category: "design", iconName: "Sparkles", level: "Expert" },
  { name: "API Integration", category: "frameworks", iconName: "ArrowRightLeft", level: "Expert" },
  { name: "VS Code", category: "design", iconName: "Code", level: "Expert" }
];

export const projects = [
  {
    id: "cloud-attend",
    title: "Cloud Attend - QR Attendance App",
    tag: "Mobile App • Play Store",
    category: "mobile",
    description: "Successfully deployed and published on Google Play Store. Built with React Native, TypeScript, Expo, Google AdMob, Firebase Authentication, QR code–based attendance, and emailJS.",
    technologies: ["React Native", "TypeScript", "Expo", "AdMob", "Firebase", "QR Code", "EmailJS"],
    github: "https://github.com/kavee137",
    playStore: "https://play.google.com/store/apps/dev?id=8535787029159101193",
    badgeType: "Google Play Store",
    accentColor: "blue"
  },
  {
    id: "calq-calculator",
    title: "CalQ - Simple Calculator App",
    tag: "Mobile App • Play Store",
    category: "mobile",
    description: "Published on the Google Play Store. Built using React Native, TypeScript, Expo, and TailwindCSS, supporting core arithmetic operations including addition, subtraction, multiplication, and division.",
    technologies: ["React Native", "TypeScript", "Expo", "TailwindCSS"],
    github: "https://github.com/kavee137",
    playStore: "https://play.google.com/store/apps/dev?id=8535787029159101193",
    badgeType: "Google Play Store",
    accentColor: "emerald"
  },
  {
    id: "naviq-bus-tracking",
    title: "NaviQ - Bus Tracking App",
    tag: "Mobile App • APK",
    category: "mobile",
    description: "Real-time bus tracking mobile app with Firebase synchronization and live GPS updates. Features interactive map visualization to display live bus routes, location ETA, and seamless user experience.",
    technologies: ["React Native", "TypeScript", "Expo", "Tailwind CSS", "Firebase", "GPS Mapping"],
    github: "https://github.com/kavee137",
    liveUrl: "https://github.com/kavee137",
    badgeType: "Live Bus Tracking",
    accentColor: "sky"
  },
  {
    id: "ai-dog-identifier",
    title: "Dog Breed Identifier — AI Identify App",
    tag: "AI Mobile App • Ongoing",
    category: "mobile",
    description: "React Native mobile application that identifies dog breeds using Google Gemini API with AI-powered image analysis. Integrated Google AdMob for in-app advertising and responsive modern UI.",
    technologies: ["React Native", "Gemini API", "AdMob", "Tailwind CSS", "Expo"],
    github: "https://github.com/kavee137",
    liveUrl: "https://github.com/kavee137",
    badgeType: "AI Vision App",
    accentColor: "indigo"
  },
  {
    id: "classified-ads-platform",
    title: "Classified Ads Platform",
    tag: "Fullstack Web",
    category: "web",
    description: "A full-stack e-commerce marketplace with Spring Boot backend, JWT authentication, Hibernate ORM data access, MySQL database, multi-image upload workflows, and responsive React UI.",
    technologies: ["Spring Boot", "React", "Hibernate", "MySQL", "JWT"],
    github: "https://github.com/kavee137",
    liveUrl: "https://github.com/kavee137",
    badgeType: "Fullstack Web",
    accentColor: "violet"
  }
];

export const whatIBring = [
  {
    title: "Mobile Architecture",
    description: "Developing cross-platform mobile applications using React Native and Expo with clean state management and modular architecture.",
    icon: "Smartphone"
  },
  {
    title: "Play Store Deployment",
    description: "Hands-on experience publishing mobile applications to the Google Play Store, managing release tracks, and analyzing metrics.",
    icon: "Workflow"
  },
  {
    title: "UI/UX & Design",
    description: "Designing intuitive, user-friendly mobile interfaces in Figma and implementing them into pixel-perfect responsive code.",
    icon: "Sparkles"
  },
  {
    title: "API & Cloud Sync",
    description: "Integrating RESTful APIs, Firebase Authentication, Cloud Firestore real-time synchronization, and emailJS.",
    icon: "Zap"
  },
  {
    title: "Clean Code & Performance",
    description: "Writing maintainable, readable, and typed code using TypeScript and industry best practices for smooth performance.",
    icon: "Code2"
  },
  {
    title: "Monetization & Tools",
    description: "Integrating Google AdMob ads, analytics, Git/GitHub version workflows, Android Studio, and Expo Application Services (EAS).",
    icon: "Lightbulb"
  }
];

export const experienceTimeline = [
  {
    role: "Mobile App Developer Intern",
    company: "Cybernetic Technologies Pvt Ltd",
    type: "Onsite",
    location: "Battaramulla, Sri Lanka",
    period: "09/2025 - 02/2026",
    description: "Developed and maintained cross-platform mobile applications using React Native and Expo, focusing on responsive UI, smooth user experiences, and efficient application performance.",
    highlights: [
      "Developed and maintained cross-platform mobile applications using React Native and Expo.",
      "Focused on building responsive UI, smooth animations, and optimized application performance.",
      "Collaborated onsite with senior engineers on mobile feature delivery and API integrations."
    ],
    tech: ["React Native", "Expo", "TypeScript", "JavaScript", "Firebase", "Git", "GitHub"]
  },
  {
    role: "Google Play Console Management & App Publishing",
    company: "Personal Developer Account",
    type: "Independent",
    location: "Online",
    period: "2022 - Present",
    description: "Own and manage a Google Play Console account for publishing mobile applications, handling app releases, updates, and monitoring performance analytics.",
    highlights: [
      "Successfully built, tested, and published standalone mobile applications to Google Play Store.",
      "Handled APK/AAB bundle signing, store listings, privacy policies, and release tracks.",
      "Monitored app analytics, user feedback, and rolling out updates."
    ],
    tech: ["Google Play Console", "React Native", "Expo EAS", "Google AdMob", "Android Studio"]
  },
  {
    role: "UI/UX Designer",
    company: "Freelance / Projects",
    type: "Design",
    location: "Sri Lanka",
    period: "2022 - Present",
    description: "Specialized in designing intuitive and user-friendly mobile application interfaces using modern UI/UX principles. Focused on creating responsive, visually appealing designs that enhance user experience and usability.",
    highlights: [
      "Created wireframes, interactive prototypes, and modern UI mockups in Figma.",
      "Engineered design systems with consistent typography, spacing, and color tokens.",
      "Bridged design and implementation seamlessly in React Native and React."
    ],
    tech: ["Figma", "UI/UX Design", "Wireframing", "Prototyping", "Design Systems"]
  }
];

export const educationList = [
  {
    degree: "BSc (Hons) in Computer Science (topup)",
    institution: "London Metropolitan University",
    campus: "Next Campus, Colombo 10",
    period: "06/2026 - 2027"
  },
  {
    degree: "HND in Software Engineering",
    institution: "IJSE - Institute of Software Engineering",
    campus: "50B Grace Peiris Rd, Panadura",
    period: "08/2023 - 06/2026"
  },
  {
    degree: "Advanced Level, Commerce",
    institution: "Mihindu National College",
    campus: "Agalawatta",
    period: "2014 - 2022"
  }
];

export const achievements = [
  {
    title: "1st Place Winner — TeaTune AI",
    description: "Achieved 1st Place with project BlueField Tea factory Management system featuring the innovative AI solution TeaTune AI.",
    badge: "1st Place Award"
  }
];

export const uiuxDesignTokens = {
  title: "Design Meets Development",
  subtitle: "Specialized in designing intuitive and user-friendly mobile application interfaces using modern UI/UX principles.",
  tools: ["Figma", "Mobile UI", "Responsive Design", "Wireframing", "Design Systems"]
};

export const stats = [
  { label: "Development Experience", value: 2, suffix: "+ years" },
  { label: "Apps on Play Store", value: 2, suffix: " Published" },
  { label: "Platforms — Mobile & Web", value: 2, suffix: "" },
  { label: "Core Technologies", value: 12, suffix: "+" }
];
