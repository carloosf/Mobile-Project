import { useState, useEffect } from 'react'
import Data from './dataAtual'
import HandlerToken from './handlerToken'
export default function AddToken({ dados }) {
  const [status, setStatus] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://medtoken-api.onrender.com/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            token: HandlerToken(dados.tipoToken),
            name: dados.nome,
            date: Data(true),
            prioridade: dados.tipoToken,
          }),
        })
        const data = await response.json()
        console.log('Response:', data.token)
        setStatus(data.status)
      } catch (error) {
        console.error('Error:', error)
      }
    }

    fetchData()
  }, [dados.nome, dados.tipoToken])

  return { status }
}
