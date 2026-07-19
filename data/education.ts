export interface EducationItem {
  institution: string;
  degree: string;
  duration?: string;
  score: string;
}

export const education: EducationItem[] = [
  {
    institution: "Delhi Technological University",
    degree: "B.Tech, Information Technology",
    duration: "2023 – 2027",
    score: "CGPA: 8.73",
  },
  {
    institution: "NK Bagrodia Public School",
    degree: "Class XII (CBSE)",
    duration: "2023",
    score: "94.2%",
  },
  {
    institution: "NK Bagrodia Public School",
    degree: "Class X (CBSE)",
    duration: "2021",
    score: "95.8%",
  },
];
