import { useState } from "react"
import { useAsync, useFetch } from "hooks"
import { getTodaysDollarValue } from "services"
import { DolarResponse } from "services/dolarService.ts/types"
import "./styles.css"

function App() {
  const { error, isLoading, callEndpoint } = useFetch()
  const [dolar, setDolar] = useState<DolarResponse>({} as DolarResponse)

  const handleSuccess = (data: DolarResponse) => {
    setDolar(data)
  }

  const handleError = () => {
    console.log(error)
  }

  useAsync(async () => await callEndpoint(getTodaysDollarValue()), handleSuccess, handleError)

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>se rompio</p>}
      {dolar && <p>{dolar.oficial.value_sell}</p>}
    </>
  )
}

export default App
