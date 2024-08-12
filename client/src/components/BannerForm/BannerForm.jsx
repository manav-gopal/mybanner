import { useState, useEffect } from "react";
import "./BannerForm.scss";

import { UploadBannerAPI, GetBannerAPI } from "../../../services/bannerApi";

const BannerForm = () => {
    const [title, setTitle] = useState('Edit the Details');
    const [formData, setFormData] = useState({
        heading: "",
        subheading: "",
        description: "",
        bannerImage: null,
        countdownTimer: "",
        link: "",
    });
    const [isEditing, setIsEditing] = useState(true);
    const [isNewBanner, setIsNewBanner] = useState(false);

    useEffect(() => {
        const fetchBanner = async () => {
            if (isEditing && !isNewBanner) {
                try {
                    const banner = await GetBannerAPI();
                    let bannerData = banner[0];
                    console.log(bannerData);
                    if (banner) {
                        setFormData({
                            heading: bannerData.heading || "",
                            subheading: bannerData.subheading || "",
                            description: bannerData.description || "",
                            bannerImage: bannerData.bannerImage || null, // Handle image URL correctly
                            countdownTimer: bannerData.countdownTimer || "",
                            link: bannerData.link || "",
                        });
                    }
                } catch (error) {
                    console.error("Error fetching banner data:", error);
                }
            } else if (isNewBanner) {
                setFormData({
                    heading: "",
                    subheading: "",
                    description: "",
                    bannerImage: null,
                    countdownTimer: "",
                    link: "",
                });
            }
        };

        fetchBanner();
    }, [isEditing, isNewBanner]);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: files ? files[0] : value
        }));
    };

    const handleUploadSubmit = async (e) => {
        e.preventDefault();

        const form = new FormData();
        form.append("heading", formData.heading);
        form.append("subheading", formData.subheading);
        form.append("description", formData.description);
        form.append("countdownTimer", formData.countdownTimer);
        form.append("link", formData.link);
        if (formData.bannerImage) {
            form.append("bannerImage", formData.bannerImage);
        }

        try {
            const result = isEditing ? await UploadBannerAPI(form) : await UploadBannerAPI(form);
            console.log("Result:", result);
        } catch (error) {
            console.error("Error:", error);
        }
    };
    const handleUpdateSubmit = async (e) => {
        e.preventDefault();

        const form = new FormData();
        form.append("heading", formData.heading);
        form.append("subheading", formData.subheading);
        form.append("description", formData.description);
        form.append("countdownTimer", formData.countdownTimer);
        form.append("link", formData.link);

        try {
            const result = isEditing ? await UploadBannerAPI(form) : await UploadBannerAPI(form);
            console.log("Result:", result);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const handleEditClick = () => {
        setTitle("Edit the Details");
        setIsEditing(true);
        setIsNewBanner(false);
    };

    const handleNewBannerClick = () => {
        setTitle("Add Brand New Banner");
        setIsEditing(false);
        setIsNewBanner(true);
    };

    return (
        <div className="form-container">
            <form className="banner-form" onSubmit={isEditing ? handleUpdateSubmit : handleUploadSubmit}>
                <div className="button-group">
                    <button className="btn-primary" type="button" onClick={handleEditClick}>Edit</button>
                    <button className="btn-primary" type="button" onClick={handleNewBannerClick}>Upload New Banner</button>
                </div>
                <h2>{title}</h2>

                <div className="form-row">
                    <div className="form-input">
                        <label htmlFor="heading">Heading</label>
                        <input type="text" id="heading" name="heading" value={formData.heading} onChange={handleChange} required />
                    </div>
                    <div className="form-input">
                        <label htmlFor="subheading">Subheading</label>
                        <input type="text" id="subheading" name="subheading" value={formData.subheading} onChange={handleChange} required />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea id="description" name="description" value={formData.description} onChange={handleChange} required></textarea>
                </div>

                {!isEditing && (
                    <div className="form-row">
                        <div className="form-input">
                            <label htmlFor="bannerImage">Banner Image</label>
                            <input type="file" id="bannerImage" name="bannerImage" accept="image/*" onChange={handleChange} required />
                        </div>
                    </div>
                )}

                <div className="form-row">
                    <div className="form-input">
                        <label htmlFor="countdownTimer">Countdown Timer (in seconds)</label>
                        <input type="number" id="countdownTimer" name="countdownTimer" value={formData.countdownTimer} onChange={handleChange} required />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="link">Link</label>
                    <input type="url" id="link" name="link" value={formData.link} onChange={handleChange} required />
                </div>

                <button type="submit" className="submit-button">{isEditing ? "Save Changes" : "Create Banner"}</button>
            </form>
        </div>
    );
};

export default BannerForm;
