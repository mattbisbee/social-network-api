const router = require('express').Router();

const {
  addFriend,
  deleteFriend,
  addUser,
  deleteUser,
  getAllUsers,
  getUserById,
  updateUser
} = require('../../controllers/user-controller');

// /api/users
router
  .route('/')
  .get(getAllUsers)
  .post(addUser);

// /api/users/<userId>
router
  .route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

// /api/users/<userId>/friends/<friendId>
router
  .route('/:id/friends/:friendId')
  .post(addFriend)
  .delete(deleteFriend)

  module.exports = router;

