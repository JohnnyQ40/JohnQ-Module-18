const router = require('express').Router();
const thoughtController = require('../../controllers/thoughtController');

router.route('/')
.get(thoughtController.getAllThoughts)
.post(thoughtController.createThought);

router.route('/:id')
.get(thoughtController.getSingleThought);

module.exports = router;