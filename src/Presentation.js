import React from "react";
import './Presentation.css';
import photo from './Images/photo.jpg';

const Presentation = () => {
    const ContactDetails = () => (
        <div className={'contact'}>
            <h3 className={'title_coordonnees'}>Coordonnées</h3>
            <ul>
                <li className={'email'}>gautier.edel.info@gmail.com</li>
                <li className={'phone'}>+33 6 98 67 45 73</li>
            </ul>
        </div>
    )

    const Intro = () => (
        <div className={'intro'}>
            <h2 className={'name'}>Gautier EDEL</h2>
            <img src={photo} alt={'Presentation'} className={'photo'}/>
            <p className={'presentation_text'}>Date de naissance: 26/01/2002 <br/>Permis B2</p>
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