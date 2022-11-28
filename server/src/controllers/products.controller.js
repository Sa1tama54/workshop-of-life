import ProductModel from '../models/Product.model';

const create = async (req, res) => {
  try {
    const { title, description, price, preview } = req.body;

    const product = await ProductModel.create({
      preview,
      title,
      description,
      price,
    });

    res.json(product);
  } catch (error) {
    res.status(500).json({ message: 'Не удалось добавить товар' });
  }
};

const getAll = async (req, res) => {
  try {
    const page = parseInt(req.query.page) - 1 || 0;
    const limit = parseInt(req.query.limit) || 5;
    const search = req.query.search || '';
    let sort = req.query.sort || 'DESC';

    req.query.sort ? (sort = req.query.sort.split(',')) : (sort = [sort]);

    let sortBy = {};
    if (sort[1]) {
      sortBy[sort[0]] = sort[1];
    } else {
      sortBy[sort[0]] = 'ASC';
    }

    const products = await ProductModel.find({
      title: { $regex: search, $options: 'i' },
    })
      .sort(sortBy)
      .skip(page * limit)
      .limit(limit);

    const total = await ProductModel.countDocuments({
      title: { $regex: search, $options: 'i' },
    });

    const response = {
      error: false,
      total,
      page: page + 1,
      limit,
      products,
    };

    res.json(response);
  } catch (error) {
    res.status(500).json({ message: 'Не удалось найти товары' });
  }
};

const getOne = async (req, res) => {
  try {
    const data = await ProductModel.findById(req.params.id);

    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Не удалось найти товар' });
  }
};

const update = async (req, res) => {
  try {
    const { preview, title, description, price } = req.body;

    const productId = req.params.id;

    const product = await ProductModel.findByIdAndUpdate(productId, {
      preview,
      title,
      description,
      price,
    });

    res.json(product);
  } catch (error) {
    res.status(500).json({ message: 'Не удалось обновить товар' });
  }
};

const remove = async (req, res) => {
  try {
    const productId = req.params.id;

    ProductModel.findOneAndDelete({ _id: productId }, (err, doc) => {
      if (err) {
        res.status(500).json({ message: 'Не удалось удалить товар' });
      }

      if (!doc) {
        res.status(404).json({ message: 'Не удалось найти товар' });
      }

      res.json({ success: true });
    });
  } catch (error) {
    res.status(500).json({ message: `Не удалось получить товар` });
  }
};

export default { create, getAll, update, remove, getOne };
