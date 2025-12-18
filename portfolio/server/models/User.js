const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ['admin', 'user'],
      default: 'user',
    },
    // Portfolio profile data
    title: String, // e.g., "Full Stack Developer"
    bio: String,
    phone: String,
    location: String,
    profileImage: String,
    skills: [{
      name: String,
      category: String, // Frontend, Backend, Tools, etc.
      proficiency: {
        type: String,
        enum: ['Beginner', 'Intermediate', 'Advanced', 'Expert'],
        default: 'Intermediate'
      }
    }],
    experience: [{
      title: String,
      company: String,
      description: String,
      startDate: Date,
      endDate: Date,
      current: Boolean,
      technologies: [String]
    }],
    education: [{
      school: String,
      degree: String,
      field: String,
      startDate: Date,
      endDate: Date,
      gpa: String,
      details: String
    }],
    socialLinks: {
      github: String,
      linkedin: String,
      twitter: String,
      portfolio: String
    },
    resumeUrl: String,
  },
  { timestamps: true }
);

// Hash password before saving
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Method to compare passwords
userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('User', userSchema);
