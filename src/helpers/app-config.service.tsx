import { useQuery } from 'react-query';
import { reactQueryConfig } from './react-query.config';


export class AppconfigService {
    AppconfigApi = async () => {
        const res = await fetch("/config.json");
        return res.json();
    };
}
const cacheKeyConst = 'app-config-list';
export const useAppconfig = (
    cacheKey = "",
    queryConfig = reactQueryConfig
) => {
    const service = new AppconfigService();
    const data = async () => service.AppconfigApi();
    return useQuery(cacheKeyConst + cacheKey, data, queryConfig);
};
