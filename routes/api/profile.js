const express = require('express');
const router = express.Router();


// @route   GET api/profile/test
//@desc     Tests Profile route
// @access  Public Route
router.get('/test', (req, res) => res.json({
    msg: "Profile works"
}));

module.exports = router;