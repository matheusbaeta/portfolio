import React from 'react';
import { Window } from '../components/Window/Window';
import { ButtonRetro } from '../components/ButtonRetro/ButtonRetro';
import './Contact.css';

export const Contact: React.FC = () => {
    return (
        <div className="page-contact">
            <Window title="MAIL.EXE">
                <form className="page-contact-form" onSubmit={(e) => e.preventDefault()}>
                    <div className="contact-field">
                        <label className="contact-label">TO:</label>
                        <input
                            className="contact-input"
                            type="text"
                            value="matheushsbaeta@gmail.com"
                            disabled
                        />
                    </div>
                    <div className="contact-field">
                        <label className="contact-label">FROM:</label>
                        <input
                            className="contact-input"
                            type="email"
                            placeholder="visitor@net.com"
                        />
                    </div>
                    <div className="contact-field">
                        <label className="contact-label">MESSAGE:</label>
                        <textarea
                            className="contact-input contact-textarea"
                            rows={6}
                        />
                    </div>
                    <div className="contact-actions">
                        <ButtonRetro type="submit" variant="primary">SEND MESSAGE</ButtonRetro>
                    </div>
                </form>
            </Window>
        </div>
    );
};
