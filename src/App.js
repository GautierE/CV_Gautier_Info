import './App.css';
import './Experience.css';
import React, {Component} from "react";
import Carousel  from 'react-elastic-carousel';

import Presentation from './Presentation.js';
import Skills from './Skills';
import Hobbies from './Hobbies';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            experienceArray: [
                ['2e année DUT Informatique', ['IUT Robert Schuman d\'Illkirch'], 'Septembre 2019 - Juin 2021'],
                ['Liste électorale municipale', ['Présence sur la liste électorale "Imaginons Obernai"'], '? ? - Mars 2020'],
                ['BAC S-SI', ['- Lycée Freppel à Obernai', '- BAC mention Bien', '- Projet de terminale: prothèse de jambe automatisé programmé en Arduino'], 'Septembre 2016 - Juin 2019'],
                ['Stage d\'observation troisième', ['Stage chez WebCD, entreprise de développement web basé à Obernai'], 'Novembre 2015']
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
                        <Experience experienceArray={experienceArray} selectedIndex={experienceArraySelectedIndex}
                                    handleArrowClick={this.handleArrowClick}/>
                    </div>
                }

                <div>
                    <Skills/>
                </div>

                <div>
                    <Hobbies/>
                </div>

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
            newIndex = experienceArray.length
        }

        return newIndex
    }
}

const Experience = ({experienceArray, selectedIndex, handleArrowClick}) =>
    (
        <>
            <div className={'experience'}>
                <h3 className={'title_exp'}>Expériences</h3>
                <div className={'carousel'}>
                    <Carousel
                        itemsToShow={1}
                        verticalMode={true}
                        onPrevStart={() =>
                            handleArrowClick(-1)
                        }
                        onNextStart={() =>
                            handleArrowClick(1)
                        }
                    >
                        {
                            experienceArray.map((stage, index) => (
                                <div className={'carousel_item'} key={index}>
                                    <p className={'stage_name'}>{stage[0]}</p>
                                    <p className={'stage_date'}>{stage[2]}</p>
                                </div>
                            ))
                        }
                    </Carousel>
                    <p className={'description'}>
                        {
                            experienceArray[selectedIndex][1].map((line, index) => (
                                <>
                                    <br/>
                                    <span key={index}>{line}</span>
                                </>
                            ))
                        }
                    </p>
                </div>

            </div>
        </>
    )

export default App;
