import Banner from "../../components/Banner/Banner";
import BannerForm from "../../components/BannerForm/BannerForm";
import './Dashboard.scss';
import ToggleButton from "../../components/ToggleButton/ToggleButton";
import PropTypes from "prop-types"; // Import PropTypes

const Dashboard = (props) => {
    return (
        <div className="dashboard">
            <div className="dashboard-banner">
                <div>
                    <Banner banner={props.banner} />
                </div>
                <div>
                    <h1 className="sub-heading">Stop Banner Appearing :</h1>
                    <div>
                        <ToggleButton />
                    </div>
                </div>
                <div className="banner-info-edit">
                    <div className="banner-form">
                        <BannerForm currentBanner={props.banner} />
                    </div>
                </div>
            </div>
        </div>
    );
};
// Define PropTypes
Dashboard.propTypes = {
    banner: PropTypes.arrayOf(
        PropTypes.shape({
            heading: PropTypes.string,
            subheading: PropTypes.string,
            description: PropTypes.string,
            countdownTimer: PropTypes.string,
            createdAt: PropTypes.string
        })
    ).isRequired
};
export default Dashboard;
