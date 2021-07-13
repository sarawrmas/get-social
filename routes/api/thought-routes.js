const router = require('express').Router();

const {
  getAllThoughts,
  getThoughtById,
  addThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction
} = require('../../controllers/thought-controller.js');

router.route('/')
.get(getAllThoughts);

router.route('/:userId')
.post(addThought);

router.route('/:id')
.get(getThoughtById)
.put(updateThought);

router.route('/:userId/:thoughtId')
.delete(deleteThought);

router.route('/:thoughtId/reactions')
.post(addReaction);

router.route('/:thoughtId/reactions/:reactionId')
.delete(removeReaction);

module.exports = router;