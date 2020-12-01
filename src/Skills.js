import React from "react";
import './Skills.css';

import bash from "./Programming_languages_icons/Bash_icon.png";
import c from "./Programming_languages_icons/C_icon.png";
import cSharp from "./Programming_languages_icons/Csharp_icon.png";
import css from "./Programming_languages_icons/CSS_icon.png";
import html from "./Programming_languages_icons/HTML_icon.png";
import java from "./Programming_languages_icons/Java_icon.png";
import js from "./Programming_languages_icons/Js_icon.png";
import laravel from "./Programming_languages_icons/Laravel_icon.png";
import winform from "./Programming_languages_icons/Net_icon.png";
import oracle from "./Programming_languages_icons/Oracle_icon.png";
import php from "./Programming_languages_icons/PHP_icon.svg";
import react from "./Programming_languages_icons/React_icon.png";
import unity from "./Programming_languages_icons/Unity_icon.png";
import uml from "./Programming_languages_icons/UML_icon.png";
// uml

const Skills = () => {
    const iconsArray = [bash, c, cSharp, css, html, java, js, laravel, winform, oracle, php, react, unity, uml]

    const ProgrammingLanguages = ({iconsArray}) => (
        <div>
            <h3 className={'title_skills'}>Compétences</h3>
            <div className={'icons'}>
                {
                    iconsArray.map((srcIcon, index) => (
                        <img src={srcIcon} alt={"icon"} key={index} className={'icon'}/>
                    ))
                }
            </div>
        </div>
    )

    const SpokenLanguages = () => (
        <div className={'languages'}>
            <h3 className={'language_title'}>Langues parlées:</h3>
            <p>Anglais courant (895 TOEIC)</p>
        </div>
    )

    return (
        <div className={'skills'}>
            <ProgrammingLanguages iconsArray={iconsArray}/>
            <SpokenLanguages/>
        </div>
    )

}

export default Skills