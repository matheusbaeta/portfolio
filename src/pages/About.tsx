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

                            {/* <span style={{ color: 'var(--pk-accent-gold)' }}>LEVEL:</span>
                            <span>Intern</span> */}

                            <span style={{ color: 'var(--pk-accent-gold)' }}>SKILLS:</span>
                            <span style={{ color: 'var(--pk-accent-emerald)' }}>C#, JavaScript, TypeScript, Node.js, Python, C, Java</span>
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

                        <p style={{ lineHeight: '1.6', color: 'var(--pk-text-main)' }}>
                            Sou movido por curiosidade, aprendizado contínuo e pelo interesse em sistemas
                            clássicos e jogos retrô. Atualmente, estou aberto a oportunidades.
                        </p>
                    </div>
                </div>
            </Window>
        </div>
    );
};
