import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import { FrontPage } from './components/page/front-page';
import { NavigationBar } from './components/navbar';
import { WelcomePage } from './components/page/front-page-components';

type AppProps = {};

const App: React.FC<AppProps> = (props) => {
  return (
      <>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<WelcomePage />} />
        </Routes>
      </>
  );
}

export default App;
