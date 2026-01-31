import React from 'react';
import { Window } from '../components/Window/Window';
import { ButtonRetro } from '../components/ButtonRetro/ButtonRetro';

interface Project {
    id: number;
    title: string;
    desc: string;
    tech: string[];
    link?: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: 'Bullet Hell Game',
        desc: 'Jogo bullet hell (danmaku) desenvolvido em Unity, focado em combates intensos com padrões complexos de projéteis.',
        tech: ['Unity', 'C#'],
        link: 'https://github.com/matheusbaeta/DanmakuBulletHell'
    },
    {
        id: 2,
        title: 'Weather App',
        desc: 'Aplicação de clima que consome dados meteorológicos em tempo real da API OpenWeather, com base na cidade informada pelo usuário.',
        tech: ['React', 'TypeScript', 'HTML', 'CSS'],
        link: 'https://github.com/matheusbaeta/WeatherApp'
    },
    {
        id: 3,
        title: 'Dice Game',
        desc: 'Jogo de dados simples que permite ao usuário rolar até três dados, adicionar ou remover dados e visualizar a pontuação total em uma interface limpa e intuitiva.',
        tech: ['Kotlin', 'Android'],
        link: 'https://github.com/matheusbaeta/DiceGame'
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
                            <ButtonRetro
                                variant="monitor"
                                style={{ width: '100%', fontSize: '0.9rem' }}
                                href={p.link}
                            >
                                VIEW PROJECT
                            </ButtonRetro>
                        </div>
                    ))}
                </div>
            </Window>
        </div>
    );
};
