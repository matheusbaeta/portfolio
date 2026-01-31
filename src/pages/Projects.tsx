import React from 'react';
import { Window } from '../components/Window/Window';
import { ButtonRetro } from '../components/ButtonRetro/ButtonRetro';

interface Project {
    id: number;
    title: string;
    desc: string;
    tech: string[];
}

const projects: Project[] = [
    {
        id: 1,
        title: 'RETRO OS',
        desc: 'A web-based operating system simulator.',
        tech: ['React', 'CSS', 'Vite']
    },
    {
        id: 2,
        title: 'E-COMMERCE BOT',
        desc: 'Automated trading bot for massive gains.',
        tech: ['Python', 'Docker', 'AWS']
    },
    {
        id: 3,
        title: 'PIXEL ART EDITOR',
        desc: 'Online tool for creating 8-bit art.',
        tech: ['Canvas API', 'TypeScript']
    }
];

export const Projects: React.FC = () => {
    return (
        <div className="page-projects">
            <Window title="PROJECTS_DIR">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
                    {projects.map((p) => (
                        <div key={p.id} style={{
                            border: '2px solid var(--pk-frame-base)',
                            padding: '16px',
                            background: 'var(--pk-indigo-mid)',
                            boxShadow: '4px 4px 0 var(--pk-void)'
                        }}>
                            <h3 style={{ margin: '0 0 12px 0', color: 'var(--pk-accent-gold)', borderBottom: '1px dashed var(--pk-frame-light)', paddingBottom: '4px' }}>
                                {p.title}
                            </h3>
                            <p style={{ fontSize: '1rem', color: 'var(--pk-text-main)', marginBottom: '16px' }}>{p.desc}</p>
                            <div style={{ marginBottom: '16px', display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                                {p.tech.map(t => (
                                    <span key={t} style={{
                                        backgroundColor: 'var(--pk-indigo-deep)',
                                        border: '1px solid var(--pk-accent-cyan)',
                                        color: 'var(--pk-accent-cyan)',
                                        padding: '2px 6px',
                                        fontSize: '0.8rem',
                                    }}>
                                        {t}
                                    </span>
                                ))}
                            </div>
                            <ButtonRetro variant="monitor" style={{ width: '100%', fontSize: '0.9rem' }}>VIEW SOURCE</ButtonRetro>
                        </div>
                    ))}
                </div>
            </Window>
        </div>
    );
};
