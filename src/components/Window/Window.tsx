import React from 'react';
import './Window.css';

interface WindowProps {
    title: string;
    children: React.ReactNode;
    onClose?: () => void;
    className?: string; // Allow custom classes for sizing/positioning
}

export const Window: React.FC<WindowProps> = ({ title, children, onClose, className = '' }) => {
    return (
        <div className={`retro-window ${className}`}>
            <div className="retro-window-title-bar">
                <div className="retro-window-title">{title}</div>
                <div className="retro-window-controls">
                    {onClose && (
                        <button className="retro-window-button" onClick={onClose} aria-label="Close">
                            X
                        </button>
                    )}
                </div>
            </div>
            <div className="retro-window-content">
                {children}
            </div>
        </div>
    );
};
