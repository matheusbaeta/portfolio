import React from 'react';
import { NavLink } from 'react-router-dom';
import { Window } from '../Window/Window';
import { ButtonRetro } from '../ButtonRetro/ButtonRetro';
import './NavbarRetro.css';

export const NavbarRetro: React.FC = () => {
    const navItems = [
        { name: 'HOME', path: '/' },
        { name: 'SOBRE', path: '/about' },
        { name: 'PROJETOS', path: '/projects' }
        // { name: 'CONTACT', path: '/contact' },
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

            <Window title="CONTATO">
                <div style={{ fontSize: '0.9rem', color: 'var(--color-bright-green)' }}>
                    <p>Github:
                        <a href="https://github.com/matheusbaeta" target="_blank">
                            matheusbaeta
                        </a>
                    </p>
                    <p>Email: matheushsbaeta@gmail.com</p>
                    <p>LinkedIn:
                        <a href="https://www.linkedin.com/in/matheushsbaeta" target="_blank">
                            matheusbaeta
                        </a>
                    </p>
                </div>
            </Window>
        </nav>
    );
};
