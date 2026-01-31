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
                    <div style={{ borderBottom: '1px dashed var(--pk-frame-light)', paddingBottom: '16px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '8px' }}>
                            <h3 style={{ margin: 0, color: 'var(--pk-accent-gold)', fontSize: '1.4rem' }}>SECOND MIND</h3>
                            <span style={{ color: 'var(--pk-accent-gold)', fontSize: '1.4rem' }}>2025 - ATUALMENTE</span>
                        </div>
                        <div style={{ color: 'var(--pk-text-dim)', marginBottom: '8px', fontSize: '1.2rem' }}>DESENVOLVEDOR BACKEND</div>
                        <ul style={{ listStyleType: 'square', paddingLeft: '20px', color: 'var(--pk-text-main)', margin: 0 }}>
                            <li style={{ marginBottom: '4px' }}>Desenvolvimento e manutenção de APIs RESTful escaláveis utilizando C# e .NET.</li>
                            <li style={{ marginBottom: '4px' }}>Colaboração direta com o time de frontend e participação ativa em cerimônias Ágeis.</li>
                            <li >Otimização de consultas SQL para garantir alta performance e integridade dos dados.</li>
                        </ul>
                    </div>

                    <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '8px' }}>
                            <h3 style={{ margin: 0, color: 'var(--pk-accent-gold)', fontSize: '1.4rem' }}>VOLUNTÁRIO NA ONG RECANTO DOS ANIMAIS</h3>
                            <span style={{ color: 'var(--pk-accent-gold)', fontSize: '1.4rem' }}>2025 - 2026</span>
                        </div>
                        <div style={{ color: 'var(--pk-text-dim)', marginBottom: '8px', fontSize: '1.2rem' }}>DESENVOLVEDOR BACKEND</div>
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
