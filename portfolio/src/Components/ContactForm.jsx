import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {

    const form = useRef();


    const sendEmail = (e) => {
        e.preventDefault();

        const formMess = document.querySelector('.form-message');

        emailjs.sendForm("service_uiw2m8d", "template_hygwczb", form.current, process.env.REACT_APP_ID)
            .then((result) => {
                //console.log(result.text);
                form.current.reset();
                formMess.innerHTML = `<p class="success"> Message envoyé ! </p>`

                setTimeout(() => {
                    formMess.innnerHTML = "";
                }, 2500)

            }, (error) => {
                console.log(error.text);
                formMess.innerHTML = `<p class="error"> Une erreur s'est produite veuillez essayer ultérieurement ! </p>`

                setTimeout(() => {
                    formMess.innnerHTML = "";
                }, 2500)
            });
    };

    return (
        <div className='form-container'>
            <h2>contactez-moi</h2>
            <form ref={form} onSubmit={sendEmail} className="form-content">
                <label htmlFor="Nom">Nom</label>
                <input type="text" name="nom" id="nom" required autoComplete='off' />
                <label htmlFor="Prenom">Prenom</label>
                <input type="text" name="prenom" id="prenom" required autoComplete='off' />
                <label htmlFor="Email">Email</label>
                <input type="email" name="email" id="email" required autoComplete='off' />
                <label htmlFor="Message">Message</label>
                <textarea name="message" id="message" required />
                <input type="submit" value="Envoyer" className='hover button' />
            </form>
            <div className="form-message"></div>


        </div>
    );
};

export default ContactForm;