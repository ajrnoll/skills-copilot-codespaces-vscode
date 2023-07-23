// Create web server using express
// Create a route to handle GET request
// Create a route to handle POST request
// Create a route to handle PUT request
// Create a route to handle DELETE request
// Create a route to handle PATCH request

const express = require('express');
const router = express.Router();

const commentController = require('../controllers/comment');

// GET request
router.get('/', commentController.getComment);

// POST request
router.post('/', commentController.postComment);

// PUT request
router.put('/', commentController.putComment);

// DELETE request
router.delete('/', commentController.deleteComment);

// PATCH request
router.patch('/', commentController.patchComment);

module.exports = router;