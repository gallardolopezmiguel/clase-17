const express = require('express');
const router = express.Router();

// ES 5
router.get('/login', function(req, res) {
    res.send('this is login through auth path')
});
//ES 6
router.get('/logout', (req, res) => {
    res.send('you are out !!');
});

// ES 6 W/ const
const recoveryHandler = (req, res) => {
    res.send('A recovery path');
};
    router.get('/recovery', recoveryHandler);

    module.exports = router;