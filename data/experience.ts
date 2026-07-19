export interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  type?: string;
  bullets: string[];
  techStack?: string[];
}

export const experience: ExperienceItem[] = [
  {
    company: "AiRo Digital Labs",
    role: "Software Engineering Intern",
    duration: "May 2026 – Present",
    type: "Internship",
    bullets: [
      "Contributed to the development of an AI-powered chatbot backend using Python, FastAPI, and LangGraph, working on a RAG (Retrieval Augmented Generation) pipeline that retrieves context from a knowledge base and generates accurate, context-aware responses using a large language model.",
      "Worked on migrating the chatbot's LLM and embedding stack from Azure OpenAI to Amazon Bedrock, involving updates across the codebase and re-ingestion of knowledge base data to align with the updated embedding model.",
      "Participated in the team's AWS deployment workflow, contributing to containerizing the application with Docker and supporting the deployment setup on ECS Fargate, S3, and CloudFront.",
      "Implemented real-time response streaming using Server-Sent Events, refactoring pipeline components to async execution and updating the frontend chat widget to progressively render answers, reducing perceived response latency.",
      "Diagnosed and resolved issues across query classification, response generation logic, and production configuration, improving overall system reliability and response accuracy.",
    ],
    techStack: [
      "Python",
      "FastAPI",
      "LangGraph",
      "Amazon Bedrock",
      "PostgreSQL",
      "Docker",
      "AWS ECS",
      "Next.js",
    ],
  },
];
