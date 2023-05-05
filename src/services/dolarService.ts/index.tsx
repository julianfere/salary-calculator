import { BASE_URL } from "./constants";

const getTodaysDollarValue = () => {
  return new Request(BASE_URL)
}

export { getTodaysDollarValue }