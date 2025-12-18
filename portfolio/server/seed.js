const mongoose = require('mongoose');
require('dotenv').config();
const User = require('./models/User');
const connectDB = require('./config/db');

const seedData = async () => {
  try {
    await connectDB();

    // Clear existing admin
    await User.deleteOne({ role: 'admin' });

    // Create admin user with resume data
    const adminUser = new User({
      name: 'Eshaan Paliwal',
      email: 'eshaanpal08@gmail.com',
      password: 'temp_password_change_me',
      role: 'admin',
      title: 'Full Stack Developer',
      bio: 'Passionate about building amazing web applications and solving complex problems. Experienced in MERN stack with a strong foundation in modern web technologies.',
      phone: '+91 6387932214',
      location: 'Bhopal, India',
      skills: [
        { name: 'React JS', category: 'Frontend', proficiency: 'Advanced' },
        { name: 'JavaScript', category: 'Frontend', proficiency: 'Advanced' },
        { name: 'HTML & CSS', category: 'Frontend', proficiency: 'Expert' },
        { name: 'Express JS', category: 'Backend', proficiency: 'Intermediate' },
        { name: 'MongoDB', category: 'Database', proficiency: 'Intermediate' },
        { name: 'Python', category: 'Backend', proficiency: 'Beginner' },
        { name: 'Git & GitHub', category: 'Tools', proficiency: 'Advanced' },
        { name: 'Chakra UI', category: 'Frontend', proficiency: 'Intermediate' },
        { name: 'Tailwind CSS', category: 'Frontend', proficiency: 'Advanced' },
        { name: 'JSON Server', category: 'Tools', proficiency: 'Intermediate' },
        { name: 'Arduino', category: 'IoT', proficiency: 'Beginner' },
        { name: 'SQL', category: 'Database', proficiency: 'Beginner' },
      ],
      experience: [
        {
          title: 'MP Police Leave Management System',
          company: 'Sistec Innovation Hackathon',
          description: 'Worked on a comprehensive leave management system for MP Police department in a team environment. Implemented database schema and API endpoints for leave tracking.',
          startDate: new Date('2024-04-09'),
          endDate: new Date('2024-04-10'),
          current: false,
          technologies: ['HTML', 'CSS', 'JavaScript', 'MongoDB']
        },
        {
          title: 'Café & Movie Website Frontend',
          company: 'Skills Varzs 1.0 - Prestige College',
          description: 'Built responsive frontend for café website in first round and movie website in second round of the hackathon using React.',
          startDate: new Date('2025-05-17'),
          endDate: new Date('2025-05-18'),
          current: false,
          technologies: ['React JS', 'CSS']
        },
        {
          title: 'Sign Recognition System',
          company: 'Coditive 3.0 - Bansal Institute',
          description: 'Developed a sign recognition system with team using machine learning and web technologies for real-time sign detection.',
          startDate: new Date('2025-04-29'),
          endDate: new Date('2025-04-30'),
          current: false,
          technologies: ['Python', 'HTML', 'JavaScript']
        },
        {
          title: 'Smart Parking Management System',
          company: 'Skitech Innothon - SKITM Indore',
          description: 'IoT-based smart parking management system for efficient parking space allocation and real-time availability tracking.',
          startDate: new Date('2025-05-09'),
          endDate: new Date('2025-05-11'),
          current: false,
          technologies: ['React JS', 'JSON Server', 'Arduino']
        }
      ],
      education: [
        {
          school: 'Sage University Bhopal',
          degree: 'B.Tech',
          field: 'Full Stack Development',
          startDate: new Date('2022-09'),
          endDate: new Date('2027-06'),
          gpa: '8.0+',
          details: 'Pursuing degree in Full Stack Development with focus on MERN stack and cloud technologies'
        },
        {
          school: 'Kendriya Vidyalaya No. 2 CPE ITARSI',
          degree: 'XII (CBSE)',
          field: 'Science',
          startDate: new Date('2021-06'),
          endDate: new Date('2023-03'),
          gpa: '76%',
          details: 'Higher Secondary Education'
        },
        {
          school: 'Kendriya Vidyalaya No. 2 CPE ITARSI',
          degree: 'X (CBSE)',
          field: 'General',
          startDate: new Date('2019-06'),
          endDate: new Date('2021-03'),
          gpa: '88%',
          details: 'Secondary Education'
        }
      ],
      socialLinks: {
        github: 'https://github.com/Eshaan-Paliwal',
        linkedin: 'https://linkedin.com/in/EshaanPaliwal',
        twitter: 'https://twitter.com/eshaan',
        portfolio: 'https://eshaan-portfolio.com'
      },
    });

    await adminUser.save();
    console.log('✅ Admin user with resume data created successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding data:', error);
    process.exit(1);
  }
};

seedData();
