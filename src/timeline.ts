// Export the timeline data as a TS module to avoid JSON import build issues
export interface Course {
  name: string;
  category: 'Data' | 'History' | 'Data/History';
}

export interface Work {
  title: string;
  organization: string;
  description: string;
}

export interface Semester {
  courses?: Course[];
  work?: Work;
}

export interface YearEntry {
  year: string;
  spring?: Semester;
  summer?: Semester;
  fall?: Semester;
}

export type Timeline = YearEntry[];

const timeline: Timeline = [
  {
    year: '2022',
    fall: {
      courses: [
        { name: 'XMATH 1B Calculus', category: 'Data' },
        { name: 'History 30 Science and Society', category: 'History' },
      ],
      work: {
        title: 'Document Remediation Specialist',
        organization: 'UC Berkeley',
        description: 'Supported accessibility by remediating course and departmental documents.',
      },
    },
  },
  {
    year: '2023',
    spring: {
      courses: [
        { name: 'CS61A The Structure and Interpretation of Computer Programs', category: 'Data' },
        { name: 'CS198 Introduction to Full Stack Web Development', category: 'Data' },
        { name: 'Data C8 Foundations of Data Science', category: 'Data' },
        { name: 'Sociol 5 Evaluation of Evidence', category: 'History' },
      ],
      work: {
        title: 'Document Remediation Specialist',
        organization: 'UC Berkeley',
        description: 'Continued work on accessibility-focused document remediation.',
      },
    },
    summer: {
      work: {
        title: 'Document Remediation Specialist',
        organization: 'UC Berkeley',
        description: 'Provided accessibility remediation for documents during the summer term.',
      },
    },
    fall: {
      courses: [
        { name: 'CS61B Data Structures', category: 'Data' },
        { name: 'CS198 Full Stack Web Development Course Staff', category: 'Data' },
        { name: 'Italian 130A Dante’s Inferno (English)', category: 'History' },
        { name: 'Math 54 Linear Algebra and Differential Equations', category: 'Data' },
      ],
      work: {
        title: 'Document Remediation Specialist',
        organization: 'UC Berkeley',
        description: 'Final semester supporting document accessibility services.',
      },
    },
  },
  {
    year: '2024',
    spring: {
      courses: [
        { name: 'Data 100 Principles and Techniques of Data Science', category: 'Data' },
        { name: 'History 121A The Atlantic World', category: 'History' },
      ],
      work: {
        title: 'Machine Learning Associate',
        organization: 'Allos AI',
        description: 'Worked on data inference endpoints, reinforcement learning, and deep learning algorithms.',
      },
    },
    summer: {
      work: {
        title: 'Machine Learning Associate',
        organization: 'Allos AI',
        description: 'Continued research and engineering contributions through the summer.',
      },
    },
    fall: {
      courses: [
        { name: 'Full Stack Course Lead (CS198)', category: 'Data' },
        { name: 'CS188 Introduction to Artificial Intelligence', category: 'Data' },
        { name: 'History 3 Islamic and Eastern Roman History', category: 'History' },
        { name: 'History 5 European Civilizations from the Renaissance to the Present', category: 'History' },
        { name: 'History 175B Jews in the Modern World', category: 'History' },
      ],
      work: {
        title: 'Advanced Coder',
        organization: 'Outlier AI',
        description: 'Delivered production-quality training data for AI systems, specializing in React and data science tooling.',
      },
    },
  },
  {
    year: '2025',
    spring: {
      courses: [
        { name: 'Course Lead for CS198', category: 'Data' },
        { name: 'CS189 Introduction to Machine Learning', category: 'Data' },
        { name: 'Data/History 104 Human Contexts and Ethics of Data', category: 'Data/History' },
        { name: 'History 190 Soccer: A Global History', category: 'History' },
      ],
      work: {
        title: 'Advanced Coder',
        organization: 'Outlier AI',
        description: 'Contributed to Dolfin Project, integrating human feedback to improve AI accuracy.',
      },
    },
    summer: {
      work: {
        title: 'Student Fellow, Data Science',
        organization: 'California Energy Commission',
        description: 'Began role supporting anomaly detection, risk assessments, and geospatial analysis for Lithium Valley development.',
      },
    },
    fall: {
      courses: [
        { name: 'Course Staff for CS198', category: 'Data' },
        { name: 'CS180 Efficient Algorithms and Intractable Problems', category: 'Data' },
        { name: 'History 103D Proseminar: Problems in Interpretation (U.S.)', category: 'History' },
        { name: 'History 103U Proseminar: Problems in Interpretation (Comparative History)', category: 'History' },
        { name: 'History 104 The Craft of History', category: 'History' },
      ],
      work: {
        title: 'Student Fellow, Data Science',
        organization: 'California Energy Commission',
        description: 'Conduct anomaly detection, risk assessments, and geospatial data analysis for Lithium Valley development.',
      },
    },
  },
];

export default timeline;


