import { render } from '@testing-library/react';
import * as React from 'react';

import {ExperiencesPage, ProjectsPage, WelcomePage} from './front-page-components/index';

/** Props for side nav bar on the welcome page */
type SideNavBarProps = {
    /** ref to front page section */
    pageRefs: React.MutableRefObject<any>;
};

const SideNavBar: React.FC<SideNavBarProps> = (props: SideNavBarProps) => {
    const { pageRefs } = props;

    // const [visibleKey, setVisibleKey] = React.useState<number>(0);
    // const navBarRef = React.useRef([]);

    // const onClick = (key: number) => {
    //     setVisibleKey(key);
    // }

    // const observerCallback = async (e: any, key: number) => {
    //     if (e.length && e[0].isIntersecting) {
    //         setVisibleKey(key);
    //     }
    // }

    // React.useEffect(() => {
    //     if (pageRefs.current?.length && navBarRef.current) {

    //     }
    // })

    return (
        <div>
            Side Nav Bar
        </div>
    )
};

export const FrontPage = () => {

    return (
        <div className="flex justify-center items-center text-blue-300">
            Hello World
        </div>
        // <div className="container">
        //     <WelcomePage />
        //     <ExperiencesPage />
        //     <ProjectsPage />
        // </div>
    )
}

// const welcomeStyle = {
//     backgroundColor: 'rgb(146 64 14)',
//     width: 'full',
//     height: 'full',
// }