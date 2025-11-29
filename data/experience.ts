export interface WorkExperience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Freelance' | 'Internship';
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  location: string;
  startDate: string;
  endDate: string;
}

export const workExperience: WorkExperience[] = [
  {
    id: "oxy-creative-parttime",
    company: "OXY Creative",
    position: "WordPress Developer (Part-time)",
    location: "Remote",
    startDate: "2022-09",
    current: true,
    description: "Part-time WordPress developer providing website maintenance and editing services for various client projects.",
    responsibilities: [
      "Website maintenance and updates",
      "Website editing and content management",
      "Bug fixes and troubleshooting",
      "Feature implementation and enhancements",
      "Client support and communication"
    ],
    achievements: [
      "Maintained long-term partnership spanning 2+ years",
      "Consistently delivered quality updates and maintenance",
      "Provided reliable support for multiple client projects",
      "Ensured website stability and performance"
    ],
    technologies: ["WordPress", "PHP", "HTML5", "CSS3", "JavaScript", "Various Page Builders"],
    type: "Part-time"
  },
  {
    id: "ilx-travel-fulltime",
    company: "ILX Travel",
    position: "WordPress Developer (Full-time)",
    location: "Remote",
    startDate: "2023-07",
    endDate: "2024-11",
    current: false,
    description: "Full-time WordPress developer responsible for website maintenance and editing for travel industry client.",
    responsibilities: [
      "Website maintenance and regular updates",
      "Content editing and management",
      "Feature implementation for travel booking",
      "Performance optimization",
      "Technical support and troubleshooting"
    ],
    achievements: [
      "Maintained high-performance travel website",
      "Implemented booking system improvements",
      "Ensured 99.9% uptime during peak travel seasons",
      "Enhanced user experience for international travelers"
    ],
    technologies: ["WordPress", "Elementor Pro", "PHP", "JavaScript", "CSS3", "Travel Booking Systems"],
    type: "Full-time"
  },
  {
    id: "freelance-wordpress-dev",
    company: "UpWork & OnlineJobs",
    position: "WordPress / Shopify Developer (Freelance)",
    location: "Remote",
    startDate: "2018-01",
    current: true,
    description: "Providing comprehensive WordPress and Shopify development services to clients worldwide, specializing in custom websites, e-commerce, SEO, and AI integration.",
    responsibilities: [
      "Develop and update WordPress websites",
      "Develop and update Shopify stores",
      "Technical SEO implementation and optimization",
      "SEO AI Content Generation",
      "AI Integration for enhanced functionality",
      "E-commerce solutions and payment gateway integration"
    ],
    achievements: [
      "Successfully maintained freelance business for 7+ years",
      "Built 100+ custom websites (WordPress & Shopify)",
      "Achieved consistent 5-star ratings and client satisfaction",
      "Specialized in SEO, AI integration, and performance optimization"
    ],
    technologies: [
      "WordPress", "Shopify", "PHP", "HTML5", "CSS3", "JavaScript", 
      "Elementor Pro", "WooCommerce", "SEO Tools", "AI APIs", "Zapier"
    ],
    type: "Freelance"
  },
  {
    id: "viblance",
    company: "Viblance",
    position: "WordPress Developer",
    location: "Remote",
    startDate: "2023-01",
    endDate: "2023-12",
    current: false,
    description: "Part-time WordPress developer responsible for website development, maintenance, and feature implementation for Viblance platform.",
    responsibilities: [
      "Develop and maintain WordPress website functionality",
      "Implement custom features and integrations",
      "Optimize website performance and user experience",
      "Collaborate with team on design and development requirements",
      "Provide technical support and troubleshooting"
    ],
    achievements: [
      "Successfully implemented new website features improving user engagement",
      "Optimized website performance resulting in faster loading times",
      "Maintained high-quality code standards throughout the project",
      "Delivered all assigned tasks within specified deadlines"
    ],
    technologies: ["WordPress", "PHP", "JavaScript", "CSS3", "HTML5", "MySQL"],
    type: "Part-time"
  },
  {
    id: "awork-wp-dev",
    company: "AWORK",
    position: "WordPress Developer",
    location: "Remote",
    startDate: "2022-10",
    endDate: "2024-01",
    current: false,
    description: "WordPress development specialist handling international clients, focusing on custom website creation, design, and maintenance. Directly communicated with Denmark-based clients.",
    responsibilities: [
      "Create websites from scratch based on client requirements",
      "Provide comprehensive client support and communication",
      "Design and implement custom website layouts",
      "Handle ongoing website maintenance and updates",
      "Communicate directly with Denmark clients for project requirements",
      "Manage multiple client projects simultaneously"
    ],
    achievements: [
      "Successfully managed multiple international client projects",
      "Delivered high-quality websites meeting diverse client needs",
      "Maintained excellent client relationships across different time zones",
      "Built strong rapport with Denmark-based clients",
      "Contributed to company's international expansion efforts"
    ],
    technologies: ["WordPress", "PHP", "Elementor", "Custom Post Types", "CSS3", "JavaScript"],
    type: "Full-time"
  },
  {
    id: "best-site-security",
    company: "Best Site Security",
    position: "WordPress Developer",
    location: "Remote",
    startDate: "2021-11",
    endDate: "2022-07",
    current: false,
    description: "Specialized WordPress developer focusing on website security, malware removal, and error resolution for compromised websites.",
    responsibilities: [
      "Create secure WordPress websites from scratch",
      "Clean malware and viruses from infected websites",
      "Identify, read, and fix various website errors",
      "Implement security best practices and hardening measures",
      "Restore website functionality after security incidents"
    ],
    achievements: [
      "Successfully cleaned and restored 50+ infected websites",
      "Developed expertise in WordPress security and malware removal",
      "Implemented security measures preventing future attacks",
      "Reduced client security incidents by 80% through proactive measures"
    ],
    technologies: ["WordPress", "PHP", "Security Plugins", "Malware Scanning Tools", "cPanel"],
    type: "Full-time"
  },
  {
    id: "fieldnotes-ai",
    company: "Fieldnotes.ai",
    position: "WordPress Developer",
    location: "Remote",
    startDate: "2020-01",
    endDate: "2021-07",
    current: false,
    description: "WordPress developer for AI-focused startup, responsible for website quality assurance, feature implementation, and marketing page development.",
    responsibilities: [
      "Conduct comprehensive website quality assurance testing",
      "Add custom functionalities for unique feature implementations",
      "Create high-converting landing pages for advertising campaigns",
      "Collaborate with project managers on content and feature development",
      "Ensure website performance and user experience optimization"
    ],
    achievements: [
      "Improved website conversion rates through optimized landing pages",
      "Successfully implemented complex AI-related features",
      "Maintained 99.9% website uptime during critical product launches",
      "Contributed to successful marketing campaigns through effective landing pages"
    ],
    technologies: ["WordPress", "PHP", "JavaScript", "CSS3", "Landing Page Builders", "Analytics Tools"],
    type: "Full-time"
  },
  {
    id: "jd-insurance",
    company: "JD Insurance Company",
    position: "Junior Full-stack Web Developer",
    location: "Remote",
    startDate: "2019-01",
    endDate: "2020-01",
    current: false,
    description: "Full-stack web developer working with Laravel and Vue.js to build comprehensive web applications for insurance industry clients.",
    responsibilities: [
      "Develop web applications using Laravel backend framework",
      "Create interactive frontend interfaces with Vue.js",
      "Implement database designs and API integrations",
      "Collaborate with senior developers on complex features",
      "Test and debug applications across different environments"
    ],
    achievements: [
      "Successfully transitioned from WordPress to full-stack development",
      "Contributed to major insurance platform features",
      "Gained valuable experience in modern web frameworks",
      "Delivered reliable solutions for enterprise-level applications"
    ],
    technologies: ["Laravel", "Vue.js", "PHP", "MySQL", "JavaScript", "CSS3", "Git"],
    type: "Full-time"
  }
];

export const education: Education[] = [
  {
    id: "computer-science-degree",
    institution: "Caraga State University",
    degree: "Bachelor of Science",
    field: "Computer Science",
    location: "Butuan City, Philippines",
    startDate: "2015-08",
    endDate: "2019-05",
  }
];

export const experienceStats = {
  totalYearsOfExperience: 7,
  projectsCompleted: 150,
  clientsSatisfied: 80,
  technologiesMastered: 25
};