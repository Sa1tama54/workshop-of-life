import PhotoModel from '../models/Photo.model';

const create = async (req, res) => {
  try {
    const photo = await PhotoModel.create({
      image: req.body.image,
      description: req.body.description,
    });

    res.json(photo);
  } catch (error) {
    res.status(500).json({ message: 'Не удалось добавить новую фотографию' });
  }
};

const getAll = async (req, res) => {
  try {
    const page = parseInt(req.query.page) - 1 || 0;
    const limit = parseInt(req.query.limit) || 5;

    const photos = await PhotoModel.find({})
      .skip(page * limit)
      .limit(limit);

    const response = {
      error: false,
      page: page + 1,
      limit,
      photos,
    };

    res.json(response);
  } catch (error) {
    res.status(500).json({ message: 'Не удалось найти фотографии' });
  }
};

const update = async (req, res) => {
  try {
    const photoId = req.params.id;

    const photo = await PhotoModel.updateOne(
      {
        _id: photoId,
      },
      {
        image: req.body.image,
        description: req.body.description,
      }
    );

    res.json({ succes: true });
  } catch (error) {
    res.status(500).json({ message: 'Не удалось обновить фотографию' });
  }
};

const remove = async (req, res) => {
  try {
    const photoId = req.params.id;

    PhotoModel.findOneAndDelete({ _id: photoId }, (err, doc) => {
      if (err) {
        res.status(500).json({ message: 'Не удалось удалить фотографию' });
      }

      if (!doc) {
        res.status(404).json({ message: 'Не удалось найти фотографию' });
      }

      res.json({ success: true });
    });
  } catch (error) {
    res.status(500).json({ message: `Не удалось получить фотографию` });
  }
};

export default { create, getAll, update, remove };
