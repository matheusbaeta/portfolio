import React from 'react';
import { Window } from '../components/Window/Window';

export const Home: React.FC = () => {
    return (
        <div className="page-home">
            <Window title="WELCOME.EXE">
                <div style={{ textAlign: 'center', padding: '20px' }}>
                    <h1 style={{ color: 'var(--pk-accent-gold)', textShadow: '2px 2px var(--pk-void)' }}>
                        ようこそ、私のポートフォリオへ。
                    </h1>
                    <h2 style={{ color: 'var(--pk-accent-cyan)' }}>BEM VINDO AO MEU PORTFÓLIO!</h2>
                    <br />
                    <h3 style={{ color: 'var(--pk-text-dim)' }}>Software Developer | ソフトウェア開発者</h3>
                    <p>
                        Estudante de Sistemas de Informação e Desenvolvedor Backend com foco em .NET.
                        Experiência na criação de sistemas robustos, APIs e lógica de negócio, enquanto
                        exploro desenvolvimento de jogos com Unity.
                    </p>
                    <p style={{ color: 'var(--pk-text-dim)' }}>VERSION 1.0</p>
                </div>
            </Window>

            <Window title="INFO.TXT">
                <ul style={{ listStyleType: 'square', paddingLeft: '20px', color: 'var(--pk-text-main)' }}>
                    <li style={{ marginBottom: '8px' }}>Status: Ativo</li>
                    <li style={{ marginBottom: '8px' }}>Role: Software Developer (Backend)</li>
                    <li style={{ marginBottom: '8px' }}>Main Stack: C# / .NET / Unity</li>
                    <li style={{ marginBottom: '8px' }}>Location: Minas Gerais, Brasil</li>
                </ul>
            </Window>
        </div>
    );
};
