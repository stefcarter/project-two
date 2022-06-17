const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connections');
// const exphbs = require('express-handlebars');
// const hbs = exphbs.create({});

const app = express();
const PORT = process.env.PORT || 3001;

// const sess = {
//     secret: 'Super secret secret',
//     resave: false,
//     saveUninitialized: true,
//   };

// app.use(session(sess));

// const hbs = exphbs.create({ })

// app.engine('handlebars', hbs.engine);
// app.set('view engine', 'handlebars');

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening on http://localhost:3001/'));
});