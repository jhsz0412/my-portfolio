import type { Project } from "./types"

export const projects: Project[] = [
    {
    title: "Inventory Management System With Descriptive Analytics",
    description: "Designed and built a real-time Inventory Management System with built-in descriptive analytics. The platform automates stock monitoring, requisition workflows, and item distribution while utilizing QR code-based tracking for seamless delivery updates and inventory movement. It generates automated reports and visual analytics to provide clear operational visibility and streamline stock management.",
    images: [
      "/inventory/login.jpg",
      "/inventory/warehouse-dashboard.jpg",
      "/inventory/requisition-list.jpg",
      "/inventory/requisition.jpg",
      "/inventory/stocks.jpg",
    ],
    tech: ["React", "C#", "ASP.NET Core", "RestAPI"],
  },
  {
    title: "Application Tracking System (ATS)",
    description: "Built a complete web-based recruitment platform from the ground up to handle candidate sourcing, tracking, and evaluation. Developed responsive applicant portals, structured recruitment status pipelines, role-based recruiter dashboards, and interview coordination modules to simplify applicant tracking and hiring decisions.",
    images: [
      "/ats/landing.jpg",
      "/ats/jobs.jpg",
      "/ats/login.jpg",
      "/ats/dashboard.jpg",
    ],
    tech: ["React", "JavaScript", "C#", "ASP.NET Core", "RestAPI"],
  },
  {
    title: "Ballot Tracking System",
    description: "Built a real-time monitoring platform to track ballot distribution and generate automated election reports across barangays during the 2025 elections. Developed secure tracking modules, live status dashboards, and automated report generation tools to ensure precise, real-time administrative oversight throughout the election process.",
    images: [
      "/ballot-tracking/dashboard.jpg",
      "/ballot-tracking/dispatch.jpg",
    ],
    tech: ["React", "JavaScript", "C#", "ASP.NET Core", "RestAPI"],
  },
  {
    title: "Point of Sale (POS) System",
    description: "Developed an end-to-end Point of Sale (POS) system covering order entry, stock monitoring, payment processing, and financial reporting. Designed streamlined checkout interfaces for cashiers, automated inventory update triggers, and detailed sales summary views for seamless daily business tracking.",
    images: [
      "/pos/dashboard.jpg",
      "/pos/pos.jpg",
    ],
    tech: ["C#", "Win Forms", ".NET", "ADO.NET", "ORM"],
  },
    {
    title: "E Portfolio Platform",
    description: "Designed and built an E-Portfolio platform to help students organize, document, and showcase their On-the-Job Training (OJT) achievements and professional growth. Developed digital modules for submitting online session records, lesson plans, and daily reflections, providing a structured layout for tracking skills and overall career preparation.",
    images: [
      "/eportfolio/img1.jpg",
      "/eportfolio/img2.jpg",
    ],
    tech: ["PHP", "HTML", "CSS", "JavaScript"],
  },
]