export interface Achievement {
  name: string;
  result: string;
  context: string;
  date: string;
  projectUrl?: string;
}

export const achievements: Achievement[] = [
  {
    name: "DebugOn – ONDC × BECon'25 Hackathon",
    result: "1st Position",
    context: "Hosted by ONDC, organized by IIT Delhi at Tryst'25",
    date: "February 2025",
    projectUrl:
      "https://github.com/aryangoel984/Global-Catalog-Registry-for-ONDC",
  },
  {
    name: "Execute 4.0 Hackathon",
    result: "2nd Position",
    context: "Organized by E-Cell DTU, sponsored by SabPaisa",
    date: "March 2025",
    projectUrl: "https://github.com/aryangoel984/fraudguard",
  },
  {
    name: "National Fraud Prevention Challenge",
    result: "Finalist, Top 12 of 600+ teams",
    context: "Organized by RBIH (Reserve Bank Innovation Hub)",
    date: "April 2026",
    projectUrl:
      "https://github.com/aryangoel984/AML_Mule-Detection-System",
  },
  {
    name: "Google Solution Challenge",
    result: "Top 100 of 60,000+ registrations",
    context: "Global competition by Google for Developers",
    date: "June 2025",
    projectUrl: "https://github.com/aryangoel984/google_solution_challenge",
  },
];
