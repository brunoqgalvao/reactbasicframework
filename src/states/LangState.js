import React, { useState, useContext} from 'react'
import { dictionary } from './../services/dictionary'

const LangState = (props) => {

  const initialState = "us";
  const [lang, setLang] = useState(initialState);

  // rebuild dictionary function "get" to get language automatically
  dictionary.get = function(path) {
    path += "."+lang;
    return this.resolvePath(this,path,null);
  }

  return (
    <LangContext.Provider
      value={{
        lang,
        setLang,
        dictionary
      }}>
      {props.children}
    </LangContext.Provider>
  )
}

export default LangState

export const LangContext = React.createContext();
export const useDict = (path) => {
  const {dictionary} = useContext(LangContext)
  return dictionary;
}
export const useLang = () => {
  const {lang, setLang} = useContext(LangContext);
  return {lang, setLang}
}