import React from 'react';

const Logo = ({ color = 'currentColor', className = '' }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 450 120" 
      className={className}
      style={{ height: '100%', width: 'auto', display: 'block' }}
    >
      <g fill={color}>
        {/* Roof (Isometric Parallelogram) */}
        <polygon points="15,35 75,25 145,30 85,40" />
        
        {/* Left Wall (Solid) */}
        <polygon points="20,45 82,50 82,105 20,100" />
        
        {/* Front Wall (Roll-up Door Strips) */}
        <polygon points="88,50 140,40 140,46 88,56" />
        <polygon points="88,60 140,50 140,56 88,66" />
        <polygon points="88,70 140,60 140,66 88,76" />
        <polygon points="88,80 140,70 140,76 88,86" />
        <polygon points="88,90 140,80 140,95 88,105" />

        {/* Base line extending to right */}
        <polygon points="140,92 155,89 155,92 140,95" />

        {/* Text COMFORT */}
        <text 
          x="165" 
          y="72" 
          fontFamily="'Outfit', sans-serif" 
          fontWeight="800" 
          fontSize="56" 
          letterSpacing="1"
        >
          COMFORT
        </text>
        
        {/* Text SELF STORAGE */}
        <text 
          x="170" 
          y="105" 
          fontFamily="'Inter', sans-serif" 
          fontWeight="700" 
          fontSize="26" 
          letterSpacing="4"
        >
          SELF STORAGE
        </text>
      </g>
    </svg>
  );
};

export default Logo;
