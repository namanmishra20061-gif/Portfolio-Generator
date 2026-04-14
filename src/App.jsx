import React, { useState } from 'react';
import { 
  Code, Server, Database, Cloud, Activity, Lock, 
  Shield, Key, Paintbrush, Layout, Smartphone, 
  Gamepad, Box, Layers, Play, Building, Map, Pickaxe, 
  Leaf, Dna, TestTube, Cross, Settings, PenTool, Zap, 
  Palette, Wrench, FolderCog, ArrowLeft, Send, ExternalLink, GitBranch,
  Briefcase, Rocket, Terminal, Monitor, Plus, Trash2, X, Type, Sparkles 
} from 'lucide-react';

const Github = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="none"
  >
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const Linkedin = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="none"
  >
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);
import AnimatedBackground from './components/AnimatedBackground';

/* =========================================================================
   1. OFFLINE AUTO-GENERATOR ENGINE (Local Data Dictionary)
   ========================================================================= */

const templates = {
  web: {
    heroSubtitles: [
      "I build things for the web.",
      "Crafting pixel-perfect web experiences.",
      "Turning complex ideas into interactive reality.",
      "Architecting the future of digital interaction.",
      "Engineering seamless digital journeys."
    ],
    taglines: [
      "Building exceptional digital experiences from front to back.",
      "Full-Stack Engineer with a passion for scalable systems.",
      "Developing modern web solutions with precision and flair.",
      "Bridging the gap between robust logic and beautiful design.",
      "Creating performant applications for the modern web."
    ],
    abouts: [
      "I'm a passionate software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products. I enjoy bridging the gap between engineering and design.",
      "With a strong foundation in both frontend and backend technologies, I thrive on solving complex technical challenges. My approach combines clean code with intuitive user experiences to deliver products that make a real impact.",
      "I am a developer who believes in the power of the open web. My journey in tech is driven by curiosity and a commitment to continuous learning, always striving to stay at the forefront of modern development practices."
    ],
    skills: [
      { category: "Frontend", icon: "Layout", items: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Redux", "Framer Motion"] },
      { category: "Backend", icon: "Server", items: ["Node.js", "Express", "Python", "Django", "GraphQL", "REST APIs"] },
      { category: "Database", icon: "Database", items: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "Supabase"] },
      { category: "DevOps & Tools", icon: "Cloud", items: ["Docker", "AWS", "Git", "GitHub Actions", "Vercel", "Linux"] }
    ],
    projects: [
      { title: "E-Commerce OS", description: "A comprehensive headless e-commerce platform built with modern web technologies. Features include real-time inventory management, payment processing integration, and an intuitive admin dashboard.", tech: ["Next.js", "Node.js", "PostgreSQL", "Stripe"], live: "#", github: "#", color: "from-blue-600 to-indigo-700" },
      { title: "TaskFlow Pro", description: "A collaborative project management tool designed for agile teams. Includes real-time updates, kanban boards, role-based access control, and automated progress tracking.", tech: ["React", "Firebase", "Tailwind CSS", "Redux"], live: "#", github: "#", color: "from-emerald-600 to-teal-700" }
    ]
  },
  data: {
    heroSubtitles: [
      "I find patterns in big chaos.",
      "Unlocking insights through data science.",
      "Turning raw numbers into strategic intelligence.",
      "Decoding the language of big data.",
      "Engineering the future with predictive analytics."
    ],
    taglines: [
      "Data Scientist transforming raw data into actionable intelligence.",
      "Architecting predictive models for real-world impact.",
      "Statistical analyst dedicated to data-driven decision making.",
      "Leveraging machine learning to solve unstructured problems.",
      "Designing complex data pipelines for high-velocity environments."
    ],
    abouts: [
      "I'm a data scientist specializing in building predictive models and data-driven solutions. I leverage machine learning and statistical analysis to solve unstructured problems and turn complex data into actionable insights.",
      "My passion lies in finding the signal in the noise. I combine mathematical rigor with creative problem-solving to help organizations make smarter, faster decisions based on hard evidence.",
      "Dedicated to the ethical application of AI, I work at the intersection of data engineering and research. I'm constantly exploring new ways to make complex datasets accessible and meaningful."
    ],
    skills: [
      { category: "Machine Learning", icon: "Activity", items: ["TensorFlow", "PyTorch", "Scikit-Learn", "XGBoost", "Deep Learning"] },
      { category: "Data Engineering", icon: "Database", items: ["SQL", "Spark", "Airflow", "Hadoop", "Snowflake", "ETL"] },
      { category: "Analysis", icon: "Terminal", items: ["Pandas", "NumPy", "Jupyter", "R", "Statsmodels"] },
      { category: "Visualization", icon: "Monitor", items: ["Tableau", "PowerBI", "Matplotlib", "D3.js", "Seaborn"] }
    ],
    projects: [
      { title: "Predictive Analytics Engine", description: "A system that predicts market trends using advanced time-series forecasting and ensemble models.", tech: ["Python", "TensorFlow", "Pandas"], live: "#", github: "#", color: "from-amber-500 to-orange-600" },
      { title: "Network Intrusion Detector", description: "Real-time anomaly detection system using unsupervised learning to identify potential security breaches.", tech: ["PyTorch", "Kafka", "scikit-learn"], live: "#", github: "#", color: "from-red-500 to-rose-600" }
    ]
  },
  cyber: {
    heroSubtitles: [
      "I secure the digital frontier.",
      "Defending complex networks from modern threats.",
      "Securing data in an insecure world.",
      "The shield between you and the cyber-threat.",
      "Engineering resilience in digital ecosystems."
    ],
    taglines: [
      "Cybersecurity Analyst specializing in threat detection and zero-trust.",
      "Protecting critical infrastructure through advanced offensive security.",
      "Security architect focused on identity and access management.",
      "Incident responder dedicated to rapid threat mitigation.",
      "Pentester uncovering vulnerabilities before they're exploited."
    ],
    abouts: [
      "I work defensively to secure networks, applications, and endpoints against sophisticated cyber threats. My background involves penetration testing, security auditing, and implementing robust incident response protocols.",
      "My mission is to stay one step ahead of adversaries. I combine deep technical knowledge of network protocols with a strategic mindset to build truly resilient organizations.",
      "I believe security is a mindset, not just a set of tools. I focus on building systems that are secure by design, ensuring that user data and privacy are protected at every layer of the stack."
    ],
    skills: [
      { category: "Offensive", icon: "Lock", items: ["Penetration Testing", "Metasploit", "Burp Suite", "Kali Linux"] },
      { category: "Defensive", icon: "Shield", items: ["SIEM (Splunk)", "Firewalls", "IDS/IPS", "Endpoint Security"] },
      { category: "Cryptography", icon: "Key", items: ["PKI", "TLS/SSL", "AES", "Hash Functions"] },
      { category: "Compliance", icon: "Shield", items: ["ISO 27001", "NIST", "GDPR", "SOC 2"] }
    ],
    projects: [
      { title: "Zero-Trust Architecture", description: "Redesigned corporate network enforcing zero-trust principles across all endpoints.", tech: ["Cisco", "Palo Alto", "Okta"], live: "#", github: "#", color: "from-slate-700 to-slate-900" },
      { title: "Incident Auto-Responder", description: "SIEM integration for automated isolation of compromised hosts in real-time.", tech: ["Splunk", "Python", "AWS"], live: "#", github: "#", color: "from-red-600 to-rose-700" }
    ]
  },
  design: {
    heroSubtitles: [
      "I design intuitive experiences.",
      "Shaping the way people interact with tech.",
      "Pixel-perfect design with a human touch.",
      "Crafting beauty from complex functionality.",
      "Creating interfaces that feel like second nature."
    ],
    taglines: [
      "UI/UX Designer creating pixel-perfect, human-centric interfaces.",
      "Product Designer bridging the gap between user needs and business goals.",
      "Visual storyteller dedicated to accessible and elegant design.",
      "Interaction designer focused on motion and micro-interactions.",
      "UX Architect structuring complex information for clarity."
    ],
    abouts: [
      "I bridge the gap between human behavior and digital interfaces. My design philosophy is rooted in empathy, accessibility, and clean aesthetics, taking products from initial wireframes to high-fidelity prototypes.",
      "I believe great design is invisible. I focus on creating seamless experiences that guide users naturally toward their goals, using research and data to inform every pixel I place.",
      "Design is more than just making things look pretty—it's about making them work better for everyone. I'm dedicated to building inclusive products that are as usable as they are beautiful."
    ],
    skills: [
      { category: "UI Design", icon: "Paintbrush", items: ["Figma", "Sketch", "Adobe XD", "Framer"] },
      { category: "UX Research", icon: "Layout", items: ["User Interviews", "Wireframing", "A/B Testing", "Personas"] },
      { category: "Visuals", icon: "Type", items: ["Typography", "Color Theory", "Illustrator", "Photoshop"] },
      { category: "Prototyping", icon: "Smartphone", items: ["InVision", "Protopie", "Origami", "Webflow"] }
    ],
    projects: [
      { title: "Fintech App Redesign", description: "Overhauled the user experience for a mobile banking app with over 1M users.", tech: ["Figma", "Protopie", "User Testing"], live: "#", github: "#", color: "from-pink-400 to-rose-400" },
      { title: "Design System", description: "Created a comprehensive UI kit and design system for a global SaaS brand.", tech: ["Figma", "Storybook", "React UI"], live: "#", github: "#", color: "from-purple-400 to-indigo-400" }
    ]
  },
  mobile: {
    heroSubtitles: [
      "I build the next generation of mobile experiences.",
      "Creating fluid mobile apps for iOS and Android.",
      "Your vision, in the palm of your hand.",
      "Engineering mobile-first digital journeys.",
      "Crafting buttery-smooth app interactions."
    ],
    taglines: [
      "Mobile Engineer focused on performance and UX.",
      "Native & Cross-platform developer (Swift, Kotlin, React Native).",
      "Architecting high-performance mobile applications.",
      "Building accessible and feature-rich mobile products.",
      "Bridging the gap between mobile platforms and user needs."
    ],
    abouts: [
      "I specialize in building high-performance mobile applications with a focus on user experience and system efficiency. Whether native or cross-platform, I aim for excellence at every touchpoint.",
      "My passion lies in creating mobile experiences that feel like second nature. I combine deep technical knowledge of mobile SDKs with a keen eye for design and performance.",
      "I believe the best apps are those that empower users on the go. My development process prioritizes accessibility, smooth animations, and robust offline capabilities."
    ],
    skills: [
      { category: "Mobile Dev", icon: "Smartphone", items: ["Swift", "Kotlin", "React Native", "Flutter", "Objective-C"] },
      { category: "Architecture", icon: "Layers", items: ["MVVM", "Clean Architecture", "Combine", "Jetpack Compose"] },
      { category: "Tools", icon: "Zap", items: ["Xcode", "Android Studio", "Firebase", "App Store Connect", "TestFlight"] }
    ],
    projects: [
      { title: "FitPulse Mobile", description: "A high-performance fitness tracking app with real-time biometric synchronization and offline-first data management.", tech: ["Swift", "CoreData", "HealthKit"], live: "#", github: "#", color: "from-orange-500 to-red-600" },
      { title: "EcoTravel App", description: "Cross-platform travel assistant focused on sustainable tourism and interactive mapping.", tech: ["React Native", "Google Maps API", "Node.js"], live: "#", github: "#", color: "from-green-500 to-emerald-700" }
    ]
  },
  devops: {
    heroSubtitles: [
      "Architecting resilient cloud infrastructures.",
      "Automating the path from code to production.",
      "Bridging the gap between dev and ops.",
      "Engineering 99.9% uptime and scalability.",
      "Securing the modern cloud ecosystem."
    ],
    taglines: [
      "Cloud Architect expert in AWS, Docker, and Kubernetes.",
      "SRE dedicated to operational excellence and automation.",
      "Automation Engineer streamlining CI/CD pipelines.",
      "Security-first DevOps enthusiast building reliable systems.",
      "Optimizing infrastructure for the high-velocity cloud."
    ],
    abouts: [
      "I specialize in creating robust cloud architectures and automating development workflows. My focus is on scalability, security, and maximizing developer productivity through intelligent automation.",
      "With a background in both software engineering and systems administration, I build bridges between development and operations. I thrive in complex, high-availability environments.",
      "I believe that reliable infrastructure is the foundation of every great product. I focus on building self-healing systems and lightning-fast CI/CD pipelines."
    ],
    skills: [
      { category: "Cloud & Infrastructure", icon: "Cloud", items: ["AWS", "Azure", "GCP", "Terraform", "CloudFormation"] },
      { category: "Containers & Orchestration", icon: "Box", items: ["Docker", "Kubernetes", "Helm", "ECS", "Fargate"] },
      { category: "CI/CD & Automation", icon: "Activity", items: ["Jenkins", "GitHub Actions", "GitLab CI", "Ansible", "Python"] },
      { category: "Monitoring & Security", icon: "Shield", items: ["Prometheus", "Grafana", "ELK Stack", "Vault", "Snyk"] }
    ],
    projects: [
      { title: "AutoDeploy Cloud", description: "A fully automated infrastructure setup for microservices using Terraform and Kubernetes on AWS.", tech: ["Terraform", "EKS", "AWS"], live: "#", github: "#", color: "from-cyan-500 to-blue-700" },
      { title: "LogGuard Ops", description: "Centralized logging and real-time security monitoring system for enterprise-scale distributed applications.", tech: ["ELK Stack", "Python", "Kubernetes"], live: "#", github: "#", color: "from-slate-700 to-slate-900" }
    ]
  },
  game: {
    heroSubtitles: [
      "Crafting immersive worlds and interactive stories.",
      "Bringing pixels to life with code.",
      "Building the games of tomorrow.",
      "Engineering interactive experiences.",
      "Designing the mechanics of play."
    ],
    taglines: [
      "Game Developer expert in Unity, Unreal Engine, and C++.",
      "Independent developer focused on gameplay systems and mechanics.",
      "Technical Artist bridging the gap between art and code.",
      "Gameplay engineer dedicated to fluid player interaction.",
      "Architecting complex game loops and AI systems."
    ],
    abouts: [
      "I am a game developer passionate about creating worlds that players can get lost in. My work focuses on the intersection of tight gameplay mechanics, immersive storytelling, and optimized performance.",
      "With a deep understanding of game physics and AI, I build systems that bring virtual environments to life. I believe games are the ultimate medium for creative expression.",
      "My approach to game development is player-centric. I focus on creating intuitive controls and rewarding feedback loops that keep players engaged and coming back for more."
    ],
    skills: [
      { category: "Engines & Tools", icon: "Gamepad", items: ["Unity", "Unreal Engine", "Godot", "Blender", "Maya"] },
      { category: "Languages", icon: "Terminal", items: ["C#", "C++", "HLSL/GLSL", "Lua", "Python"] },
      { category: "Systems", icon: "Activity", items: ["Game AI", "Physics Engine", "Multiplayer/Networking", "Shaders"] }
    ],
    projects: [
      { title: "Neon Drifter", description: "A fast-paced cyber-punk racing game with custom physics and procedural track generation.", tech: ["Unity", "C#", "HLSL"], live: "#", github: "#", color: "from-fuchsia-600 to-indigo-700" },
      { title: "Shadow Tactics", description: "Turn-based strategy game with deep AI-driven tactical elements and custom-built map editor.", tech: ["Unreal Engine", "C++", "Blueprints"], live: "#", github: "#", color: "from-amber-600 to-orange-800" }
    ]
  },
  civil: {
    heroSubtitles: [
      "Designing the physical world of tomorrow.",
      "Architecting sustainable urban environments.",
      "Building the foundations of modern society.",
      "Engineering precision into every structure.",
      "Shaping the skyline through innovative design."
    ],
    taglines: [
      "Civil Engineer specializing in structural integrity and sustainability.",
      "Project Manager focused on large-scale infrastructure and urban planning.",
      "Architectural engineer bridging form and function.",
      "Sustainability consultant for green building initiatives.",
      "Structural analyst dedicated to safety and efficiency."
    ],
    abouts: [
      "I am a structural engineer dedicated to building safe, sustainable, and efficient infrastructure. My work involves designing the backbone of our cities, from residential complexes to large-scale transportation systems.",
      "My passion lies in sustainable urban development. I combine classical engineering principles with modern technology to create structures that serve the community while respecting the environment.",
      "I believe that great engineering is invisible but essential. I focus on precision, durability, and the long-term impact of the built environment on society."
    ],
    skills: [
      { category: "Design Tools", icon: "PenTool", items: ["AutoCAD", "Revit", "Civil 3D", "SAP2000", "STAAD.Pro"] },
      { category: "Core Expertise", icon: "Map", items: ["Structural Analysis", "Geotechnical Engineering", "Urban Planning", "BIM"] },
      { category: "Field", icon: "Building", items: ["Construction Management", "Surveying", "Material Science", "Safety Standards"] }
    ],
    projects: [
      { title: "Green Bridge Initiative", description: "Structural design for a sustainable, low-carbon emission bridge connecting urban centers.", tech: ["Revit", "SAP2000", "BIM"], live: "#", github: "#", color: "from-emerald-600 to-teal-800" },
      { title: "Urban Sky Complex", description: "Comprehensive structural analysis and project management for a 50-story eco-friendly residential tower.", tech: ["AutoCAD", "STAAD.Pro", "Project Mgmt"], live: "#", github: "#", color: "from-blue-600 to-indigo-800" }
    ]
  },
  bio: {
    heroSubtitles: [
      "Innovating at the intersection of biology and tech.",
      "Engineering the future of human health.",
      "Discovering solutions in the code of life.",
      "Advancing medicine through computational biology.",
      "Bridging the gap between laboratory and clinic."
    ],
    taglines: [
      "Biotechnology Researcher focused on genetic engineering and CRISPR.",
      "Biomedical Engineer designing next-gen diagnostic tools.",
      "Bioinformatics specialist unlocking insights from genomic data.",
      "Healthcare tech innovator dedicated to patient-centric solutions.",
      "Clinical researcher bridging bench-side science to bedside medicine."
    ],
    abouts: [
      "I am a biotechnology professional dedicated to improving human health through scientific innovation. My work focuses on leveraging biological systems to solve some of the world's most pressing medical challenges.",
      "My passion lies at the intersection of data and biology. I use computational tools to analyze complex biological datasets, driving progress in personalized medicine and drug discovery.",
      "I believe that the next great technological revolution will be biological. I am committed to the ethical advancement of biotech to create a healthier, more resilient future for all."
    ],
    skills: [
      { category: "Research", icon: "TestTube", items: ["Molecular Biology", "CRISPR/Cas9", "Cell Culture", "Protein Engineering"] },
      { category: "Analysis", icon: "Dna", items: ["Genomics", "Proteomics", "Bioinformatics", "R/Bioconductor", "Python"] },
      { category: "Clinical", icon: "Cross", items: ["Diagnostic Dev", "FDA Regulations", "Clinical Trials", "Medical Devices"] }
    ],
    projects: [
      { title: "Genomic Insight Tool", description: "A cloud-based platform for rapid analysis of large-scale genomic datasets for cancer research.", tech: ["Python", "AWS", "Bioinformatics"], live: "#", github: "#", color: "from-indigo-500 to-purple-700" },
      { title: "NeuroSync BioDevice", description: "Design and prototype of a wearable non-invasive neural monitoring system for home-care patients.", tech: ["MATLAB", "Embedded Systems", "Bio-Sensors"], live: "#", github: "#", color: "from-rose-500 to-pink-700" }
    ]
  },
  mech: {
    heroSubtitles: [
      "Engineering precision in motion.",
      "Building the robots of tomorrow.",
      "Designing systems for a physical world.",
      "Bridging the gap between hardware and software.",
      "Innovating in mechanical design and automation."
    ],
    taglines: [
      "Robotics Engineer specializing in autonomous systems and control.",
      "Mechanical Designer expert in CAD, prototyping, and manufacturing.",
      "Mechatronics specialist focused on integrated hardware-software systems.",
      "Automotive engineer dedicated to high-performance vehicle dynamics.",
      "Hardware developer bringing complex physical products to life."
    ],
    abouts: [
      "I am a mechanical engineer with a passion for building things that move. My work involves the design, analysis, and prototyping of complex mechanical systems, from robots to industrial machinery.",
      "I thrive at the intersection of hardware and software. By integrating sensors, actuators, and intelligent control, I build systems that can interact with and adapt to the physical world.",
      "Precision and reliability are at the core of my design philosophy. I am dedicated to creating mechanical solutions that are as elegant as they are functional."
    ],
    skills: [
      { category: "Design & CAD", icon: "Settings", items: ["SolidWorks", "Fusion 360", "CATIA", "3D Printing", "Simulation"] },
      { category: "Core Expertise", icon: "Zap", items: ["Robotics", "Control Systems", "Thermodynamics", "Materials Science"] },
      { category: "Hardware", icon: "Activity", items: ["Arduino", "Raspberry Pi", "PLCs", "Sensors & Actuators"] }
    ],
    projects: [
      { title: "OmniBot V1", description: "Design and assembly of an autonomous omnidirectional robot for warehouse logistics.", tech: ["SolidWorks", "ROS2", "Python"], live: "#", github: "#", color: "from-slate-600 to-slate-800" },
      { title: "TurboDynamics System", description: "Optimized cooling system for high-performance electric vehicles reducing thermal load by 25%.", tech: ["Ansys", "MATLAB", "Mechanical Design"], live: "#", github: "#", color: "from-blue-700 to-indigo-900" }
    ]
  },
  default: {
    heroSubtitles: [
      "I solve complex problems.",
      "Dedicated to impactful innovation.",
      "Engineering solutions for a better world.",
      "Bringing strategic vision to technical challenges.",
      "Translating ideas into scalable results."
    ],
    taglines: [
      "Professional building impactful and innovative solutions.",
      "Strategic thinker dedicated to operational excellence.",
      "Problem solver focused on efficiency and high-quality results.",
      "Collaborative leader driving technical growth.",
      "Adaptable specialist with a passion for learning."
    ],
    abouts: [
      "I am a dedicated professional with a proven track record of delivering high-quality results. I adapt quickly to new challenges and strive to stay at the forefront of my field through continuous growth.",
      "My approach is rooted in analytical thinking and clear communication. I thrive in collaborative environments where I can leverage my skills to solve real-world problems effectively.",
      "I believe in the power of persistent improvement. Whether working solo or in a team, I focus on delivering value that exceeds expectations."
    ],
    skills: [
      { category: "Core Expertise", icon: "Zap", items: ["Strategic Planning", "Problem Solving", "Analytics"] },
      { category: "Tools", icon: "Code", items: ["Spreadsheets", "Workflow Automation", "Project Management"] },
      { category: "Management", icon: "Layers", items: ["Agile", "Leadership", "Communication"] }
    ],
    projects: [
      { title: "Process Excellence", description: "Streamlined operational workflows reducing turnaround time by 40% using automation.", tech: ["Analytics", "Strategy", "Automation"], live: "#", github: "#", color: "from-slate-600 to-slate-800" }
    ]
  }
};

