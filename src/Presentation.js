import React from "react";
import './Presentation.css';
import photo from './Images/photo.jpg';

const Presentation = () => {
    const Intro = () => (
        <div className={'intro'}>
            <div className={'title'}>
                <h2 className={'title_text'}>Stage développement Web</h2>
                <img src={photo} alt={'Presentation'} className={'photo'}/>
            </div>
            <p className={'presentation_text'}>
                <b className={'name'}>Gautier EDEL</b>
                <br/>
                <br/>
                Étudiant en deuxième année de DUT Informatique,<br/>
                je recherche un stage de dix semaines (Avril à Juin) dans<br/>
                le domaine du Web afin de pouvoir finaliser mon DUT.
            </p>
        </div>
    )

    return (
        <div className={'presentation'}>
            <Intro />
        </div>
    )
}

export default Presentation