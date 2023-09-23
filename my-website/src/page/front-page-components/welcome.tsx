import * as React from 'react';

import { Colors } from '../../utils/colors'

export const WelcomePage = () => {
    
    return (
        <div style={welcomeStyles.pageStyle}>
            <div style={welcomeStyles.cardStyle}>
                <p style={welcomeStyles.cardTextStyle}>
                    hello, my name is Peter Shin, and one of my goals of 2023 was to create my own website
                    to do whatever I wanted.
                </p>
                <p style={welcomeStyles.cardTextStyle}>
                    So here it is!
                </p>
                <p style={welcomeStyles.cardTextStyle}>
                    I was born in South Korea, and my family moved to the United States when I was young.
                    I graduated from the University of Virginia with a B.Sc. in Computer Science and a minor
                    in Data Science.
                </p>
                <p style={welcomeStyles.cardTextStyle}>
                    Now, I work a full-time job as a software engineer. I try not to let laziness get between
                    myself and things that I think are/would be fun. But it happens, lol. This website is one 
                    attempt to actually put money where my mouth is.
                </p>
                <p style={welcomeStyles.cardTextStyle}>
                    Most of my hobbies are related to things that I don't have a drive to make money with.
                    Photography, hiking, music, reading, writing, going to the gym, cooking, traveling, etc.
                    So I document it instead.
                </p>
            </div>
        </div>
    )
}

const welcomeStyles = {
    pageStyle: {
        backgroundColor: Colors.AshGray,
        padding: '1rem',
        width: '100%',
        height: '100vh', // 100 view port height
    },
    cardStyle: {
        padding: '0.5rem',
        width: '40vw',
        borderRadius: '10px',
        boxShadow: `0 2px 10px ${Colors.AshGrayShadow}, 0 2px 2px -4px ${Colors.AshGrayShadow}`  
    },
    cardTextStyle: {
        textAlign: 'left' as 'left', // textAlign type has to be cast to more specific type for some reason
        margin: '0.5rem'
    }
}
// const pageStyle = {
//     backgroundColor: Colors.AshGray,
//     padding: '1rem',
//     width: '100%',
//     height: '100vh', // 100 view port height
// }

// const welcomeCardStyle = {
//     width: '40vh',
//     boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
//     backgroundColor: Colors.Parchment,
// }