import { IAppconfig } from "../model/app-config.model";

// @dynamic
export class AppConfigUtil {
    public static appconfig: IAppconfig;

    public static setAppconfig(config: any) {
        this.appconfig = config;
    }
}