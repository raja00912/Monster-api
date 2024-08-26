const imageService = require('../service/imageService')
const imageSchema = require('../models/imageModel')
const path = require('path');

exports.getImages = async (req, res) => {
    try {
        const images = await imageService.fetchAll();
        res.json(images)
    } catch (error) {
        res.status(500).json({ message: 'Error in fetching image', error: error })
    }
}

exports.uploadImage = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }

        const file = req.file;

        const newImage = new imageSchema({
            filename: file.filename,
            path: file.path.replace(/\\/g, '/'),
            mimetype: file.mimetype,
            size: file.size
        });

        await newImage.save();
        res.status(201).json({ message: 'Image uploaded successfully', data: newImage });
    } catch (error) {
        console.error('Upload error:', error);
        res.status(500).json({ message: 'Error in uploading image', error: error})
    }
}

exports.getImageById = async (req, res) => {
    try {
        const { id } = req.params;
        const image = await imageSchema.findById(id);

        if (!image) {
            return res.status(404).json({ message: 'Image not found' });
        }

        const filePath = path.join(__dirname, '../', image.path);
        res.sendFile(filePath);
    } catch (error) {
        console.error('Error in fetching image:', error);
        res.status(500).json({ message: 'Error in fetching image', error: error })
    }
}