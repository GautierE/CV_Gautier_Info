import React from "react";
import bash from "./Programming_languages_icons/Bash_icon.png";
import c from "./Programming_languages_icons/C_icon.png";
import cSharp from "./Programming_languages_icons/Csharp_icon.png";
import css from "./Programming_languages_icons/CSS_icon.png";
import html from "./Programming_languages_icons/HTML_icon.png";
import java from "./Programming_languages_icons/Java_icon.png";
import js from "./Programming_languages_icons/Js_icon.png";
import laravel from "./Programming_languages_icons/Laravel_icon.png";
import winform from "./Programming_languages_icons/Microsoft_.NET_icon.png";
import oracle from "./Programming_languages_icons/Oracle_icon.png";
import php from "./Programming_languages_icons/PHP_icon.png";
import react from "./Programming_languages_icons/React_icon.png";
import unity from "./Programming_languages_icons/Unity_icon.png";
import lua from "./Programming_languages_icons/Lua_icon.png";
// uml

const Skills = () => {
    const iconsArray = [bash, c, cSharp, css, html, java, js, laravel, winform, oracle, php, react, unity, lua]

    const ProgrammingLanguages = ({iconsArray}) => (
        <div>
            <h3>Compétences:</h3>
            {
                iconsArray.map((srcIcon, index) => (
                    <img src={srcIcon} alt={"icon"} key={index}/>
                ))
            }
        </div>
    )

    const SpokenLanguages = () => (
        <div>
            <h3>Langues parlées:</h3>
            <p>Anglais courant (895 TOEIC)</p>
        </div>
    )

    return (
        <div>
            <ProgrammingLanguages iconsArray={iconsArray}/>
            <SpokenLanguages/>
        </div>
    )

}

export default Skills