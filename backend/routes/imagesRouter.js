const express = require('express');
const router = express.Router();
const imageController = require('../controllers/imageController')
const {uploadImage} = require('../service/imageService');

router.get('/fetchAll', imageController.getImages);

router.post('/upload', uploadImage.single('image'), imageController.uploadImage)

router.get('/imagesById/:id', imageController.getImageById)

module.exports = router;