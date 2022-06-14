const { Router } = require('express');
const { Quote } = require('../models/Quote');

module.exports = Router()

  .post('/', async (req, res, next) => {
    try {
      const owner = await Quote.insert(req.body);
      res.json(owner);
    } catch (e) {
      next(e);
    }
  });
