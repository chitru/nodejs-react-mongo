const express = require('express');
const router = express.Router();


// @route   GET api/users/test
//@desc     Tests Users route
// @access  Private Route
router.get('/test', (req, res) => res.json({
    msg: "user works"
}));

module.exports = router;