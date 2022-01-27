// module.exports.list = () => {
// };

// module.exports.profile = () => {
// };
const films = [
  {id: 1, name: 'john'},
  {id: 2, name: 'david'},
  {id: 3, name:'maria'}
];
const status = {
  ok: 200,
  notFound: 404,
  created: 201,
};

const c = require('../config/constants');
const filmService = require('../services/filmService');

module.exports = {
  create: async (req, res) => {
    const response = { status: c.status.serverError, msg: 'Internal server error' };
    try {
      const film = req.body;
      const resFromService = await filmService.create(film);
      if (resFromService.status) {
        response.status = c.status.created;
        response.msg = 'Film created';
        response.body = resFromService.result;
      }
    } catch(err) {
      console.log('ERROR-filmController-create: ', err);
      response.error = err;
    }
    res.status(response.status).send(response);
  },

  update: async (req, res) => {
    const response = { status: c.status.serverError, msg: 'Internal server error' };
    try {
      const film = req.body;
      film.id = req.params.id;
      const resFromService = await filmService.update(film);
      if (resFromService.status) {
        response.status = c.status.ok;
        response.msg = 'Film updated';
        response.body = resFromService.result;
      }
    } catch(err) {
      console.log('ERROR-filmController-updated: ', err);
      response.error = err;
    }
    res.status(response.status).send(response);
  },

  delete: async (req, res) => {
    const response = { status: c.status.serverError, msg: 'Internal server error' };
    try {
      filmId = req.params.id;
      const resFromService = await filmService.delete(filmId);
      if (resFromService.status) {
        if (resFromService.status) {
          response.status = c.status.ok;
          response.msg = 'Film deleted';
          response.body = resFromService.result;
        } else {
          response.status = c.status.notFound;
          response.msg = 'Film not found';
        }
      }
    } catch(err) {
      console.log('ERROR-filmController-delete: ', err);
      response.error = err;
    }
    res.status(response.status).send(response);
  },

  selectById: async (req, res) => {
    const response = { status: c.status.serverError, msg: 'Internal server error' };
    try {
      const filmId = req.params.id;
      const resFromService = await filmService.selectById(filmId);
      if (resFromService.status) {
        if (resFromService.result) {
          response.status = c.status.ok;
          response.msg = 'Film found';
          response.body = resFromService.result;
        } else {
          response.status = c.status.notFound;
          response.msg = 'Film not found';
        }
      }
    } catch(err) {
      console.log('ERROR-filmController-selectById: ', err);
      response.error = err;
    }
    res.status(response.status).send(response);
  },

  /* selectAll: async (req, res) => {
    const response = { status: c.status.serverError, msg: 'Internal server error' };
    try {
      const queryParams = {};
      if (req.query.active) queryParams.active = req.query.active;
      const pagination = {};
      if (req.query.skip) pagination.skip = +req.query.skip;
      if (req.query.limit) pagination.limit = +req.query.limit;
      const resFromService = await filmService.selectAll(queryParams, pagination);
      if (resFromService.status) {
        // response.status = c.status.ok;
        // response.body = resFromService.result;
        if (resFromService.result) {
          response.status = c.status.ok;
          response.msg = 'Films found';
          response.body = resFromService.result;
        } else {
          response.status = c.status.notFound;
          response.msg = 'Films not found';
        }
      }
    } catch(err) {
      console.log('ERROR-filmController-selectAll: ', err);
      response.error = err;
    }
    res.status(response.status).send(response);
  }, */
};