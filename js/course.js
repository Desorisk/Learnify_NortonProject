// Course data per category
const coursesByCategory = {
  design: [
    {
      thumb: "./public/page/coursepage/images1.jpg",
      title: "UI Design Fundamentals: Crafting Clean Digital Interfaces",
      name: "Chan Narin",
      role: "UI Designer",
      students: "50+ Students",
      images: "./public/page/homepage/narin.jpg"
    },
    {
      thumb: "./public/page/coursepage/images3.png",
      title: "Motion Graphics for Beginners: Bringing Static Ideas to Life",
      name: "Chan Narin",
      role: "Motion Designer",
      students: "80+ Students",
      images: "./public/page/homepage/narin.jpg"
    },
    {
      thumb: "./public/page/coursepage/images4.jpg",
      title: "Brand Identity Design: From Concept to Style Guide",
      name: "Chan Narin",
      role: "Brand Designer",
      students: "65+ Students",
      images: "./public/page/homepage/narin.jpg"
    },
    {
      thumb: "./public/page/coursepage/image5.png",
      title: "Typography Essentials: Pairing Fonts Like a Pro",
      name: "Chan Narin",
      role: "Type Designer",
      students: "40+ Students",
      images: "./public/page/homepage/narin.jpg"
    },
    {
      thumb: "./public/page/coursepage/images6.png",
      title: "Design Systems 101: Building Scalable Component Libraries",
      name: "Chan Narin",
      role: "Product Designer",
      students: "90+ Students",
      images: "./public/page/homepage/narin.jpg"
    },
    {
      thumb: "./public/page/coursepage/images7.jpg",
      title: "Illustration for Web: Adding Personality to Interfaces",
      name: "Chan Narin",
      role: "Illustrator",
      students: "55+ Students",
      images: "./public/page/homepage/narin.jpg"
    },
    {
      thumb: "./public/page/coursepage/images1.jpg",
      title: "UX Research Methods: Understanding Real Users",
      name: "Chan Narin",
      role: "UX Researcher",
      students: "48+ Students",
      images: "./public/page/homepage/narin.jpg"
    },
    {
      thumb: "./public/page/coursepage/images3.png",
      title: "Design Thinking Workshop: Solving Problems Creatively",
      name: "Chan Narin",
      role: "Design Strategist",
      students: "72+ Students",
      images: "./public/page/homepage/narin.jpg"
    },
    {
      thumb: "./public/page/coursepage/images4.jpg",
      title: "Figma Mastery: Prototyping Like a Pro",
      name: "Chan Narin",
      role: "Product Designer",
      students: "100+ Students",
      images: "./public/page/homepage/narin.jpg"
    },
    {
      thumb: "./public/page/coursepage/image5.png",
      title: "Color Theory for Digital Products",
      name: "Chan Narin",
      role: "Visual Designer",
      students: "38+ Students",
      images: "./public/page/homepage/narin.jpg"
    },
  ],
  development: [
    {
      thumb: "./public/page/coursepage/images8.jpg",
      title: "Python for Financial Analysis: Next and Algorithmic Trading",
      name: "Boeun Soama",
      role: "Python Developer",
      students: "50+ Student",
      images: "./public/page/homepage/soama.JPG"
    },
    {
      thumb: "./public/page/coursepage/images9.jpg",
      title: "Full-Stack Web Development with Modern JavaScript",
      name: "Boeun Soama",
      role: "Web Developer",
      students: "120+ Student",
      images: "./public/page/homepage/soama.JPG"
    },
    {
      thumb: "./public/page/coursepage/images10.jpg",
      title: "Mastering React: Hooks, State and Component Patterns",
      name: "Boeun Soama",
      role: "Frontend Engineer",
      students: "95+ Student",
      images: "./public/page/homepage/soama.JPG"
    },
    {
      thumb: "./public/page/coursepage/images11.jpg",
      title: "Backend Engineering with Node.js and PostgreSQL",
      name: "Boeun Soama",
      role: "Backend Developer",
      students: "70+ Student",
      images: "./public/page/homepage/soama.JPG"
    },
    {
      thumb: "./public/page/coursepage/images12.jpg",
      title: "Mobile App Development with Swift for Beginners",
      name: "Boeun Soama",
      role: "iOS Developer",
      students: "60+ Student",
      images: "./public/page/homepage/soama.JPG"
    },
    {
      thumb: "./public/page/coursepage/images13.jpg",
      title: "DevOps Foundations: CI/CD Pipelines Explained",
      name: "Boeun Soama",
      role: "DevOps Engineer",
      students: "45+ Student",
      images: "./public/page/homepage/soama.JPG"
    },
    {
      thumb: "./public/page/coursepage/images8.jpg",
      title: "Introduction to Data Structures and Algorithms",
      name: "Boeun Soama",
      role: "Software Engineer",
      students: "88+ Student",
      images: "./public/page/homepage/soama.JPG"
    },
    {
      thumb: "./public/page/coursepage/images9.jpg",
      title: "Building REST APIs with Express and MongoDB",
      name: "Boeun Soama",
      role: "Backend Developer",
      students: "64+ Student",
      images: "./public/page/homepage/soama.JPG"
    },
    {
      thumb: "./public/page/coursepage/images10.jpg",
      title: "TypeScript for JavaScript Developers",
      name: "Boeun Soama",
      role: "Frontend Engineer",
      students: "101+ Student",
      images: "./public/page/homepage/soama.JPG"
    },
    {
      thumb: "./public/page/coursepage/images11.jpg",
      title: "Cloud Computing Basics with AWS",
      name: "Boeun Soama",
      role: "Cloud Engineer",
      students: "77+ Student",
      images: "./public/page/homepage/soama.JPG"
    },
  ],
  business: [
    {
      thumb: "./public/page/coursepage/image14.jpg",
      title: "Startup Fundamentals: From Idea to First Customer",
      name: "Moeun Senghour",
      role: "Business Coach",
      students: "50+ Student",
      images: "./public/page/homepage/senghour.jpg"
    },
    {
      thumb: "./public/page/coursepage/images15.jpg",
      title: "Negotiation Skills That Win Better Deals",
      name: "Moeun Senghour",
      role: "Negotiation Coach",
      students: "75+ Student",
      images: "./public/page/homepage/senghour.jpg"
    },
    {
      thumb: "./public/page/coursepage/images16.jpg",
      title: "Financial Modeling for Small Business Owners",
      name: "Moeun Senghour",
      role: "Financial Analyst",
      students: "65+ Student",
      images: "./public/page/homepage/senghour.jpg"
    },
    {
      thumb: "./public/page/coursepage/images17.jpg",
      title: "Leadership Essentials: Managing High-Performing Teams",
      name: "Moeun Senghour",
      role: "Leadership Coach",
      students: "85+ Student",
      images: "./public/page/homepage/senghour.jpg"
    },
    {
      thumb: "./public/page/coursepage/images18.jpg",
      title: "Marketing Strategy for Early-Stage Startups",
      name: "Moeun Senghour",
      role: "Growth Strategist",
      students: "40+ Student",
      images: "./public/page/homepage/senghour.jpg"
    },
    {
      thumb: "./public/page/coursepage/images19.png",
      title: "Business Analytics: Making Decisions with Data",
      name: "Moeun Senghour",
      role: "Business Analyst",
      students: "55+ Student",
      images: "./public/page/homepage/senghour.jpg"
    },
    {
      thumb: "./public/page/coursepage/image14.jpg",
      title: "Project Management Essentials: Delivering On Time",
      name: "Moeun Senghour",
      role: "Project Manager",
      students: "83+ Student",
      images: "./public/page/homepage/senghour.jpg"
    },
    {
      thumb: "./public/page/coursepage/images15.jpg",
      title: "Business Communication: Writing That Gets Results",
      name: "Moeun Senghour",
      role: "Communications Coach",
      students: "61+ Student",
      images: "./public/page/homepage/senghour.jpg"
    },
    {
      thumb: "./public/page/coursepage/images16.jpg",
      title: "Supply Chain Fundamentals for Growing Companies",
      name: "Moeun Senghour",
      role: "Operations Manager",
      students: "42+ Student",
      images: "./public/page/homepage/senghour.jpg"
    },
    {
      thumb: "./public/page/coursepage/images17.jpg",
      title: "Customer Success Strategy: Retaining Your Best Clients",
      name: "Moeun Senghour",
      role: "Customer Success Lead",
      students: "70+ Student",
      images: "./public/page/homepage/senghour.jpg"
    },
  ],
  data: [
    {
      thumb: "./public/page/coursepage/images20.jpg",
      title: "Python for Financial Analysis: Next and Algorithmic Trading",
      name: "Loeun Vandeth",
      role: "Data Scientist",
      students: "50+ Student",
      images: "./public/page/homepage/vandeth.png"
    },
    {
      thumb: "./public/page/coursepage/images21.jpg",
      title: "Machine Learning Foundations with Scikit-Learn",
      name: "Loeun Vandeth",
      role: "ML Engineer",
      students: "110+ Student",
      images: "./public/page/homepage/vandeth.png"
    },
    {
      thumb: "./public/page/coursepage/images22.jpg",
      title: "Data Visualization: Telling Stories with Charts",
      name: "Loeun Vandeth",
      role: "Data Analyst",
      students: "68+ Student",
      images: "./public/page/homepage/vandeth.png"
    },
    {
      thumb: "./public/page/coursepage/images23.jpg",
      title: "SQL for Analysts: Queries That Actually Scale",
      name: "Loeun Vandeth",
      role: "Data Engineer",
      students: "72+ Student",
      images: "./public/page/homepage/vandeth.png"
    },
    {
      thumb: "./public/page/coursepage/images24.jpg",
      title: "Deep Learning Basics: Neural Networks Explained",
      name: "Loeun Vandeth",
      role: "AI Researcher",
      students: "90+ Student",
      images: "./public/page/homepage/vandeth.png"
    },
    {
      thumb: "./public/page/coursepage/images25.jpg",
      title: "Statistics for Data Science: A Practical Primer",
      name: "Loeun Vandeth",
      role: "Statistician",
      students: "58+ Student",
      images: "./public/page/homepage/vandeth.png"
    },
    {
      thumb: "./public/page/coursepage/images20.jpg",
      title: "Big Data with Apache Spark: Processing at Scale",
      name: "Loeun Vandeth",
      role: "Data Engineer",
      students: "66+ Student",
      images: "./public/page/homepage/vandeth.png"
    },
    {
      thumb: "./public/page/coursepage/images21.jpg",
      title: "Natural Language Processing Fundamentals",
      name: "Loeun Vandeth",
      role: "NLP Engineer",
      students: "80+ Student",
      images: "./public/page/homepage/vandeth.png"
    },
    {
      thumb: "./public/page/coursepage/images22.jpg",
      title: "A/B Testing and Experimentation for Data Teams",
      name: "Loeun Vandeth",
      role: "Data Scientist",
      students: "52+ Student",
      images: "./public/page/homepage/vandeth.png"
    },
    {
      thumb: "./public/page/coursepage/images23.jpg",
      title: "Data Engineering Pipelines with Airflow",
      name: "Loeun Vandeth",
      role: "Data Engineer",
      students: "44+ Student",
      images: "./public/page/homepage/vandeth.png"
    },
  ],
  marketing: [
    {
      thumb: "./public/page/coursepage/images26.jpg",
      title: "SEO Mastery: Ranking Higher with Less Guesswork",
      name: "Moeun Senghour",
      role: "SEO Specialist",
      students: "50+ Student",
      images: "./public/page/homepage/senghour.jpg"
    },
    {
      thumb: "./public/page/coursepage/images27.jpg",
      title: "Social Media Marketing for Small Brands",
      name: "Moeun Senghour",
      role: "Social Strategist",
      students: "80+ Student",
      images: "./public/page/homepage/senghour.jpg"
    },
    {
      thumb: "./public/page/coursepage/images28.jpg",
      title: "Email Marketing That Converts: Lists to Loyalty",
      name: "Moeun Senghour",
      role: "CRM Marketer",
      students: "63+ Student",
      images: "./public/page/homepage/senghour.jpg"
    },
    {
      thumb: "./public/page/coursepage/images29.jpg",
      title: "Content Marketing Strategy for Modern Brands",
      name: "Moeun Senghour",
      role: "Content Lead",
      students: "95+ Student",
      images: "./public/page/homepage/senghour.jpg"
    },
    {
      thumb: "./public/page/coursepage/images30.jpg",
      title: "Paid Ads 101: Running Profitable Campaigns",
      name: "Moeun Senghour",
      role: "Performance Marketer",
      students: "47+ Student",
      images: "./public/page/homepage/senghour.jpg"
    },
    {
      thumb: "./public/page/coursepage/images31.jpg",
      title: "Brand Storytelling: Connecting with Your Audience",
      name: "Moeun Senghour",
      role: "Brand Strategist",
      students: "58+ Student",
      images: "./public/page/homepage/senghour.jpg"
    },
    {
      thumb: "./public/page/coursepage/images26.jpg",
      title: "Marketing Analytics: Measuring What Matters",
      name: "Moeun Senghour",
      role: "Marketing Analyst",
      students: "51+ Student",
      images: "./public/page/homepage/senghour.jpg"
    },
    {
      thumb: "./public/page/coursepage/images27.jpg",
      title: "Influencer Marketing Playbook for New Brands",
      name: "Moeun Senghour",
      role: "Influencer Marketing Manager",
      students: "39+ Student",
      images: "./public/page/homepage/senghour.jpg"
    },
    {
      thumb: "./public/page/coursepage/images28.jpg",
      title: "Conversion Rate Optimization Basics",
      name: "Moeun Senghour",
      role: "Growth Marketer",
      students: "67+ Student",
      images: "./public/page/homepage/senghour.jpg"
    },
    {
      thumb: "./public/page/coursepage/images29.jpg",
      title: "Marketing Automation with HubSpot",
      name: "Moeun Senghour",
      role: "Marketing Ops Specialist",
      students: "54+ Student",
      images: "./public/page/homepage/senghour.jpg"
    },
  ],
  ai: [
    {
      thumb: "./public/page/coursepage/images1.jpg",
      title: "Introduction to Artificial Intelligence: Concepts and History",
      name: "Loeun Vandeth",
      role: "AI Researcher",
      students: "92+ Student",
      images: "./public/page/homepage/vandeth.png"
    },
    {
      thumb: "./public/page/coursepage/images3.png",
      title: "Prompt Engineering for Large Language Models",
      name: "Loeun Vandeth",
      role: "AI Engineer",
      students: "140+ Student",
      images: "./public/page/homepage/vandeth.png"
    },
    {
      thumb: "./public/page/coursepage/images4.jpg",
      title: "Building Chatbots with Transformer Models",
      name: "Loeun Vandeth",
      role: "NLP Engineer",
      students: "76+ Student",
      images: "./public/page/homepage/vandeth.png"
    },
    {
      thumb: "./public/page/coursepage/image5.png",
      title: "Computer Vision Basics: Teaching Machines to See",
      name: "Loeun Vandeth",
      role: "Computer Vision Engineer",
      students: "64+ Student",
      images: "./public/page/homepage/vandeth.png"
    },
    {
      thumb: "./public/page/coursepage/images6.png",
      title: "Reinforcement Learning: Teaching Agents to Decide",
      name: "Loeun Vandeth",
      role: "ML Engineer",
      students: "48+ Student",
      images: "./public/page/homepage/vandeth.png"
    },
    {
      thumb: "./public/page/coursepage/images7.jpg",
      title: "Generative AI: From GANs to Diffusion Models",
      name: "Loeun Vandeth",
      role: "AI Researcher",
      students: "108+ Student",
      images: "./public/page/homepage/vandeth.png"
    },
    {
      thumb: "./public/page/coursepage/images8.jpg",
      title: "Ethics and Bias in AI Systems",
      name: "Loeun Vandeth",
      role: "AI Ethics Consultant",
      students: "37+ Student",
      images: "./public/page/homepage/vandeth.png"
    },
    {
      thumb: "./public/page/coursepage/images9.jpg",
      title: "MLOps: Deploying Machine Learning Models to Production",
      name: "Loeun Vandeth",
      role: "MLOps Engineer",
      students: "59+ Student",
      images: "./public/page/homepage/vandeth.png"
    },
    {
      thumb: "./public/page/coursepage/images10.jpg",
      title: "AI for Business: Practical Use Cases and ROI",
      name: "Loeun Vandeth",
      role: "AI Strategist",
      students: "84+ Student",
      images: "./public/page/homepage/vandeth.png"
    },
    {
      thumb: "./public/page/coursepage/images11.jpg",
      title: "Fine-Tuning Language Models for Custom Tasks",
      name: "Loeun Vandeth",
      role: "AI Engineer",
      students: "71+ Student",
      images: "./public/page/homepage/vandeth.png"
    },
  ],
  database: [
    {
      thumb: "./public/page/coursepage/images12.jpg",
      title: "SQL Fundamentals: From SELECT to Subqueries",
      name: "Boeun Soama",
      role: "Database Developer",
      students: "130+ Student",
      images: "./public/page/homepage/soama.JPG"
    },
    {
      thumb: "./public/page/coursepage/images13.jpg",
      title: "Relational Database Design and Normalization",
      name: "Boeun Soama",
      role: "Database Architect",
      students: "62+ Student",
      images: "./public/page/homepage/soama.JPG"
    },
    {
      thumb: "./public/page/coursepage/image14.jpg",
      title: "PostgreSQL for Backend Developers",
      name: "Boeun Soama",
      role: "Database Engineer",
      students: "77+ Student",
      images: "./public/page/homepage/soama.JPG"
    },
    {
      thumb: "./public/page/coursepage/images15.jpg",
      title: "NoSQL Databases: MongoDB in Practice",
      name: "Boeun Soama",
      role: "Database Engineer",
      students: "95+ Student",
      images: "./public/page/homepage/soama.JPG"
    },
    {
      thumb: "./public/page/coursepage/images16.jpg",
      title: "Database Performance Tuning and Indexing",
      name: "Boeun Soama",
      role: "Database Administrator",
      students: "41+ Student",
      images: "./public/page/homepage/soama.JPG"
    },
    {
      thumb: "./public/page/coursepage/images17.jpg",
      title: "Data Modeling for Scalable Applications",
      name: "Boeun Soama",
      role: "Data Architect",
      students: "53+ Student",
      images: "./public/page/homepage/soama.JPG"
    },
    {
      thumb: "./public/page/coursepage/images18.jpg",
      title: "Introduction to Redis: Caching and In-Memory Data",
      name: "Boeun Soama",
      role: "Database Engineer",
      students: "46+ Student",
      images: "./public/page/homepage/soama.JPG"
    },
    {
      thumb: "./public/page/coursepage/images19.png",
      title: "Database Security and Access Control",
      name: "Boeun Soama",
      role: "Database Administrator",
      students: "34+ Student",
      images: "./public/page/homepage/soama.JPG"
    },
    {
      thumb: "./public/page/coursepage/images20.jpg",
      title: "Backup, Recovery and High Availability Strategies",
      name: "Boeun Soama",
      role: "Database Administrator",
      students: "29+ Student",
      images: "./public/page/homepage/soama.JPG"
    },
    {
      thumb: "./public/page/coursepage/images21.jpg",
      title: "Working with Graph Databases: Neo4j Essentials",
      name: "Boeun Soama",
      role: "Database Engineer",
      students: "40+ Student",
      images: "./public/page/homepage/soama.JPG"
    },
  ],
  analytics: [
    {
      thumb: "./public/page/coursepage/images22.jpg",
      title: "Excel for Data Analysis: From Basics to Pivot Tables",
      name: "Loeun Vandeth",
      role: "Data Analyst",
      students: "150+ Student",
      images: "./public/page/homepage/vandeth.png"
    },
    {
      thumb: "./public/page/coursepage/images23.jpg",
      title: "Data Analytics with Power BI: Building Dashboards",
      name: "Loeun Vandeth",
      role: "BI Analyst",
      students: "98+ Student",
      images: "./public/page/homepage/vandeth.png"
    },
    {
      thumb: "./public/page/coursepage/images24.jpg",
      title: "Tableau Fundamentals: Visualizing Data Stories",
      name: "Loeun Vandeth",
      role: "Data Visualization Specialist",
      students: "86+ Student",
      images: "./public/page/homepage/vandeth.png"
    },
    {
      thumb: "./public/page/coursepage/images25.jpg",
      title: "Google Analytics for Marketing Decisions",
      name: "Loeun Vandeth",
      role: "Digital Analyst",
      students: "67+ Student",
      images: "./public/page/homepage/vandeth.png"
    },
    {
      thumb: "./public/page/coursepage/images26.jpg",
      title: "Statistical Analysis for Business Decisions",
      name: "Loeun Vandeth",
      role: "Business Analyst",
      students: "52+ Student",
      images: "./public/page/homepage/vandeth.png"
    },
    {
      thumb: "./public/page/coursepage/images27.jpg",
      title: "Introduction to KPIs and Business Dashboards",
      name: "Loeun Vandeth",
      role: "Analytics Consultant",
      students: "44+ Student",
      images: "./public/page/homepage/vandeth.png"
    },
    {
      thumb: "./public/page/coursepage/images28.jpg",
      title: "Customer Analytics: Understanding User Behavior",
      name: "Loeun Vandeth",
      role: "Product Analyst",
      students: "58+ Student",
      images: "./public/page/homepage/vandeth.png"
    },
    {
      thumb: "./public/page/coursepage/images29.jpg",
      title: "Forecasting and Trend Analysis for Analysts",
      name: "Loeun Vandeth",
      role: "Data Analyst",
      students: "39+ Student",
      images: "./public/page/homepage/vandeth.png"
    },
    {
      thumb: "./public/page/coursepage/images30.jpg",
      title: "Data Cleaning and Preparation Techniques",
      name: "Loeun Vandeth",
      role: "Data Analyst",
      students: "61+ Student",
      images: "./public/page/homepage/vandeth.png"
    },
    {
      thumb: "./public/page/coursepage/images31.jpg",
      title: "Reporting Automation with Python and Pandas",
      name: "Loeun Vandeth",
      role: "Analytics Engineer",
      students: "73+ Student",
      images: "./public/page/homepage/vandeth.png"
    },
  ],
  devops: [
    {
      thumb: "./public/page/coursepage/images1.jpg",
      title: "DevOps Fundamentals: Culture, Practices and Tools",
      name: "Boeun Soama",
      role: "DevOps Engineer",
      students: "88+ Student",
      images: "./public/page/homepage/soama.JPG"
    },
    {
      thumb: "./public/page/coursepage/images3.png",
      title: "Docker Essentials: Containerizing Applications",
      name: "Boeun Soama",
      role: "DevOps Engineer",
      students: "112+ Student",
      images: "./public/page/homepage/soama.JPG"
    },
    {
      thumb: "./public/page/coursepage/images4.jpg",
      title: "Kubernetes for Beginners: Orchestrating Containers",
      name: "Boeun Soama",
      role: "Platform Engineer",
      students: "94+ Student",
      images: "./public/page/homepage/soama.JPG"
    },
    {
      thumb: "./public/page/coursepage/image5.png",
      title: "CI/CD Pipelines with GitHub Actions",
      name: "Boeun Soama",
      role: "DevOps Engineer",
      students: "70+ Student",
      images: "./public/page/homepage/soama.JPG"
    },
    {
      thumb: "./public/page/coursepage/images6.png",
      title: "Infrastructure as Code with Terraform",
      name: "Boeun Soama",
      role: "Cloud Engineer",
      students: "56+ Student",
      images: "./public/page/homepage/soama.JPG"
    },
    {
      thumb: "./public/page/coursepage/images7.jpg",
      title: "Monitoring and Observability with Prometheus and Grafana",
      name: "Boeun Soama",
      role: "Site Reliability Engineer",
      students: "43+ Student",
      images: "./public/page/homepage/soama.JPG"
    },
    {
      thumb: "./public/page/coursepage/images8.jpg",
      title: "Linux System Administration for DevOps",
      name: "Boeun Soama",
      role: "Systems Administrator",
      students: "65+ Student",
      images: "./public/page/homepage/soama.JPG"
    },
    {
      thumb: "./public/page/coursepage/images9.jpg",
      title: "Configuration Management with Ansible",
      name: "Boeun Soama",
      role: "DevOps Engineer",
      students: "38+ Student",
      images: "./public/page/homepage/soama.JPG"
    },
    {
      thumb: "./public/page/coursepage/images10.jpg",
      title: "Cloud Cost Optimization Strategies",
      name: "Boeun Soama",
      role: "Cloud Engineer",
      students: "31+ Student",
      images: "./public/page/homepage/soama.JPG"
    },
    {
      thumb: "./public/page/coursepage/images11.jpg",
      title: "Building a Zero-Downtime Deployment Pipeline",
      name: "Boeun Soama",
      role: "DevOps Engineer",
      students: "49+ Student",
      images: "./public/page/homepage/soama.JPG"
    },
  ],
  mobile: [
    {
      thumb: "./public/page/coursepage/images12.jpg",
      title: "iOS App Development with SwiftUI",
      name: "Boeun Soama",
      role: "iOS Developer",
      students: "82+ Student",
      images: "./public/page/homepage/soama.JPG"
    },
    {
      thumb: "./public/page/coursepage/images13.jpg",
      title: "Android Development with Kotlin: From Zero to App",
      name: "Boeun Soama",
      role: "Android Developer",
      students: "97+ Student",
      images: "./public/page/homepage/soama.JPG"
    },
    {
      thumb: "./public/page/coursepage/image14.jpg",
      title: "Cross-Platform Apps with Flutter",
      name: "Boeun Soama",
      role: "Mobile Developer",
      students: "104+ Student",
      images: "./public/page/homepage/soama.JPG"
    },
    {
      thumb: "./public/page/coursepage/images15.jpg",
      title: "React Native for Web Developers",
      name: "Boeun Soama",
      role: "Mobile Developer",
      students: "78+ Student",
      images: "./public/page/homepage/soama.JPG"
    },
    {
      thumb: "./public/page/coursepage/images16.jpg",
      title: "Mobile UI/UX Design Principles",
      name: "Boeun Soama",
      role: "Mobile Designer",
      students: "45+ Student",
      images: "./public/page/homepage/soama.JPG"
    },
    {
      thumb: "./public/page/coursepage/images17.jpg",
      title: "App Store Optimization and Launch Strategy",
      name: "Boeun Soama",
      role: "Mobile Growth Manager",
      students: "36+ Student",
      images: "./public/page/homepage/soama.JPG"
    },
    {
      thumb: "./public/page/coursepage/images18.jpg",
      title: "Building Offline-First Mobile Apps",
      name: "Boeun Soama",
      role: "Mobile Developer",
      students: "29+ Student",
      images: "./public/page/homepage/soama.JPG"
    },
    {
      thumb: "./public/page/coursepage/images19.png",
      title: "Push Notifications and Deep Linking Explained",
      name: "Boeun Soama",
      role: "Mobile Developer",
      students: "33+ Student",
      images: "./public/page/homepage/soama.JPG"
    },
    {
      thumb: "./public/page/coursepage/images20.jpg",
      title: "Mobile App Testing and Debugging",
      name: "Boeun Soama",
      role: "QA Engineer",
      students: "41+ Student",
      images: "./public/page/homepage/soama.JPG"
    },
    {
      thumb: "./public/page/coursepage/images21.jpg",
      title: "Monetization Strategies for Mobile Apps",
      name: "Boeun Soama",
      role: "Mobile Product Manager",
      students: "54+ Student",
      images: "./public/page/homepage/soama.JPG"
    },
  ],
  security: [
    {
      thumb: "./public/page/coursepage/images22.jpg",
      title: "Cybersecurity Fundamentals: Protecting Digital Assets",
      name: "Boeun Soama",
      role: "Security Analyst",
      students: "119+ Student",
      images: "./public/page/homepage/soama.JPG"
    },
    {
      thumb: "./public/page/coursepage/images23.jpg",
      title: "Ethical Hacking 101: Thinking Like an Attacker",
      name: "Boeun Soama",
      role: "Penetration Tester",
      students: "142+ Student",
      images: "./public/page/homepage/soama.JPG"
    },
    {
      thumb: "./public/page/coursepage/images24.jpg",
      title: "Network Security Essentials",
      name: "Boeun Soama",
      role: "Security Engineer",
      students: "68+ Student",
      images: "./public/page/homepage/soama.JPG"
    },
    {
      thumb: "./public/page/coursepage/images25.jpg",
      title: "Web Application Security: Finding and Fixing Vulnerabilities",
      name: "Boeun Soama",
      role: "AppSec Engineer",
      students: "77+ Student",
      images: "./public/page/homepage/soama.JPG"
    },
    {
      thumb: "./public/page/coursepage/images26.jpg",
      title: "Cloud Security Best Practices",
      name: "Boeun Soama",
      role: "Cloud Security Engineer",
      students: "51+ Student",
      images: "./public/page/homepage/soama.JPG"
    },
    {
      thumb: "./public/page/coursepage/images27.jpg",
      title: "Incident Response and Threat Detection",
      name: "Boeun Soama",
      role: "SOC Analyst",
      students: "40+ Student",
      images: "./public/page/homepage/soama.JPG"
    },
    {
      thumb: "./public/page/coursepage/images28.jpg",
      title: "Cryptography Basics for Developers",
      name: "Boeun Soama",
      role: "Security Engineer",
      students: "35+ Student",
      images: "./public/page/homepage/soama.JPG"
    },
    {
      thumb: "./public/page/coursepage/images29.jpg",
      title: "Identity and Access Management Explained",
      name: "Boeun Soama",
      role: "Security Architect",
      students: "28+ Student",
      images: "./public/page/homepage/soama.JPG"
    },
    {
      thumb: "./public/page/coursepage/images30.jpg",
      title: "Security Compliance and Risk Management",
      name: "Boeun Soama",
      role: "Compliance Analyst",
      students: "24+ Student",
      images: "./public/page/homepage/soama.JPG"
    },
    {
      thumb: "./public/page/coursepage/images31.jpg",
      title: "Social Engineering and Phishing Defense",
      name: "Boeun Soama",
      role: "Security Awareness Trainer",
      students: "47+ Student",
      images: "./public/page/homepage/soama.JPG"
    },
  ],
};

