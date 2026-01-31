import React from 'react';
import { Window } from '../components/Window/Window';
import './About.css';

export const About: React.FC = () => {
    return (
        <div className="page-about">
            <Window title="PROFILE.BAT">
                <div className="about-profile-container">
                    <div className="about-profile-image">
                        <span style={{ fontSize: '0.9rem', color: 'var(--pk-text-dim)' }}>[NO IMG]</span>
                    </div>
                    <div className="about-profile-content">
                        <h1 className="about-section-title">USER PROFILE</h1>

                        <div className="about-profile-details-grid">
                            <span style={{ color: 'var(--pk-accent-gold)' }}>USER:</span>
                            <span>Matheus Henrique Sanches Baeta</span>

                            <span style={{ color: 'var(--pk-accent-gold)' }}>CLASS:</span>
                            <span>Software Developer</span>

                            <span style={{ color: 'var(--pk-accent-gold)' }}>SKILLS:</span>
                            <span style={{ color: 'var(--pk-accent-emerald)' }}>C#, JavaScript, TypeScript, Node.js, Python, C, Java</span>

                            <span style={{ color: 'var(--pk-accent-gold)' }}>LANGUAGES:</span>
                            <span>Inglês (Avançado), Japonês (Intermediário)</span>
                        </div>

                        <p style={{ lineHeight: '1.6', color: 'var(--pk-text-main)' }}>
                            Sou estudante de Sistemas de Informação e Desenvolvedor de Software com foco em
                            backend, atuando principalmente com C# e .NET.

                            Tenho interesse em arquitetura de sistemas, APIs REST e lógica de negócio,
                            sempre buscando escrever código limpo, organizado e de fácil manutenção.
                        </p>

                        <p style={{ lineHeight: '1.6', color: 'var(--pk-text-main)' }}>
                            Além do backend, exploro o desenvolvimento de jogos com Unity como forma de
                            aprendizado técnico e criativo, aplicando conceitos de programação e design
                            de sistemas.
                        </p>
                    </div>
                </div>
            </Window>

            <Window title="WORKING_EXPERIENCE.BAT">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div className="about-exp-item">
                        <div className="about-exp-header">
                            <h3 className="about-work-title">SECOND MIND</h3>
                            <span className="about-work-date">2025 - ATUALMENTE</span>
                        </div>
                        <div className="about-work-role">DESENVOLVEDOR BACKEND</div>
                        <ul style={{ listStyleType: 'square', paddingLeft: '20px', color: 'var(--pk-text-main)', margin: 0 }}>
                            <li style={{ marginBottom: '4px' }}>Desenvolvimento de APIs RESTful em .NET Core utilizando Clean Architecture para garantir escalabilidade e desacoplamento de camadas.</li>
                            <li style={{ marginBottom: '4px' }}>Implementação de persistência de dados com Entity Framework Core, aplicando Code-First e Migrations.</li>
                            <li >Atuação em time Ágil (Scrum/Kanban), colaborando na definição de contratos de API com o Frontend.</li>
                        </ul>
                    </div>

                    <div className="about-exp-item">
                        <div className="about-exp-header">
                            <h3 className="about-work-title">ONG RECANTO DOS ANIMAIS (VOLUNTÁRIO)</h3>
                            <span className="about-work-date">2025 - 2026</span>
                        </div>
                        <div className="about-work-role">DESENVOLVEDOR BACKEND</div>
                        <ul style={{ listStyleType: 'square', paddingLeft: '20px', color: 'var(--pk-text-main)', margin: 0 }}>
                            <li style={{ marginBottom: '4px' }}>Criação de API RESTful com Node.js, Express e TypeScript para gestão de adoções.</li>
                            <li style={{ marginBottom: '4px' }}>Modelagem do banco de dados PostgreSQL e definição de arquitetura.</li>
                            <li >Implementação de regras de negócio e rotas para integração contínua com o frontend.</li>
                        </ul>
                    </div>
                </div>
            </Window>
        </div>
    );
};
