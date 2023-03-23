import axios from "axios";
import { useMemo, useState } from "react";

type ApiParamsType = {
    service: any,
    params?: any,
    id?: string,
}
export const Api = ({ service, id, params }: ApiParamsType) => {
  
    const [data, setData] = useState<any>()
    const [isLoading, setLoading] = useState<boolean>()
    const [error, setError] = useState<any>()
    const { endpoint, method }: any = service;
    const headers = getHeaders()

    const resolver: any = {
        post: async ({ form }: any) => {
            setLoading(true)
            try {
                const { data }= await axios.post(endpoint, form, { headers });
                //toast.success('Registo feito com sucesso');
                setData(data)
                setError(null)
            } catch ({response:{data}}: any) {
                setError(data)
                //toast.error('😱 Erro: ' + JSON.stringify(e?.response?.data));
                return data;
            }
            setLoading(false)
        }, get: async ({ id, params }: any) => {
            setLoading(true)
            let url = endpoint
            if (id) {
                url = `${url}/${id}`
            }

            if (params) {
                const query = new URLSearchParams(params).toString();
                url = `${url}/?${query}`;


            }

            try {
                const response = await axios.get(url, { headers });
                setData(response)
                setError(null)
            } catch ({response:{data}}: any) {
                setError(data)
                //toast.error('😱 Erro: ' + JSON.stringify(e?.response?.data));
                return data;
            }
            setLoading(false)
        }, drop: async ({ id }: any) => {
            setLoading(true)
            let url = endpoint
            if (id) {
                url = `${url}/${id}`
            }

            try {
                const response = await axios.delete(url, { headers });
                setData(response)
                setError(null)
            }catch ({response:{data}}: any) {
                    setError(data)
                    //toast.error('😱 Erro: ' + JSON.stringify(e?.response?.data));
                    return data;
                }
            setLoading(false)
        }, put: async ({ id, form }: any) => {
            setLoading(true)
            let url = `${endpoint}/${data?.id ?? id}`

            try {
                const response = await axios.put(url, data, { headers });
                setData(response)
                setError(null)
            } catch ({response:{data}}: any) {
                setError(data)
                //toast.error('😱 Erro: ' + JSON.stringify(e?.response?.data));
                return data;
            }
            setLoading(false)
        }
    }

    const resolve = resolver[method.toLowerCase()]

    useMemo(() => {
        if (method === 'GET')
            resolver.get({ id, params })
    }, [data, id])

    return {
        data, isLoading, error, resolve
    }
}



export const getHeaders = () => {
    const token = '';//storage.get('token');

    let headers: any = {
        "withCredentials": true,
        "Content-type": "application/json",
    }
    headers["Authorization"] = `Bearer ${token}`;
    return headers;
};
(() => {
    axios.defaults.baseURL = 'http://192.168.100.44:9800/api/v1/'/**///process.env.REACT_APP_BASE_URL_API;

    axios.defaults.headers.common["apikey"] = "process.env.REACT_APP_BASE_API_KEY ?? '3265'";

})()

const headers = getHeaders() 
