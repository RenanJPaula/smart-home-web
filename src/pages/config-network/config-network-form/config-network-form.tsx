
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import React, { useCallback, useRef } from 'react';
import { FaWifi } from 'react-icons/fa';
import { RiLockPasswordLine } from 'react-icons/ri';
import Button from '../../../components/button/button';
import Input from '../../../components/Input/input';
import { ConfigNetwork } from '../../../models/config-network.model';
import { Container } from './config-network-form.styles';

const ConfigNetworkForm: React.FC = () => {
    const formRef = useRef<FormHandles>(null);

    const handleSubmit = useCallback(async (data: ConfigNetwork): Promise<void> => {
        console.log('show');
        return;
    }, []);

    return (
        <Container>
            <Form ref={formRef} onSubmit={handleSubmit} initialData={{} as ConfigNetwork}>
                <Input name="networkName" placeholder="Network Name" autoComplete="off" icon={FaWifi} />
                <Input name="password" type="password" placeholder="Password" autoComplete="off" icon={RiLockPasswordLine} />
                <Button type="submit" loading={true}>Save</Button>
            </Form>
        </Container>
    )
}

export default ConfigNetworkForm;