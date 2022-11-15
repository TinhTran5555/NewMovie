import React from "react";

const useHover = (props) => {
    const [isHovered, setIsHovered] = React.useState(false);
    
    const handleMouseOver = () => {
        setIsHovered(true);
    }
    
     const handleMouseLeave = () => {
        setIsHovered(false);
    }
    
    return (
        <div
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
            {...props}
        >
        Component
        </div>
    );
}
export default useHover;