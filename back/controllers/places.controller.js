const Place = require('../models/place.model');

exports.createPlace = async (req, res) => {
  const { name, description, lat, lng } = req.body;

  try {
    const place = await Place.create({ name, description, lat, lng });

    res.status(201).json({
      success: true,
      data: place,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: 'Ошибка сервера',
    });
  }
};

exports.getPlaces = async (req, res) => {
  try {
    const places = await Place.find();

    res.status(200).json({
      success: true,
      data: places,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: 'Ошибка сервера',
    });
  }
};

exports.updatePlace = async (req, res) => {
  const { id } = req.params;
  const { name, description, lat, lng } = req.body;

  try {
    const place = await Place.findByIdAndUpdate(
      id,
      { name, description, lat, lng },
      { new: true }
    );

    res.status(200).json({
      success: true,
      data: place,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: 'Ошибка сервера',
    });
  }
};

exports.deletePlace = async (req, res) => {
  const { id } = req.params;

  try {
    await Place.findByIdAndDelete(id);

    res.status(204).json({
      success: true,
