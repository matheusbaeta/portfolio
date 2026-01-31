import React from 'react';
import { Window } from '../components/Window/Window';

export const Home: React.FC = () => {
    return (
        <div className="page-home">
            <Window title="WELCOME.EXE">
                <div style={{ textAlign: 'center', padding: '20px' }}>
                    <h1 style={{ color: 'var(--color-bright-green)', textShadow: '2px 2px var(--color-black)' }}>
                        PORTFOLIO SYSTEM
                    </h1>
                    <p>VERSION 1.0</p>
                    <p>COPYRIGHT (C) 2024</p>
                    <br />
                    <p>Select an option from the menu to begin.</p>
                </div>
            </Window>

            <Window title="TIPS.TXT">
                <ul style={{ listStyleType: 'square', paddingLeft: '20px' }}>
                    <li>Navigate using the sidebar menu.</li>
                    <li>System is optimized for retro-compatibility.</li>
                    <li>Enjoy the pixel-perfect aesthetic!</li>
                </ul>
            </Window>
        </div>
    );
};
