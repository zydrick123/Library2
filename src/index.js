const express = require('express');
const cors = require('cors');
const passport = require('passport');
const app = express();
const { configureJWTStrat } = require('./helpers/passport/passport-jwt')

//Route imports
const { librarianRoute } = require('./routes/librarian/index')
const { bookRoute } = require('./routes/book/index')

const { requestRoute } = require('./routes/request/index')

const { publisherRoute } = require('./routes/publisher/index')

const { categoryRoute } = require('./routes/category/index')

const { userRoute } = require('./routes/user/index')

const { readerRoute } = require('./routes/reader/index')
const { issued_BookRoute } = require('./routes/issued_book/index')
const port = 5003; //

//Initialize app
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: false }))



app.use(passport.initialize());
configureJWTStrat();

const server = app.listen(port, () => {
    console.log("Server running at port " + port);
});

//initialize routes
app.use('/', librarianRoute)
    .use('/', bookRoute)
    .use('/', publisherRoute)
    .use('/', categoryRoute)

    .use('/', userRoute)
    .use('/', readerRoute)
    .use('/', issued_BookRoute)
    .use('/', requestRoute)
module.exports = { app }