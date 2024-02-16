import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { FrontPage } from './components/page/front-page';
import { NavigationBar } from './components/navbar';

type AppProps = {};

const App: React.FC<AppProps> = (props) => {
  return (
      <>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<FrontPage />} />
        </Routes>
      </>
  );
}

export default App;
