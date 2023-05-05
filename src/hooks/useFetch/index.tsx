/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

const buildController = () => {
  return new AbortController();
}

const injectSignalToRequest = (request: Request, abortSignal: AbortSignal) => {
  return new Request(request.url, {
    ...request,
    signal: abortSignal
  })
}

const useFetch = () => {
  const [error, setError] = useState<Error | null | unknown>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const controller = buildController();
  const callEndpoint = async (request: Request) => {
    setIsLoading(true);
    
    const abortableRequest = injectSignalToRequest(request, controller.signal);
    try {
      const response = await fetch(abortableRequest);
      const json = await response.json();
      setIsLoading(false);
      return json;
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  }

  const abort = () => {
    setIsLoading(false);
    controller.abort();
  }

  useEffect(() => () => abort(), [])

  return { error, isLoading, callEndpoint };
}


export default useFetch;