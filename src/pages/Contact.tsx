import React from 'react';
import { Window } from '../components/Window/Window';
import { ButtonRetro } from '../components/ButtonRetro/ButtonRetro';

export const Contact: React.FC = () => {
    // Styles matching the new PC-98 palette variables
    const labelStyle: React.CSSProperties = {
        color: 'var(--pk-accent-cyan)',
        marginBottom: '6px',
        fontSize: '0.9rem',
        textTransform: 'uppercase',
        letterSpacing: '1px'
    };

    const inputStyle: React.CSSProperties = {
        background: 'var(--pk-indigo-mid)',
        border: '1px solid var(--pk-frame-base)', // "Small greyish border"
        color: 'var(--pk-text-main)',
        fontFamily: 'inherit',
        fontSize: '1rem',
        padding: '10px',
        width: '100%',
        boxShadow: 'inset 2px 2px 4px rgba(0,0,0,0.5)', // Inner depth
        outline: 'none'
    };

    const disabledInputStyle: React.CSSProperties = {
        ...inputStyle,
        background: 'var(--pk-indigo-deep)',
        color: 'var(--pk-text-dim)',
        border: '1px solid var(--pk-frame-base)',
        cursor: 'not-allowed'
    };

    return (
        <div className="page-contact">
            <Window title="MAIL.EXE">
                <style>
                    {`
                    /* Add local focus styles since we are using inline styles for the base */
                    .retro-input:focus {
                        border-color: var(--pk-text-bright) !important;
                        background-color: var(--pk-indigo-light) !important;
                        box-shadow: 0 0 4px var(--pk-accent-cyan) !important;
                    }
                    `}
                </style>
                <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }} onSubmit={(e) => e.preventDefault()}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <label style={labelStyle}>TO:</label>
                        <input
                            className="retro-input"
                            type="text"
                            value="matheus@example.com"
                            disabled
                            style={disabledInputStyle}
                        />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <label style={labelStyle}>FROM:</label>
                        <input
                            className="retro-input"
                            type="email"
                            placeholder="visitor@net.com"
                            style={inputStyle}
                        />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <label style={labelStyle}>MESSAGE:</label>
                        <textarea
                            className="retro-input"
                            rows={6}
                            style={{
                                ...inputStyle,
                                resize: 'vertical'
                            }}
                        />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <ButtonRetro type="submit" variant="primary">SEND MESSAGE</ButtonRetro>
                    </div>
                </form>
            </Window>
        </div>
    );
};
