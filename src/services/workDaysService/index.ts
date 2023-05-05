import { BASE_URL } from "./constants"

const getFestiveDaysByYear = (year: number): Request => {
  return new Request(`${BASE_URL}/${year}`)
}

export { getFestiveDaysByYear }