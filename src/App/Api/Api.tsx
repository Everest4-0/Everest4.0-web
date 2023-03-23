import axios from "axios";
import { useMemo, useState } from "react";

type ApiParamsType = {
  service: {
    endpoint: string,
    method: string
  };
  id?: string;
  params?: any;
};
export const useApi = ({ service, id, params }: ApiParamsType) => {

  const [data, setData] = useState<any>();
  const [isLoading, setLoading] = useState<boolean>();
  const [error, setError] = useState<any>();
  const { endpoint, method } = service;

  useMemo(() => {
    const fetchGet = async () => {
      setLoading(true);
      try {
        let url = [endpoint, process.env.DEV_ENDPOINT];
        if (id) {
          url.push(id);
        }
        const { response }: any = await axios.get(url.join("/"));

        setData(response);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    };

    const fetchPost = async () => {
      setLoading(true);
      try {
        let url = [endpoint, process.env.DEV_ENDPOINT];
        if (id) {
          url.push(id);
        }
        const { response }: any = await axios.post(url.join("/"), params);

        setData(response);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    };

    switch (method) {
      case "GET":
        fetchGet();

        break;

      case "POST":
        fetchPost();

        break;

      default:
        break;
    }
  }, [data, id]);

  return {
    data,
    isLoading,
    error,
  };
};
