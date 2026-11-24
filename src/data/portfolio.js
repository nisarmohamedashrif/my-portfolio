import smartLibraryImage from '../assets/images/smart-library.png'
import boardMateImage from '../assets/images/board-mate.png'

// Everything shown on the site lives here. Edit this file to update your content.
export const portfolio = {
  name: 'Mohamed Ashrif',
  initials: 'MA',
  email: 'mohamedashrifwork@gmail.com',
  github: 'https://github.com/nisarmohamedashrif',
  linkedin: 'https://www.linkedin.com/in/mohamedashrifn',

  hero: {
    role: 'IT Undergraduate | Aspiring Data Scientist',
    intro:
      'I’m studying Information Technology at SLIIT, exploring software development and data-driven problem solving. I enjoy building projects, learning new technologies and developing my foundation for a future in Data Science.',
    facts: [
      { label: 'Studying', value: 'IT at SLIIT' },
      { label: 'Focus', value: 'Web and IoT' },
      { label: 'Exploring', value: 'Data science' },
    ],
  },

  about: {
    paragraphs: [
      'I’m an Information Technology undergraduate at SLIIT with a strong interest in software development. I enjoy solving practical problems, and the projects I build are how I put new ideas into practice.',
      'Much of my project work is done in teams, which has given me practice dividing tasks, combining each other’s work and presenting the result. I’m strengthening my skills in Java and web development with React, and I plan to move into data science as my studies continue.',
    ],
    education: {
      institution: 'Sri Lanka Institute of Information Technology (SLIIT)',
      programme: 'Undergraduate, Information Technology',
      coursework: ['Java programming', 'Digital electronics', 'Group IoT project'],
    },
  },

  projects: [
    {
      name: 'RFID Smart Library System',
      type: 'Academic Project | Y1S1',
      status: '',
      description:
        'An RFID-based smart library seating system designed to improve seat reservation and seat authentication in a library environment. The system uses RFID for authentication and FSR sensors to detect seat occupancy.',
      highlights: [
        'Supports RFID-based authentication and seat reservation',
        'Uses FSR sensors to detect whether a seat is occupied',
        'Uses LEDs and an I2C LCD to display seat status',
      ],
      technologies: ['ESP32', 'RFID readers', 'FSR sensors', 'I2C LCD', 'LEDs', 'Arduino IDE'],
      githubUrl: '',
      demoUrl: '',
      image: smartLibraryImage,
    },
    {
      name: 'SLIIT Boarding Finder',
      type: 'Hackathon Project',
      role: 'Team Lead',
      status: '',
      description:
        'A team-based hackathon project aimed at helping SLIIT students find and explore boarding accommodation around the university. As the team leader, I lead the team throughout the development process, coordinating tasks and contributing to the development of the platform.',
      highlights: [
        'Designed for SLIIT students looking for boarding near the university',
        'Built collaboratively as a team hackathon project',
      ],
      technologies: ['React', 'Tailwind CSS', 'Firebase'],
      githubUrl: '',
      demoUrl: '',
      image: boardMateImage,
    },
  ],

  skills: [
    { category: 'Programming', items: ['Java'] },
    { category: 'Web development', items: ['HTML', 'CSS', 'React', 'Tailwind CSS'] },
    { category: 'Backend / Database', items: ['Firebase'] },
    { category: 'Embedded and IoT', items: ['ESP32', 'Arduino IDE', 'RFID', 'FSR sensors', 'LCD displays'] },
    { category: 'Tools', items: ['Git', 'GitHub', 'VS Code'] },
    { category: 'Currently Exploring', items: ['JavaScript', 'Python', 'SQL', 'Data Science'], exploring: true },
  ],

  // Add entries here (clubs, volunteering, internships) and an "Experience"
  // section appears automatically. Leave empty to hide it.
  // { title: '', role: '', dates: '', detail: '' }
  activities: [],
}
