import { useEffect, useState } from "react";

export const useFetchAndLoad = () => {
  const [loading, setLoading] = useState(false);
  let controller;

  const callEndpoint = async (axiosCall) => {
    if (axiosCall?.controller) controller = axiosCall?.controller;
    setLoading(true);
    let result = {};
    try {
      result = await axiosCall?.call;
    } catch (err) {
      setLoading(false);
      throw err;
    }
    setLoading(false);
    return result;
  };

  /*
    here the request is intercepted in case the user no longer needs 
    the response to cancel that request
  */
  useEffect(() => {
    const cancelEndpoint = () => {
      setLoading(false);
      controller && controller?.abort();
    };
    return () => {
      cancelEndpoint();
    };
  }, [controller]);

  return { loading, callEndpoint };
};
