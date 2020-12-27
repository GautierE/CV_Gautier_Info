import './App.css';
import './Experience.css';
import './Contact.css';
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
                ['Liste électorale municipale', ['Présence sur la liste électorale "Imaginons Obernai"'], '2020'],
                ['Stage découverte', ['WebCd, entreprise de développement web'], '2015']
            ],
            courseArray: [
                ['DUT Informatique', ['-Programmation Web côté client & serveur', '-Projet tutoré sur un jeu sérieux'], '2019 - 2021'],
                ['BAC S-SI Mention Bien', ['- Lycée Freppel à Obernai', '- Projet de terminale: prothèse de jambe automatisé programmé en Arduino'], '2016 - 2019'],
            ],
            courseArraySelectedIndex: 0,
            experienceArraySelectedIndex: 0,
        }
    }

    render() {
        const {experienceArray, experienceArraySelectedIndex, courseArray, courseArraySelectedIndex} = this.state;
        return (
            <div className={'app'}>
                {/* Empty div used for background */}
                <header className={'header'}>
                    <div className="background"></div>
                </header>
                <div>
                    <Presentation/>
                </div>

                {
                    <div className={'experience_section'}>
                        <Experience experienceArray={experienceArray} courseArray={courseArray}
                                    experienceSelectedIndex={experienceArraySelectedIndex}
                                    courseSelectedIndex={courseArraySelectedIndex}
                                    handleExperienceArrowClick={this.handleExperienceArrowClick}
                                    handleCourseArrowClick={this.handleCourseArrowClick}
                        />
                    </div>
                }

                <div>
                    <Skills/>
                </div>

                <div>
                    <Hobbies/>
                </div>

                <div>
                    <ContactDetails></ContactDetails>
                </div>

            </div>
        )
    }

    handleExperienceArrowClick = indexModifier => {
        const {experienceArray, experienceArraySelectedIndex} = this.state
        this.setState({experienceArraySelectedIndex: this.limitIndexValue(indexModifier, experienceArray, experienceArraySelectedIndex)})
    }

    handleCourseArrowClick = indexModifier => {
        const {courseArray, courseArraySelectedIndex} = this.state
        this.setState({courseArraySelectedIndex: this.limitIndexValue(indexModifier, courseArray, courseArraySelectedIndex)})
    }

    /* Returns an index in the bounds of the specified array  */
    limitIndexValue = (indexModifier, array, selectedIndex) => {
        let newIndex = selectedIndex + indexModifier

        if (newIndex >= array.length) {
            newIndex = 0
        } else if (newIndex < 0) {
            newIndex = array.length
        }

        return newIndex
    }
}

const Experience = ({experienceArray, courseArray, experienceSelectedIndex, courseSelectedIndex, handleExperienceArrowClick, handleCourseArrowClick}) =>
    (
        <>
            <h3 className={'title_parcours'}>Parcours</h3>
            <div className={'parcours'}>
                <div className={'experience'}>
                    <p className={'parcours_title'}>Expérience</p>
                    <div className={'carousel'}>
                        <Carousel
                            itemsToShow={1}
                            verticalMode={true}
                            onPrevStart={() =>
                                handleExperienceArrowClick(-1)
                            }
                            onNextStart={() =>
                                handleExperienceArrowClick(1)
                            }
                        >
                            {
                                experienceArray.map((stage, index) => (
                                    <div className={'carousel_item'} key={index}>
                                        <p className={'stage_name'}>{stage[0]}</p>
                                        <p className={'stage_date'}>{stage[2]}</p>
                                        <p className={'description'}>
                                            {
                                                experienceArray[experienceSelectedIndex][1].map((line, sentenceIndex) => (
                                                    <>
                                                        <br/>
                                                        <span key={sentenceIndex}>{line}</span>
                                                    </>
                                                ))
                                            }
                                        </p>
                                    </div>
                                ))
                            }
                        </Carousel>
                    </div>
                </div>
                <div className={'course'}>
                    <p className={'parcours_title'}>Formation</p>
                    <div className={'carousel'}>
                        <Carousel
                            itemsToShow={1}
                            verticalMode={true}
                            onPrevStart={() =>
                                handleCourseArrowClick(-1)
                            }
                            onNextStart={() =>
                                handleCourseArrowClick(1)
                            }
                        >
                            {
                                courseArray.map((stage, index) => (
                                    <div className={'carousel_item'} key={index}>
                                        <p className={'stage_name'}>{stage[0]}</p>
                                        <p className={'stage_date'}>{stage[2]}</p>
                                        <p className={'description'}>
                                            {
                                                courseArray[courseSelectedIndex][1].map((line, sentenceIndex) => (
                                                    <>
                                                        <br/>
                                                        <span key={sentenceIndex}>{line}</span>
                                                    </>
                                                ))
                                            }
                                        </p>
                                    </div>
                                ))
                            }
                        </Carousel>
                    </div>
                </div>

            </div>
        </>
    )

const ContactDetails = () => (
    <div className={'contact'}>
        <h3 className={'title_coordonnees'}>Contact</h3>
        <p className={'email'}>gautier.edel.info@gmail.com</p>
        <p className={'phone'}>+33 6 98 67 45 73</p>
    </div>
)


export default App;
