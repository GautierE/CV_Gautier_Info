import React from "react";
import './Skills.css';
import {PieChart} from 'react-minimal-pie-chart';
import ProgrammingLanguages from "./ProgrammingLanguages";

const Skills = () => {
    const SpokenLanguages = () => (
        <div className={'languages'}>
            <h3 className={'language_title'}>Langues étrangères</h3>
            <p>- Allemand basique (niveau lycée)</p>
            <p>- Anglais courant, TOEIC:</p>
            <PieChart
                data={[{ value: 895, color: 'rgba(55, 66, 250,0.8)' }]}
                totalValue={990}
                lineWidth={25}
                label={({ dataEntry }) => dataEntry.value}
                labelStyle={{
                    fontSize: '32px',
                    fill: 'rgba(248, 194, 145,1.0)',

                }}
                labelPosition={0}
                viewBoxSize={[150,150]}
                center={[50, 50]}
            />
        </div>
    )

    return (
        <div className={'skills'}>
            <ProgrammingLanguages/>
            <SpokenLanguages/>
        </div>
    )

}

export default Skills