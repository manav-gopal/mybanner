const express = require('express');
const { insertBanner, getActiveBanner, updateBannerInfo } = require('../controllers/bannerController');

const router = express.Router();

// Fetch active banners
router.get('/getActiveBanner', getActiveBanner);

// Update banner info
router.post('/updateBannerInfo', updateBannerInfo);

// Insert banner with file upload using express-fileupload
router.post('/insertBanner', insertBanner);

module.exports = router;
