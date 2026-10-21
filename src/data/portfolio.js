// ==========================================
// PORTFOLIO CONTENT & CONFIGURATION
// All website content is defined in this file.
// ==========================================

export const personalInfo = {
  name: "Ansh Bhatnagar",
  initials: "AB",
  tagline: "CSE Student | Aspiring Software Developer | AI/ML & Cybersecurity Enthusiast",
  intro: "A Computer Science Engineering student passionate about building modern web experiences, exploring Artificial Intelligence, and understanding Cybersecurity. I enjoy turning ideas into practical projects while continuously improving my programming and problem-solving skills. Currently learning, building, and growing one project at a time.",
  
  // Profile photo configuration:
  // If src/assets/profile.jpg exists, it will be loaded. Otherwise, a sleek AB initials avatar is displayed.
  profileImage: "/src/assets/profile.jpg",
  
  // Resume configuration:
  // Place your resume at public/resume.pdf to make it available for download.
  resumeUrl: "/resume.pdf",

  // Social & Contact links
  email: "anshbhatnagara@gmail.com",
  github: "https://github.com/anshbhatnagara-gif",
  linkedin: "https://www.linkedin.com/in/ansh-bhatnagar-557a9a389",
  location: "Kota, Rajasthan, India",
};

export const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Journey", href: "#journey" },
  { name: "Achievements", href: "#achievements" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

export const aboutData = {
  bio: "I'm Ansh Bhatnagar, a Computer Science Engineering student at Career Point University, Kota. My primary interest is software development, especially building interactive, responsive, and user-friendly web applications. Alongside web development, I'm exploring Artificial Intelligence, Machine Learning, and Cybersecurity to understand how modern software systems are built and secured. I believe in learning by building, understanding the code behind it, and improving through consistent practice.",
  cards: [
    {
      title: "CSE Student",
      description: "Focused on core computing fundamentals and software engineering.",
      icon: "GraduationCap"
    },
    {
      title: "Aspiring Developer",
      description: "Crafting functional, accessible, and responsive user interfaces.",
      icon: "Code"
    },
    {
      title: "Project-Based Learning",
      description: "Strengthening real-world skills by turning ideas into functional code.",
      icon: "Rocket"
    },
    {
      title: "Exploring New Technologies",
      description: "Diving into modern frameworks, AI/ML concepts, and security fundamentals.",
      icon: "Sparkles"
    }
  ]
};

export const skillsData = [
  {
    category: "Programming Languages",
    skills: ["Python", "C", "JavaScript"]
  },
  {
    category: "Web Development",
    skills: ["HTML5", "CSS3", "JavaScript"]
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "VS Code"]
  },
  {
    category: "Currently Learning",
    skills: ["React", "Node.js", "Express", "MySQL", "MongoDB"]
  },
  {
    category: "Exploring",
    skills: ["Artificial Intelligence", "Machine Learning", "Cybersecurity"]
  }
];

export const educationData = [
  {
    institution: "Career Point University, Kota, Rajasthan",
    degree: "Computer Science Engineering", // CSE only, no B.Tech
    status: "Currently 2nd Year, Expected Graduation: 2028",
    description: "Building strong foundations in computer science principles, programming methodologies, data structures, and computer systems."
  }
];

export const journeyData = [
  {
    phase: "Web Foundations",
    title: "Learning web development & building responsive websites",
    description: "Gained proficiency in semantic HTML5, modern CSS3 styling, and JavaScript logic to create dynamic and responsive interfaces.",
    icon: "Layout"
  },
  {
    phase: "Full-Stack & Databases",
    title: "Learning React, Node.js, Express and databases (MySQL, MongoDB)",
    description: "Expanding into modern frontend frameworks and backend systems, API integration, and relational & document database management.",
    icon: "Server"
  },
  {
    phase: "Emerging Domains",
    title: "Exploring AI/ML and Cybersecurity fundamentals",
    description: "Investigating intelligent model architectures, data exploration, and foundational principles for securing web applications and network protocols.",
    icon: "Shield"
  },
  {
    phase: "Core Problem Solving",
    title: "Strengthening C, Python and problem-solving skills",
    description: "Continuously practicing algorithmic problem solving, clean coding techniques, and foundational computer science logic.",
    icon: "Cpu"
  }
];

export const achievementsData = [
  {
    title: "Smart India Hackathon (SIH) 2025",
    subtitle: "Internal Round",
    description: "Participated and collaborated on innovative problem statements addressing real-world technological challenges.",
    badge: "Hackathon",
    icon: "Trophy"
  },
  {
    title: "Technovision Tech Fest",
    subtitle: "College Tech Fest",
    description: "Participated with an interactive IoT project demonstrating hardware-software interfacing and automation.",
    badge: "College Fest",
    icon: "Cpu"
  },
  {
    title: "Hackathon 2026",
    subtitle: "Competitive Development",
    description: "Participated in an intensive hackathon environment, collaborating on rapid prototyping and modern application development.",
    badge: "Competition",
    icon: "Zap"
  },
  {
    title: "2nd Rank in Class",
    subtitle: "1st Year Academics",
    description: "Recognized for consistent academic diligence and strong conceptual grasp throughout the first academic year.",
    badge: "Academic Honor",
    icon: "Award"
  }
];

// Empty for now as requested. Adding items in this format: { title, issuer, year, link }
export const certificationsData = [];

export const contactData = {
  heading: "Let's Build Something Together",
  text: "I'm always interested in learning new technologies, building meaningful projects, and connecting with people who enjoy creating things with code. Have a project idea, collaboration opportunity, or just want to connect? Feel free to reach out.",
  email: "anshbhatnagara@gmail.com",
  github: "https://github.com/anshbhatnagara-gif",
  linkedin: "https://www.linkedin.com/in/ansh-bhatnagar-557a9a389",
  location: "Kota, Rajasthan, India"
};

export const footerData = {
  copyright: `© ${new Date().getFullYear()} Ansh Bhatnagar. All rights reserved.`,
  tagline: "Designed & Built by Ansh Bhatnagar"
};
