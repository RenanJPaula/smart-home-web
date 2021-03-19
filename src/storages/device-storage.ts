import { Device } from "../models/device.model";

const LOCAL_DEVICES_KEY = 'smart-home/devices';

class DeviceStorage {

    async getDevices(): Promise<Device[]> {
        const storagedDevices = localStorage.getItem(LOCAL_DEVICES_KEY) as string;
        const devices = JSON.parse(storagedDevices) || [];
        return devices;
    }

    async save(device: Device): Promise<string> {
        const storagedDevices = await this.getDevices();

        if (!device.id) {
            device.id = new Date().getTime().toString();
            storagedDevices.push(device);
        } else {
            for (let i = 0; i < storagedDevices.length; i++) {
                const storagedDevice = storagedDevices[i];
                if (storagedDevice.id === device.id) {
                    storagedDevices[i] = device;
                    break;
                }
            }
        }

        localStorage.setItem(LOCAL_DEVICES_KEY, JSON.stringify(storagedDevices));

        return device.id;
    }

}

export default new DeviceStorage();