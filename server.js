const path = require('path');
const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connections');
const session = require('express-session')
const hbs = require('express-handlebars');


const app = express();
const PORT = process.env.PORT || 3001;


const sess = {
    secret: 'Batcave level of secret',
    resave: false,
    saveUninitialized: true,
  };

app.use(session(sess));

// const hbs = exphbs.create({ helpers })

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening on http://localhost:3001/'));
});