const iconMap = { Code, Server, Database, Cloud, Activity, Lock, Shield, Key, Paintbrush, Layout, Type, Smartphone, Gamepad, Box, Layers, Play, Building, Map, Pickaxe, Leaf, Dna, TestTube, Cross, Settings, PenTool, Zap, Terminal, Monitor, Github, Linkedin };

const getIcon = (name) => {
  const IconCmp = iconMap[name] || Zap;
  return <IconCmp className="w-5 h-5" />;
};

const generateProfileData = (role) => {
  const r = role.toLowerCase();
  let template = templates.default;
  
  if (r.match(/web|front|back|full stack|software|react|node/)) template = templates.web;
  else if (r.match(/data|machine|ai|python|analytics/)) template = templates.data;
  else if (r.match(/cyber|security|hacker|pentest/)) template = templates.cyber;
  else if (r.match(/design|ui|ux|art|product|visual/)) template = templates.design;
  else if (r.match(/mobile|ios|android|swift|kotlin|react native/)) template = templates.mobile;
  else if (r.match(/devops|cloud|sre|aws|azure|docker|kubernetes|infrastructure/)) template = templates.devops;
  else if (r.match(/game|unity|3d|unreal|graphics/)) template = templates.game;
  else if (r.match(/civil|architecture|structural|construction/)) template = templates.civil;
  else if (r.match(/bio|medical|genetic|health|pharma/)) template = templates.bio;
  else if (r.match(/mech|auto|aero|robotics|hardware|engine/)) template = templates.mech;

  const random = (arr) => arr[Math.floor(Math.random() * arr.length)];
  
  return {
    heroSubtitle: random(template.heroSubtitles),
    tagline: random(template.taglines),
    about: random(template.abouts),
    aboutSecondary: template.aboutSecondary || "Outside of my core professional work, I'm passionate about exploring new cultures, reading scientific journals, and mentoring junior professionals.",
    skills: template.skills,
    projects: template.projects
  };
};

