
import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { Device } from '../models/device.model';
import deviceStorage from '../storages/device-storage';


interface DeviceContextData {
    devices: Device[];
    getDeviceById(id: string): Device | null;
    saveDevice(device: Device): Promise<string>;
}

const DevicesContext = createContext<DeviceContextData>({} as DeviceContextData);

export const DevicesProvider: React.FC = ({ children }) => {
    const [devices, setDevices] = useState<Device[]>([]);

    const listDevices = useCallback(async () => {
        const storagedDevices = await deviceStorage.getDevices();
        setDevices(storagedDevices);
    }, []);

    const getDeviceById = useCallback((id: string): Device | null => {
        for (let i = 0; i < devices.length; i++) {
            const device = devices[i];
            if (device?.id === id) {
                return device;
            }
        }

        return null;
    }, [devices]);

    const saveDevice = useCallback(async (device: Device): Promise<string> => {
        const deviceId = await deviceStorage.save(device);
        const newStoragedDevices = await deviceStorage.getDevices();
        setDevices(newStoragedDevices);
        return deviceId;
    }, []);


    useEffect(() => {
        listDevices();
    }, [listDevices]);

    return (
        <DevicesContext.Provider value={{ devices, getDeviceById, saveDevice }}>
            {children}
        </DevicesContext.Provider>
    )

}

export function useDevices(): DeviceContextData {
    const context = useContext(DevicesContext);
    if (!context) {
        throw new Error('useDevices must be used within an DevicesProvider');
    }
    return context;
}
