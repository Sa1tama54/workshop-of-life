import mongoose from 'mongoose';

const productShema = mongoose.Schema({
  preview: String,
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

export default mongoose.model('Product', productShema);
