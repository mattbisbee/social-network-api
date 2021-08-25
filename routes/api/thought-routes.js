const router = require('express').Router();

const {
  getAllThoughts,
  getThoughtById,
  updateThought,
  addThought,
  removeThought,
  addReaction,
  removeReaction
} = require('../../controllers/thought-controller');

// /api/thoughts
router
  .route('/')
  .get(getAllThoughts)
  .post(addThought);

// /api/thoughts/<userId>
router
  .route('/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(removeThought);

// /api/thoughts/<userId>/<thoughtId>
router
  .route('/:thoughtId/reactions')
  .post(addReaction);

router
  .route('/:id/reactions/:reactionId')
  delete(removeReaction);

module.exports = router;