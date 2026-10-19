'use strict';

// Initial CMS content, loaded once on first start. Mirrors src/data/portfolio.js
// in the frontend so the site looks the same before anything is edited.

// Resume-only content on the profile. Phone and address are left out of the
// repo on purpose: enter them in the Strapi admin.
const resume = {
  keyCompetencies: [
    'Threat Modeling and Risk Assessment',
    'Software development',
    'Security Architecture and Design',
    'Compliance and Regulatory Knowledge',
    'IOT, Database proficiency',
    'Security Tool Proficiency',
    'Programming and Scripting',
    'Basics AI algorithms and solutions',
  ].map((text) => ({ text })),
  experience: [
    {
      company: 'Reflections Infos Systems Pvt Ltd',
      role: 'Software Developer and Security Intern',
      period: 'Mar 2024 - Present',
      description:
        'Learned software development and their security issues, and planning various mitigation strategies to prevent unintended application behavior and enhance overall security posture. Gained expertise in conducting security assessments and implementing robust security measures, ensuring applications are resilient against potential threats and vulnerabilities.',
    },
    {
      company: 'Kerala Police Academy',
      role: 'Intern',
      period: 'June 2022 - July 2022',
      description:
        'Evaluated various cryptographic algorithms and their strength against breaking, ensuring data integrity and confidentiality in secure applications.',
    },
  ],
  education: [
    {
      label: 'Post-graduation',
      degree: 'MSc Computer Science with specialisation in Cyber Security',
      period: '2022-2024',
    },
    {
      label: 'Graduation',
      degree: 'BSc Computer Science with specialisation in Cyber Forensics',
      period: '2019-2022',
    },
  ],
  activities: [
    {
      text: 'Extending the functionality of Flake8 and SonarQube by developing custom plugins and rules to enhance code quality and security checks, contributing to improved development practices and software reliability',
    },
  ],
};

module.exports = {
  resume,

  profile: {
    name: 'Sooraj P S',
    title: 'Full-Stack Developer & Application Security',
    email: 'sooraj@example.com',
    resumeUrl: 'https://example.com/resume.pdf',
    linkedinUrl: 'https://linkedin.com/in/your-handle',
    githubUrl: 'https://github.com/your-handle',
    heroEyebrow: 'sooraj@dev:~$',
    heroEyebrowAction: 'whoami',
    heroHeadline: 'Building applications, then checking how they fail.',
    heroAccent: 'fail',
    heroSub:
      'Full-stack developer working at the intersection of software engineering, application security, cloud infrastructure, and DevSecOps. I build SaaS applications end to end — and apply security practice throughout the build, not after it ships.',
    about:
      "I build and support SaaS applications across the stack — modern JavaScript on the frontend, Node.js and Express services on the backend, and MongoDB underneath. I design and integrate APIs, manage authentication and authorization, and spend real time in production troubleshooting systems under load. Application security isn't a separate track for me — secure coding, vulnerability investigation, and remediation happen alongside the rest of the development lifecycle, not after a scan flags something.",
    focusIntro:
      "Full-stack engineering, application security, and DevSecOps — together, not in sequence. I'm continuously strengthening my grip on secure software development, cloud security, CI/CD security, vulnerability assessment, threat intelligence, and AI-driven security analysis.",
    focusItems: [
      {
        key: 'secure_sdlc',
        value:
          'Threading security practice through the full development lifecycle, not bolting it on at release.',
      },
      {
        key: 'cicd_security',
        value: 'Hardening CI/CD pipelines built on Jenkins and GitHub against common attack paths.',
      },
      {
        key: 'threat_intel',
        value: 'Tracking vulnerability and threat intelligence relevant to the stacks I actually ship.',
      },
      {
        key: 'ai_security',
        value: 'Applying AI-assisted analysis to speed up vulnerability triage and remediation.',
      },
    ],
    contactHeadline: "Let's build something reliable — and check it's secure.",
    ...resume,
  },

  capabilities: [
    {
      title: 'Engineering',
      color: '#6C9BFF',
      items: [
        'Build and maintain full-stack web applications',
        'Develop frontend applications using React',
        'Build backend services and REST APIs with Node.js and Express',
        'Work with MongoDB and cloud-based infrastructure',
      ],
    },
    {
      title: 'Security',
      color: '#E8A33D',
      items: [
        'Implement authentication and authorization with Keycloak, OAuth and JWT',
        'Apply secure coding and application security practices',
        'Investigate vulnerabilities and work on remediation',
      ],
    },
    {
      title: 'Infrastructure & DevOps',
      color: '#49C7A8',
      items: [
        'Improve CI/CD workflows using Jenkins and GitHub',
        'Explore DevSecOps and cloud security practice',
        'Apply AI-assisted security analysis to existing workflows',
      ],
    },
  ],

  skillGroups: [
    { name: 'frontend', skills: ['React', 'JavaScript (ES6+)', 'HTML / CSS'] },
    { name: 'backend', skills: ['Node.js', 'Express', 'REST APIs', 'MongoDB'] },
    { name: 'auth & security', skills: ['Keycloak', 'OAuth 2.0', 'JWT', 'Secure coding'] },
    { name: 'devops & cloud', skills: ['Jenkins', 'GitHub / CI-CD', 'Cloud infrastructure'] },
  ],

  projects: [
    {
      tag: 'full-stack',
      title: 'Project title',
      description:
        'One or two sentences on the problem, your role, and the stack used. Swap this placeholder for a real project.',
    },
    {
      tag: 'appsec',
      title: 'Project title',
      description:
        'One or two sentences on the problem, your role, and the stack used. Swap this placeholder for a real project.',
    },
    {
      tag: 'devsecops',
      title: 'Project title',
      description:
        'One or two sentences on the problem, your role, and the stack used. Swap this placeholder for a real project.',
    },
  ],
};
