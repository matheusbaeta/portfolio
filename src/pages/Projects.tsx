import React from 'react';
import { Window } from '../components/Window/Window';
import { ButtonRetro } from '../components/ButtonRetro/ButtonRetro';
import './Projects.css';

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
                <div className="page-projects-grid">
                    {projects.map((p) => (
                        <div key={p.id} className="project-card">
                            <h3 className="project-title">
                                {p.title}
                            </h3>
                            <p className="project-desc">{p.desc}</p>
                            <div className="project-tags">
                                {p.tech.map(t => (
                                    <span key={t} className="project-tag">
                                        {t}
                                    </span>
                                ))}
                            </div>
                            <ButtonRetro
                                variant="monitor"
                                style={{ width: '100%', fontSize: '0.9rem', marginTop: 'auto' }}
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
