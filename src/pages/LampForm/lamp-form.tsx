import React from 'react';
import { BiRename, BiArrowBack } from 'react-icons/bi';
import { FaNetworkWired } from 'react-icons/fa';
import Button from '../../components/button/button';
import Input from '../../components/Input/input';
import { Container } from './lamp-form.style';
import { Form } from '@unform/web';

const LampForm: React.FC = () => {
    function handleSubmit(data: any): void {
        console.log(data);
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit} initialData={{ name: 'teste' }}>
                <h1>New Lamp Device</h1>
                <Input name="name" placeholder="Device Name" icon={BiRename} />
                <Input name="networkAddress" placeholder="IP Address" icon={FaNetworkWired} />
                <Button type="submit">Save</Button>

                <a href="/">
                    <BiArrowBack /> Back
                </a>
            </Form>
        </Container>
    );
}

export default LampForm;