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
    role: 'IT undergraduate and aspiring developer',
    intro:
      'I’m studying Information Technology at SLIIT and I learn best by building. My projects so far include an ESP32-based library seat system and a boarding-finder web app for students.',
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
      type: 'Group project',
      status: '',
      description:
        'An IoT system that lets students book and use library seats with an RFID card. An ESP32 handles authentication and booking, pressure sensors confirm when a seat is actually in use, and a web portal shows live availability.',
      highlights: [
        'Card-based sign-in and seat booking with RFID readers',
        'Pressure sensors detect whether a reserved seat is occupied',
        'LEDs and an LCD show each seat’s status at the desk',
        'React student portal for real-time seat availability',
      ],
      technologies: ['ESP32', 'Arduino IDE', 'RFID', 'FSR sensors', 'LCD', 'React'],
      githubUrl: '',
      demoUrl: '',
      image: smartLibraryImage,
    },
    {
      name: 'BoardMate',
      type: 'Web application',
      status: 'In progress',
      description:
        'A boarding finder for SLIIT students to discover accommodation near the university. Property owners list their properties and rooms, then manage student bookings from a dedicated workspace.',
      highlights: [
        'Owner workspace for adding properties and managing rooms',
        'Booking management to accept or reject student requests',
        'Room availability tracking and property approval status',
        'Notifications for owners as requests come in',
      ],
      technologies: ['React', 'Tailwind CSS', 'Firebase'],
      githubUrl: '',
      demoUrl: '',
      image: boardMateImage,
    },
  ],

  skills: [
    { category: 'Programming', items: ['Java', 'JavaScript'] },
    { category: 'Web development', items: ['HTML', 'CSS', 'React', 'Tailwind CSS', 'Firebase'] },
    { category: 'Embedded and IoT', items: ['ESP32', 'Arduino IDE', 'RFID', 'FSR sensors', 'LCD displays'] },
    { category: 'Tools', items: ['Git', 'GitHub', 'VS Code'] },
    { category: 'Exploring next', items: ['Python', 'SQL', 'Data science'], exploring: true },
  ],

  // Add entries here (clubs, volunteering, internships) and an "Experience"
  // section appears automatically. Leave empty to hide it.
  // { title: '', role: '', dates: '', detail: '' }
  activities: [],
}
