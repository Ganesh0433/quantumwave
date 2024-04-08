"use client"
import React from "react";

export interface GoogleIconProps {
    fill?: string;
    filled?: boolean;
    size?: number;
    height?: number;
    width?: number;
    label?: string;
}

export const GoogleIcon: React.FC<GoogleIconProps> = ({
    fill = 'currentColor',
    filled,
    size,
    height,
    width,
    label,
    ...props
}) => {
    return (
        <svg
            data-name="Iconly/Curved/Profile"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={size || width || 24}
            height={size || height || 24}
            {...props}
        >
            <circle cx="12" cy="12" r="10" stroke={fill} strokeWidth="1.5" />
            <path d="M12 12H17C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C13.3807 7 14.6307 7.55964 15.5355 8.46447" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}
