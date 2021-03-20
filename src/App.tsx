import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ApplicationLayout from './components/layout/application-layout';
import GlobalProvider from './providers/global-provider';

const App: React.FC = () => {
  return (
    <>
      <GlobalProvider>
        <Router>
          <ApplicationLayout />
        </Router>
      </GlobalProvider>
    </>
  );
}

export default App;