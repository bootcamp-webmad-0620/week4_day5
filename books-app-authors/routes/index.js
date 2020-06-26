module.exports = app => {

    // Base URLS
    app.use('/', require('./base.routes.js'))
    app.use('/libros', require('./books.routes.js'))
}