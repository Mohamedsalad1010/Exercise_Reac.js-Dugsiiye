import { useState } from 'react'
import LanguageContext from './language'
import Greeting from './Greeting'

function App() {
const [language , setLanguage]  = useState("en")
const toggleLanguage = () => {
  setLanguage((prev) => (prev === 'en' ? 'es' : 'en'))
  console.log("cliked")
}
  return(
<>
<LanguageContext.Provider value={language} >
  <button onClick={toggleLanguage}>Change To {language === 'en'? "spanish" :" English"}</button>
<Greeting/>
</LanguageContext.Provider>


</>
  )
}

export default App

