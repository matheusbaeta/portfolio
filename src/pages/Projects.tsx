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
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1rem' }}>
                    {projects.map((p) => (
                        <div key={p.id} style={{ border: '1px dashed var(--color-gray)', padding: '10px' }}>
                            <h3 style={{ margin: '0 0 10px 0', color: 'var(--color-bright-yellow)' }}>{p.title}</h3>
                            <p style={{ fontSize: '0.9rem' }}>{p.desc}</p>
                            <div style={{ margin: '10px 0' }}>
                                {p.tech.map(t => (
                                    <span key={t} style={{
                                        backgroundColor: 'var(--color-blue)',
                                        color: 'var(--color-bright-white)',
                                        padding: '2px 6px',
                                        fontSize: '0.7rem',
                                        marginRight: '4px'
                                    }}>
                                        {t}
                                    </span>
                                ))}
                            </div>
                            <ButtonRetro variant="monitor" style={{ width: '100%', fontSize: '0.8rem' }}>VIEW SOURCE</ButtonRetro>
                        </div>
                    ))}
                </div>
            </Window>
        </div>
    );
};
