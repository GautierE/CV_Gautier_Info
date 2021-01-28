import React from "react";
import './Hobbies.css';
import skatePhoto from './Images/skatePhoto.jpg';
import Fncs from './Images/FNCS_S3C2.jpg';

const Hobbies = () => (
    <>
        <h3 className={'title_loisirs'}>Loisirs</h3>
        <div className={'hobbies'}>
            <div className={'skate'}>
                <h4 className={'hobby_title'}>Le skate</h4>
                <div className={'content'}>
                    <img className={'skate_photo'} src={skatePhoto} alt={'Skate'}/>
                    <p className={'desc'}>J'ai une passion pour le skate
                        <br/>
                        depuis 4 ans.
                        <br/>
                        <br/>
                        Ce sport m'a permis de développer ma persévérance
                        <br/>
                        et ma précision.
                    </p>
                </div>
            </div>

            <div className={'video_games'}>
                <h4 className={'hobby_title'}>Jeux-vidéos compétitifs & Modération</h4>
                <div className={'content'}>
                    <img className={'fn_photo'} src={Fncs} alt={'FNCS logo'}/>
                    <p className={'desc_games'}>
                        <span>
                            <b className={'fn_text'}>Fortnite</b>
                            <br/>
                            Collaboration avec des inconnus
                            <br/>
                            pour atteindre un but commun
                        </span>
                        <br/>
                        <br/>
                        <span >
                            Modération <b className={'gmod_text'}>Garry's Mod</b>
                            <br/>
                            3h/jour pendant un an
                            <br/>
                            Résolution des conflits entre joueurs
                            <br/>
                            Respect d'une organisation hiérarchique
                        </span>
                    </p>
                </div>
            </div>
        </div>
    </>
)

export default Hobbies