import React from "react";
import './Hobbies.css';
import skatePhoto from './Images/skatePhoto.jpg';
import Fncs from './Images/FNCS_S3C2.png';

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
                        depuis 4 ans maintenant.
                        <br/>
                        <br/>
                        Ce sport nécessite beaucoup
                        <br/>
                        de persévérance, de précision
                        <br/>
                        et de régularité pour progresser.
                    </p>
                </div>
            </div>

            <div className={'video_games'}>
                <h4 className={'hobby_title'}>Jeux-vidéos compétitifs</h4>
                <div className={'content'}>
                    <img className={'fn_photo'} src={Fncs} alt={'FNCS logo'}/>
                    <p className={'desc_games'}>
                        Les jeux compétitifs m'intéressent depuis toujours,
                        <br/>
                        surtout le fait de devoir s'entraîner
                        <br/>
                        pour devenir meilleur que les autres
                        <br/>
                        joueurs ainsi que la collaboration
                        <br/>
                        de l'équipe permettant la victoire.</p>
                </div>
            </div>
        </div>
    </>
)

export default Hobbies