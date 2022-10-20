import mongoose from 'mongoose';

const vacancyShema = mongoose.Schema(
  {
    image: String,
    title: {
      type: String,
      required: true,
    },
    price: Number,
    graphic: String,
    experience: String,
    tel: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Vacancy', vacancyShema);
