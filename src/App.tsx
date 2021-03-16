import React from 'react';
import { ApplicationLayout } from './components/layout/application-layout.styled';
import LampForm from './pages/LampForm/lamp-form';
import GobalStyle from './styles/global.styled';

const App: React.FC = () => {
  return (
    <>
      <ApplicationLayout>
        <LampForm />
        <GobalStyle />
      </ApplicationLayout>
    </>
  );
}

export default App;