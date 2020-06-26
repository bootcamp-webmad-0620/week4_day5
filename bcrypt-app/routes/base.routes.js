const express = require('express')
const router = express.Router()

// Endpoints
router.get('/', (req, res) => res.render('index'))


// Login checker
router.use((req, res, next) => {
    if (req.session.currentUser) {
        next()
    } else {
        res.render("auth/login", { errorMsg: 'Área restringida! >_<' })
    }
})


router.get("/perfil", (req, res) => {
    res.render('profile', req.session.currentUser)
});

module.exports = router
