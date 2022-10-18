import ServiceModel from '../models/Service.model';
import CategoryModel from '../models/Category.model';

const create = async (req, res) => {
  const { title, preview, category } = req.body;

  try {
    const service = await ServiceModel.create({
      title,
      preview,
      category,
    });

    res.json(service);
  } catch (error) {
    res.status(500).json({ message: 'Не удалось добавить новую услугу' });
  }
};

const getAll = async (req, res) => {
  try {
    const page = parseInt(req.query.page) - 1 || 0;
    const limit = parseInt(req.query.limit) || 5;
    const search = req.query.search || '';
    const categoryName = req.query.category || '';

    const singleCategory = await CategoryModel.findOne({ title: categoryName });

    const services = await ServiceModel.find({
      category: singleCategory,
      title: { $regex: search, $options: 'i' },
    })
      .skip(page * limit)
      .limit(limit)
      .populate('category');

    const total = await ServiceModel.countDocuments({
      title: { $regex: search, $options: 'i' },
    });

    const response = {
      error: false,
      total,
      page: page + 1,
      limit,
      services,
    };

    res.json(response);
  } catch (error) {
    res.status(500).json({ message: 'Не удалось найти услуги' });
  }
};

const update = async (req, res) => {
  try {
    const { title, preview, category } = req.body;

    const serviceId = req.params.id;

    await ServiceModel.updateOne(
      {
        _id: serviceId,
      },
      {
        title,
        preview,
        category,
      }
    );

    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ message: 'Не удалось обновить услугу' });
  }
};

const remove = async (req, res) => {
  try {
    const serviceId = req.params.id;

    ServiceModel.findOneAndDelete({ _id: serviceId }, (err, doc) => {
      if (err) {
        res.status(500).json({ message: 'Не удалось удалить услугу' });
      }

      if (!doc) {
        res.status(404).json({ message: 'Не удалось найти услугу' });
      }

      res.json({ success: true });
    });
  } catch (error) {
    res.status(500).json({ message: `Не удалось получить услуги` });
  }
};

export default { create, getAll, update, remove };
