import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Mahesh Kumar — AI Product Manager",
  author: "Mahesh Kumar",
  description:
    "AI, data and product leader building GenAI and analytics products in insurance and financial services.",
  lang: "en",

  // Make sure this file exists in /public
  siteLogo: "/Mahesh Kumar_01-min.jpg",

  // Use routes (recommended) unless your homepage has these sections as anchors.
  navLinks: [
    { text: "Home", href: "/" },
    { text: "Experience", href: "/#experience" },
    { text: "Projects", href: "/projects" },
    { text: "About", href: "/about" },
  ],

  // Keep only ONE canonical URL
  canonicalURL: "https://ai-product-portfolio-en.vercel.app",

  socialLinks: [
    // Replace with your real LinkedIn
    { text: "LinkedIn", href: "https://www.linkedin.com/in/maheshkumar3/" },
    { text: "GitHub", href: "https://github.com/mkumar84" },
    { text: "Email", href: "mailto:mahesh.mahto@gmail.com" },
  ],

  // Replace when you create your own OG image in /public
  socialImage: "/og-mahesh.png",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Mahesh Kumar",
    specialty: "AI, Data & Product Leader (GenAI Products)",
    summary:
      "Product leader with 17+ years building customer-centric, analytics-informed products across financial services and consulting. I lead GenAI/ML products from discovery to delivery, aligning business, risk, and engineering teams to deliver measurable outcomes.",
    email: "mahesh.mahto@gmail.com",
  },

  experience: [
    {
      company: "Royal Bank of Canada (RBC)",
      position: "Lead Product Owner — GenAI Products",
      startDate: "Jun 2025",
      endDate: "Present",
      summary: [
        "Own GenAI product vision and roadmap; lead prioritization, release planning, and scaling while meeting risk and compliance requirements.",
        "Launched Next Best Action (IIS Referral), enabling a $3M reserve release within 6 months through clear hypotheses, success metrics, and phased rollout aligned with business, risk, and technology teams.",
        "Rolled out French/English translation capabilities, reducing manual effort by 50% and improving consistency and responsiveness for customer-facing journeys.",
        "Delivered claims summarization capabilities to improve adjuster speed and efficiency; iterated using feedback and usage data with operations, data science, and technology partners.",
        "Led risk assessment and mitigation; presented proposals, experimentation plans, and impact updates to Model Risk, AI Working Group, and Risk/Governance Council.",
      ],
    },
    {
      company: "Royal Bank of Canada (RBC)",
      position: "Product Owner (ML/GenAI Products) — Culture & Conduct Analytics",
      startDate: "Jul 2022",
      endDate: "Jun 2025",
      summary: [
        "Directed requirements, design, development, and rollout of ML-driven anomaly detection and GenAI-based risk profiling for privacy and “Print from Home” risks.",
        "Co-led development of the AI-powered Culture & Conduct Index (CCI), combining behavioural signals, control data, and qualitative insights into a productized decision-support analytics layer.",
        "Enhanced the quarterly enterprise Culture & Conduct report through improved data summarization, visual storytelling, and process efficiency to strengthen risk decisions.",
      ],
    },
    {
      company: "Stradigi AI",
      position: "Data Analytics & Machine Learning Specialist",
      startDate: "Nov 2021",
      endDate: "Jul 2022",
      summary: [
        "Defined and executed AI product strategies, requirements, data assets, KPIs, and test cases for client engagements.",
        "Led development and testing of data models, algorithms, and dashboards to enhance an AutoML platform; coordinated a team of four data scientists to deliver reusable capabilities.",
        "Created evaluation matrices and testing scenarios to ensure new features met success criteria and improved user outcomes.",
      ],
    },
    {
      company: "Equifax",
      position: "Senior Consultant — Data and Analytics",
      startDate: "Jul 2021",
      endDate: "Nov 2022",
      summary: [
        "Partnered with domain SMEs to define requirements, identify gaps, and validate AI product features, contributing to a 10% revenue increase from improved score prediction.",
        "Streamlined intake/fulfillment processes and reporting flows, reducing timelines by 70–80% through better requirements, prioritization, and WIP visibility.",
      ],
    },
    {
      company: "Royal Bank of Canada (RBC)",
      position: "Senior Application Specialist",
      startDate: "Aug 2018",
      endDate: "Jul 2021",
      summary: [
        "Led data analysis, requirements, testing, profiling, and feed design for DS Online decommissioning and migration to WMCOnline with Product Managers and Chief Data Office.",
        "Architected reusable APIs and web services, reducing operational costs by 15–20% and improving data accessibility across teams.",
        "Built Python-based automation for Wealth Management Data Hub, improving data discovery/profiling efficiency by 60–70%.",
      ],
    },
    {
      company: "CIBC — Enterprise Data Hub",
      position: "Senior Business Analyst (Contract)",
      startDate: "Aug 2015",
      endDate: "Aug 2018",
      summary: [
        "Led regulatory data ingestion and transformation initiatives to improve data quality and governance.",
        "Designed an automated ingestion data model reducing costs by 60% and ingestion time by 70% YoY; improved metadata tagging and data quality.",
        "Migrated ECIF and other sources to Hadoop, improving data processing efficiency by 50% through collaboration with CDO, data owners, and consumers.",
      ],
    },
  ],

 projects: [
  {
    name: "AI Product Portfolio (Personal)",
    summary:
      "Personal portfolio site built with Astro + Tailwind and deployed on Vercel to showcase product thinking and hands-on prototypes.",
    linkPreview: "https://ai-product-portfolio-en.vercel.app",
    linkSource: "https://github.com/mkumar84/ai-product-portfolio-en",
    image: "/project-portfolio.png",
  },
  {
    name: "AI Data Discovery Assistant (Personal Prototype)",
    summary:
      "LLM prototype for natural-language search and explanation of data assets using metadata + embeddings. Uses sample data only.",
    linkPreview: "/projects",
    linkSource: "https://github.com/mkumar84/mkumar84-AI-Data-Discovery-Assistance",
    image: "/project-data-discovery.png",
  },
  {
    name: "Insurance Analytics Dashboard (Sample Data)",
    summary:
      "Analytics dashboard prototype demonstrating KPI design, metrics definitions, and storytelling using synthetic/sample datasets.",
    linkPreview: "/projects",
    linkSource: "https://github.com/mkumar84/Insurance_Dashboard",
    image: "/project-dashboard.png",
  },
  {
    name: "Bankruptcy Prediction Model (Personal)",
    summary:
      "ML model predicting financial distress using financial ratios and behavioral indicators to support proactive risk management.",
    linkPreview: "/projects",
    linkSource: "https://github.com/mkumar84/Bankuptcy-Prediction",
    image: "/project-ml.png",
  },
],
  about: {
    description: `
I’m Mahesh Kumar — an AI, data and product leader with 17+ years of experience across financial services and consulting.

I specialize in shaping product vision and multi-year roadmaps, translating complex business and risk problems into clear, impact-driven features, and leading cross-functional teams to deliver measurable outcomes. My strengths sit at the intersection of product strategy, GenAI/ML, analytics, and stakeholder leadership.

I’ve built and scaled GenAI products in claims and risk contexts (e.g., Next Best Action, summarization, translation), partnering closely with data science, engineering, operations, and governance to deliver responsibly.
    `.trim(),
    image: "/mahesh-about.jpg",
  },
};
