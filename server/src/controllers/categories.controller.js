import CategoryModel from '../models/Category.model';

const create = async (req, res) => {
  try {
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
    const categories = await CategoryModel.find();

    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: 'Не удалось получить категории' });
  }
};

export default { create, getAll, remove };