function renderCourses(cat) {
  const grid = document.getElementById("courseGrid");
  grid.innerHTML = "";
  const list = coursesByCategory[cat] || [];
  list.forEach((c) => {
    const card = document.createElement("div");
    card.className = "course-card";
    card.innerHTML = `
            <div class="thumb">
                <img src="${c.thumb}" alt="${c.title}" onerror="this.style.display='none'">
                <div class="play-badge">10x Lesson</div>
            </div>
            <div class="card-body">
                <div class="card-top">
                    <span class="lesson-tag">10x Lesson</span>
                    <span class="category-pill">${cat.charAt(0).toUpperCase() + cat.slice(1)}</span>
                </div>
                <h3>${c.title}</h3>
                <div class="instructor-row">
                    <div class="instructor">
                        <div class="avatar">
                          <img src=${c.images} alt="">
                        </div>
                        <div>
                            <div class="name">${c.name}</div>
                        </div>
                    </div>
                    <div class="students">${c.students}</div>
                </div>
                <div class="card-footer">
                    <div class="stars">★★★★★</div>
                    <div class="enroll">Enroll Now</div>
                </div>
            </div>
        `;
    grid.appendChild(card);
  });
}
document.getElementById("tabs").addEventListener("click", (e) => {
  const btn = e.target.closest(".tab");
  if (!btn) return;
  document
    .querySelectorAll(".tab")
    .forEach((t) => t.classList.remove("active"));
  btn.classList.add("active");

  // Leaving search mode: reset heading/status and clear the ?q= param + hero input
  const heading = document.getElementById("coursesHeading");
  const status = document.getElementById("searchStatus");
  const heroInput = document.getElementById("heroSearchInput");
  heading.innerHTML = `Popular <span style="color: gray;">Courses</span>`;
  status.style.display = "none";
  status.innerHTML = "";
  if (heroInput) heroInput.value = "";
  const url = new URL(window.location);
  url.searchParams.delete("q");
  window.history.replaceState({}, "", url);

  renderCourses(btn.dataset.cat);
});

