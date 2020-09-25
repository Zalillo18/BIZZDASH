const express = require('express')
const router = express.Router()

const cdnUploader = require('../configs/cloudinary.img.config')

const User = require('../models/user.model')


// Local files form upoload


router.post('/edituser', cdnUploader.single('imageInput'), (req, res) => {

    const { name, description, headline, fronend,
            backend, fullstack, node, javascript, react } = req.body

    console.log(req.body.fullstack, "-----------------", fullstack, node)  // No devuelve nada javascript

    const links = {
        gitHub: req.body.gitHub,
        linkedin: req.body.linkedin
    }

    let profileImg = `${req.user.profileImg}`
    if (req.file)
        profileImg = req.file.path
    
    User.findByIdAndUpdate( req.user.id, {name, description, links, profileImg, headline})
        .then(() => res.redirect(`/${req.user.username}`))
        .catch(err => console.log('Hubo un error:', err))
})




module.exports = router