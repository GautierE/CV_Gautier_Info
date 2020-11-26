import './App.css';
import './Experience.css';
import React, {Component} from "react";

import upArrow from './Images/up_arrow.png';
import downArrow from './Images/down_arrow.png';


import Presentation from './Presentation.js';
import Skills from './Skills';
import Hobbies from './Hobbies';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            experienceArray: [
                ['DUT Informatique', 'W31', '2019-2021'],
                ['Liste électorale municipale', 'Obernai', '2020'],
                ['BAC', 'S-SI', '2016-2019'],
                ['Stage d\'obeservation', 'WebCd', '2015-2016']
            ],
            experienceArraySelectedIndex: 0,
        }
    }

    render() {
        const {experienceArray, experienceArraySelectedIndex} = this.state;
        return (
            <div className={'app'}>
                <div>
                    <Presentation/>
                </div>

                {
                    <divc className={'experience_section'}>
                        <Arrows handleArrowClick={this.handleArrowClick}/>
                        <Experience experienceArray={experienceArray} selectedIndex={experienceArraySelectedIndex}/>
                    </divc>
                }

                {/*<div>
                    <Skills/>
                </div>

                <div>
                    <Hobbies/>
                </div>*/}

            </div>
        )
    }

    handleArrowClick = indexModifier => {
        this.setState({experienceArraySelectedIndex: this.limitIndexValue(indexModifier)})
    }

    limitIndexValue = indexModifier => {
        const {experienceArray, experienceArraySelectedIndex} = this.state
        let newIndex = experienceArraySelectedIndex + indexModifier

        if (newIndex >= experienceArray.length) {
            newIndex = 0
        } else if (newIndex < 0) {
            newIndex = experienceArray.length - 1
        }

        return newIndex
    }
}

// Carousel + overflow hidden dans le parent
const Experience = ({experienceArray, selectedIndex}) =>
    (
        <>
            <div className={'experience'}>
                <h3 className={'title'}>Expérience</h3>
                {
                    experienceArray.map((stage, index) => (
                        <div className={'stage'}>
                            <p key={index} className={'stage_name'}>{stage[0]}</p>
                            <p key={index} className={'stage_date'}>{stage[2]}</p>
                        </div>
                    ))
                }
            </div>
            <p className={'description'}>{experienceArray[selectedIndex][1]}</p>
        </>
    )

const Arrows = ({handleArrowClick}) => (
    <div className={'arrows'}>
        <img src={upArrow} alt={"Up arrow"} onClick={() => handleArrowClick(-1)} className={'arrow'}/>
        <img src={downArrow} alt={"Down arrow"} onClick={() => handleArrowClick(1)} className={'arrow'}/>
    </div>
)

export default App;
