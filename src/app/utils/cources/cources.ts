// courses.ts

// Define an interface for Course
export interface Course {
    id: number;
    class: string;
    description: string;
    subjects: string[];
  }
  
  // Create the array of courses
  export const courses: Course[] = [
    { 
      id: 1, 
      class: 'Nursery', 
      description: 'Introduction to basic concepts and learning.',
      subjects: ['Basic Concepts', 'Alphabet', 'Numbers', 'Shapes'] 
    },
    { 
      id: 2, 
      class: '1st Grade', 
      description: 'Foundation of primary education.',
      subjects: ['Math', 'English', 'Science', 'Social Studies'] 
    },
    { 
      id: 3, 
      class: '2nd Grade', 
      description: 'Further development of primary skills.',
      subjects: ['Math', 'English', 'Science', 'Art', 'Physical Education'] 
    },
    { 
      id: 4, 
      class: '3rd Grade', 
      description: 'Introduction to subjects like Math, English, and Science.',
      subjects: ['Math', 'English', 'Science', 'Social Studies', 'Art'] 
    },
    { 
      id: 5, 
      class: '4th Grade', 
      description: 'Building on primary knowledge in all subjects.',
      subjects: ['Math', 'English', 'Science', 'History', 'Art', 'Physical Education'] 
    },
    { 
      id: 6, 
      class: '5th Grade', 
      description: 'Prepares for middle school by strengthening core subjects.',
      subjects: ['Math', 'English', 'Science', 'Social Studies', 'Music', 'Physical Education'] 
    },
    { 
      id: 7, 
      class: '6th Grade', 
      description: 'Introduction to more complex concepts in Math, Science, and Social Studies.',
      subjects: ['Math', 'English', 'Science', 'History', 'Geography', 'Physical Education'] 
    },
    { 
      id: 8, 
      class: '7th Grade', 
      description: 'Building skills in critical thinking and problem solving.',
      subjects: ['Math', 'English', 'Science', 'Social Studies', 'Physical Education', 'Art'] 
    },
    { 
      id: 9, 
      class: '8th Grade', 
      description: 'Focus on refining subject knowledge and preparing for high school.',
      subjects: ['Math', 'English', 'Science', 'Social Studies', 'Physical Education', 'Computer Science'] 
    },
    { 
      id: 10, 
      class: '9th Grade', 
      description: 'The start of high school, focusing on subjects like Algebra and Physics.',
      subjects: ['Algebra', 'English', 'Biology', 'Physics', 'History', 'Physical Education'] 
    },
    { 
      id: 11, 
      class: '10th Grade', 
      description: 'Critical year with board exams and in-depth subject study.',
      subjects: ['Algebra', 'English', 'Physics', 'Chemistry', 'Biology', 'History'] 
    }
  ];
  