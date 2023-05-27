import GetMedtoken from '../services/GetMedtoken'
import Data from '../handlers/dataAtual'
import HandlerPrioridade from '../handlers/handlerPrioridade'

const TokenIDCreate = async (tipoFicha) => {
  const [data] = await GetMedtoken()

  const tokenToday = data.filter(
    (item: { date: string; prioridade: string }) =>
      item.date === Data(true) &&
      item.prioridade === HandlerPrioridade(tipoFicha),
  )

  const id = tokenToday.length + 1
  let newToken = ''

  if (tokenToday.length < 9) {
    newToken = `${Data(false)}${HandlerPrioridade(tipoFicha)}0${id}`
  } else {
    newToken = `${Data(false)}${HandlerPrioridade(tipoFicha)}${id}`
  }
  console.log('Novo token: ' + newToken)
  return newToken
}
export default TokenIDCreate