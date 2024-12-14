
import { useEffect, useState } from 'react';
import { reactQueryConfig } from '../helpers/react-query.config';
import { useQuery } from 'react-query';
import { AppConfigUtil } from '../helpers/app-config-util';

export interface ILoadConfigState {
  status: string;
  message: string;
}


export const useLoadAppConfig = (configUrl: string): ILoadConfigState => {
  const [loadConfigState, setLoadConfigState] = useState({
    status: 'init',
    message: '',
  } as ILoadConfigState);

  function loadAppConfig() {
 
    return fetch(configUrl)
      .then((res: Response) => {
        if (res.ok) {
          return res.json();
        } else if (res.statusText) {
          return { message: res.statusText, code: res.status };
        }
        return res.status;
      })
      .then((json: any) => {
      
        AppConfigUtil.setAppconfig(json);
        setLoadConfigState({ status: 'success', message: '' });
      })
      .catch((err: Error) => {
        setLoadConfigState({
          status: 'error',
          message: 'Config Component: ' + err.message,
        });
      });
  }
  useEffect(() => {
    loadAppConfig();
  }, []);
  return loadConfigState;
};
