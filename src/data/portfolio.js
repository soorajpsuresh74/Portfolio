// Bundled fallback content. The live site loads content from Strapi (see
// src/lib/cms.js); this is shown on a first visit until Strapi responds, or
// when VITE_STRAPI_URL isn't set. Edit content in the Strapi admin instead.

export const personal = {
  name: "Sooraj P S",
  title: "Full-Stack Developer & Application Security",
  email: "sooraj@example.com",
  phone: "",
  address: "",
  resumeUrl: "https://example.com/resume.pdf",
  links: {
    linkedin: "https://linkedin.com/in/your-handle",
    github: "https://github.com/your-handle",
  },
};

export const nav = [
  { label: "About", href: "#about" },
  { label: "What I do", href: "#capabilities" },
  { label: "Stack", href: "#stack" },
  { label: "Projects", href: "#projects" },
];

export const hero = {
  eyebrow: "sooraj@dev:~$",
  eyebrowAction: "whoami",
  headline: "Building applications, then checking how they fail.",
  accent: "fail",
  sub:
    "Full-stack developer working at the intersection of software engineering, application security, cloud infrastructure, and DevSecOps. I build SaaS applications end to end — and apply security practice throughout the build, not after it ships.",
  primaryCta: { label: "View my projects", href: "#projects" },
  secondaryCtas: [
    { label: "View my resume", href: "#resume" },
    { label: "Get in touch", href: "#contact" },
  ],
};

export const about = {
  body:
    "I build and support SaaS applications across the stack — modern JavaScript on the frontend, Node.js and Express services on the backend, and MongoDB underneath. I design and integrate APIs, manage authentication and authorization, and spend real time in production troubleshooting systems under load. Application security isn't a separate track for me — secure coding, vulnerability investigation, and remediation happen alongside the rest of the development lifecycle, not after a scan flags something.",
};

export const capabilities = [
  {
    title: "Engineering",
    dot: "#6C9BFF",
    items: [
      "Build and maintain full-stack web applications",
      "Develop frontend applications using React",
      "Build backend services and REST APIs with Node.js and Express",
      "Work with MongoDB and cloud-based infrastructure",
    ],
  },
  {
    title: "Security",
    dot: "#E8A33D",
    items: [
      "Implement authentication and authorization with Keycloak, OAuth and JWT",
      "Apply secure coding and application security practices",
      "Investigate vulnerabilities and work on remediation",
    ],
  },
  {
    title: "Infrastructure & DevOps",
    dot: "#49C7A8",
    items: [
      "Improve CI/CD workflows using Jenkins and GitHub",
      "Explore DevSecOps and cloud security practice",
      "Apply AI-assisted security analysis to existing workflows",
    ],
  },
];

export const stack = [
  {
    group: "frontend",
    items: ["React", "JavaScript (ES6+)", "HTML / CSS"],
  },
  {
    group: "backend",
    items: ["Node.js", "Express", "REST APIs", "MongoDB"],
  },
  {
    group: "auth & security",
    items: ["Keycloak", "OAuth 2.0", "JWT", "Secure coding"],
  },
  {
    group: "devops & cloud",
    items: ["Jenkins", "GitHub / CI-CD", "Cloud infrastructure"],
  },
];

export const focus = {
  intro:
    "Full-stack engineering, application security, and DevSecOps — together, not in sequence. I'm continuously strengthening my grip on secure software development, cloud security, CI/CD security, vulnerability assessment, threat intelligence, and AI-driven security analysis.",
  items: [
    {
      key: "secure_sdlc",
      value:
        "Threading security practice through the full development lifecycle, not bolting it on at release.",
    },
    {
      key: "cicd_security",
      value: "Hardening CI/CD pipelines built on Jenkins and GitHub against common attack paths.",
    },
    {
      key: "threat_intel",
      value:
        "Tracking vulnerability and threat intelligence relevant to the stacks I actually ship.",
    },
    {
      key: "ai_security",
      value:
        "Applying AI-assisted analysis to speed up vulnerability triage and remediation.",
    },
  ],
};

export const projects = [
  {
    tag: "full-stack",
    title: "Project title",
    description:
      "One or two sentences on the problem, your role, and the stack used. Swap this placeholder for a real project.",
    link: null,
  },
  {
    tag: "appsec",
    title: "Project title",
    description:
      "One or two sentences on the problem, your role, and the stack used. Swap this placeholder for a real project.",
    link: null,
  },
  {
    tag: "devsecops",
    title: "Project title",
    description:
      "One or two sentences on the problem, your role, and the stack used. Swap this placeholder for a real project.",
    link: null,
  },
];

export const contact = {
  headline: "Let's build something reliable — and check it's secure.",
};
// Resume-only content, shown on the #resume page with the sections above.
export const resume = {
  summary: about.body,
  competencies: [
    "Threat Modeling and Risk Assessment",
    "Software development",
    "Security Architecture and Design",
    "Compliance and Regulatory Knowledge",
    "IOT, Database proficiency",
    "Security Tool Proficiency",
    "Programming and Scripting",
    "Basics AI algorithms and solutions",
  ],
  experience: [
    {
      company: "Reflections Infos Systems Pvt Ltd",
      role: "Software Developer and Security Intern",
      period: "Mar 2024 - Present",
      description:
        "Learned software development and their security issues, and planning various mitigation strategies to prevent unintended application behavior and enhance overall security posture. Gained expertise in conducting security assessments and implementing robust security measures, ensuring applications are resilient against potential threats and vulnerabilities.",
    },
    {
      company: "Kerala Police Academy",
      role: "Intern",
      period: "June 2022 - July 2022",
      description:
        "Evaluated various cryptographic algorithms and their strength against breaking, ensuring data integrity and confidentiality in secure applications.",
    },
  ],
  education: [
    {
      label: "Post-graduation",
      degree: "MSc Computer Science with specialisation in Cyber Security",
      period: "2022-2024",
    },
    {
      label: "Graduation",
      degree: "BSc Computer Science with specialisation in Cyber Forensics",
      period: "2019-2022",
    },
  ],
  activities: [
    "Extending the functionality of Flake8 and SonarQube by developing custom plugins and rules to enhance code quality and security checks, contributing to improved development practices and software reliability",
  ],
};
