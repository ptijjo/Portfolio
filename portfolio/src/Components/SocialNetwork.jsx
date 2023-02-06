import React from 'react';

const SocialNetwork = () => {

    const aimant = () => {
        const icons = document.querySelectorAll(".social-network li");

        icons.forEach((lien) => {
            lien.addEventListener("mouseover", (e) => {

                lien.style.transform = `translate(${e.offsetX - 20}px, ${e.offsetY - 13}px)`
            })

            lien.addEventListener("mouseleave", () => {
                lien.style.transform = ``

            })
        })

    }

    return (
        <div className="social-network">
            <ul className="content">
                <li><a href="https://linkedin.com/in/ibrahima-bangoura" target="_blank" rel="noopener noreferrer" className="hover" onMouseOver={aimant} aria-label="lien linkedin">
                    <i className="fa-brands fa-linkedin hover"></i>
                </a></li>

                <li><a href="https://github.com/ptijjo" target="_blank" rel="noopener noreferrer" className="hover" onMouseOver={aimant} aria-label="lien github">
                    <i className="fa-brands fa-github "></i>
                </a></li>

            </ul>

        </div>
    );
};

export default SocialNetwork;