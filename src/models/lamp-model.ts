import { DeviceType } from "./device-type.enum";
import { Device } from "./device.model";

export interface Lamp extends Device {
    type: DeviceType.LAMP;
    isOn: boolean;
}
