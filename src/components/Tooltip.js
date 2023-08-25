// import React, { useState } from 'react';
// import './Tooltip.css';

// function Tooltip({ buttonText, tooltipText, tooltipStyles }) {
//     const [showTooltip, setShowTooltip] = useState(false);
//     const [tooltipStyles, setTooltipStyles] = useState({
//         padding: '8px',
//         backgroundColor: '#ff9900',
//         color: '#fff'
//     });
//     const handleMouseEnter = () => {
//         setShowTooltip(true);
//       };

//       const handleMouseLeave = () => {
//         setShowTooltip(false);
//       };

//       const handleStyleChange = (property, value) => {
//         setTooltipStyles(prevStyles => ({
//           ...prevStyles,
//           [property]: value
//         }));
//       };

//     return (
//         <div className="dynamic-tooltip-container">
//             <button
//                 className="dynamic-tooltip-button"
//                 onMouseEnter={handleMouseEnter}
//                 onMouseLeave={handleMouseLeave}
//             >
//                 {buttonText}
//             </button>
//             {showTooltip && (
//                 <div className="dynamic-tooltip" style={tooltipStyles}>
//                     {tooltipText}
//                 </div>
//             )}
//         </div>
//     );
// }

// export default Tooltip;