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

            <Window title="SYSTEM STATUS">
                <div style={{ fontSize: '0.9rem', color: 'var(--color-bright-green)' }}>
                    <p>MEM: 640KB OK</p>
                    <p>OS: PC-9801</p>
                    <p>TIME: {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                </div>
            </Window>
        </nav>
    );
};
