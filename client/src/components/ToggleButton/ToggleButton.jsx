import { useState } from 'react';
import './ToggleButton.scss';

const ToggleButton = () => {
    const [isOn, setIsOn] = useState(false);

    const handleToggle = () => {
        setIsOn(!isOn);
    };

    return (
        <div className="toggle-button-container">
            <button
                className={`toggle-button ${isOn ? 'on' : 'off'}`}
                onClick={handleToggle}
            >
                {isOn ? 'On' : 'Off'}
            </button>
        </div>
    );
};

export default ToggleButton;
