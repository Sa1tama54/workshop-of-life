import CategoryModel from '../models/Category.model';

const create = async (req, res) => {
  try {
    req.body.preview = req.file.path;

    const category = await CategoryModel.create({
      title: req.body.title,
      preview: req.body.preview,
      description: req.body.description,
    });

    res.json(category);
  } catch (error) {
    res.status(500).json({ message: 'Не удалось создать категорию' });
  }
};

const remove = async (req, res) => {
  try {
    const categoryId = req.params.id;

    CategoryModel.findOneAndDelete({ _id: categoryId }, (err, doc) => {
      if (err) {
        res.status(500).json({ message: 'Не удалось удалить категорию' });
      }

      if (!doc) {
        res.status(404).json({ message: 'Не удалось найти категорию' });
      }

      res.json({ success: true });
    });
  } catch (error) {
    res.status(500).json({ message: `Не удалось получить категорию` });
  }
};

const getAll = async (req, res) => {
  try {
    const page = parseInt(req.query.page) - 1 || 0;
    const limit = parseInt(req.query.limit) || 5;
    let sort = req.query.sort || 'DESC';

    req.query.sort ? (sort = req.query.sort.split(',')) : (sort = [sort]);

    let sortBy = {};
    if (sort[1]) {
      sortBy[sort[0]] = sort[1];
    } else {
      sortBy[sort[0]] = 'ASC';
    }

    const categories = await CategoryModel.find()
      .sort(sortBy)
      .skip(page * limit)
      .limit(limit);

    const total = await CategoryModel.countDocuments();

    const response = {
      error: false,
      total,
      page: page + 1,
      limit,
      categories,
    };

    res.json(response);
  } catch (error) {
    res.status(500).json({ message: 'Не удалось получить категории' });
  }
};

const getOne = async (req, res) => {
  try {
    const data = await CategoryModel.findById(req.params.id);

    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Не удалось получить категорию' });
  }
};

export default { create, getAll, remove, getOne };
