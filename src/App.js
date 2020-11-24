import './App.css';
import React, {Component} from "react";

class App extends Component
{
  constructor(props)
  {
    super(props);

    this.state = {
      experienceArray : [
          ['DUT Informatique', 'W31', '2019-2021'],
          ['Liste électorale municipale', 'Obernai', '2020'],
          ['BAC', 'S-SI', '2016-2019'],
          ['Stage d\'obeservation', 'WebCd', '2015-2016']
      ],
      experienceArraySelectedIndex : 0,
      iconsArray : []
    }
  }
  render()
  {
    const { experienceArray, experienceArraySelectedIndex, iconsArray } = this.state;
    return (
        <article>
          <article>
            <Presentation />
            <ContactDetails />
          </article>

          <article>
            <Experience experienceArray={experienceArray} selectedIndex={experienceArraySelectedIndex}/>
            <Arrows handleArrowClick={this.handleArrowClick}/>
          </article>

          <article>
            <ProgrammingLanguages iconsArray={iconsArray}    />
            <SpokenLanguages />
          </article>

          <article>
            <Hobbies  />
          </article>

        </article>
    )
  }

    handleArrowClick = indexModifier => {
      this.setState({experienceArraySelectedIndex : this.limitIndexValue(indexModifier)})
    }

    limitIndexValue = indexModifier => {
        const {experienceArray, experienceArraySelectedIndex} = this.state
        let newIndex = experienceArraySelectedIndex + indexModifier

        if(newIndex >= experienceArray.length)
        {
            newIndex = 0
        }
        else if(newIndex < 0)
        {
            newIndex = experienceArray.length-1
        }

        return newIndex
    }
}



const ContactDetails = () => (
    <section>
      <h3>Coordonnées</h3>
      <ul>
        <li>gautier.edel66@gmail.com</li>
        <li>+33 6 98 67 45 73</li>
      </ul>
    </section>
)

const Presentation = () => (
    <section>
      <h2>Gautier EDEL</h2>
      <img src={''} alt={'Presentation'}/>
      <p>Texte de présentation.</p>
    </section>
)
// Carousel + overflow hidden dans le parent
const Experience = ({experienceArray, selectedIndex}) =>
    (
        <section>
          <h3>Expérience</h3>
          {
            experienceArray.map((stage,index) => (
                <>
                  <p key={index}>{stage[0]}</p>
                  <p key={index}>{stage[2]}</p>
                </>
            ))
          }
          <p>{experienceArray[selectedIndex][1]}</p>
        </section>
    )

const Arrows = ({handleArrowClick}) => (
    <section>
        <img src={""} alt={"Up arrow"} onClick={() => handleArrowClick(-1)}/>
        <img src={""} alt={"Down arrow"} onClick={() => handleArrowClick(1)}/>
    </section>
)

const ProgrammingLanguages = ({iconsArray}) => (
    <section>
        <h3>Compétences:</h3>
        {
            iconsArray.map((icon, index) => (
                <img src="" alt={"icon"} key={index}/>
            ))
        }
    </section>
)

const SpokenLanguages = () => (
    <section>
        <h3>Langues parlées:</h3>
        <p>Anglais courant (895 TOEIC)</p>
    </section>
)

const Hobbies = () => (
    <section>
        <h3>Loisirs:</h3>
        <p>Skate depuis 4 ans</p>
        <p>Développement web & jeux-vidéos</p>
    </section>
)

export default App;
