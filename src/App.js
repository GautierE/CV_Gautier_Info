import './App.css';
import React, {Component} from "react";

class App extends Component
{
  constructor(props)
  {
    super(props);

    this.state = {
      experienceArray : [
          ['DUT Informatique', '...', '2019-2021'],
          ['BAC', 'S-SI', '2016-2019'],
          ['Stage d\'obeservation', '...', '2015-2016']
      ],
      experienceArraySelectedIndex : 0,
    }
  }
  render()
  {
    const { experienceArray, experienceArraySelectedIndex } = this.state;
    return (
        <article>
          <article>
            <Presentation />
            <ContactDetails />
          </article>
          <article>
            <Experience experienceArray={experienceArray} selectedIndex={experienceArraySelectedIndex}/>
          </article>

        </article>
    )
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

const Experience = ({experienceArray, selectedIndex}) =>
    (
        <section>
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

export default App;
