import './App.css';
import './Experience.css';
import './Contact.css';
import React, {Component} from "react";
import Carousel from 'react-elastic-carousel';
import gitHub from './Images/github.png';

import Presentation from './Presentation.js';
import Skills from './Skills';
import Hobbies from './Hobbies';

const hyperLinkWebCD = '<a target="_blank" rel="noreferrer"  href="https://www.webcd.fr/">WebCD</a>'
const hyperLinkObernai = '<a target="_blank" rel="noreferrer"  href="https://www.imaginons-obernai.com/">Imaginons Obernai</a>'
const hyperLinkProject = '<a target="_blank" rel="noreferrer"  href="https://docs.google.com/document/d/1JSG-GBygExHQv-xn9G6eZH-PkSvTyystNQkAVYPOJs4/edit?usp=sharing">Projet de terminale</a>'
const hyperLinkDutProject = '<a target="_blank" rel="noreferrer"  href="https://gitlab.unistra.fr/les-champions-projet-t3/t432_liy20_t3_b/-/tree/master">Projet tutoré</a>'

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            experienceArray: [
                ['Liste électorale municipale', [`Présence sur la liste électorale ${hyperLinkObernai}`], '2020'],
                ['Stage découverte', [`- ${hyperLinkWebCD}, entreprise de développement web`, '- Organisation d\'un projet en entreprise'], '2015']
            ],
            courseArray: [
                ['DUT Informatique', ['- Programmation Web côté client & serveur', '- Gestion de projet', `- ${hyperLinkDutProject} sur un jeu sérieux`], '2019 - 2021'],
                ['BAC S-SI Mention Bien', ['- Lycée Freppel à Obernai', `- ${hyperLinkProject} : prothèse de jambe automatisé programmé en Arduino`], '2016 - 2019'],
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
                    <ContactDetails />
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
                                                experienceArray[experienceSelectedIndex][1].map((line) => (
                                                    <>
                                                        <br/>
                                                        <span dangerouslySetInnerHTML={{ __html: line }} key={line.id}></span>
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
                                                courseArray[courseSelectedIndex][1].map((line) => (
                                                    <>
                                                        <br/>
                                                        <span dangerouslySetInnerHTML={{ __html: line }}  key={line.id}></span>
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
        <div className={'coordonnees'}>
            <p className={'email'}>gautier.edel.info@gmail.com</p>
            <p className={'phone'}>+33 6 98 67 45 73</p>
        </div>
            <a  target="_blank" rel="noreferrer" href='https://github.com/GautierE'>
                <img className='github_icon 'src={gitHub} alt="gitHub"/>
            </a>
    </div>
)


export default App;
