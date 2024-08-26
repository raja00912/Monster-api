const imageSchema = require('../models/imageModel')
const path = require('path');
const multer = require('multer');

exports.fetchAll = async (req, res) => {
    return imageSchema.find();
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

exports.uploadImage = multer({ storage: storage });