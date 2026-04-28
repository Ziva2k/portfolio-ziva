export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  results: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface SkillCategory {
  title: string;
  items: string[];
}

export interface PortfolioData {
  name: string;
  role: string;
  bio: string;
  email: string;
  phone?: string;
  linkedin: string;
  projects: Project[];
  experience: Experience[];
  skills: SkillCategory[];
  aboutMe?: {
    fullName: string;
    nickname: string;
    dob: string;
    phone?: string;
    email?: string;
    hobbies: string[];
    education?: string[];
    images?: string[];
  };
}