/* =========================================================================
   2. THEME SYSTEM
   ========================================================================= */

const themes = {
  dark: {
    bgApp: '#020617',    // deep slate-950
    bgCard: '#0f172a',   // slate-900
    bgInput: '#020617',  // deeper slate
    bgBorder: '#1e293b', // slate-800
    textMain: '#f8fafc', // slate-50
    textMuted: '#94a3b8',// slate-400
    accentMain: '#6366f1',// indigo-500
    accentHover: '#4f46e5',// indigo-600
    canvasRGB: '99, 102, 241'
  },
  emerald: {
    bgApp: '#022c22',    // teal-950
    bgCard: '#00261c',   // darker
    bgInput: '#042f2e',  // teal-900
    bgBorder: '#115e59', // teal-800
    textMain: '#f0fdfa', // teal-50
    textMuted: '#5eead4',// teal-300
    accentMain: '#10b981',// emerald-500
    accentHover: '#059669',// emerald-600
    canvasRGB: '16, 185, 129'
  },
  ocean: {
    bgApp: '#082f49',    // sky-900
    bgCard: '#0c4a6e',   // sky-900
    bgInput: '#0369a1',  // sky-700
    bgBorder: '#0284c7', // sky-600
    textMain: '#f0f9ff', // sky-50
    textMuted: '#7dd3fc',// sky-300
    accentMain: '#0ea5e9',// sky-500
    accentHover: '#0284c7',// sky-600
    canvasRGB: '14, 165, 233'
  },
  cyberpunk: {
    bgApp: '#1a0b2e',    // deep dark purple
    bgCard: '#2d1b4e',
    bgInput: '#3d2568',
    bgBorder: '#ec4899', // pink-500
    textMain: '#fbcfe8', // pink-200
    textMuted: '#f472b6',// pink-400
    accentMain: '#22d3ee',// cyan-400
    accentHover: '#06b6d4',// cyan-500
    canvasRGB: '236, 72, 153'
  }
};

