export interface Project {
    id: string;
    title: string;
    description: string;
    longDescription: string;
    technologies: string[];
    features: string[];
    challenges: string[];
    lessons: string[];
    demoUrl?: string;
    githubUrl?: string;
    imageUrl?: string;
    status: 'Completed' | 'In Progress' | 'Planned';
    startDate: string;
    endDate?: string;
    category: 'Web App' | 'Mobile App' | 'API' | 'Tool' | 'Library' | 'Other';
  }
  
  export const projects: Project[] = [
    {
      id: "shenkman-tietz-law",
      title: "Shenkman Tietz, LLP",
      description: "Boutique estate planning law firm website for high-net-worth individuals with comprehensive legal services showcase",
      longDescription: "Professional law firm website for Shenkman Tietz, LLP - a boutique estate planning firm founded in 1989, focused on high-net-worth individuals. Features comprehensive service information, blog articles, client portal integration, and professional design reflecting the firm's expertise in estate planning, asset protection, and tax planning.",
      technologies: ["WordPress", "PHP", "CSS3", "JavaScript", "ShareFile Integration", "Responsive Design", "SEO"],
      features: [
        "Comprehensive service pages (Estate Planning, Irrevocable Trusts, Asset Protection, Tax Planning)",
        "Integrated client portal with ShareFile",
        "Blog section with estate planning insights and legal updates",
        "Professional and clean corporate design",
        "Mobile-responsive layout",
        "Contact forms and client communication tools",
        "Educational resources and practical ideas section"
      ],
      challenges: [
        "Creating a professional design that builds trust and credibility",
        "Organizing complex legal services information clearly",
        "Integrating secure client portal functionality",
        "Ensuring compliance with legal industry standards",
        "Presenting complex estate planning concepts accessibly"
      ],
      lessons: [
        "Legal industry website best practices",
        "Client portal integration techniques",
        "Professional service presentation strategies",
        "Estate planning content organization"
      ],
      demoUrl: "https://shenkmantietz.com/",
      status: "Completed",
      startDate: "2024-08",
      endDate: "2025-01",
      category: "Web App"
    },
    {
      id: "shenkman-education",
      title: "Shenkman Education",
      description: "Comprehensive educational platform for estate planning resources including webinars, articles, videos, and professional materials",
      longDescription: "Educational resource hub with 50+ years of estate planning knowledge, providing both consumer and professional-level content. Features extensive databases of articles, webinars, video clips, newsletters, and books. Built to serve as a comprehensive learning platform for estate planning professionals and individuals seeking estate planning information.",
      technologies: ["WordPress", "PHP", "JavaScript", "CSS3", "Video Integration", "Search Functionality", "Content Management", "Database"],
      features: [
        "Dual-audience content (Consumer and Professional resources)",
        "Extensive searchable database of articles and resources",
        "Video clips and educational shorts library",
        "Webinars and PowerPoint presentations archive",
        "Newsletter subscription system",
        "Books and publications showcase with Amazon integration",
        "Advanced filtering by topics and categories",
        "Resource hub with multiple content types",
        "Newsletter signup for estate planning updates"
      ],
      challenges: [
        "Organizing massive content library across multiple formats",
        "Creating effective search and filtering system",
        "Separating consumer and professional content appropriately",
        "Integrating video content seamlessly",
        "Managing and displaying extensive article database",
        "Ensuring fast performance with large content volume"
      ],
      lessons: [
        "Large-scale content management strategies",
        "Educational platform architecture",
        "Multi-format content integration",
        "User experience for knowledge databases",
        "Professional education website design"
      ],
      demoUrl: "https://shenkmaneducation.com/",
      status: "Completed",
      startDate: "2024-09",
      endDate: "2025-01",
      category: "Web App"
    },
    {
      id: "croatia-yacht-charter",
      title: "My Croatia Yacht Charter",
      description: "Advanced yacht charter website with API integration and AI-powered features",
      longDescription: "A comprehensive yacht charter platform featuring real-time yacht availability through API integration and AI-powered customer assistance using Google Gemini. Built with WordPress and custom integrations.",
      technologies: ["WordPress", "PHP", "Yacht Charter API", "Google Gemini AI", "JavaScript", "CSS3", "MySQL"],
      features: [
        "Real-time yacht availability and booking",
        "AI-powered customer assistance with Gemini",
        "Advanced search and filtering system",
        "Responsive design for all devices",
        "Payment gateway integration",
        "Multi-language support"
      ],
      challenges: [
        "Integrating complex yacht charter APIs",
        "Implementing AI chatbot for customer queries",
        "Managing real-time inventory updates",
        "Optimizing performance with large datasets"
      ],
      lessons: [
        "Complex API integration in WordPress",
        "AI implementation in travel industry",
        "Real-time data synchronization",
        "Advanced WordPress customization"
      ],
      demoUrl: "https://mycroatiayachtcharter.com/",
      status: "Completed",
      startDate: "2024-06",
      endDate: "2024-12",
      category: "Web App"
    },
    {
      id: "mn8-wealth",
      title: "MN8 Wealth Management",
      description: "Professional wealth management website with homepage redesign focusing on user experience",
      longDescription: "Complete homepage redesign for a wealth management firm, focusing on modern design principles, improved user experience, and professional presentation of financial services.",
      technologies: ["WordPress", "CSS3", "JavaScript", "Responsive Design", "PHP"],
      features: [
        "Modern homepage redesign",
        "Professional financial services layout",
        "Improved user experience design",
        "Responsive design for all devices",
        "Clean and professional aesthetic",
        "Optimized content presentation"
      ],
      challenges: [
        "Creating trust through professional design",
        "Balancing information density with readability",
        "Ensuring compliance with financial industry standards",
        "Optimizing for conversion and engagement"
      ],
      lessons: [
        "Financial services web design best practices",
        "Homepage optimization strategies",
        "Professional service industry requirements",
        "User experience design for financial sector"
      ],
      demoUrl: "https://mn8wealth.com.au/",
      status: "Completed",
      startDate: "2025-01",
      endDate: "2025-02",
      category: "Web App"
    },
    {
      id: "hands-off-hosting",
      title: "Hands Off Hosting",
      description: "Complex gravity form integration with JetEngine for advanced hosting service functionalities",
      longDescription: "Developed complex form integrations using Gravity Forms and JetEngine to create advanced functionality for a hosting service provider, enabling sophisticated data collection and processing workflows.",
      technologies: ["WordPress", "Gravity Forms", "JetEngine", "PHP", "JavaScript", "MySQL"],
      features: [
        "Complex Gravity Forms integration",
        "JetEngine custom functionality",
        "Advanced form processing workflows",
        "Custom data collection systems",
        "Automated hosting service processes",
        "Integration with hosting APIs"
      ],
      challenges: [
        "Integrating complex form systems",
        "Creating seamless JetEngine workflows",
        "Managing complex data relationships",
        "Ensuring reliable form processing"
      ],
      lessons: [
        "Advanced Gravity Forms customization",
        "JetEngine integration techniques",
        "Complex WordPress plugin interactions",
        "Hosting industry workflow automation"
      ],
      demoUrl: "https://handsoffhosting.net/",
      status: "Completed",
      startDate: "2024-11",
      endDate: "2025-01",
      category: "Web App"
    },
    {
      id: "ilx-travel",
      title: "ILX Travel",
      description: "Premium travel agency website with booking management system",
      longDescription: "Professional travel agency website featuring destination showcases, booking inquiries, and comprehensive travel services presentation.",
      technologies: ["WordPress", "Elementor Pro", "PHP", "CSS3", "JavaScript", "Contact Forms"],
      features: [
        "Destination showcase galleries",
        "Travel package presentations",
        "Booking inquiry system",
        "Responsive travel-focused design",
        "SEO optimization for travel keywords"
      ],
      challenges: [
        "Creating engaging travel content layouts",
        "Optimizing images for fast loading",
        "Implementing effective booking flows"
      ],
      lessons: [
        "Travel industry website best practices",
        "Visual storytelling through web design",
        "Performance optimization for media-heavy sites"
      ],
      demoUrl: "https://www.ilxtravel.com/",
      status: "Completed",
      startDate: "2023-08",
      endDate: "2023-10",
      category: "Web App"
    },
    {
      id: "paulin-insurance",
      title: "Paulin Insurance Associates",
      description: "Professional insurance agency website with comprehensive service offerings and quote request system",
      longDescription: "Full-service insurance agency website for Paulin Insurance Associates, LLC - a locally owned independent insurance agency in the Metairie, New Orleans area. Features personal, commercial, life & health, and surety bond services. With over 70 years combined experience, the site showcases their expertise in providing comprehensive insurance solutions for the Gulf South region.",
      technologies: ["WordPress", "Divi Builder", "PHP", "CSS3", "JavaScript", "Contact Forms", "Payment Integration", "SEO Tools"],
      features: [
        "Comprehensive service pages (Personal, Commercial, Life & Health, Surety Bonds)",
        "Online quote request forms with service type selection",
        "Make a payment portal integration",
        "Insurance partner/carrier showcase",
        "Licensed agent information and credentials",
        "Contact forms and consultation booking",
        "Claims submission system",
        "Mobile-responsive professional design",
        "Social media integration (Facebook, LinkedIn)"
      ],
      challenges: [
        "Presenting complex insurance products clearly to diverse audiences",
        "Building trust and credibility for a local independent agency",
        "Integrating payment processing securely",
        "Optimizing for local SEO in competitive New Orleans market",
        "Showcasing multiple insurance carriers and partnerships"
      ],
      lessons: [
        "Insurance industry website best practices",
        "Local business digital presence optimization",
        "Financial services compliance considerations",
        "Multi-service business website architecture"
      ],
      demoUrl: "https://paulininsurance.net/",
      status: "Completed",
      startDate: "2023-05",
      endDate: "2023-07",
      category: "Web App"
    },
    {
      id: "mark-devolder",
      title: "Mark DeVolder - Change Management Speaker",
      description: "Professional speaker website for Dr. Mark DeVolder, global change management keynote speaker and consultant",
      longDescription: "Comprehensive professional website for Dr. Mark DeVolder, one of the world's leading change management speakers. Features keynote presentations, training programs, consulting services, client testimonials, and booking information. Designed to showcase expertise in organizational transformation and change leadership.",
      technologies: ["WordPress", "Custom Theme", "PHP", "CSS3", "JavaScript", "Video Integration", "SEO Tools"],
      features: [
        "Professional biography and credentials showcase",
        "Keynotes, training, and consulting service pages",
        "Video testimonials and client success stories",
        "Newsletter subscription system",
        "Online booking and contact forms",
        "Blog with change management insights",
        "Client logo showcase with major corporations",
        "Responsive design for all devices"
      ],
      challenges: [
        "Creating a personal brand that conveys authority and approachability",
        "Showcasing complex services (keynotes, training, consulting) clearly",
        "Integrating video content and testimonials effectively",
        "Building trust with high-profile corporate clients"
      ],
      lessons: [
        "Professional speaker website best practices",
        "Personal branding for consultants and speakers",
        "Service presentation and conversion optimization",
        "Corporate client engagement strategies"
      ],
      demoUrl: "https://markdevolder.com/",
      status: "Completed",
      startDate: "2023-03",
      endDate: "2023-05",
      category: "Web App"
    },
    {
      id: "local-cannabis-company",
      title: "Local Cannabis Company",
      description: "Premium cannabis dispensary website with multi-location support and product showcase",
      longDescription: "Professional cannabis dispensary website for Local Cannabis Co., featuring three retail locations (Santa Monica CA, Kansas City MO, and Swampscott MA). Showcases premium West Coast craft cannabis with emphasis on quality, integrity, and passion. Includes educational resources, product information, and location-specific details.",
      technologies: ["WordPress", "Custom Theme", "PHP", "Interactive Maps", "CSS3", "JavaScript", "E-commerce Integration"],
      features: [
        "Multi-location dispensary management (3 locations)",
        "Interactive location map with store details",
        "Product catalog and current offerings showcase",
        "Educational content on cannabis strains and consumption methods",
        "Genetics and cultivation information pages",
        "Loyalty program integration",
        "Online ordering for in-store pickup",
        "Responsive design optimized for mobile",
        "Age verification and compliance features"
      ],
      challenges: [
        "Managing multiple location information and inventory",
        "Ensuring cannabis industry compliance and regulations",
        "Creating educational content that's accessible yet professional",
        "Balancing product showcase with legal requirements",
        "Implementing age verification and security measures"
      ],
      lessons: [
        "Cannabis industry web design regulations",
        "Multi-location business website architecture",
        "Compliance-focused e-commerce implementation",
        "Educational content strategy for regulated industries"
      ],
      demoUrl: "https://localcannabiscompany.com/",
      status: "Completed",
      startDate: "2024-03",
      endDate: "2024-08",
      category: "Web App"
    },
    {
      id: "docfluent",
      title: "Docfluent Medical Documentation",
      description: "Healthcare technology website for AI-powered medical records management and document workflow automation",
      longDescription: "Professional SaaS website for Docfluent, a medical documentation management platform that revolutionizes healthcare workflows with AI-powered automation and human oversight. Features comprehensive information about fax management, scanning, indexing, intelligent sorting, and 24/7 processing services for medical practices.",
      technologies: ["WordPress", "Modern Theme", "PHP", "CSS3", "JavaScript", "Video Integration", "Booking System"],
      features: [
        "Service showcase with 8 core features (Faxes, Scans, Indexing, etc.)",
        "AI technology and automation benefits presentation",
        "Client testimonials and case studies (Texas Oncology)",
        "Demo booking and consultation scheduling",
        "ROI calculator and efficiency metrics display",
        "Video demonstrations of platform capabilities",
        "Healthcare compliance and security information",
        "Responsive design for healthcare professionals"
      ],
      challenges: [
        "Explaining complex healthcare technology in accessible terms",
        "Building trust with medical professionals and practices",
        "Showcasing AI capabilities while emphasizing human oversight",
        "Highlighting HIPAA compliance and security measures",
        "Converting visitors to demo bookings"
      ],
      lessons: [
        "Healthcare SaaS website best practices",
        "Medical industry compliance presentation",
        "AI technology marketing and education",
        "B2B healthcare conversion optimization"
      ],
      demoUrl: "https://docfluent.com/",
      status: "Completed",
      startDate: "2024-06",
      endDate: "2024-11",
      category: "Web App"
    },
    {
      id: "lukinovich-law",
      title: "Lukinovich Law Firm",
      description: "Professional law firm website with practice area information and client resources",
      longDescription: "Corporate law firm website featuring practice areas, attorney profiles, case studies, and client resources with professional legal industry design.",
      technologies: ["WordPress", "Beaver Builder", "PHP", "CSS3", "Contact Forms", "Legal Compliance Tools"],
      features: [
        "Practice area detailed descriptions",
        "Attorney biography pages",
        "Case studies and results",
        "Client resource center",
        "Professional legal industry design",
        "Consultation booking system"
      ],
      challenges: [
        "Meeting legal industry compliance requirements",
        "Presenting complex legal information clearly",
        "Building trust and credibility"
      ],
      lessons: [
        "Legal industry web design standards",
        "Compliance and ethical considerations",
        "Professional service credibility building"
      ],
      demoUrl: "https://lukinovichlaw.com/",
      status: "Completed",
      startDate: "2022-11",
      endDate: "2023-02",
      category: "Web App"
    },
    {
      id: "delivering-wishes",
      title: "Delivering Wishes",
      description: "Non-profit organization website for community outreach and donations",
      longDescription: "Community-focused non-profit website designed to facilitate donations, volunteer coordination, and community outreach programs.",
      technologies: ["WordPress", "WP Bakery", "PHP", "Donation Plugins", "CSS3", "Social Media Integration"],
      features: [
        "Donation processing system",
        "Volunteer registration forms",
        "Community impact showcases",
        "Event calendar and announcements",
        "Social media integration"
      ],
      challenges: [
        "Implementing secure donation processing",
        "Creating emotional connection through design",
        "Optimizing for community engagement"
      ],
      lessons: [
        "Non-profit website best practices",
        "Donation system implementation",
        "Community engagement strategies"
      ],
      demoUrl: "https://www.delivering-wishes.com/",
      status: "Completed",
      startDate: "2022-08",
      endDate: "2022-10",
      category: "Web App"
    },
    {
      id: "viblance-ecommerce",
      title: "Viblance E-commerce Platform",
      description: "Complete WordPress e-commerce website built from scratch with WooCommerce, Elementor, and multi-language support",
      longDescription: "Full e-commerce platform developed from scratch using WordPress, WooCommerce, and Elementor. Features custom designs, multi-language functionality, and comprehensive online store capabilities.",
      technologies: ["WordPress", "WooCommerce", "Elementor Pro", "PHP", "Multi-language Plugin", "CSS3", "JavaScript", "MySQL"],
      features: [
        "Complete e-commerce website built from scratch",
        "WooCommerce integration for online store functionality",
        "Custom Elementor designs and layouts",
        "Multi-language support for international customers",
        "Responsive design for all devices",
        "Payment gateway integration",
        "Product catalog and inventory management"
      ],
      challenges: [
        "Building complex e-commerce functionality from ground up",
        "Implementing multi-language support across all pages",
        "Creating custom Elementor designs for unique user experience",
        "Optimizing performance with WooCommerce and multiple languages"
      ],
      lessons: [
        "Advanced WooCommerce development and customization",
        "Multi-language website architecture",
        "Custom Elementor widget development",
        "E-commerce performance optimization"
      ],
      demoUrl: "https://www.viblance.com/",
      status: "Completed",
      startDate: "2023-01",
      endDate: "2023-12",
      category: "Web App"
    },
    {
      id: "chris-nick-online",
      title: "Chris Nick Fashion Designer",
      description: "High-end fashion designer portfolio website showcasing collections, press coverage, and made-to-measure services",
      longDescription: "Elegant fashion portfolio website for Filipino designer Chris Nick, featuring multiple seasonal collections (SS/21, SS/22, SS/23, SS/24), bridal wear, evening basics, and lounge collections. Showcases work from major fashion events including LA Fashion Week, ABS CBN Ball 2023, Vogue Gala 2023, Miss Universe 2023, and collaborations with major brands like Bench, Bvlgari, and BYS.",
      technologies: ["WordPress", "Custom Theme", "PHP", "Photo Gallery", "CSS3", "JavaScript", "Lightbox Integration"],
      features: [
        "Multiple collection galleries (8+ seasonal/specialty collections)",
        "Photo carousel and lightbox gallery systems",
        "Press coverage showcase (fashion shows, celebrity events, magazine features)",
        "Client service and inquiry system",
        "Made-to-measure service information",
        "Instagram social media integration (@chrisnickofficial)",
        "High-resolution fashion photography display",
        "Responsive design optimized for visual content",
        "About Chris Nick biography section"
      ],
      challenges: [
        "Showcasing high-quality fashion photography with fast loading",
        "Organizing multiple collections and press features effectively",
        "Creating elegant, minimalist design that highlights the fashion",
        "Optimizing large image galleries for performance",
        "Presenting made-to-measure luxury service appropriately"
      ],
      lessons: [
        "High-end fashion website design principles",
        "Photo gallery optimization and presentation",
        "Luxury brand digital presence strategies",
        "Visual content-heavy website performance optimization"
      ],
      demoUrl: "https://chrisnickonline.com/",
      status: "Completed",
      startDate: "2022-05",
      endDate: "2022-07",
      category: "Web App"
    },
    {
      id: "ecommerce-platform",
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with modern payment processing and inventory management",
      longDescription: "A comprehensive e-commerce platform built with React and Node.js, featuring user authentication, product catalog, shopping cart, order management, and payment processing.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe API", "JWT", "Material-UI"],
      features: [
        "User authentication and authorization",
        "Product catalog with search and filters",
        "Shopping cart and checkout process",
        "Order tracking and history",
        "Admin dashboard for inventory management",
        "Payment processing with Stripe"
      ],
      challenges: [
        "Implementing secure payment processing",
        "Managing complex state across components",
        "Optimizing database queries for performance",
        "Creating responsive design for mobile"
      ],
      lessons: [
        "Full-stack application architecture",
        "Payment gateway integration",
        "Database design and optimization",
        "Security best practices"
      ],
      githubUrl: "https://github.com/angelosinday/ecommerce",
      status: "Completed",
      startDate: "2024-08",
      endDate: "2024-12",
      category: "Web App"
    },
    {
      id: "task-management-api",
      title: "Task Management API",
      description: "RESTful API for task management with team collaboration features",
      longDescription: "A robust REST API built with Node.js and Express, providing endpoints for task management, team collaboration, and project organization with proper authentication and authorization.",
      technologies: ["Node.js", "Express", "PostgreSQL", "JWT", "bcrypt", "Joi validation"],
      features: [
        "User registration and authentication",
        "CRUD operations for tasks and projects",
        "Team collaboration with role-based access",
        "Real-time notifications",
        "Data validation and error handling",
        "API documentation with Swagger"
      ],
      challenges: [
        "Designing scalable database schema",
        "Implementing complex authorization logic",
        "Creating comprehensive API documentation",
        "Handling concurrent operations safely"
      ],
      lessons: [
        "API design principles",
        "Database relationships and optimization",
        "Authentication and authorization patterns",
        "Testing strategies for APIs"
      ],
      githubUrl: "https://github.com/angelosinday/task-api",
      status: "Completed",
      startDate: "2024-05",
      endDate: "2024-07",
      category: "API"
    },
    {
      id: "data-visualization-dashboard",
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for displaying complex data with charts and real-time updates",
      longDescription: "A data visualization dashboard built with React and D3.js, providing interactive charts, real-time data updates, and customizable views for business analytics.",
      technologies: ["React", "D3.js", "Chart.js", "WebSocket", "Python", "FastAPI"],
      features: [
        "Interactive charts and graphs",
        "Real-time data updates",
        "Customizable dashboard layouts",
        "Data filtering and search",
        "Export functionality for reports",
        "Responsive design for mobile"
      ],
      challenges: [
        "Handling large datasets efficiently",
        "Creating smooth animations and transitions",
        "Implementing real-time data streaming",
        "Optimizing performance for complex visualizations"
      ],
      lessons: [
        "Data visualization best practices",
        "Working with D3.js and SVG",
        "WebSocket implementation",
        "Performance optimization techniques"
      ],
      status: "Completed",
      startDate: "2024-02",
      endDate: "2024-04",
      category: "Web App"
    }
  ];
  
  export const projectStats = {
    totalProjects: projects.length,
    completedProjects: projects.filter(p => p.status === 'Completed').length,
    inProgressProjects: projects.filter(p => p.status === 'In Progress').length,
    technologiesUsed: Array.from(new Set(projects.flatMap(p => p.technologies))).length,
    categoriesWorkedOn: Array.from(new Set(projects.map(p => p.category))).length
  };