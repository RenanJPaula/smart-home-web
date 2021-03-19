import React from 'react';
import { ApplicationLayout } from './components/layout/application-layout.styled';
import { DevicesProvider } from './context/DevicesContext';
import LampForm from './pages/LampForm/lamp-form';
import GobalStyle from './styles/global.styled';

const App: React.FC = () => {
  return (
    <>
      <ApplicationLayout>
        <DevicesProvider>
          <LampForm />
        </DevicesProvider>
      </ApplicationLayout>
      <GobalStyle />
    </>
  );
}

export default App;