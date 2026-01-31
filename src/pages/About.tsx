import React from 'react';
import { Window } from '../components/Window/Window';

export const About: React.FC = () => {
    return (
        <div className="page-about">
            <Window title="PROFILE.BAT">
                <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                    <div style={{
                        width: '120px',
                        height: '140px',
                        backgroundColor: 'var(--color-gray)',
                        border: '2px solid var(--window-border)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <span style={{ fontSize: '0.8rem' }}>[NO IMG]</span>
                    </div>
                    <div style={{ flex: 1 }}>
                        <h2 style={{ color: 'var(--color-bright-cyan)', marginTop: 0 }}>USER PROFILE</h2>
                        <p><strong>NAME:</strong> Matheus</p>
                        <p><strong>CLASS:</strong> Full Stack Developer</p>
                        <p><strong>LEVEL:</strong> Senior</p>
                        <p><strong>EXP:</strong> React, TypeScript, Node.js, Python, Go</p>
                        <br />
                        <p>
                            Passionate developer creating digital experiences.
                            Inspired by the golden age of computing.
                        </p>
                    </div>
                </div>
            </Window>
        </div>
    );
};
