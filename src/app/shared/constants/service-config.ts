import { environment } from './../../../environments/environment';
export const API_Routes = {
    'Capabilities': {
        'getCapabilities': environment.ApiUrl + '/capabilities',
        'getCapability': (id: number) => environment.ApiUrl + `/capabilities/${id}`,
        'queyCapabilities': (query: string) => environment.ApiUrl + `/capabilities/q=${query}`,
        'ParamCapabilities': (key: string, value: string) => environment.ApiUrl + `/capabilities/${key}=${value}`,
        'postCapabilities': environment.ApiUrl + '/capabilities',
        'editCapability': (id: number) => environment.ApiUrl + `/capabilities/${id}`,
        'deleteCapability': (id: number) => environment.ApiUrl + `/capabilities/${id}`
    },
    'newcomers': {
        'getNewcomers': environment.ApiUrl + '/newcomers',
        'getNewcomer': (id: number) => environment.ApiUrl + `/newcomers/${id}`,
        'queyNewcomers': (query: string) => environment.ApiUrl + `/newcomers/q=${query}`,
        'ParamNewcomers': (key: string, value: string) => environment.ApiUrl + `/newcomers/${key}=${value}`,
        'editNewcomer': (id: number) => environment.ApiUrl + `/newcomers/${id}`,
        'deleteNewcomer': (id: number) => environment.ApiUrl + `/newcomers/${id}`,
        'postNewcomer': environment.ApiUrl + '/newcomers',

    }
};
