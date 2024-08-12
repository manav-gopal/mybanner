import { useEffect, useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import "./Banner.scss";

const Banner = ({ banner }) => {
    const [timeLeft, setTimeLeft] = useState("");

    useEffect(() => {
        if (!banner || !banner[0].countdownTimer || !banner[0].createdAt) return;

        const countdownDuration = parseInt(banner[0].countdownTimer, 10); // Countdown duration in seconds
        const createdAt = new Date(banner[0].createdAt).getTime();
        const targetTime = createdAt + countdownDuration * 1000; // Target time in milliseconds

        const updateCountdown = () => {
            const now = new Date().getTime();
            const distance = targetTime - now;

            if (distance < 0) {
                setTimeLeft("Time's Up");
                return;
            }

            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setTimeLeft(
                `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`
            );
        };

        // Initial call to set the countdown
        updateCountdown();

        // Update countdown every second
        const intervalId = setInterval(updateCountdown, 1000);

        // Clean up interval on component unmount
        return () => clearInterval(intervalId);
    }, [banner]);

    return (
        <div className="Hero">
            <div className="hero-content center">
                <div className="hero-info">
                    <h2 className="heading">{banner?.heading}</h2>
                    <p className="subheading">{banner?.subheading}</p>
                    <p>{banner?.description}</p>
                    <div className="">
                        <button>Explore more</button>
                    </div>
                    <div>
                        <h1 className="heading">
                            {timeLeft}
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Define PropTypes
Banner.propTypes = {
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

export default Banner;
