const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('was-ramembers.ejs', { title: 'Was sind RA-Member' });
});


router.get('/channels', async (req, res) => {
	res.render('ramembers-list.ejs', { title: 'RA-Member Kanäle' });
});


module.exports = router;


