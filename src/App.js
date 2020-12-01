import './App.css';
import './Experience.css';
import React, {Component} from "react";
import Carousel from 'react-elastic-carousel';

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
                    <div className={'experience_section'}>
                        <Experience experienceArray={experienceArray} selectedIndex={experienceArraySelectedIndex} handleArrowClick={this.handleArrowClick} />
                    </div>
                }

                <div>
                    <Skills/>
                </div>

                <div>
                    <Hobbies/>
                </div>

                <ul className="box-area">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>

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

const breakPoints = [
    {width: 1, itemsToShow: 1},
    {width: 500, itemsToShow: 2},
    {width: 1200, itemsToShow: 3},
]

const Experience = ({experienceArray, selectedIndex, handleArrowClick}) =>
    (
        <>
            <div className={'experience'}>
                <h3 className={'title_exp'}>Expériences</h3>
                <div className={'carousel'}>
                    <Carousel breakPoints={breakPoints} verticalMode={true}>
                        {
                            experienceArray.map((stage, index) => (
                                <div className={'carousel_item'} key={index} onClick={() => handleArrowClick(index)}>
                                    <p className={'stage_name'}>{stage[0]}</p>
                                    <p className={'stage_date'}>{stage[2]}</p>
                                </div>
                            ))
                        }
                    </Carousel>
                    <p className={'description'}>{experienceArray[selectedIndex][1]}</p>
                </div>

            </div>
        </>
    )

export default App;
