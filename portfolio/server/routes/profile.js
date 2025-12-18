const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Get profile data
router.get('/', async (req, res) => {
  try {
    const profile = await User.findOne({ role: 'admin' }).select('-password');
    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }
    res.json(profile);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching profile', error });
  }
});

// Get specific skills
router.get('/skills', async (req, res) => {
  try {
    const profile = await User.findOne({ role: 'admin' });
    res.json(profile?.skills || []);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching skills', error });
  }
});

// Get experience
router.get('/experience', async (req, res) => {
  try {
    const profile = await User.findOne({ role: 'admin' });
    res.json(profile?.experience || []);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching experience', error });
  }
});

// Get education
router.get('/education', async (req, res) => {
  try {
    const profile = await User.findOne({ role: 'admin' });
    res.json(profile?.education || []);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching education', error });
  }
});

module.exports = router;
