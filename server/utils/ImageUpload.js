const cloudinary = require('cloudinary').v2;

const uploadImageToCloudinary = (filePath, folder) => {
    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload(filePath, { folder }, (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        });
    });
};

module.exports = { uploadImageToCloudinary };
