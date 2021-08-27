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

// /api/thoughts/<thoughtId>
router
  .route('/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(removeThought);

// /api/thoughts/<thoughtId>/<thoughtId>
router
  .route('/:id/reactions')
  .post(addReaction);

router
  .route('/:id/reactions/:reactionId')
  .delete(removeReaction);

module.exports = router;