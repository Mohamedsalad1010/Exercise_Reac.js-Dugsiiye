
import { useContext } from 'react'
import LanguageContext from './language'

const LanguageComponent = () => {
    const language = useContext(LanguageContext)

    const message = {
      en: "hello",
      es: "¡Hola! "
    }
  return (
    <div>
      <h2>{message[language]}</h2>
    </div>
  )
}

export default LanguageComponent
