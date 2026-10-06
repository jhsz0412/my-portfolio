import type { Project } from "./types"

export const projects: Project[] = [
    {
    title: "Inventory Management System With Descriptive Analytics",
    description: "I designed and developed a real-time Inventory Management System with descriptive analytics. The system handles stock monitoring, requisition processing, and item distribution, with QR code-based tracking for deliveries and inventory movement. It also generates reports and analytics to support better planning and inventory control.",
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
    description: "I developed and enhanced a web-based recruitment platform, improving the online application process, applicant tracking, and recruiter workflow.",
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
    description: "I built a real-time monitoring platform to track ballot distribution and generate election reports across barangays during the 2025 elections. This system improved transparency, monitoring accuracy, and administrative oversight.",
    images: [
      "/ballot-tracking/dashboard.jpg",
      "/ballot-tracking/dispatch.jpg",
    ],
    tech: ["React", "JavaScript", "C#", "ASP.NET Core", "RestAPI"],
  },
  {
    title: "Point of Sale (POS) System",
    description: "I built a Point of Sale (POS) system to manage ordering, inventory, billing, and sales reporting. The system improved transaction accuracy, reduced manual errors, and streamlined daily business operations.",
    images: [
      "/pos/dashboard.jpg",
      "/pos/pos.jpg",
    ],
    tech: ["C#", "Win Forms", ".NET", "ADO.NET", "ORM"],
  },
]