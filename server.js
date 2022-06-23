const path = require('path');
const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connections');
const exphbs = require('express-handlebars');
// const { Sequelize } = require('sequelize/types');
const helpers = require('./utils/helpers')
const session = require('express-session')
const SequelizeStore = require('connect-session-sequelize')(session.Store)
const hbs = exphbs.create({ helpers });

const apps = express();
apps.use('/js', express.static(__dirname + './../public/js'));

// for new push
const app = express();
const PORT = process.env.PORT || 3001;


const sess = {
    secret: 'Batcave level of secret',
    cookie: { maxAge: 36000 },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};



app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on http://localhost:${PORT}/`));
});
