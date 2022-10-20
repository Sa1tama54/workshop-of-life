import VacancyModel from '../models/Vacancy.model';

const create = async (req, res) => {
  const { image, title, graphic, experience, tel } = req.body;

  try {
    const vacancy = await VacancyModel.create({
      image,
      title,
      graphic,
      experience,
      tel,
    });

    res.json(vacancy);
  } catch (error) {
    res.status(500).json({ message: 'Не удалось добавить новую вакансию' });
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

    const vacancies = await VacancyModel.find({
      title: { $regex: search, $options: 'i' },
    })
      .sort(sortBy)
      .skip(page * limit)
      .limit(limit);

    const total = await VacancyModel.countDocuments({
      title: { $regex: search, $options: 'i' },
    });

    const response = {
      error: false,
      total,
      page: page + 1,
      limit,
      vacancies,
    };

    res.json(response);
  } catch (error) {
    res.status(500).json({ message: 'Не удалось найти вакансию' });
  }
};

const update = async (req, res) => {
  try {
    const { image, title, price, graphic, experience, tel } = req.body;

    const vacancyId = req.params.id;

    const vacancy = await VacancyModel.updateOne(
      {
        _id: vacancyId,
      },
      {
        image,
        title,
        price,
        graphic,
        experience,
        tel,
      }
    );

    res.json({ succes: true });
  } catch (error) {
    res.status(500).json({ message: 'Не удалось обновить вакансию' });
  }
};

const remove = async (req, res) => {
  try {
    const vacancyId = req.params.id;

    VacancyModel.findOneAndDelete({ _id: vacancyId }, (err, doc) => {
      if (err) {
        res.status(500).json({ message: 'Не удалось удалить вакансию' });
      }

      if (!doc) {
        res.status(404).json({ message: 'Не удалось найти вакансию' });
      }

      res.json({ success: true });
    });
  } catch (error) {
    res.status(500).json({ message: `Не удалось получить вакансию` });
  }
};

export default { create, getAll, update, remove };
