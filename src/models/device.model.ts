import { DeviceType } from "./device-type.enum";

export interface Device {
    id?: string;
    name: string;
    ipAddress: string;
    type: DeviceType;
}
