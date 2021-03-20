import React from 'react';
import ApplicationLayout from './components/layout/application-layout';
import LampForm from './pages/LampForm/lamp-form';
import GlobalProvider from './providers/global-provider';

const App: React.FC = () => {
  return (
    <>
      <GlobalProvider>
        <ApplicationLayout>
          <LampForm />
        </ApplicationLayout>
      </GlobalProvider>
    </>
  );
}

export default App;