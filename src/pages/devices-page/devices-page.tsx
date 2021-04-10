import React, { useEffect } from 'react';
import { useHeader } from '../../hooks/header';

const DevicesPage: React.FC = () => {
    const { setTitle } = useHeader();

    useEffect(() => {
        setTitle('Smart Home');
    }, [setTitle]);

    return (
        <> 
        </>
    );
};

export default DevicesPage;
