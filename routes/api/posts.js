const express = require('express');
const router = express.Router();

// @route   GET api/posts/test
//@desc     Tests post route
// @access  Public Route
router.get('/test', (req, res) => res.json({
    msg: "Posts works"
}));

module.exports = router;