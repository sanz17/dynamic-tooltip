import React, { useState } from 'react';
import './Tooltip.css';

function Tooltip({ buttonText, tooltipText, tooltipStyles }) {
    const [showTooltip, setShowTooltip] = useState(false);

    const handleMouseEnter = () => {
        setShowTooltip(true);
    };

    const handleMouseLeave = () => {
        setShowTooltip(false);
    };

    return (
        <div className="dynamic-tooltip-container">
            <button
                className="dynamic-tooltip-button"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {buttonText}
            </button>
            {showTooltip && (
                <div className="dynamic-tooltip" style={tooltipStyles}>
                    {tooltipText}
                </div>
            )}
        </div>
    );
}

export default Tooltip;