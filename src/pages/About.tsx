import React from 'react';
import { Window } from '../components/Window/Window';

export const About: React.FC = () => {
    return (
        <div className="page-about">
            <Window title="PROFILE.BAT">
                <div style={{ display: 'flex', gap: '30px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                    <div style={{
                        width: '140px',
                        height: '160px',
                        backgroundColor: 'var(--pk-indigo-deep)',
                        border: '2px solid var(--pk-frame-base)',
                        boxShadow: 'inset 0 0 10px var(--pk-void)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <span style={{ fontSize: '0.9rem', color: 'var(--pk-text-dim)' }}>[NO IMG]</span>
                    </div>
                    <div style={{ flex: 1 }}>
                        <h2 style={{ color: 'var(--pk-accent-cyan)', marginTop: 0, borderBottom: '2px solid var(--pk-frame-base)', paddingBottom: '8px' }}>USER PROFILE</h2>

                        <div style={{ display: 'grid', gridTemplateColumns: '100px 1fr', gap: '8px', marginBottom: '16px' }}>
                            <span style={{ color: 'var(--pk-accent-gold)' }}>NAME:</span>
                            <span>Matheus</span>

                            <span style={{ color: 'var(--pk-accent-gold)' }}>CLASS:</span>
                            <span>Full Stack Developer</span>

                            <span style={{ color: 'var(--pk-accent-gold)' }}>LEVEL:</span>
                            <span>Senior</span>

                            <span style={{ color: 'var(--pk-accent-gold)' }}>SKILLS:</span>
                            <span style={{ color: 'var(--pk-accent-emerald)' }}>React, TypeScript, Node.js, Python, Go</span>
                        </div>

                        <p style={{ lineHeight: '1.6', color: 'var(--pk-text-main)' }}>
                            Passionate developer creating digital experiences.
                            Inspired by the golden age of computing and vintage Japanese adventure games.
                        </p>
                    </div>
                </div>
            </Window>
        </div>
    );
};
