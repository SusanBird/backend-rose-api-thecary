const { Router } = require('express');
const Character = require('../models/Character');

module.exports = Router()

//   .post('/', async (req, res, next) => {
//     try {
//       const character = await Character.insert(req.body);
//       if (req.body.petIds) {
//         await Promise.all(req.body.petIds.map((id) => character.addPetById(id)));
//       }
//       res.json(character);
//     } catch (e) {
//       next(e);
//     }
//   })

//   .get('/:id', async (req, res, next) => {
//     try {
//       const character = await Character.getById(req.params.id);
//       res.json(character);
//     } catch (e) {
//       next(e);
//     }
//   })

  .get('/', async (req, res) => {
    const characters = await Character.getAll();
    // const respData = characters.map(({ id, first_name, last_name }) => ({ id, first_name, last_name }));
    res.json(characters);
  });

