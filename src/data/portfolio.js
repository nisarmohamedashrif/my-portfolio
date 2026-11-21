import smartLibraryImage from '../assets/images/smart-library.png'
import boardMateImage from '../assets/images/board-mate.png'

export const portfolio = {
  name: 'Mohamed Ashrif',
  hero: {
    name: 'Ashrif',
    headline: 'IT Undergraduate | Aspiring Developer | Tech Enthusiast',
    introduction:
      "I'm an IT undergraduate passionate about technology, software development and exploring innovative ideas. I enjoy learning new technologies, building projects and continuously improving my technical skills.",
  },
  email: 'mohamedashrifwork@gmail.com',
  github: 'https://github.com/nisarmohamedashrif',
  linkedin: 'https://www.linkedin.com/in/mohamedashrifn',
  projects: [
    {
      name: 'RFID Smart Library System',
      description:
        'An IoT-based smart library seating and authentication system developed using an ESP32, RFID readers, sensors and an LCD display.',
      technologies: ['ESP32', 'Arduino IDE', 'RFID', 'FSR sensors', 'LCD'],
      githubUrl: '',
      demoUrl: '',
      image: smartLibraryImage,
      status: 'Status to confirm',
    },
    {
      name: 'SLIIT Boarding Finder',
      description:
        'A student-oriented platform concept to help SLIIT students discover and explore boarding accommodation options around the university.',
      technologies: ['React', 'Tailwind CSS', 'Firebase'],
      githubUrl: '',
      demoUrl: '',
      image: boardMateImage,
      status: 'In Progress',
    },
  ],
  skills: [
    {
      category: 'Programming',
      items: [
        { name: 'Java', status: 'Currently use' },
        { name: 'JavaScript', status: 'Learning' },
      ],
    },
    {
      category: 'Web development',
      items: [
        { name: 'HTML', status: 'Learning' },
        { name: 'CSS', status: 'Learning' },
        { name: 'React', status: 'Learning' },
      ],
    },
    {
      category: 'Tools',
      items: [
        { name: 'VS Code', status: 'Currently use' },
        { name: 'Git', status: 'Currently use' },
        { name: 'GitHub', status: 'Currently use' },
      ],
    },
    {
      category: 'Learning interests',
      items: [
        { name: 'Python', status: 'Interested in' },
        { name: 'Data Science', status: 'Interested in' },
        { name: 'SQL', status: 'Interested in' },
      ],
    },
  ],
  activities: [
    {
      area: 'University / computing club',
      title: '[Activity title]',
      role: '[Your role]',
      dates: '[Dates]',
      detail: 'Add a short description of an activity you actually participated in.',
      isPlaceholder: true,
    },
    {
      area: 'Hackathon / group project',
      title: '[Activity title]',
      role: '[Your role]',
      dates: '[Dates]',
      detail: 'Describe the project, your role, and what you contributed.',
      isPlaceholder: true,
    },
    {
      area: 'Workshop / volunteering',
      title: '[Activity title]',
      role: '[Your role]',
      dates: '[Dates]',
      detail: 'Add a brief description of a workshop or volunteering activity.',
      isPlaceholder: true,
    },
  ],
}
