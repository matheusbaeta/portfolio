import React from 'react';
import { Window } from '../components/Window/Window';

export const Home: React.FC = () => {
    return (
        <div className="page-home">
            <Window title="WELCOME.EXE">
                <div style={{ textAlign: 'center', padding: '20px' }}>
                    <h1 style={{ color: 'var(--pk-accent-gold)', textShadow: '2px 2px var(--pk-void)' }}>
                        ようこそ、私のポートフォリオへ。
                    </h1>
                    <p style={{ color: 'var(--pk-text-dim)' }}>BEM VINDO AO MEU PORTFÓLIO!</p>
                    <br />
                    <p>Select a command from the sidebar to begin operation.</p>
                    <p style={{ color: 'var(--pk-text-dim)' }}>COPYRIGHT (C) 2024</p>
                </div>
            </Window>

            <Window title="INFO.TXT">
                <ul style={{ listStyleType: 'square', paddingLeft: '20px', color: 'var(--pk-text-main)' }}>
                    <li style={{ marginBottom: '8px' }}>Navigate using the <span style={{ color: 'var(--pk-accent-orange)' }}>COMMAND PANEL</span>.</li>
                    <li style={{ marginBottom: '8px' }}>System is optimized for <span style={{ color: 'var(--pk-accent-cyan)' }}>PC-9801</span> architecture.</li>
                    <li>Enjoy the pixel-perfect aesthetic!</li>
                </ul>
            </Window>
        </div>
    );
};
