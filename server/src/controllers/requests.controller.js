import RequestModel from '../models/Request.model';

const create = async (req, res) => {
  try {
    const { fullName, tel, service } = req.body;

    const request = await RequestModel.create({
      fullName,
      tel,
      service,
    });

    res.json(request);
  } catch (error) {
    res.status(500).json({ message: 'Не удалось отправить заявку' });
  }
};

const getAll = async (req, res) => {
  try {
    const page = parseInt(req.query.page) - 1 || 0;
    const limit = parseInt(req.query.limit) || 5;
    let sort = req.query.sort || 'createdAt';

    req.query.sort ? (sort = req.query.sort.split(',')) : (sort = [sort]);

    let sortBy = {};
    if (sort[1]) {
      sortBy[sort[0]] = sort[1];
    } else {
      sortBy[sort[0]] = 'DESC';
    }

    const requests = await RequestModel.find({})
      .sort(sortBy)
      .skip(page * limit)
      .limit(limit)
      .populate('service');

    const response = {
      error: false,
      page: page + 1,
      limit,
      requests,
    };

    res.json(response);
  } catch (error) {
    res.status(500).json({ message: 'Не удалось найти заявки' });
  }
};

const remove = async (req, res) => {
  try {
    const requestId = req.params.id;

    RequestModel.findOneAndDelete({ _id: requestId }, (err, doc) => {
      if (err) {
        res.status(500).json({ message: 'Не удалось удалить заявку' });
      }

      if (!doc) {
        res.status(404).json({ message: 'Не удалось найти заявку' });
      }

      res.json({ success: true });
    });
  } catch (error) {
    res.status(500).json({ message: `Не удалось получить заявку` });
  }
};

export default { create, getAll, remove };
