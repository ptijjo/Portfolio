import React, { useRef } from 'react';

const ContactForm = () => {

    const form = useRef();


    const sendEmail = (e) => {
        e.preventDefault();
    }


    return (
        <div className='form-container'>
            <h2>contactez-moi</h2>
            <form ref={form} onSubmit={sendEmail} className="form-content">
                <label htmlFor="nom">Nom</label>
                <input type="text" name="nom" id="nom" required autoComplete='off' />
                <label htmlFor="prenom">Prenom</label>
                <input type="text" name="prenom" id="prenom" required autoComplete='off' />
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" required autoComplete='off' />
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" required />
                <input type="submit" value="Envoyer" className='hover button' />
            </form>

            <div className="forMessage"></div>

        </div>
    );
};

export default ContactForm;