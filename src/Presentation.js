import React from "react";
import './Presentation.css';
import photo from './Images/photo.jpg';

const Presentation = () => {
    const ContactDetails = () => (
        <div className={'contact'}>
            <h3 className={'title_coordonnees'}>Coordonnées</h3>
            <ul>
                <li>gautier.edel66@gmail.com</li>
                <li>+33 6 98 67 45 73</li>
            </ul>
        </div>
    )

    const Intro = () => (
        <div className={'intro'}>
            <h2 className={'name'}>Gautier EDEL</h2>
            <img src={photo} alt={'Presentation'} className={'photo'}/>
            <p className={'presentation_text'}>Texte de présentation.</p>
        </div>
    )

    return (
        <div className={'presentation'}>
            <ContactDetails />
            <Intro />
        </div>
    )
}

export default Presentation