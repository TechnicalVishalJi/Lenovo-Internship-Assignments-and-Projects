import mongoose from 'mongoose';

const donationSchema = new mongoose.Schema({
  donorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  foodType: { type: String, required: true },
  quantity: { type: String, required: true },
  pickupLocation: { type: String, required: true },
  expiryTime: { type: Date, required: true },
  status: { type: String, enum: ['Available', 'Claimed', 'Completed'], default: 'Available' },
  claimedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null }
}, { timestamps: true });

const Donation = mongoose.model('Donation', donationSchema);
export default Donation;