const ThemeStyles = ({ theme }) => {
  const current = themes[theme] || themes.dark;
  return (
    <style dangerouslySetInnerHTML={{__html: `
      :root {
        --bg-app: ${current.bgApp};
        --bg-card: ${current.bgCard};
        --bg-input: ${current.bgInput};
        --bg-border: ${current.bgBorder};
        --text-main: ${current.textMain};
        --text-muted: ${current.textMuted};
        --accent-main: ${current.accentMain};
        --accent-hover: ${current.accentHover};
      }
      body {
        background-color: var(--bg-app);
        color: var(--text-main);
      }
      .theme-card { background-color: rgba(15, 23, 42, 0.8); border-color: rgba(255, 255, 255, 0.1); backdrop-filter: blur(12px); }
      .theme-input { background-color: rgba(2, 6, 23, 0.6); border-color: rgba(255, 255, 255, 0.05); color: var(--text-main); }
      .theme-input:focus { border-color: var(--accent-main); }
      .theme-text-muted { color: var(--text-muted); }
      .theme-text-main { color: var(--text-main); }
      .theme-border { border-color: rgba(255, 255, 255, 0.1); }
      .theme-bg-accent { background-color: var(--accent-main); }
      .theme-bg-accent:hover { background-color: var(--accent-hover); }
      .theme-text-accent { color: var(--accent-main); }
      .theme-ring-accent:focus { outline-color: var(--accent-main); ring-color: var(--accent-main); border-color: var(--accent-main); }
    `}} />
  );
};




