export const projects = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with advanced analytics and inventory management.",
    category: "Web Development",
    image:
      "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
    duration: "4 months",
    teamSize: "5 developers",
    role: "Full-Stack Developer & Team Lead",
    challenge:
      "The client needed a scalable e-commerce solution that could handle high traffic volumes while providing real-time inventory updates and seamless payment processing.",
    solution:
      "Built a microservices architecture using React for the frontend and Node.js for the backend. Implemented real-time inventory tracking with WebSocket connections and integrated Stripe for secure payment processing.",
    results:
      "Successfully launched the platform with 99.9% uptime, handling over 10,000 concurrent users and processing $2M+ in transactions within the first quarter.",
    features: [
      "Real-time inventory management",
      "Advanced product search and filtering",
      "Multi-payment gateway integration",
      "Admin dashboard with analytics",
      "Mobile-responsive design",
      "SEO optimization",
    ],
    metrics: [
      { value: "10K+", label: "Concurrent Users" },
      { value: "$2M+", label: "Revenue Generated" },
      { value: "99.9%", label: "Uptime" },
      { value: "4.8/5", label: "User Rating" },
    ],
    liveUrl: "https://example-ecommerce.com",
    githubUrl: "https://github.com/example/ecommerce",
  },
  {
    id: "mobile-fitness-app",
    title: "FitTrack Mobile App",
    description:
      "A comprehensive fitness tracking mobile application with AI-powered workout recommendations.",
    category: "Mobile App",
    image:
      "https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=600",
    technologies: ["React Native", "Firebase", "TensorFlow", "Express.js"],
    duration: "6 months",
    teamSize: "4 developers",
    role: "Mobile App Developer",
    challenge:
      "Create an intuitive fitness app that could provide personalized workout recommendations while tracking user progress across multiple fitness metrics.",
    solution:
      "Developed a React Native application with machine learning integration for personalized recommendations. Used Firebase for real-time data sync and implemented advanced analytics for progress tracking.",
    results:
      "The app achieved 50,000+ downloads in the first three months with a 4.6-star rating and 85% user retention rate.",
    features: [
      "AI-powered workout recommendations",
      "Progress tracking with detailed analytics",
      "Social sharing and challenges",
      "Offline workout capabilities",
      "Wearable device integration",
      "Nutrition tracking",
    ],
    metrics: [
      { value: "50K+", label: "Downloads" },
      { value: "4.6★", label: "App Store Rating" },
      { value: "85%", label: "User Retention" },
      { value: "25%", label: "Daily Active Users" },
    ],
    liveUrl: "https://apps.apple.com/fittrack",
  },
  {
    id: "dashboard-analytics",
    title: "Business Analytics Dashboard",
    description:
      "An enterprise-level analytics dashboard providing real-time insights and data visualization.",
    category: "Web Development",
    image:
      "https://images.pexels.com/photos/669996/pexels-photo-669996.jpeg?auto=compress&cs=tinysrgb&w=600",
    technologies: ["Vue.js", "D3.js", "Python", "PostgreSQL", "Docker"],
    duration: "5 months",
    teamSize: "6 developers",
    role: "Frontend Lead & Data Visualization Specialist",
    challenge:
      "Build a comprehensive analytics platform that could process large datasets and present complex business metrics in an intuitive, interactive interface.",
    solution:
      "Created a Vue.js frontend with custom D3.js visualizations, backed by a Python data processing pipeline. Implemented real-time data streaming and interactive charts for deep-dive analysis.",
    results:
      "Delivered a robust platform that reduced reporting time by 75% and improved data-driven decision making across the organization.",
    features: [
      "Real-time data streaming",
      "Interactive data visualizations",
      "Custom report generation",
      "Multi-tenant architecture",
      "Role-based access control",
      "Export capabilities (PDF, Excel, CSV)",
    ],
    metrics: [
      { value: "75%", label: "Faster Reporting" },
      { value: "50M+", label: "Data Points Processed" },
      { value: "12", label: "Different Chart Types" },
      { value: "500+", label: "Daily Active Users" },
    ],
    githubUrl: "https://github.com/example/analytics-dashboard",
  },
  {
    id: "ai-chat-interface",
    title: "AI Chat Interface",
    description:
      "An intelligent chatbot interface with natural language processing and context awareness.",
    category: "AI/ML",
    image:
      "https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg?auto=compress&cs=tinysrgb&w=600",
    technologies: ["React", "OpenAI API", "WebSocket", "Redis", "Docker"],
    duration: "3 months",
    teamSize: "3 developers",
    role: "AI Integration Specialist",
    challenge:
      "Develop a conversational AI interface that could maintain context across long conversations while providing accurate and helpful responses.",
    solution:
      "Built a React-based chat interface with OpenAI integration, implementing conversation memory using Redis for context persistence and WebSocket for real-time communication.",
    results:
      "Successfully deployed an AI assistant that achieved 92% user satisfaction and handled over 1,000 conversations daily.",
    features: [
      "Context-aware conversations",
      "Multi-language support",
      "File upload and analysis",
      "Voice input/output",
      "Conversation history",
      "Custom AI model training",
    ],
    metrics: [
      { value: "92%", label: "User Satisfaction" },
      { value: "1K+", label: "Daily Conversations" },
      { value: "15", label: "Languages Supported" },
      { value: "3.2s", label: "Average Response Time" },
    ],
    liveUrl: "https://ai-chat.example.com",
    githubUrl: "https://github.com/example/ai-chat",
  },
  {
    id: "photo-detection-interface",
    title: "Photo Detection App",
    description:
      "An AI-powered photo detection application that identifies objects and scenes in images.",
    category: "AI/ML",
    image:
      "https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg?auto=compress&cs=tinysrgb&w=600",
    technologies: ["React", "OpenAI API", "WebSocket", "Redis", "Docker"],
    duration: "5 months",
    teamSize: "3 developers",
    role: "AI Integration Specialist",
    challenge:
      "Develop a conversational AI interface that could maintain context across long conversations while providing accurate and helpful responses.",
    solution:
      "Built a React-based chat interface with OpenAI integration, implementing conversation memory using Redis for context persistence and WebSocket for real-time communication.",
    results:
      "Successfully deployed an AI assistant that achieved 92% user satisfaction and handled over 1,000 conversations daily.",
    features: [
      "Context-aware conversations",
      "Multi-language support",
      "File upload and analysis",
      "Voice input/output",
      "Conversation history",
      "Custom AI model training",
    ],
    metrics: [
      { value: "92%", label: "User Satisfaction" },
      { value: "1K+", label: "Daily Conversations" },
      { value: "15", label: "Languages Supported" },
      { value: "3.2s", label: "Average Response Time" },
    ],
    liveUrl: "https://ai-chat.example.com",
    githubUrl: "https://github.com/example/ai-chat",
  },
  {
    id: "design-system",
    title: "Corporate Design System",
    description:
      "A comprehensive design system and component library for enterprise applications.",
    category: "UI/UX Design",
    image:
      "https://images.pexels.com/photos/6224/hands-people-woman-working.jpg?auto=compress&cs=tinysrgb&w=600",
    technologies: ["Figma", "Storybook", "React", "TypeScript", "Sass"],
    duration: "4 months",
    teamSize: "2 designers, 3 developers",
    role: "Design System Lead",
    challenge:
      "Create a unified design system that could be used across multiple products while maintaining consistency and accessibility standards.",
    solution:
      "Developed a comprehensive design system with Figma components, React component library, and detailed documentation. Implemented automated testing and accessibility checks.",
    results:
      "Reduced design-to-development time by 60% and improved consistency across all company products.",
    features: [
      "Comprehensive component library",
      "Accessibility compliance (WCAG 2.1)",
      "Dark/light theme support",
      "Responsive design tokens",
      "Interactive documentation",
      "Automated testing suite",
    ],
    metrics: [
      { value: "60%", label: "Faster Development" },
      { value: "100+", label: "Reusable Components" },
      { value: "5", label: "Product Teams Using" },
      { value: "98%", label: "Accessibility Score" },
    ],
    liveUrl: "https://design-system.example.com",
    githubUrl: "https://github.com/example/design-system",
  },
  {
    id: "fintech-dashboard",
    title: "FinTech Trading Platform",
    description:
      "A real-time trading platform with advanced charting and portfolio management features.",
    category: "Web Development",
    image:
      "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=600",
    technologies: ["Next.js", "WebSocket", "Chart.js", "Node.js", "MongoDB"],
    duration: "8 months",
    teamSize: "8 developers",
    role: "Senior Frontend Developer",
    challenge:
      "Build a high-performance trading platform that could handle real-time market data while providing sophisticated charting and analysis tools.",
    solution:
      "Implemented a Next.js application with WebSocket connections for real-time data, custom charting components, and optimized rendering for handling thousands of data points.",
    results:
      "Launched a platform processing $10M+ in daily trading volume with sub-100ms latency for real-time updates.",
    features: [
      "Real-time market data streaming",
      "Advanced charting tools",
      "Portfolio management",
      "Risk assessment algorithms",
      "Multi-currency support",
      "Automated trading bots",
    ],
    metrics: [
      { value: "$10M+", label: "Daily Trading Volume" },
      { value: "<100ms", label: "Data Latency" },
      { value: "2K+", label: "Active Traders" },
      { value: "99.95%", label: "System Uptime" },
    ],
    liveUrl: "https://trading.example.com",
  },
  {
    id: "ecommerce-solution-service",
    title: "eCommerce Development Solutions",
    description:
      "Custom eCommerce development tailored to your business needs with integrated payments, inventory, and SEO tools.",
    category: "eCommerce Development",
    image:
      "https://images.pexels.com/photos/4498137/pexels-photo-4498137.jpeg?auto=compress&cs=tinysrgb&w=600",
    technologies: ["Shopify", "WooCommerce", "Magento", "React", "Node.js"],
    duration: "5 months",
    teamSize: "4 developers",
    role: "eCommerce Specialist",
    challenge:
      "Create a flexible and scalable online store for a growing retailer with international shipping support.",
    solution:
      "Built custom storefronts using Shopify and WooCommerce, integrated multiple payment options, and added marketing/SEO tools.",
    results:
      "Increased customer base by 120% and improved checkout conversion rate by 30%.",
    features: [
      "Custom storefront design",
      "Multi-language and currency support",
      "Integrated payment gateways",
      "SEO and marketing tools",
      "Shipping and logistics integrations",
      "User-friendly admin dashboard",
    ],
    metrics: [
      { value: "120%", label: "Customer Growth" },
      { value: "30%", label: "Conversion Rate Increase" },
      { value: "20K+", label: "Monthly Visitors" },
      { value: "50+", label: "Product Categories" },
    ],
    liveUrl: "https://example.com/ecommerce-solutions",
  },
  {
    id: "digital-marketing-service",
    title: "SEO / SEM / PPC / Social Media Marketing",
    description:
      "Data-driven digital marketing services to boost traffic, conversions, and brand awareness.",
    category: "Digital Marketing",
    image:
      "https://images.pexels.com/photos/6476584/pexels-photo-6476584.jpeg?auto=compress&cs=tinysrgb&w=600",
    technologies: [
      "Google Ads",
      "Meta Ads",
      "SEMRush",
      "Ahrefs",
      "Google Analytics",
    ],
    duration: "3 months",
    teamSize: "3 marketers",
    role: "Digital Marketing Strategist",
    challenge:
      "Revamp the online presence and performance of a mid-sized brand through paid and organic channels.",
    solution:
      "Conducted SEO audits, ran targeted PPC campaigns, optimized content, and implemented social media strategies.",
    results:
      "Doubled organic traffic and achieved a 5x return on ad spend (ROAS).",
    features: [
      "Comprehensive SEO audits",
      "Targeted ad campaigns",
      "Social media management",
      "Email marketing automation",
      "Performance tracking dashboards",
      "Lead generation tools",
    ],
    metrics: [
      { value: "2x", label: "Organic Traffic" },
      { value: "5x", label: "Return on Ad Spend" },
      { value: "100%", label: "Lead Quality Increase" },
      { value: "3x", label: "Engagement Growth" },
    ],
    liveUrl: "https://example.com/marketing-solutions",
  },

  // ----------------- NEW PROJECTS YOU REQUESTED -----------------
  {
    id: "commercial-tyre",
    title: "Commercial Tyre",
    description:
      "A specialized platform for managing commercial tyre sales, distribution, and service tracking.",
    category: "Web Development",
    image:
      "https://images.pexels.com/photos/159293/tyre-car-wheel-car-tire-159293.jpeg?auto=compress&cs=tinysrgb&w=600",
    technologies: ["React", "Node.js", "MongoDB"],
    duration: "3 months",
    teamSize: "3 developers",
    role: "Full-Stack Developer",
    liveUrl: "https://example.com/commercial-tyre",
  },
  {
    id: "asian-import-export",
    title: "Asian Import Export",
    description:
      "A business management and e-commerce solution for import-export operations across Asia.",
    category: "Web Development",
    image:
      "https://images.pexels.com/photos/164502/pexels-photo-164502.jpeg?auto=compress&cs=tinysrgb&w=600",
    technologies: ["Next.js", "Express.js", "MongoDB"],
    duration: "4 months",
    teamSize: "4 developers",
    role: "Frontend Developer",
    liveUrl: "https://example.com/asian-import-export",
  },
  {
    id: "best-ebike-app",
    title: "Best E-bike",
    description:
      "A mobile app to track e-bike performance, battery usage, and GPS navigation.",
    category: "Mobile App",
    image:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=600",
    technologies: ["React Native", "Firebase"],
    duration: "3 months",
    teamSize: "2 developers",
    role: "Mobile App Developer",
    liveUrl: "https://example.com/best-ebike-app",
  },
  {
    id: "best-gym-instrument-app",
    title: "Best Gym Instrument",
    description:
      "A mobile app for gym equipment tracking, maintenance schedules, and fitness tips.",
    category: "Mobile App",
    image:
      "https://images.pexels.com/photos/136404/pexels-photo-136404.jpeg?auto=compress&cs=tinysrgb&w=600",
    technologies: ["React Native", "Expo", "SQLite"],
    duration: "4 months",
    teamSize: "3 developers",
    role: "Mobile App Developer",
    liveUrl: "https://example.com/best-gym-instrument-app",
  },
  {
    id: "swiftship-tracking-app",
    title: "SwiftShip Tracking",
    description:
      "A mobile app for real-time shipment tracking, notifications, and delivery management.",
    category: "Mobile App",
    image:
      "https://images.pexels.com/photos/136404/pexels-photo-136404.jpeg?auto=compress&cs=tinysrgb&w=600",
    technologies: ["React Native", "Expo", "SQLite"],
    duration: "4 months",
    teamSize: "3 developers",
    role: "Mobile App Developer",
    liveUrl: "https://example.com/best-gym-instrument-app",
  },
  {
    id: "commercial-tyre-ui",
    title: "Commercial Tyre UI/UX",
    description:
      "UI/UX design for a tyre management and e-commerce system, focusing on user-friendly dashboards and checkout flow.",
    category: "UI/UX Design",
    image:
      "https://images.pexels.com/photos/358502/pexels-photo-358502.jpeg?auto=compress&cs=tinysrgb&w=600",
    technologies: ["Figma", "Adobe XD"],
    duration: "2 months",
    teamSize: "2 designers",
    role: "UI/UX Designer",
    liveUrl: "https://example.com/commercial-tyre-ui",
  },
  {
    id: "jute-boutique",
    title: "Jute Boutique",
    description:
      "A sustainable fashion e-commerce brand design system focused on jute-based products.",
    category: "UI/UX Design",
    image:
      "https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&w=600",
    technologies: ["Figma", "Canva"],
    duration: "3 months",
    teamSize: "2 designers",
    role: "UI/UX Designer",
    liveUrl: "https://example.com/jute-boutique",
  },
  {
    id: "asian-import-export-ecommerce",
    title: "Asian Import Export",
    description:
      "E-commerce platform for import-export businesses to manage products, sales, and logistics.",
    category: "eCommerce Development",
    image:
      "https://images.pexels.com/photos/219929/pexels-photo-219929.jpeg?auto=compress&cs=tinysrgb&w=600",
    technologies: ["Shopify", "Next.js"],
    duration: "4 months",
    teamSize: "3 developers",
    role: "eCommerce Developer",
    liveUrl: "https://example.com/asian-import-export-ecommerce",
  },
  {
    id: "best-ebike-ecommerce",
    title: "Best E-bike",
    description:
      "E-commerce store for electric bikes with integrated payment and shipping solutions.",
    category: "eCommerce Development",
    image:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=600",
    technologies: ["WooCommerce", "React"],
    duration: "3 months",
    teamSize: "3 developers",
    role: "eCommerce Developer",
    liveUrl: "https://example.com/best-ebike-ecommerce",
  },
  {
    id: "best-gym-instrument-ecommerce",
    title: "Best Gym Instrument",
    description:
      "An online store for gym equipment and fitness accessories with inventory management.",
    category: "eCommerce Development",
    image:
      "https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=600",
    technologies: ["Magento", "React", "Node.js"],
    duration: "5 months",
    teamSize: "4 developers",
    role: "eCommerce Specialist",
    liveUrl: "https://example.com/best-gym-instrument-ecommerce",
  },
];
