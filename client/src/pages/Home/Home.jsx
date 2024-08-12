import "./Home.scss";
import Banner from "../../components/Banner/Banner";
import DashboardButton from "../../components/DashboardButton/DashboardButton";
import PropTypes from "prop-types";

function Home(props) {
    return (
        <div className="Home-page">
            <div className="home-banner">
                <Banner banner={props.banner} />
            </div>
            <div className="home-dashboard">
                <DashboardButton/>
            </div>
        </div>
    );
}
// Define PropTypes
Home.propTypes = {
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
export default Home;
