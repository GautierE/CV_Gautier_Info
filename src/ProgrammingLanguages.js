import React, {Component} from 'react';
import react from "./Programming_languages_icons/React_icon.png";
import js from "./Programming_languages_icons/Js_icon.png";
import css from "./Programming_languages_icons/CSS_icon.png";
import html from "./Programming_languages_icons/HTML_icon.png";
import php from "./Programming_languages_icons/PHP_icon.png";
import laravel from "./Programming_languages_icons/Laravel_icon.png";
import cSharp from "./Programming_languages_icons/Csharp_icon.png";
import java from "./Programming_languages_icons/Java_icon.png";
import bash from "./Programming_languages_icons/Bash_icon.png";
import c from "./Programming_languages_icons/C_icon.png";
import winform from "./Programming_languages_icons/Net_icon.png";
import oracle from "./Programming_languages_icons/Oracle_icon.png";
import unity from "./Programming_languages_icons/Unity_icon.png";
import uml from "./Programming_languages_icons/UML_icon.png";

const iconsArray = [react, js, css, html, php, laravel, cSharp, java, bash, c, winform, oracle,  unity, uml]

class ProgrammingLanguages extends Component
{
    constructor(props) {
        super(props);
        this.handleMouseHover = this.handleMouseHover.bind(this);
        this.state = {
            isHovering: false,
        };
    }

    handleMouseHover() {
        this.setState(this.toggleHoverState);
    }

    toggleHoverState(state) {
        return {
            isHovering: !state.isHovering,
        };
    }

    render()
    {
        return (
            <div>
            <h3 className={'title_skills'}>Compétences</h3>
            <div className={'icons'}>
                {
                    iconsArray.map((srcIcon, index) => (
                        <>
                            <img src={srcIcon} alt={"icon"} key={index} className={'icon'}
                                 onMouseEnter={this.handleMouseHover}
                                 onMouseLeave={this.handleMouseHover}
                            />
                            {/* {this.state.isHovering && <div>Hovering right meow! 🐱</div>} */}
                        </>
                    ))
                }
            </div>
        </div>
        )
    }
}

export default ProgrammingLanguages;