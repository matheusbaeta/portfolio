import React from 'react';
import './ButtonRetro.css';

interface ButtonRetroProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'default' | 'primary' | 'monitor';
    href?: string;
}

export const ButtonRetro: React.FC<ButtonRetroProps> = ({
    children,
    variant = 'default',
    className = '',
    href,
    ...props
}) => {
    const baseClass = `retro-button ${variant} ${className}`;

    if (href) {
        return (
            <a
                href={href}
                className={baseClass}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', display: 'inline-flex', ...props.style }}
            >
                {children}
            </a>
        );
    }

    return (
        <button
            className={baseClass}
            {...props}
        >
            {children}
        </button>
    );
};
