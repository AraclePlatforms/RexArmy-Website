require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const session = require('express-session');
const path = require('path');
const bodyParser = require('body-parser')



// Routes

const ramemberRoute = require('./routes/ramember')
const redirectRoute = require('./routes/weiterleitungen')





app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));


// Middleware Routes

app.use('/member', ramemberRoute);
app.use('/redirect', redirectRoute);


app.get('/ramembers', async (req, res) => {res.redirect('/member')});
app.get('/ramember', async (req, res) => {res.redirect('/member')});
app.get('/dontask', async (req, res) => {res.redirect('/dontaskjustask')});
app.get('/rules', async (req, res) => {res.redirect('/regeln')});
app.get('/contact', async (req, res) => {res.redirect('/kontakt')});


app.get('/', async (req, res) => {
    res.render('home', { title: 'Home'})
});

app.get('/links', async (req, res) => {
    res.render('links')
});
app.get('/l', async (req, res) => {
    res.redirect('/links')
});


app.get('/impressum', async (req, res) => {
    res.render('impressum', { title: 'Impressum'})
});

app.get('/datenschutz', async (req, res) => {
    res.render('datenschutz', { title: 'Datenschutz'})
});

app.get('/dontaskjustask', async (req, res) => {
    res.render('dontask', { title: 'Frage nicht um zu Fragen. Frag einfach.'})
});

app.get('/team', async (req, res) => {
    res.render('team', { title: 'Team'})
});

app.get('/kontakt', async (req, res) => {
    res.render('kontakt', { title: 'Kontakt'})
});

app.get('/regeln', async (req, res) => {
    res.render('regeln', { title: 'Regeln'})
});

app.get('/application', async (req, res) => {
    res.render('application', { title: 'Bewerbung'})
});

app.get('/netiquette', async (req, res) => {
    res.render('netiquette', { title: 'Netiquette'})
});

app.get('/discord', async (req, res) => {
    res.redirect('https://discord.gg/BBuryNJ')
});
app.get('/dc', async (req, res) => {
    res.redirect('https://discord.gg/BBuryNJ')
});
app.listen(PORT, () => console.log(`Now listening to requests on port ${PORT}`));