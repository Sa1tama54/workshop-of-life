import mongoose from 'mongoose';

const categoryShema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  preview: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Category = mongoose.model('Category', categoryShema);

export default Category;
