import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import React, { useCallback, useRef } from 'react';
import { BiArrowBack, BiRename } from 'react-icons/bi';
import { FaNetworkWired } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import Button from '../../components/button/button';
import Input from '../../components/Input/input';
import { useDevices } from '../../hooks/devices';
import { useToast } from '../../hooks/toast';
import { DeviceType } from '../../models/device-type.enum';
import { Lamp } from '../../models/lamp-model';
import getValidationsErrors from '../../utils/getValidationsErrors';
import { Container } from './lamp-form.style';

const LampForm: React.FC = () => {
    const formRef = useRef<FormHandles>(null);
    const { saveDevice } = useDevices();
    const { showError, showSuccess } = useToast();

    const handleSubmit = useCallback(async (data: Lamp): Promise<void> => {
        try {
            formRef.current?.setErrors({});

            const validationSchema = Yup.object().shape({
                name: Yup.string().required().label('Name'),
                networkAddress: Yup.string().required().url().label('Network Address')
            });

            await validationSchema.validate(data, { abortEarly: false });

            saveDevice(data);
            showSuccess({ text: 'The operation has been successfully!' });
        } catch (error) {
            if (error instanceof Yup.ValidationError) {
                formRef.current?.setErrors(getValidationsErrors(error));
            } else {
                showError({ text: (error as Error).message });
            }
        }
    }, [saveDevice, showError, showSuccess]);

    return (
        <Container>
            <Form ref={formRef} onSubmit={handleSubmit} initialData={{ type: DeviceType.LAMP } as Lamp}>
                <h1>New Lamp Device</h1>
                <Input name="name" placeholder="Device Name" icon={BiRename} />
                <Input name="networkAddress" placeholder="IP Address" icon={FaNetworkWired} />
                <Button type="submit">Save</Button>

                <Link to="/">
                    <BiArrowBack /> Back
                </Link>
            </Form>
        </Container>
    );
}

export default LampForm;