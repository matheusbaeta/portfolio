import React from 'react';
import { Window } from '../components/Window/Window';
import { ButtonRetro } from '../components/ButtonRetro/ButtonRetro';

export const Contact: React.FC = () => {
    return (
        <div className="page-contact">
            <Window title="MAIL.EXE">
                <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} onSubmit={(e) => e.preventDefault()}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <label style={{ color: 'var(--color-bright-cyan)', marginBottom: '4px' }}>TO:</label>
                        <input
                            type="text"
                            value="matheus@example.com"
                            disabled
                            style={{
                                background: 'var(--color-gray)',
                                border: '1px solid var(--window-border)',
                                color: 'var(--color-bright-white)',
                                fontFamily: 'inherit',
                                padding: '8px'
                            }}
                        />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <label style={{ color: 'var(--color-bright-cyan)', marginBottom: '4px' }}>FROM:</label>
                        <input
                            type="email"
                            placeholder="visitor@net.com"
                            style={{
                                background: 'var(--color-black)',
                                border: '1px solid var(--window-border)',
                                color: 'var(--color-bright-white)',
                                fontFamily: 'inherit',
                                padding: '8px'
                            }}
                        />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <label style={{ color: 'var(--color-bright-cyan)', marginBottom: '4px' }}>MESSAGE:</label>
                        <textarea
                            rows={5}
                            style={{
                                background: 'var(--color-black)',
                                border: '1px solid var(--window-border)',
                                color: 'var(--color-bright-white)',
                                fontFamily: 'inherit',
                                padding: '8px'
                            }}
                        />
                    </div>
                    <ButtonRetro type="submit" variant="primary">SEND MESSAGE</ButtonRetro>
                </form>
            </Window>
        </div>
    );
};