function scrollPartners(dir) {
  const track = document.getElementById("partnerItems");
  const current = getComputedStyle(track).animationPlayState;
  track.style.animationPlayState = "paused";
  let pos = track.getBoundingClientRect().left;
  track.style.transform = `translateX(${pos + dir * -120}px)`;
  setTimeout(() => (track.style.animationPlayState = "running"), 1500);
}

// ===== SEARCH FEATURE =====

// Flattens every category into one array so we can search across all of them at once
function getAllCourses() {
  const all = [];
  Object.keys(coursesByCategory).forEach((cat) => {
    coursesByCategory[cat].forEach((c) => all.push({ ...c, cat }));
  });
  return all;
}

// Renders a given list of courses (already resolved, with a `cat` field) into the grid
function renderCourseCards(list) {
  const grid = document.getElementById("courseGrid");
  grid.innerHTML = "";
  list.forEach((c) => {
    const card = document.createElement("div");
    card.className = "course-card";
    card.innerHTML = `
            <div class="thumb">
                <img src="${c.thumb}" alt="${c.title}" onerror="this.style.display='none'">
                <div class="play-badge">10x Lesson</div>
            </div>
            <div class="card-body">
                <div class="card-top">
                    <span class="lesson-tag">10x Lesson</span>
                    <span class="category-pill">${c.cat.charAt(0).toUpperCase() + c.cat.slice(1)}</span>
                </div>
                <h3>${c.title}</h3>
                <div class="instructor-row">
                    <div class="instructor">
                        <div class="avatar">
                          <img src=${c.images} alt="">
                        </div>
                        <div>
                            <div class="name">${c.name}</div>
                        </div>
                    </div>
                    <div class="students">${c.students}</div>
                </div>
                <div class="card-footer">
                    <div class="stars">★★★★★</div>
                    <div class="enroll">Enroll Now</div>
                </div>
            </div>
        `;
    grid.appendChild(card);
  });
}