/* =========================================================================
   4. MODALS
   ========================================================================= */

const ModalWrapper = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="theme-card border theme-border rounded-2xl w-full max-w-2xl max-h-[85vh] overflow-y-auto z-10 p-6 shadow-2xl relative">
        <button onClick={onClose} className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors">
          <X className="w-5 h-5 theme-text-muted" />
        </button>
        <h2 className="text-2xl font-bold mb-6 theme-text-main">{title}</h2>
        {children}
      </div>
    </div>
  );
};

/* =========================================================================
   4. COMPONENTS
   ========================================================================= */

const InputField = ({ label, name, value, type = "text", as = "input", onRegenerate, onChange }) => (
  <div className="flex flex-col gap-1 mb-4 relative group">
    <div className="flex justify-between items-center mb-1">
      <label className="text-sm font-medium theme-text-muted">{label}</label>
      {onRegenerate && (
        <button 
          type="button" 
          onClick={onRegenerate}
          className="text-[10px] font-bold theme-text-accent uppercase tracking-wider flex items-center gap-1 hover:underline opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Sparkles className="w-2.5 h-2.5" /> Shuffle
        </button>
      )}
    </div>
    {as === "textarea" ? (
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        className="theme-input outline-none border p-3 rounded-lg focus:ring-2 theme-ring-accent w-full min-h-[100px]"
      />
    ) : (
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="theme-input outline-none border p-3 rounded-lg focus:ring-2 theme-ring-accent w-full"
      />
    )}
  </div>
);

/* =========================================================================
   5. MAIN COMPONENT (App)
   ========================================================================= */

