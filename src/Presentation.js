import React from "react";
import './Presentation.css';
import photo from './Images/photo.jpg';

const Presentation = () => {
    const Intro = () => (
        <div className={'intro'}>
            <div className={'title'}>
                <h2 className={'name'}>Stage Web</h2>
                <img src={photo} alt={'Presentation'} className={'photo'}/>
            </div>
            <p className={'presentation_text'}>
                Gautier EDEL, 26/01/2002, Permis B2<br/>
                <br/>
                Étudiant en deuxième année de DUT Informatique,<br/>
                je recherche un stage de dix semaines dans le domaine<br/>
                du Web afin de pouvoir finaliser mon DUT.
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