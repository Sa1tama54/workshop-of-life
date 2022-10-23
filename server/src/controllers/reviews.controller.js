import ReviewModel from '../models/Review.model';

const create = async (req, res) => {
  try {
    const { fullName, rating, images, text } = req.body;

    const review = await ReviewModel.create({
      fullName,
      rating,
      images,
      text,
    });

    res.json(review);
  } catch (error) {
    res.status(500).json({ message: 'Не удалось добавить отзыв' });
  }
};

const getAll = async (req, res) => {
  try {
    const page = parseInt(req.query.page) - 1 || 0;
    const limit = parseInt(req.query.limit) || 5;
    let sort = req.query.sort || 'rating';

    req.query.sort ? (sort = req.query.sort.split(',')) : (sort = [sort]);

    let sortBy = {};
    if (sort[1]) {
      sortBy[sort[0]] = sort[1];
    } else {
      sortBy[sort[0]] = 'DESC';
    }

    const reviews = await ReviewModel.find({})
      .sort(sortBy)
      .skip(page * limit)
      .limit(limit);

    const response = {
      error: false,
      page: page + 1,
      limit,
      reviews,
    };

    res.json(response);
  } catch (error) {
    res.status(500).json({ message: 'Не удалось найти отзывы' });
  }
};

const remove = async (req, res) => {
  try {
    const reviewId = req.params.id;

    ReviewModel.findOneAndDelete({ _id: reviewId }, (err, doc) => {
      if (err) {
        res.status(500).json({ message: 'Не удалось удалить отзыв' });
      }

      if (!doc) {
        res.status(404).json({ message: 'Не удалось найти отзыв' });
      }

      res.json({ success: true });
    });
  } catch (error) {
    res.status(500).json({ message: `Не удалось получить отзыв` });
  }
};

export default { create, getAll, remove };