// Searches title, instructor name, instructor role, and category for the query text.
// Matches on word boundaries (e.g. "AI" matches "AI Researcher") instead of raw
// substring matching, so it won't false-positive on words that merely contain the
// query letters, like "Email" or "Explained" containing "ai".
function searchCourses(query) {
  const q = query.trim().toLowerCase();
  if (!q) return getAllCourses();

  // Escape regex special characters in the user's input, then match at a word start
  const escaped = q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const pattern = new RegExp(`\\b${escaped}`, "i");

  return getAllCourses().filter((c) =>
    pattern.test(c.title) ||
    pattern.test(c.name) ||
    pattern.test(c.role) ||
    pattern.test(c.cat)
  );
}

function runSearch(query) {
  const heading = document.getElementById("coursesHeading");
  const status = document.getElementById("searchStatus");
  const tabs = document.getElementById("tabs");
  const results = searchCourses(query);

  // Switch heading/status into "search mode"
  heading.innerHTML = `Search results for <span style="color: gray;">"${query}"</span>`;
  tabs.querySelectorAll(".tab").forEach((t) => t.classList.remove("active"));

  status.style.display = "block";
  status.innerHTML = results.length
    ? `${results.length} course${results.length === 1 ? "" : "s"} found. <a href="#" id="clearSearchLink" style="color:#1a9e5c;">Clear search</a>`
    : `No courses matched "${query}". <a href="#" id="clearSearchLink" style="color:#1a9e5c;">Clear search</a>`;

  document.getElementById("clearSearchLink").addEventListener("click", (e) => {
    e.preventDefault();
    clearSearch();
  });

  if (results.length) {
    renderCourseCards(results);
  } else {
    document.getElementById("courseGrid").innerHTML =
      `<p style="grid-column:1/-1; text-align:center; color:gray; padding: 40px 0;">
        Try a different keyword, or browse a category above.
      </p>`;
  }
}

