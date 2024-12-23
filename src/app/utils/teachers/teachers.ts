// Define an interface for Teacher
export interface Teacher {
    id: number;
    name: string;
    specialization: string;
    experienceYears: number;
    classes: string[]; // List of classes this teacher is teaching
    contact: string; // Email or phone number for contacting the teacher
    image:string
    location:string
  }
  
  // // Create an array of teachers
  // export const teachers: Teacher[] = [
  //   { 
  //     id: 1, 
  //     name: 'John Doe', 
  //     subjectSpecialization: 'Math', 
  //     yearsOfExperience: 5, 
  //     classes: ['1st Grade', '2nd Grade'], 
  //     contact: 'johndoe@email.com',
  //     image: 'https://cdn-icons-png.flaticon.com/512/219/219983.png',
  //     location: 'Agra' // Adding location
  //   },
  //   { 
  //     id: 2, 
  //     name: 'Jane Smith', 
  //     subjectSpecialization: 'English', 
  //     yearsOfExperience: 7, 
  //     classes: ['3rd Grade', '4th Grade'], 
  //     contact: 'janesmith@email.com',
  //     image: 'https://cdn-icons-png.flaticon.com/512/219/219983.png',
  //     location: 'Delhi' // Adding location
  //   },
  //   { 
  //     id: 3, 
  //     name: 'Emily Johnson', 
  //     subjectSpecialization: 'Science', 
  //     yearsOfExperience: 10, 
  //     classes: ['5th Grade', '6th Grade'], 
  //     contact: 'emilyjohnson@email.com',
  //     image: 'https://cdn-icons-png.flaticon.com/512/219/219983.png',
  //     location: 'Noida' // Adding location
  //   },
  //   { 
  //     id: 4, 
  //     name: 'Michael Brown', 
  //     subjectSpecialization: 'Social Studies', 
  //     yearsOfExperience: 8, 
  //     classes: ['7th Grade', '8th Grade'], 
  //     contact: 'michaelbrown@email.com',
  //     image: 'https://cdn-icons-png.flaticon.com/512/219/219983.png',
  //     location: 'Agra' // Adding location
  //   },
  //   { 
  //     id: 5, 
  //     name: 'Sarah Lee', 
  //     subjectSpecialization: 'Physical Education', 
  //     yearsOfExperience: 4, 
  //     classes: ['1st Grade', '2nd Grade', '3rd Grade'], 
  //     contact: 'sarahlee@email.com',
  //     image: 'https://cdn-icons-png.flaticon.com/512/219/219983.png',
  //     location: 'Delhi' // Adding location
  //   },
  //   { 
  //     id: 6, 
  //     name: 'David Green', 
  //     subjectSpecialization: 'History', 
  //     yearsOfExperience: 6, 
  //     classes: ['9th Grade', '10th Grade'], 
  //     contact: 'davidgreen@email.com',
  //     image: 'https://cdn-icons-png.flaticon.com/512/219/219983.png',
  //     location: 'Noida' // Adding location
  //   },
  //   { 
  //     id: 7, 
  //     name: 'Linda Williams', 
  //     subjectSpecialization: 'Art', 
  //     yearsOfExperience: 9, 
  //     classes: ['4th Grade', '5th Grade', '6th Grade'], 
  //     contact: 'lindawilliams@email.com',
  //     image: 'https://cdn-icons-png.flaticon.com/512/219/219983.png',
  //     location: 'Agra' // Adding location
  //   },
  //   { 
  //     id: 8, 
  //     name: 'Daniel King', 
  //     subjectSpecialization: 'Music', 
  //     yearsOfExperience: 3, 
  //     classes: ['5th Grade', '6th Grade'], 
  //     contact: 'danielking@email.com',
  //     image: 'https://cdn-icons-png.flaticon.com/512/219/219983.png',
  //     location: 'Delhi' // Adding location
  //   },
  //   { 
  //     id: 9, 
  //     name: 'Rachel White', 
  //     subjectSpecialization: 'Computer Science', 
  //     yearsOfExperience: 4, 
  //     classes: ['8th Grade', '9th Grade'], 
  //     contact: 'rachelwhite@email.com',
  //     image: 'https://cdn-icons-png.flaticon.com/512/219/219983.png',
  //     location: 'Noida' // Adding location
  //   },
  //   { 
  //     id: 10, 
  //     name: 'James Taylor', 
  //     subjectSpecialization: 'Physics', 
  //     yearsOfExperience: 12, 
  //     classes: ['10th Grade'], 
  //     contact: 'jamestaylor@email.com',
  //     image: 'https://cdn-icons-png.flaticon.com/512/219/219983.png',
  //     location: 'Agra' // Adding location
  //   }
  // ];
  