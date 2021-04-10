import React, { useEffect } from 'react';
import { useHeader } from '../../hooks/header';
import ConfigNetworkForm from './config-network-form/config-network-form';

const ConfigNetworkPage: React.FC = () => {
    const { setTitle } = useHeader();

    useEffect(() => {
        setTitle('Config Network');
    }, [setTitle]);

    return (
        <>
            <ConfigNetworkForm />
        </>
    );
};

export default ConfigNetworkPage;
