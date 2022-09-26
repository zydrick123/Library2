const express = require('express');
const cors = require('cors');
const passport = require('passport');
const app = express();
const { configureJWTStrat } = require('./helpers/passport/passport-jwt')

//Route imports
const { librarianRoute } = require('./routes/librarian/index')
const { bookRoute } = require('./routes/book/index')
const { authorRoute } = require('./routes/author/index')
const { shelfRoute } = require('./routes/shelf/index')
const { publisherRoute } = require('./routes/publisher/index')
const { bookSubCatRoute } = require('./routes/book-subcategory/index')
const { bookCatRoute } = require('./routes/book-category/index')
const { cityRoute } = require('./routes/city/index')
const { accountRoute } = require('./routes/account/index')
const { bookCopyRoute } = require('./routes/bookcopy/index')
const { readerRoute } = require('./routes/reader/index')
const { borrowerRoute } = require('./routes/borrower/index')
const port = 5000; //

//Initialize app
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: false }))



app.use(passport.initialize());
configureJWTStrat();

const server = app.listen(port, () => {
    console.log("Server running")
});

//initialize routes
app.use('/', librarianRoute)
app.use('/', bookRoute)
app.use('/', authorRoute)
app.use('/', shelfRoute)
app.use('/', publisherRoute)
app.use('/', bookSubCatRoute)
app.use('/', bookCatRoute)
app.use('/', cityRoute)
app.use('/', accountRoute)
app.use('/', bookCopyRoute)
app.use('/', readerRoute)
app.use('/', borrowerRoute)
module.exports = { app }