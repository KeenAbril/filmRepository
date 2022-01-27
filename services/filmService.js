const mongoose = require('mongoose');
const Film = require('../models/db/filmModel');
const repository = require('../database/repository');

module.exports.selectById = async (filmId) => {
  const response = { status: false };
  try {
    const data = {
      _id: mongoose.Types.ObjectId(filmId),
      model: Film,
      projection: {
        
      }
    };
    const resFromRepo = await repository.selectById(data);
    if (resFromRepo.status) {
      response.result = resFromRepo.result;
      response.status = true;
    }
  } catch(err) {
    console.log('ERROR-filmService-selectById: ', err);
  }
  return response;
}

/* module.exports.selectAll = async (queryParams, pagination) => {
  const response = { status: false };
  try {
    const data = {
      findQuery: queryParams,
      model: Film,
      projection: {
        
      }
    };
    if (pagination.skip && pagination.limit) {
      data.skip = pagination.skip;
      data.limit = pagination.limit;
    }
    const resFromRepo = await repository.selectAll(data);
    if (resFromRepo.status) {
      response.result = resFromRepo.result;
      response.status = true;
    }
  } catch(err) {
    console.log('ERROR-filmService-selectAll: ', err);
  }
  return response;
} */

module.exports.create = async (filmFromController) => {
  const response = { status: false };
  try {
    const film = new Film(filmFromController);
    const resFromRepo = await repository.create(film);
    if (resFromRepo.status) {
      response.result = resFromRepo.result;
      response.status = true;
    }
  } catch(err) {
    console.log('ERROR-filmService-create: ', err);
  }
  return response;
}

module.exports.update = async (film) => {
  const response = { status: false };
  try {
    const data = {
      _id: mongoose.Types.ObjectId(film.id),
      model: Film,
      projection: {
        
      },
      updateQuery: {}
    };
    if (film.title) data.updateQuery.title = film.title;
    if (film.sinopsis) data.updateQuery.sinopsis = film.sinopsis;
    if (film.director) data.updateQuery.director = film.director;
    if (film.releasedDate) data.updateQuery.releasedDate = film.releasedDate;
    if (film.actors) data.updateQuery.actors = film.actors;
    const resFromRepo = await repository.update(data);
    if (resFromRepo.status) {
      response.result = resFromRepo.result;
      response.status = true;
    }
  } catch(err) {
    console.log('ERROR-filmService-update: ', err);
  }
  return response;
}

module.exports.delete = async (filmId) => {
  const response = { status: false };
  try {
    const data = {
      _id: mongoose.Types.ObjectId(filmId),
      model: Film,
      projection: {
        
      },
    };
    
    const resFromRepo = await repository.delete(data);
    if (resFromRepo.status) {
      response.result = resFromRepo.result;
      response.status = true;
    }
  } catch(err) {
    console.log('ERROR-filmService-delete: ', err);
  }
  return response;
}