// models/banner.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Adjust path if necessary

const Banner = sequelize.define('Banner', {
    heading: {
        type: DataTypes.STRING,
        allowNull: false
    },
    subheading: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    bannerImage: {
        type: DataTypes.STRING,
        allowNull: true
    },
    countdownTimer: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    link: {
        type: DataTypes.STRING,
        allowNull: false
    },
    isAlive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    cloudinaryPublicId: {
        type: DataTypes.STRING,
        defaultValue: null
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: Date.now()
    }
}, {
    tableName: 'banners',
    timestamps: false // Or true, depending on your schema
});

module.exports = { Banner };
