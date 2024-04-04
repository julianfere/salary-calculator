import { IDollarData } from "@entities/Dollar";
import { useAsync } from "@julianfere/react-utility-hooks";
import { useState } from "react";
import { calculateLatestDollar } from "./utils";
import axios from "axios";

const useDollar = () => {
  const [dollar, setDollar] = useState<IDollarData>({
    official: { sell: 0, buy: 0, status: "equal", lastUpdate: "" },
    blue: { sell: 0, buy: 0, status: "equal", lastUpdate: "" },
  });

  const { state } = useAsync(
    () =>
      axios.get("https://api.bluelytics.com.ar/v2/evolution.json", {
        headers: {
          "Content-Type": "application/json",
          "cache-control": "no-cache",
        },
      }),
    {
      onSuccess: (response) => setDollar(calculateLatestDollar(response.data)),
      manual: false,
    }
  );

  return {
    dollar,
    state,
  };
};

export default useDollar;