export default function App() {
  const [isGenerated, setIsGenerated] = useState(false);
  const [theme, setTheme] = useState('dark');
  
  const [personalInfo, setPersonalInfo] = useState({
    name: "Alex Mercer",
    email: "alex@example.com",
    role: "Full-Stack Developer",
    heroSubtitle: "I build things for the web.",
    tagline: "Building exceptional digital experiences from front to back.",
    about: "I'm a passionate software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products. I enjoy bridging the gap between engineering and design.",
    aboutSecondary: "When I'm not at the computer, I'm usually hanging out with my friends, reading, or exploring new technologies.",
    github: "https://github.com/alex",
    linkedin: "https://linkedin.com/in/alex"
  });

  const [skills, setSkills] = useState(templates.web.skills);
  const [projects, setProjects] = useState(templates.web.projects);

  const [isProjectsModalOpen, setIsProjectsModalOpen] = useState(false);
  const [isSkillsModalOpen, setIsSkillsModalOpen] = useState(false);
  
  // Theme Switcher dropdown state
  const [isThemeDropdownOpen, setIsThemeDropdownOpen] = useState(false);

  const handleAutoFill = () => {
    const data = generateProfileData(personalInfo.role);
    setPersonalInfo(prev => ({
      ...prev,
      heroSubtitle: data.heroSubtitle,
      tagline: data.tagline,
      about: data.about,
      aboutSecondary: data.aboutSecondary
    }));
    setSkills(data.skills);
    setProjects(data.projects);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo(prev => ({ ...prev, [name]: value }));
  };



  return (
    <div className="relative min-h-screen font-sans selection:bg-indigo-500/30">
      <ThemeStyles theme={theme} />
      <AnimatedBackground theme={theme} role={personalInfo.role || 'web'} />
      
      {/* ----------------- SETUP PHASE ----------------- */}
      {!isGenerated ? (
        <div className="relative z-10 flex items-center justify-center min-h-screen p-4 sm:p-8">
          <div className="theme-card border theme-border shadow-2xl rounded-2xl w-full max-w-4xl p-6 sm:p-10 backdrop-blur-md bg-opacity-80">
            
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#1e293b]/80 border border-white/10 text-indigo-400 mb-6 shadow-2xl shadow-indigo-500/20">
                <Sparkles className="w-8 h-8" />
              </div>
              <h1 className="text-5xl font-black tracking-tight theme-text-main mb-3">Portfolio Generator</h1>
              <p className="theme-text-muted text-lg max-w-xl mx-auto opacity-80">
                Enter your profile details below to instantly generate your customized, professional developer portfolio.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
              <InputField label="Full Name" name="name" value={personalInfo.name} onChange={handleInputChange} />
              <InputField label="Email Address" name="email" value={personalInfo.email} type="email" onChange={handleInputChange} />
              
              <div className="flex flex-col gap-1 mb-4 col-span-1 md:col-span-2">
                <label className="text-sm font-medium theme-text-muted">Job Title / Role</label>
                <input
                  type="text"
                  name="role"
                  value={personalInfo.role}
                  onChange={handleInputChange}
                  className="theme-input outline-none border p-3 rounded-lg focus:ring-2 theme-ring-accent w-full text-lg font-semibold"
                  placeholder="e.g. Web development"
                />
                <button 
                  type="button" 
                  onClick={handleAutoFill}
                  className="mt-2 text-xs font-semibold theme-text-accent flex items-center gap-1 w-fit px-3 py-1.5 rounded-md bg-indigo-500/10 hover:bg-indigo-500/20 transition-colors"
                >
                  <Sparkles className="w-3 h-3" /> Auto-generate Entire Portfolio with AI
                </button>
              </div>

              <InputField 
                label="Hero Phrase" 
                name="heroSubtitle" 
                value={personalInfo.heroSubtitle} 
                onChange={handleInputChange}
                onRegenerate={() => {
                  const data = generateProfileData(personalInfo.role);
                  setPersonalInfo(prev => ({ ...prev, heroSubtitle: data.heroSubtitle }));
                }}
              />
              <InputField 
                label="Tagline" 
                name="tagline" 
                value={personalInfo.tagline} 
                onChange={handleInputChange}
                onRegenerate={() => {
                  const data = generateProfileData(personalInfo.role);
                  setPersonalInfo(prev => ({ ...prev, tagline: data.tagline }));
                }}
              />
              
              <div className="col-span-1 md:col-span-2">
                <InputField 
                  label="About Me" 
                  name="about" 
                  value={personalInfo.about} 
                  as="textarea" 
                  onChange={handleInputChange}
                  onRegenerate={() => {
                    const data = generateProfileData(personalInfo.role);
                    setPersonalInfo(prev => ({ ...prev, about: data.about }));
                  }}
                />
              </div>

              <InputField label="GitHub URL" name="github" value={personalInfo.github} onChange={handleInputChange} />
              <InputField label="LinkedIn URL" name="linkedin" value={personalInfo.linkedin} onChange={handleInputChange} />
            </div>

            <div className="mt-10 flex justify-center">
              <button 
                onClick={() => setIsGenerated(true)}
                className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all hover:scale-[1.01] active:scale-[0.99] shadow-2xl shadow-indigo-500/30"
              >
                <Sparkles className="w-5 h-5" /> Generate Portfolio
              </button>
            </div>
            
          </div>
        </div>
      ) : (
        /* ----------------- GENERATED PORTFOLIO PHASE ----------------- */
        <div className="relative z-10 w-full">
          
          {/* Navbar */}
          <nav className="fixed top-0 w-full backdrop-blur-md border-b theme-border bg-black/40 z-40">
            <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
              <div className="font-bold text-2xl tracking-tighter theme-text-main flex items-center gap-2 font-mono">
                <span className="theme-text-accent">&gt;_</span> {personalInfo.name.toLowerCase().replace(' ', '.')}.dev
              </div>
              
              <div className="flex items-center gap-6 sm:gap-8">
                <div className="hidden lg:flex items-center gap-8 text-sm font-medium theme-text-muted">
                  <a href="#about" className="hover:theme-text-main transition">About</a>
                  <a href="#skills" className="hover:theme-text-main transition">Skills</a>
                  <a href="#projects" className="hover:theme-text-main transition">Projects</a>
                  <a href="#contact" className="hover:theme-text-main transition">Contact</a>
                </div>
                <button onClick={() => setIsSkillsModalOpen(true)} className="p-2 hidden md:flex items-center gap-2 rounded-lg hover:bg-white/10 theme-text-muted transition">
                  <Wrench className="w-4 h-4" /> <span className="text-sm font-medium">Edit Skills</span>
                </button>
                <button onClick={() => setIsProjectsModalOpen(true)} className="p-2 hidden md:flex items-center gap-2 rounded-lg hover:bg-white/10 theme-text-muted transition">
                  <FolderCog className="w-4 h-4" /> <span className="text-sm font-medium">Edit Projects</span>
                </button>
                
                <div className="relative">
                  <button onClick={() => setIsThemeDropdownOpen(!isThemeDropdownOpen)} className="p-2 flex items-center gap-2 rounded-lg hover:bg-white/10 theme-text-muted transition">
                    <Palette className="w-4 h-4" />
                  </button>
                  {isThemeDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 theme-card border theme-border rounded-xl shadow-xl overflow-hidden py-2" onClick={() => setIsThemeDropdownOpen(false)}>
                      <div className="px-4 py-1 text-xs font-bold theme-text-muted uppercase tracking-wider mb-1">Themes</div>
                      {Object.keys(themes).map(t => (
                        <button key={t} onClick={() => setTheme(t)} className="w-full text-left px-4 py-2 text-sm hover:bg-white/10 theme-text-main capitalize">
                          {t} {t === theme && '✓'}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </nav>

          {/* Hero Section */}
          <section className="min-h-screen flex items-center justify-center px-6 pt-20">
            <div className="max-w-4xl w-full space-y-4">
              <div className="theme-text-accent font-mono text-sm sm:text-lg mb-2">Hi, my name is</div>
              <h1 className="text-5xl md:text-8xl font-black tracking-tight theme-text-main leading-tight">
                {personalInfo.name}.
              </h1>
              <h2 className="text-4xl md:text-7xl font-bold tracking-tight theme-text-muted opacity-80 leading-tight">
                {personalInfo.heroSubtitle}
              </h2>
              <p className="text-lg md:text-xl theme-text-muted max-w-xl font-light pt-2">
                {personalInfo.tagline}
              </p>
              
              <div className="pt-10 flex flex-wrap items-center gap-4">
                <a href="#projects" className="theme-bg-accent text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:opacity-90 transition shadow-xl shadow-indigo-500/20">
                  <Code className="w-5 h-5" /> Check out my work
                </a>
                <a href={personalInfo.github} target="_blank" rel="noreferrer" className="p-4 rounded-xl theme-card border theme-border hover:bg-white/10 transition theme-text-main flex items-center gap-3 font-semibold px-8 shadow-xl shadow-black/20">
                  <Github className="w-5 h-5" /> GitHub
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="p-4 rounded-xl theme-card border theme-border hover:bg-white/10 transition theme-text-main flex items-center gap-3 font-semibold px-8 shadow-xl shadow-black/20">
                  <Linkedin className="w-5 h-5" /> LinkedIn
                </a>
              </div>
            </div>
          </section>

          {/* About & Skills Section */}
          <section id="about" className="py-24 px-6 relative z-10">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
              
              <div className="lg:col-span-2 space-y-8">
                <div className="flex items-center gap-4 mb-4">
                  <h2 className="text-3xl font-bold theme-text-main flex items-center gap-3">
                    <span className="theme-text-accent font-mono text-xl">01.</span> About Me
                  </h2>
                  <div className="h-px bg-white/10 flex-grow"></div>
                </div>
                
                <div className="space-y-4 theme-text-muted leading-relaxed text-lg max-w-2xl">
                  <p>{personalInfo.about}</p>
                  <p>{personalInfo.aboutSecondary}</p>
                </div>
                
                <div className="pt-6">
                  <button className="text-sm font-semibold theme-text-accent flex items-center gap-1 hover:underline">
                    Download Resume <ArrowLeft className="w-4 h-4 rotate-[135deg]" />
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="py-24 px-6 relative z-10 border-t border-white/5">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-4 mb-12">
                <h2 className="text-3xl font-bold theme-text-main flex items-center gap-3">
                  <span className="theme-text-accent font-mono text-xl">02.</span> Technical Arsenal
                </h2>
                <div className="h-px bg-white/10 w-64"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {skills.map((skillGroup, idx) => (
                  <div key={idx} className="theme-card border theme-border p-6 rounded-2xl hover:border-[var(--accent-main)] transition-all duration-300 group">
                    <div className="flex flex-col items-center text-center gap-4 mb-6">
                      <div className="p-3 rounded-lg theme-input theme-text-accent group-hover:bg-[var(--accent-main)] group-hover:text-white transition">
                        {getIcon(skillGroup.icon)}
                      </div>
                      <h3 className="text-xl font-bold theme-text-main">{skillGroup.category}</h3>
                    </div>
                    <ul className="space-y-3">
                      {skillGroup.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm theme-text-muted">
                          <div className="w-1.5 h-1.5 rounded-full theme-bg-accent"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-32 px-6 max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-20">
              <h2 className="text-3xl font-bold theme-text-main flex items-center gap-3">
                <span className="theme-text-accent font-mono text-xl">03.</span> Some Things I've Built
              </h2>
              <div className="h-px bg-white/10 w-96"></div>
            </div>

            <div className="space-y-40">
              {projects.map((proj, idx) => (
                <div key={idx} className={`relative flex flex-col items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
                  
                  {/* Image Container */}
                  <div className="w-full lg:w-3/5 aspect-[16/10] rounded-xl overflow-hidden relative group shadow-2xl">
                     <div className={`absolute inset-0 bg-gradient-to-br ${proj.color || 'from-indigo-600 to-blue-700'} opacity-30 group-hover:opacity-10 transition-opacity duration-500`}></div>
                     <div className="w-full h-full bg-[#111827] flex items-center justify-center p-12">
                        <Code className="w-32 h-32 text-white/5 opacity-40 group-hover:scale-110 transition duration-700" />
                     </div>
                  </div>

                  {/* Overlapping Content Box */}
                  <div className={`w-full lg:w-1/2 mt-8 lg:mt-0 lg:absolute ${idx % 2 === 1 ? 'lg:left-0 lg:text-left' : 'lg:right-0 lg:text-right'} z-20 space-y-4 pointer-events-none`}>
                    <div className="pointer-events-auto">
                      <div className="text-sm font-mono theme-text-accent mb-1 px-4">Featured Project</div>
                      <h3 className="text-3xl font-extrabold theme-text-main mb-6 px-4">{proj.title}</h3>
                      
                      <div className="theme-card border theme-border p-6 rounded-xl shadow-2xl backdrop-blur-xl relative z-10 bg-opacity-95">
                        <p className="theme-text-muted text-lg leading-relaxed">{proj.description}</p>
                      </div>

                      <div className={`flex flex-wrap gap-x-4 gap-y-2 pt-6 px-4 ${idx % 2 === 1 ? 'justify-start' : 'justify-end'}`}>
                         {proj.tech.map((t, i) => (
                           <span key={i} className="text-sm font-mono theme-text-muted opacity-80">
                             {t}
                           </span>
                         ))}
                      </div>

                      <div className={`flex items-center gap-6 pt-6 px-4 ${idx % 2 === 1 ? 'justify-start' : 'justify-end'}`}>
                        <a href={proj.github} className="theme-text-main hover:theme-text-accent transition">
                          <Github className="w-6 h-6" />
                        </a>
                        <a href={proj.live} className="theme-text-main hover:theme-text-accent transition">
                          <ExternalLink className="w-6 h-6" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Contact & Footer Section */}
          <section id="contact" className="py-32 px-6 relative z-10 border-t border-white/5">
            <div className="max-w-4xl mx-auto text-center space-y-12">
              <div className="space-y-4">
                <h2 className="text-xl font-mono theme-text-accent">04. What's Next?</h2>
                <h3 className="text-5xl font-black theme-text-main">Get In Touch</h3>
                <p className="text-lg theme-text-muted max-w-xl mx-auto leading-relaxed">
                  Although I'm not currently looking for any new opportunities, my inbox is always open. 
                  Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
              </div>

              {/* Contact Form */}
              <div className="theme-card border theme-border p-8 rounded-2xl shadow-2xl backdrop-blur-xl text-left max-w-2xl mx-auto">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold theme-text-muted">Name</label>
                      <input 
                        type="text" 
                        defaultValue={personalInfo.name}
                        placeholder="John Doe" 
                        className="w-full theme-input border theme-border px-4 py-3 rounded-xl focus:ring-2 theme-ring-accent outline-none transition"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold theme-text-muted">Email</label>
                      <input 
                        type="email" 
                        defaultValue={personalInfo.email}
                        placeholder="john@example.com" 
                        className="w-full theme-input border theme-border px-4 py-3 rounded-xl focus:ring-2 theme-ring-accent outline-none transition"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold theme-text-muted">Message</label>
                    <textarea 
                      rows={5} 
                      placeholder="Your message here..." 
                      className="w-full theme-input border theme-border px-4 py-3 rounded-xl focus:ring-2 theme-ring-accent outline-none transition resize-none"
                    />
                  </div>
                  <button 
                    type="submit"
                    className="w-full theme-bg-accent text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 active:scale-95 transition shadow-lg shadow-indigo-500/20"
                  >
                    Send Message <Send className="w-4 h-4 ml-1" />
                  </button>
                </form>
              </div>

              {/* Footer Bottom */}
              <div className="mt-32 pt-12 border-t theme-border flex flex-col md:flex-row items-center justify-between gap-6 opacity-60">
                <p className="theme-text-muted text-sm">&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
                <button 
                  onClick={() => setIsGenerated(false)}
                  className="theme-text-muted hover:theme-text-main transition text-sm flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/5 hover:border-white/20"
                >
                  <ArrowLeft className="w-4 h-4" /> Back to Builder
                </button>
              </div>
            </div>
          </section>

        </div>
      )}

      {/* ----------------- MODALS ----------------- */}
      
      {/* Edit Skills Modal */}
      <ModalWrapper isOpen={isSkillsModalOpen} onClose={() => setIsSkillsModalOpen(false)} title="Manage Skills">
        <div className="space-y-6">
          {skills.map((sf, idx) => (
            <div key={idx} className="theme-input border theme-border p-4 rounded-xl relative group">
              <button onClick={() => setSkills(skills.filter((_, i) => i !== idx))} className="absolute top-4 right-4 text-red-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition">
                <Trash2 className="w-4 h-4" />
              </button>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                 <div>
                   <label className="text-xs font-semibold theme-text-muted mb-1 block">Category</label>
                   <input type="text" value={sf.category} onChange={e => {
                     const n = [...skills]; n[idx].category = e.target.value; setSkills(n);
                   }} className="w-full bg-transparent border-b theme-border outline-none py-1 theme-text-main" />
                 </div>
                 <div>
                   <label className="text-xs font-semibold theme-text-muted mb-1 block">Icon Name (lucide)</label>
                   <input type="text" value={sf.icon} onChange={e => {
                     const n = [...skills]; n[idx].icon = e.target.value; setSkills(n);
                   }} className="w-full bg-transparent border-b theme-border outline-none py-1 theme-text-main" />
                 </div>
              </div>
              <div>
                <label className="text-xs font-semibold theme-text-muted mb-1 block">Items (Comma separated)</label>
                <textarea rows={2} value={sf.items.join(', ')} onChange={e => {
                  const n = [...skills]; n[idx].items = e.target.value.split(',').map(s=>s.trim()); setSkills(n);
                }} className="w-full bg-transparent border theme-border rounded py-1 px-2 outline-none theme-text-main text-sm" />
              </div>
            </div>
          ))}
          <button onClick={() => setSkills([...skills, { category: 'New Category', icon: 'Box', items: ['Item 1'] }])} className="w-full py-3 rounded-xl border border-dashed theme-border flex items-center justify-center gap-2 theme-text-muted hover:theme-text-main hover:bg-white/5 transition">
            <Plus className="w-4 h-4" /> Add Skill Category
          </button>
          <div className="flex justify-end pt-4">
            <button onClick={() => setIsSkillsModalOpen(false)} className="theme-bg-accent text-white px-6 py-2 rounded-lg font-bold">Done</button>
          </div>
        </div>
      </ModalWrapper>

      {/* Edit Projects Modal */}
      <ModalWrapper isOpen={isProjectsModalOpen} onClose={() => setIsProjectsModalOpen(false)} title="Manage Projects">
        <div className="space-y-6">
          {projects.map((proj, idx) => (
            <div key={idx} className="theme-input border theme-border p-4 rounded-xl relative group">
              <button onClick={() => setProjects(projects.filter((_, i) => i !== idx))} className="absolute top-4 right-4 text-red-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition z-10 bg-black/50 p-1 rounded">
                <Trash2 className="w-4 h-4" />
              </button>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                 <div>
                   <label className="text-xs font-semibold theme-text-muted mb-1 block">Title</label>
                   <input type="text" value={proj.title} onChange={e => {
                     const n = [...projects]; n[idx].title = e.target.value; setProjects(n);
                   }} className="w-full bg-transparent border-b theme-border outline-none py-1 theme-text-main font-bold" />
                 </div>
                 <div>
                   <label className="text-xs font-semibold theme-text-muted mb-1 block">Gradient Colors (Tailwind)</label>
                   <input type="text" value={proj.color} onChange={e => {
                     const n = [...projects]; n[idx].color = e.target.value; setProjects(n);
                   }} className="w-full bg-transparent border-b theme-border outline-none py-1 theme-text-muted text-sm font-mono" />
                 </div>
              </div>
              
              <div className="mb-4">
                <label className="text-xs font-semibold theme-text-muted mb-1 block">Description</label>
                <textarea rows={2} value={proj.description} onChange={e => {
                  const n = [...projects]; n[idx].description = e.target.value; setProjects(n);
                }} className="w-full bg-transparent border theme-border rounded py-1 px-2 outline-none theme-text-main text-sm" />
              </div>

              <div className="mb-4">
                <label className="text-xs font-semibold theme-text-muted mb-1 block">Tech Stack (Comma separated)</label>
                <input type="text" value={proj.tech.join(', ')} onChange={e => {
                  const n = [...projects]; n[idx].tech = e.target.value.split(',').map(s=>s.trim()); setProjects(n);
                }} className="w-full bg-transparent border-b theme-border outline-none py-1 theme-text-main text-sm" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                   <label className="text-xs font-semibold theme-text-muted mb-1 block">GitHub URL</label>
                   <input type="text" value={proj.github} onChange={e => {
                     const n = [...projects]; n[idx].github = e.target.value; setProjects(n);
                   }} className="w-full bg-transparent border-b theme-border outline-none py-1 text-sm theme-text-muted" />
                 </div>
                 <div>
                   <label className="text-xs font-semibold theme-text-muted mb-1 block">Live URL</label>
                   <input type="text" value={proj.live} onChange={e => {
                     const n = [...projects]; n[idx].live = e.target.value; setProjects(n);
                   }} className="w-full bg-transparent border-b theme-border outline-none py-1 text-sm theme-text-muted" />
                 </div>
              </div>

            </div>
          ))}
          <button onClick={() => setProjects([...projects, { title: 'New Project', description: 'Description', tech: ['React'], live: '#', github: '#', color: 'from-blue-500 to-cyan-500' }])} className="w-full py-3 rounded-xl border border-dashed theme-border flex items-center justify-center gap-2 theme-text-muted hover:theme-text-main hover:bg-white/5 transition">
            <Plus className="w-4 h-4" /> Add Project
          </button>
          <div className="flex justify-end pt-4">
            <button onClick={() => setIsProjectsModalOpen(false)} className="theme-bg-accent text-white px-6 py-2 rounded-lg font-bold">Done</button>
          </div>
        </div>
      </ModalWrapper>

    </div>
  );
}
