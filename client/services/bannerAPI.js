import { apiConnector } from "./apiConnector";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const INSERT_BANNER_API = BASE_URL + "/insertBanner";
const GET_BANNER_API = BASE_URL + "/getActiveBanner";

// Function to upload a banner
export async function UploadBannerAPI(data) {
    try {
        const response = await apiConnector("POST", INSERT_BANNER_API, data, { 
            headers: { "Content-Type": "multipart/form-data" }
        });
        const responseData = response?.data;

        console.log("API call response:", responseData);
        return responseData; // Return the response for further handling
    } catch (error) {
        console.error("Something went wrong while uploading banner:", error);
        throw error; // Optionally rethrow the error for higher-level handling
    }
}

// Function to get the active banner
export async function GetBannerAPI() {
    try {
        const response = await apiConnector("GET", GET_BANNER_API);
        const responseData = response?.data;

        return responseData?.banners; // Ensure `banners` matches the response property
    } catch (error) {
        console.error("Something went wrong while fetching banner:", error);
        throw error;
    }
}