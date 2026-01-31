import React from 'react';
import { NavLink } from 'react-router-dom';
import { Window } from '../Window/Window';
import { ButtonRetro } from '../ButtonRetro/ButtonRetro';
import './NavbarRetro.css';

export const NavbarRetro: React.FC = () => {
    const navItems = [
        { name: 'HOME', path: '/' },
        { name: 'ABOUT', path: '/about' },
        { name: 'PROJECTS', path: '/projects' },
        { name: 'CONTACT', path: '/contact' },
    ];

    return (
        <nav className="retro-navbar">
            <Window title="MENU">
                <ul className="retro-nav-list">
                    {navItems.map((item) => (
                        <li key={item.name} className="retro-nav-item">
                            <NavLink to={item.path} style={{ textDecoration: 'none' }}>
                                {({ isActive }) => (
                                    <ButtonRetro
                                        style={{ width: '100%' }}
                                        variant={isActive ? 'primary' : 'default'}
                                    >
                                        {item.name}
                                    </ButtonRetro>
                                )}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </Window>

            <Window title="INFORMAÇÕES RÁPIDAS">
                <div style={{ fontSize: '0.9rem', color: 'var(--color-bright-green)' }}>
                    <p>Programação: C#, .NET, Unity, APIs RESTful, Java, JavaScript, TypeScript, Python, C</p>
                    <p>Idiomas: Português (Nativo), Inglês (Avançado), Japonês (Intermediário)</p>
                    <p>Formação: Sistemas de Informação 2024 - 2028</p>
                </div>
            </Window>
        </nav>
    );
};
