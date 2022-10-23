import mongoose from 'mongoose';

const reviewSchema = mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    rating: Number,
    images: [],
    text: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Review', reviewSchema);
