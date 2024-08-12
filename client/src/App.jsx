import { useEffect, useState } from "react";
import Dashboard from "./pages/Dashboard/Dashboard";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import { GetBannerAPI } from "../services/bannerApi";

function App() {
    const [banner, setBanner] = useState(null);

    useEffect(() => {
        const fetchBanner = async () => {
            try {
                const result = await GetBannerAPI();
                setBanner(result);
                console.log("the banner is : ", result);
            } catch (error) {
                console.error("Error fetching banner data:", error);
            }
        };

        fetchBanner();
    }, []);

    return (
        <div className="">
            <Routes>
                <Route>
                    <Route path="/" element={<Home banner={banner}/>} />
                </Route>
                <Route>
                    <Route path="/dashboard" element={<Dashboard banner={banner}/>} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;