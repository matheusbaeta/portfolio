import React from 'react';
import { Window } from '../components/Window/Window';
import './Home.css';

export const Home: React.FC = () => {
    return (
        <div className="page-home">
            <Window title="WELCOME.EXE">
                <div className="page-home-welcome">
                    <h1 className="home-japanese-title">
                        ようこそ、私のポートフォリオへ。
                    </h1>
                    <h2 className="home-main-title">BEM VINDO AO MEU PORTFÓLIO!</h2>
                    <br />
                    <h4 className="home-subtitle">Software Developer | ソフトウェア開発者</h4>
                    <p className="home-description">
                        Estudante de Sistemas de Informação e Desenvolvedor Backend com foco em .NET.
                        Experiência na criação de sistemas robustos, APIs e lógica de negócio, enquanto
                        exploro desenvolvimento de jogos com Unity.
                    </p>
                    <p className="home-version">VERSION 1.0</p>
                </div>
            </Window>

            <Window title="INFO.TXT">
                <ul className="home-info-list">
                    <li className="home-info-item">Status: Ativo</li>
                    <li className="home-info-item">Role: Software Developer (Backend)</li>
                    <li className="home-info-item">Main Stack: C# / .NET / Unity</li>
                    <li className="home-info-item">Location: Minas Gerais, Brasil</li>
                </ul>
            </Window>
        </div>
    );
};
