import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import SideNavBar from './components/side-navbar/SideNavBar';
import TopNavBar from './components/TopNavBar';
import { SideNavBarContextProvider } from './stores/side-nav-bar-context.js';
import MainContent from './components/main-content/MainContent';


function App() {
  return (
    <Router>
      <SideNavBarContextProvider>
        <TopNavBar />
        <SideNavBar />
      </SideNavBarContextProvider>
      <MainContent />
    </Router>
  );
}

export default App;
