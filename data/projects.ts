export interface FeaturedProject {
  name: string;
  description: string;
  highlights: string[];
  techStack: string[];
  screenshot: string;
  liveUrl: string;
  githubUrl: string;
}

export interface OtherProject {
  name: string;
  description: string;
  highlights?: string[];
  techStack: string[];
  githubUrl: string;
}

export const featuredProjects: FeaturedProject[] = [
  {
    name: "CareerSim AI",
    description:
      "AI-powered employment simulator where students complete real-world missions evaluated by AI agents, mirroring real companies, real managers, and real assignments.",
    highlights: [
      "Multi-agent system with 4 role-grounded personas and real-time streaming via FastAPI + Groq",
      "GitHub-integrated code review pipeline with automated parsing, base64 decoding, and token-budget management",
      "JWT-secured multi-tenant auth on Supabase with RLS and persistent skill tracking across sessions",
    ],
    techStack: ["Next.js", "FastAPI", "Supabase", "Groq", "PostgreSQL"],
    screenshot: "/images/careersim-preview.png",
    liveUrl: "https://career-sim-v2.vercel.app/",
    githubUrl: "https://github.com/aryangoel984/Career-Sim_v2",
  },
  {
    name: "FraudGuard",
    description:
      "Real-time fraud detection platform with an admin dashboard for monitoring and API testing. Awarded 2nd place at Execute 4.0 Hackathon.",
    highlights: [
      "Hybrid detection engine combining rules with Random Forest and Logistic Regression: 97.1% accuracy, 0.82 F1-score",
      "PostgreSQL + Prisma ORM for efficient data handling with under 300ms prediction latency",
      "Admin dashboard for live monitoring, rule configuration, and API sandbox testing",
    ],
    techStack: ["Next.js", "Node.js", "FastAPI", "PostgreSQL", "scikit-learn"],
    screenshot: "/images/fraudguard-preview.png",
    liveUrl: "https://fraudguard-pearl.vercel.app/",
    githubUrl: "https://github.com/aryangoel984/fraudguard",
  },
  {
    name: "MegaMart",
    description:
      "AI-powered e-commerce platform with authentication, semantic search, cart, checkout, and order history.",
    highlights: [
      "Semantic search and recommendations using Hugging Face all-MiniLM-L6-v2 embeddings with cosine similarity on pgvector",
      "Groq-powered shopping assistant with function calling for search, cart, and checkout, including fallback handling",
      "End-to-end commerce flow: auth, catalog browsing, cart management, checkout, and order history",
    ],
    techStack: ["Next.js", "TypeScript", "Node.js", "FastAPI", "PostgreSQL"],
    screenshot: "/images/megamart-preview.png",
    liveUrl: "https://mega-mart-one.vercel.app/",
    githubUrl: "https://github.com/aryangoel984/MegaMart",
  },
];

export const otherProjects: OtherProject[] = [
  {
    name: "AML Mule Detection System",
    description:
      "Anti-money laundering mule account detection system built for the RBIH National Fraud Prevention Challenge.",
    highlights: [
      "Engineered 70+ behavioural features and a vectorised pipeline, cutting compute time from 12+ hours to 40 minutes.",
      "LightGBM + XGBoost + CatBoost ensemble achieved AUC-ROC 0.996 on the holdout set.",
      "Finished Top 12 of 600+ teams at the National Fraud Prevention Challenge organised by the Reserve Bank Innovation Hub (RBIH).",
    ],
    techStack: [
      "Python",
      "LightGBM",
      "XGBoost",
      "CatBoost",
      "Pandas",
      "Scikit-learn",
    ],
    githubUrl:
      "https://github.com/aryangoel984/AML_Mule-Detection-System",
  },
  {
    name: "Global Catalog Registry for ONDC",
    description:
      "Centralized catalog registry for the Open Network for Digital Commerce, replacing N×N catalog exchange complexity with a unified N+N architecture. Won 1st place at DebugOn (ONDC × BECon'25, IIT Delhi Tryst'25).",
    highlights: [
      "Built a centralized product catalog platform for the ONDC ecosystem, reducing catalog exchange complexity from N×N to N+N through a Global Catalog Registry.",
      "Developed a full-stack application using Next.js, TypeScript, PostgreSQL, Prisma ORM, and Redis, enabling scalable catalog ingestion and retrieval.",
      "Designed seller and buyer adaptor layers to transform heterogeneous catalog schemas into a unified data model, ensuring interoperability across platforms.",
      "Implemented REST APIs for catalog creation, updates, deletion, and filtered search, with asynchronous processing for efficient bulk operations.",
      "Created a merchant-friendly multi-step dashboard for catalog management with image uploads, validation, and a responsive UI for seamless user experience.",
    ],
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma ORM", "Redis"],
    githubUrl:
      "https://github.com/aryangoel984/Global-Catalog-Registry-for-ONDC",
  },
];
