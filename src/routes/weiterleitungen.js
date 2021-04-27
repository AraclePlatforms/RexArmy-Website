const router = require('express').Router();

router.get('/', (req, res) => {
    res.redirect('/');
});


router.get('/ra-coding', async (req, res) => {
	res.redirect('https://coding.rexarmy.ch')
});
router.get('/coding', async (req, res) => {
	res.redirect('https://coding.rexarmy.ch')
});
router.get('/coding-community', async (req, res) => {
	res.redirect('https://coding.rexarmy.ch')
});
router.get('/discord', async (req, res) => {
	res.redirect('https://discord.gg/F2VGGzA6hD')
});
module.exports = router;


