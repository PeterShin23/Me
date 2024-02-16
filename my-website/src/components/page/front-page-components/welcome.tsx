import * as React from 'react';

import { Colors } from '../../../utils/colors'
import github from '../../../static/github.svg'
import linkedin from '../../../static/linkedin.svg'

export const WelcomePage = () => {
    
    return (
        <div className="container flex flex-row max-w-full h-screen" style={{backgroundColor: Colors.TeaGreen, minWidth: '712px'}}>
            <div className="flex flex-col w-1/2 justify-center">
                <div className="flex flex-row justify-center text-7xl font-bold font-sans">
                    <div className="text-slate-200">
                        Peter 
                    </div>
                    <div className="text-slate-500">
                        Shin 
                    </div>
                </div>
                <div className="flex flex-row justify-center items-center ">
                    {/* add a copy to clipboard feature with a toast message*/}
                    {/* https://www.npmjs.com/package/react-copy-to-clipboard */}
                    <div className="pr-2 font-medium text-slate-700">
                        psshin.work@gmail.com
                    </div>
                    <a className="pl-2 font-medium text-slate-700 hover:underline" href="https://www.linkedin.com/in/petershin23/" target="_blank" rel="noreferrer">
                        {/* LinkedIn icon by Icons8 */}
                        <img className="w-16 h-16" src={linkedin} />
                    </a>
                    <a className="pl-2 font-medium text-slate-700 hover:underline" href="https://github.com/PeterShin23" target="_blank" rel="noreferrer">
                        {/* Github icon by Icons8 */}
                        <img className="w-16 h-16" src={github} />
                    </a>
                </div>
            </div>
            <div className="flex flex-col w-1/2 justify-center p-8">
                {/* Experiences */}
                {/* skills */}
                {/* hobbies */}
                <div className="flex flex-col font-sans">
                    <div className="pb-2">
                        <div className="text-slate-200 text-4xl font-bold">
                            Experiences
                        </div>
                        <div className="px-2">
                            <div>
                                <p className="text-slate-700 text-2xl font-semibold"> 
                                    Costar Group - Associate Software Engineer
                                </p>
                                <p className="text-slate-700 text-base font-medium">
                                    &nbsp;&nbsp;- Need a good description here
                                </p>
                            </div>
                            <div>
                                <p className="text-slate-700 text-2xl font-semibold"> 
                                    Amazon Web Services - SDE Intern
                                </p>
                                <p className="text-slate-700 text-base font-medium">
                                    &nbsp;&nbsp;- Need a good description here
                                </p>
                            </div>
                            <div>
                                <p className="text-slate-700 text-2xl font-semibold"> 
                                    UVA Computer Science TA
                                </p>
                                <p className="text-slate-700 text-base font-medium">
                                    &nbsp;&nbsp;- Need a good description here
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="pb-2">
                        <div className="text-slate-200 text-4xl font-bold">
                            Skills
                        </div>
                        <div className="px-2">
                            <p className="text-slate-700 text-base font-medium">
                                Python, TypeScript, C#/.NET, SQL, Java, ElasticSearch 
                            </p>
                        </div>
                        
                    </div>
                    <div>
                        <div className="text-slate-200 text-4xl font-bold">
                            Hobbies
                        </div>
                        <div className="px-2">
                            <p className="text-slate-700 text-base font-medium">
                                I like to hit the gym, but I'm always injured.
                                <br />
                                I like to play basketball, but my shot is broken.
                                <br />
                                I like photography, but I mostly take pictures of family.
                                <br />
                                I like cooking, but half the time, it doesn't taste that good.
                                <br />
                                But I like doing them, so I do them. :)
                            </p>
                        </div>
                        
                    </div>
                </div>
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
};