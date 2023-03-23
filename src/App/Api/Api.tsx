import axios from 'axios';
import { useMemo, useState } from "react"

type ApiParamsType = {
    service: any,
    params: any,
    id: string,
}
export const Api = ({ service, id, params }: ApiParamsType) => {
    const [data, setData] = useState<any>()
    const [isLoading, setLoading] = useState<boolean>()
    const [error, setError] = useState<any>()
    const { endpoint, method } = service;

    useMemo(() => {

        const fetchGet = async () => {
            setLoading(true)
            try {

                let url = [endpoint];
                if (id) {
                    url.push(id)
                }
                const { response }: any = await axios.get(url.join('/'));

                setData(response)
                setLoading(false)

            } catch (error) {
                setError(error)
            }
        }

        if (method === 'GET')

            fetchGet()

    }, [data, id])


    return {
        data, isLoading, error
    }
}