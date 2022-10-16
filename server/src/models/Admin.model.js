import mongoose from 'mongoose';

const adminSchema = mongoose.Schema({
  login: {
    type: String,
    required: true,
  },
  passwordHash: {
    type: String,
    required: true,
  },
});

const Admin = mongoose.model('Admin', adminSchema);

export default Admin;