function clearSearch() {
  const heading = document.getElementById("coursesHeading");
  const status = document.getElementById("searchStatus");
  const heroInput = document.getElementById("heroSearchInput");

  heading.innerHTML = `Popular <span style="color: gray;">Courses</span>`;
  status.style.display = "none";
  status.innerHTML = "";
  if (heroInput) heroInput.value = "";

  document.querySelectorAll(".tab").forEach((t) => t.classList.remove("active"));
  document.querySelector('.tab[data-cat="design"]').classList.add("active");

  // Clean the ?q= param from the URL without reloading the page
  const url = new URL(window.location);
  url.searchParams.delete("q");
  window.history.replaceState({}, "", url);

  renderCourses("design");
}

function triggerHeroSearch() {
  const input = document.getElementById("heroSearchInput");
  const query = input.value;
  if (!query.trim()) {
    clearSearch();
    return;
  }
  const url = new URL(window.location);
  url.searchParams.set("q", query);
  window.history.replaceState({}, "", url);
  runSearch(query);
}

const heroSearchBtn = document.getElementById("heroSearchBtn");
const heroSearchInput = document.getElementById("heroSearchInput");
if (heroSearchBtn) {
  heroSearchBtn.addEventListener("click", triggerHeroSearch);
}
if (heroSearchInput) {
  heroSearchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") triggerHeroSearch();
  });
}

// ===== INITIAL LOAD =====
// If the page was opened with ?q=..., that came from the navbar search on
// another page — run the search immediately instead of the default "design" tab.
const initialQuery = new URLSearchParams(window.location.search).get("q");
if (initialQuery) {
  if (heroSearchInput) heroSearchInput.value = initialQuery;
  runSearch(initialQuery);
} else {
  renderCourses("design");
}