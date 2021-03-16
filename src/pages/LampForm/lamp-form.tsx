import React from 'react';
import { BiRename, BiArrowBack } from 'react-icons/bi';
import { FaNetworkWired } from 'react-icons/fa';
import Button from '../../components/button/button';
import Input from '../../components/Input/input';
import { Form } from './lamp-form.style';

const LampForm: React.FC = () => {
    return (
        <Form>
            <h1>New Lamp Device</h1>
            <Input name="device-name" placeholder="Device Name" icon={BiRename} />
            <Input name="network-address" placeholder="Network Address" icon={FaNetworkWired} />
            <Button>Save</Button>

            <a href="/">
                <BiArrowBack/> Back
            </a>
        </Form>
    );
}

export default LampForm;