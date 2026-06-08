import express from 'express';
import Donation from '../models/Donation.js';

const router = express.Router();

// Middleware to verify token (simplified for demo)
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const protect = async (req, res, next) => {
  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select('-password');
      next();
    } catch (error) {
      res.status(401).json({ message: 'Not authorized, token failed' });
    }
  } else {
    res.status(401).json({ message: 'Not authorized, no token' });
  }
};

// Create a Donation (Donor only)
router.post('/', protect, async (req, res) => {
  if (req.user.role !== 'Donor') return res.status(403).json({ message: 'Only donors can post donations' });
  
  const { foodType, quantity, pickupLocation, expiryTime } = req.body;
  try {
    const donation = new Donation({
      donorId: req.user._id,
      foodType,
      quantity,
      pickupLocation,
      expiryTime
    });
    const createdDonation = await donation.save();
    res.status(201).json(createdDonation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all Available Donations
router.get('/', async (req, res) => {
  try {
    const donations = await Donation.find({ status: 'Available' }).populate('donorId', 'name contactNumber');
    res.json(donations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Claim a Donation (NGO only)
router.put('/:id/claim', protect, async (req, res) => {
  if (req.user.role !== 'NGO') return res.status(403).json({ message: 'Only NGOs can claim donations' });
  
  try {
    const donation = await Donation.findById(req.params.id);
    if (!donation) return res.status(404).json({ message: 'Donation not found' });
    if (donation.status !== 'Available') return res.status(400).json({ message: 'Donation is no longer available' });

    donation.status = 'Claimed';
    donation.claimedBy = req.user._id;
    await donation.save();
    
    res.json(donation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
