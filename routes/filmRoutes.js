const express = require('express');
const router = express.Router();

const filmController = require('../controllers/filmController');
const joiMiddleware = require('../middlewares/joiMiddleware');
const filmchemas = require('../models/joi/filmSchemas');

router.post('/create',
  joiMiddleware.validate(filmchemas.createUserSchema, 'body'),
  filmController.create
);

router.get('/details/:id',
  joiMiddleware.validate(filmchemas.selectFilmSchema, 'params'),
  filmController.selectById
);


router.put('/update/:id',
  joiMiddleware.validate(filmchemas.selectFilmSchema, 'params'),
  joiMiddleware.validate(filmchemas.updateFilmSchema, 'body'),
  filmController.update
);

router.delete('/delete/:id',
  joiMiddleware.validate(filmchemas.selectFilmSchema, 'params'),
  filmController.delete
);

/* router.get('/list',
  joiMiddleware.validate(filmSchemas.selectAllSchema, 'query'),
  filmController.selectAll
); */

module.exports = router;