import React from 'react';
import './ButtonRetro.css';

interface ButtonRetroProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'default' | 'primary' | 'monitor';
}

export const ButtonRetro: React.FC<ButtonRetroProps> = ({
    children,
    variant = 'default',
    className = '',
    ...props
}) => {
    return (
        <button
            className={`retro-button ${variant} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};
