import mongoose from 'mongoose';

const requestSchema = mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    tel: {
      type: Number,
      required: true,
    },
    service: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Service',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Request', requestSchema);
