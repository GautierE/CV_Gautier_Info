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
import excel from "./Programming_languages_icons/excel.png";
import git from "./Programming_languages_icons/git.png";
import jetbrains from "./Programming_languages_icons/jetbrains.png";
import starUml from "./Programming_languages_icons/staruml.png";
import visualStudio from "./Programming_languages_icons/visualstudio.png";
import node from "./Programming_languages_icons/node.png";

const skillsArray = [
    [react],
    [node],
    [js],
    [css],
    [html],
    [php],
    [laravel],
    [cSharp],
    [java],
    [bash],
    [c],
    [winform],
    [oracle],
    [git],
    [uml],
    [unity],
    [jetbrains],
    [starUml],
    [visualStudio],
    [excel],
]

class ProgrammingLanguages extends Component {
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


    render() {
        return (
            <div>
                <h3 className={'title_skills'}>Compétences</h3>
                <div className={'icons'}>
                    <>
                        {
                            skillsArray.map((skill, index) => (
                                <img key={index} src={skill} alt={"icon"} className={'icon'}
                                     onMouseEnter={this.handleMouseHover}
                                     onMouseLeave={this.handleMouseHover}
                                />
                            ))
                        }
                    </>
                </div>
            </div>
        )
    }
}

export default ProgrammingLanguages;